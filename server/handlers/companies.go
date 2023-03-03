package handlers

import (
	companiesdto "backend/dto/companies"
	dto "backend/dto/result"
	"backend/models"
	"backend/repositories"
	"net/http"
	"strconv"

	"github.com/go-playground/validator/v10"
	"github.com/golang-jwt/jwt/v4"
	"github.com/labstack/echo/v4"
)

type handlerCompanies struct {
	CompaniesRepository repositories.CompaniesRepository
}

func HandlerCompanies(CompaniesRepository repositories.CompaniesRepository) *handlerCompanies {
	return &handlerCompanies{CompaniesRepository}
}

func (h *handlerCompanies) FindCompanies(c echo.Context) error {

	companies, err := h.CompaniesRepository.FindCompanies()
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: companies})
}

func (h *handlerCompanies) GetCompany(c echo.Context) error {

	id, _ := strconv.Atoi(c.Param("id"))

	company, err := h.CompaniesRepository.GetCompany(id)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: company})
}
func (h *handlerCompanies) GetCompanyByUser(c echo.Context) error {
	userLogin := c.Get("userLogin")
	userID := userLogin.(jwt.MapClaims)["id"].(float64)

	company, err := h.CompaniesRepository.GetCompanyByUser(int(userID))
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: company})
}

func (h *handlerCompanies) CreateCompany(c echo.Context) error {

	userLogin := c.Get("userLogin")
	userID := userLogin.(jwt.MapClaims)["id"].(float64)

	request := new(companiesdto.CompaniesRequest)

	if err := c.Bind(request); err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	validation := validator.New()
	err := validation.Struct(request)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: "Validation Failed"})
	}

	companies := models.Companies{
		UserID:      int(userID),
		VariantID:   request.VariantID,
		Name:        request.Name,
		StartDate:   request.StartDate,
		ExpiredDate: request.ExpiredDate,
		Status:      request.Status,
	}

	companies, err = h.CompaniesRepository.CreateCompany(companies)

	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}
	companies, _ = h.CompaniesRepository.GetCompany(companies.ID)

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: companies})
}

func (h *handlerCompanies) DeleteCompany(c echo.Context) error {

	id, _ := strconv.Atoi(c.Param("id"))

	company, err := h.CompaniesRepository.GetCompany(id)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	data, err := h.CompaniesRepository.DeleteCompany(company, id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: "Delete Failed"})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: data})
}
