package variantsdto

import "time"

type VariantsRequest struct {
	Name               string    `json:"name" validate:"required"`
	SubscribePeriodDay string    `json:"subscribe_period_day" validate:"required"`
	Price              int       `json:"price" validate:"required"`
	Description        string    `json:"description" validate:"required"`
	CreatedAt          time.Time `json:"created_at"`
	UpdatedAt          time.Time `json:"updated_at"`
}
type UpdateVariantsRequest struct {
	Name               string    `json:"name"`
	SubscribePeriodDay string    `json:"subscribe_period_day"`
	Price              int       `json:"price"`
	Description        string    `json:"description"`
	CreatedAt          time.Time `json:"created_at"`
	UpdatedAt          time.Time `json:"updated_at"`
}
