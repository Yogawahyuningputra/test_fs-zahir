package models

import "time"

type Variants struct {
	ID                 int       `json:"id"`
	Name               string    `json:"name" gorm:"type:varchar(255)"`
	SubscribePeriodDay string    `json:"subscribe_period_day" gorm:"type:varchar(255)"`
	Price              int       `json:"price" gorm:"type:varchar(255)"`
	Description        string    `json:"description" gorm:"type:varchar(255)"`
	CreatedAt          time.Time `json:"created_at"`
	UpdatedAt          time.Time `json:"updated_at"`
}
 