package userdto

import "backend/models"

type CreateUserRequest struct {
	Name     string `json:"name" form:"name" validate:"required"`
	Email    string `json:"email" form:"email" validate:"required"`
	Password string `json:"password" form:"password" validate:"required"`
	Role     string `json:"role" form:"role"`
}

type UpdateUserRequest struct {
	ID       int    `json:"id"`
	Name     string `json:"name" form:"name"`
	Email    string `json:"email" form:"email" `
	Password string `json:"password" form:"password"`
	Role     string `json:"role" form:"role"`
}

type RegisterCompRequest struct {
	User      models.User        `json:"user"`
	Companies []models.Companies `json:"companies"`
}

type RegisterCompResponse struct {
	User      models.User        `json:"user"`
	Companies []models.Companies `json:"companies"`
}
