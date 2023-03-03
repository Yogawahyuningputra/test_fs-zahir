package variantsdto

import "time"

type VariantsResponse struct {
	Name               string    `json:"name"`
	SubscribePeriodDay string    `json:"subscribe_period_day"`
	Price              int       `json:"price"`
	Description        string    `json:"description"`
	CreatedAt          time.Time `json:"created_at"`
	UpdatedAt          time.Time `json:"updated_at"`
}
