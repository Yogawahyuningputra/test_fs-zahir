package companiesdto

type CompaniesRequest struct {
	UserID      int    `json:"user_id" validate:"required"`
	VariantID   int    `json:"variant_id" validate:"required"`
	Name        string `json:"name" validate:"required"`
	StartDate   string `json:"start_date" validate:"required"`
	ExpiredDate string `json:"expired_date" validate:"required"`
	Status      string `json:"status" validate:"required"`
}
