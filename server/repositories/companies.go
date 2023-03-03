package repositories

import (
	"backend/models"

	"gorm.io/gorm"
)

type CompaniesRepository interface {
	FindCompanies() ([]models.Companies, error)
	GetCompany(ID int) (models.Companies, error)
	CreateCompany(company models.Companies) (models.Companies, error)
	DeleteCompany(company models.Companies, ID int) (models.Companies, error)
	GetCompanyByUser(ID int) ([]models.Companies, error)
}

func RepositoryCompanies(db *gorm.DB) *repository {
	return &repository{db}
}
func (r *repository) FindCompanies() ([]models.Companies, error) {
	var companies []models.Companies
	err := r.db.Preload("User").Preload("Variant").Find(&companies).Error
	return companies, err
}

func (r *repository) GetCompany(ID int) (models.Companies, error) {
	var company models.Companies
	err := r.db.Preload("User").Preload("Variant").First(&company).Error
	return company, err
}

func (r *repository) CreateCompany(company models.Companies) (models.Companies, error) {
	err := r.db.Create(&company).Error
	return company, err
}

func (r *repository) DeleteCompany(company models.Companies, ID int) (models.Companies, error) {
	err := r.db.Delete(&company).Error
	return company, err
}

func (r *repository) GetCompanyByUser(ID int) ([]models.Companies, error) {
	var company []models.Companies
	err := r.db.Preload("User").Preload("Variant").Where("user_id = ?", ID).Find(&company).Error
	return company, err
}
