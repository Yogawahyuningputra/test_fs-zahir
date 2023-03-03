package companiesdto

import (
	"backend/models"
	"time"
)

type CompaniesResponse struct {
	ID          int             `json:"id"`
	User        models.User     `json:"user"`
	Variant     models.Variants `json:"variants"`
	Name        string          `json:"name"`
	StartDate   string          `json:"start_date"`
	ExpiredDate string          `json:"expired_date"`
	Status      string          `json:"status"`
	CreatedAt   time.Time       `json:"created_at"`
	UpdateAt    time.Time       `json:"updated_at"`
}
