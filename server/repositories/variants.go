package repositories

import (
	"backend/models"

	"gorm.io/gorm"
)

type VariantsRepository interface {
	FindVariants() ([]models.Variants, error)
	GetVariant(ID int) (models.Variants, error)
	CreateVariant(variant models.Variants) (models.Variants, error)
	UpdateVariant(variant models.Variants) (models.Variants, error)
	DeleteVariant(variant models.Variants, ID int) (models.Variants, error)
}

func RepositoryVariants(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindVariants() ([]models.Variants, error) {
	var variants []models.Variants
	err := r.db.Find(&variants).Error
	return variants, err
}

func (r *repository) GetVariant(ID int) (models.Variants, error) {
	var variant models.Variants
	err := r.db.First(&variant).Error
	return variant, err
}

func (r *repository) CreateVariant(variant models.Variants) (models.Variants, error) {
	err := r.db.Create(&variant).Error
	return variant, err
}

func (r *repository) UpdateVariant(variant models.Variants) (models.Variants, error) {
	err := r.db.Save(&variant).Error
	return variant, err
}

func (r *repository) DeleteVariant(variant models.Variants, ID int) (models.Variants, error) {
	err := r.db.Delete(&variant).Error
	return variant, err
}
