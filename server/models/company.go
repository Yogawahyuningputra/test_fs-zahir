package models

import "time"

type Companies struct {
	ID          int          `json:"id"`
	UserID      int          `json:"user_id"`
	User        UserResponse `json:"user" gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
	VariantID   int          `json:"variant_id"`
	Variant     Variants     `json:"variants" gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
	Name        string       `json:"name" gorm:"type:varchar(255)"`
	StartDate   string       `json:"start_date" gorm:"type:varchar(255)"`
	ExpiredDate string       `json:"expired_date" gorm:"type:varchar(255)"`
	Status      string       `json:"status" gorm:"type:varchar(255)"`
	CreatedAt   time.Time    `json:"created_at"`
	UpdateAt    time.Time    `json:"updated_at"`
}
