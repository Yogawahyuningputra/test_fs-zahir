package repositories

import (
	"backend/models"

	"gorm.io/gorm"
)

type UserRepository interface {
	FindUsers() ([]models.User, error)
	GetUser(ID int) (models.User, error)
	CreateUser(user models.User) (models.User, error)
	UpdateUser(user models.User) (models.User, error)
	DeleteUser(user models.User, ID int) (models.User, error)
}

func RepositoryUser(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindUsers() ([]models.User, error) {
	var users []models.User
	err := r.db.Find(&users).Error
	return users, err
}

func (r *repository) GetUser(ID int) (models.User, error) {
	var user models.User
	err := r.db.First(&user, ID).Error

	return user, err
}
func (r *repository) CreateUser(user models.User) (models.User, error) {
	err := r.db.Create(&user).Error
	return user, err
}

func (r *repository) UpdateUser(user models.User) (models.User, error) {
	err := r.db.Save(&user).Error
	return user, err
}

func (r *repository) DeleteUser(user models.User, ID int) (models.User, error) {
	err := r.db.Delete(&user).Error
	return user, err
}

func NewUserRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) Create(user *models.User) error {
	result := r.db.Create(&user)
	return result.Error
}

// type CompanyRepository struct {
//     DB *gorm.DB
// }

func NewCompanyRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) CreateComp(company *models.Companies) error {
	result := r.db.Create(company)
	return result.Error
}

func (r *repository) Update(company *models.Companies) error {
	result := r.db.Save(company)
	return result.Error
}

func (r *repository) GetById(id int) (*models.Companies, error) {
	var company models.Companies
	result := r.db.First(&company, id)
	return &company, result.Error
}
