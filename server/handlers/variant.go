package handlers

import (
	dto "backend/dto/result"
	variantsdto "backend/dto/variants"
	"backend/models"
	"backend/repositories"
	"net/http"
	"strconv"

	"github.com/go-playground/validator/v10"
	"github.com/labstack/echo/v4"
)

type handlerVariants struct {
	VariantsRepository repositories.VariantsRepository
}

func HandlerVariants(VariantsRepository repositories.VariantsRepository) *handlerVariants {
	return &handlerVariants{VariantsRepository}
}

func (h *handlerVariants) FindVariants(c echo.Context) error {

	variants, err := h.VariantsRepository.FindVariants()
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: variants})
}

func (h *handlerVariants) GetVariant(c echo.Context) error {

	id, _ := strconv.Atoi(c.Param("id"))

	variant, err := h.VariantsRepository.GetVariant(id)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: variant})
}

func (h *handlerVariants) CreateVariant(c echo.Context) error {

	request := new(variantsdto.VariantsRequest)
	if err := c.Bind(request); err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}
	validation := validator.New()
	err := validation.Struct(request)

	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: "Validation Failed"})
	}

	variant := models.Variants{
		Name:               request.Name,
		SubscribePeriodDay: request.SubscribePeriodDay,
		Price:              request.Price,
		Description:        request.Description,
	}
	data, err := h.VariantsRepository.CreateVariant(variant)

	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})

	}
	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: data})
}

func (h *handlerVariants) UpdateVariant(c echo.Context) error {

	request := new(variantsdto.UpdateVariantsRequest)
	if err := c.Bind(&request); err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})

	}
	id, _ := strconv.Atoi(c.Param("id"))
	variant, err := h.VariantsRepository.GetVariant(id)

	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	if request.Name != "" {
		variant.Name = request.Name
	}
	if request.SubscribePeriodDay != "" {
		variant.SubscribePeriodDay = request.SubscribePeriodDay
	}
	if request.Price != 0 {
		variant.Price = request.Price
	}
	if request.Description != "" {
		variant.Description = request.Description
	}
	data, err := h.VariantsRepository.GetVariant(variant.ID)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: "Update Failed"})

	}
	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: (data)})
}
func (h *handlerVariants) DeleteVariant(c echo.Context) error {

	id, _ := strconv.Atoi(c.Param("id"))

	variant, err := h.VariantsRepository.GetVariant(id)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	data, err := h.VariantsRepository.DeleteVariant(variant, id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: "Delete Failed"})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: data})
}
