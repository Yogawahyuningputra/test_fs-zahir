package routes

import (
	"backend/handlers"
	"backend/package/middleware"
	"backend/package/mysql"
	"backend/repositories"

	"github.com/labstack/echo/v4"
)

func CompaniesRoutes(e *echo.Group) {
	companiesRepository := repositories.RepositoryCompanies(mysql.DB)
	h := handlers.HandlerCompanies(companiesRepository)

	e.GET("/companies", middleware.Auth(h.FindCompanies))
	e.GET("/company/:id", middleware.Auth(h.GetCompany))
	e.GET("/companyByUser", middleware.Auth(h.GetCompanyByUser))
	e.POST("/company", middleware.Auth(h.CreateCompany))
	e.DELETE("/company/:id", middleware.Auth(h.DeleteCompany))
}
