package routes

import (
	"backend/handlers"
	"backend/package/mysql"
	"backend/repositories"

	"github.com/labstack/echo/v4"
)

func VariantRoutes(e *echo.Group) {
	variantsRepository := repositories.RepositoryVariants(mysql.DB)
	h := handlers.HandlerVariants(variantsRepository)

	e.GET("/variants", h.FindVariants)
	e.GET("/variant/:id", h.GetVariant)
	e.POST("/variant", h.CreateVariant)
	e.PATCH("/variant/:id", h.UpdateVariant)
	e.DELETE("/variant/:id", h.DeleteVariant)
}
