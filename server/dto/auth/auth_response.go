package authdto

type LoginResponse struct {
	Email string `json:"email"`
	Token string `json:"token"`
	Role  string `json:"role"`
}
type RegisterResponse struct {
	ID       int    `json:"id"`
	Name     string `json:"name"`
	Email    string `json:"email"`
	Password string `json:"password"`
	Role     string `json:"role"`
}
type CheckAuthResponse struct {
	ID    int    `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email"`
	Role  string `json:"role"`
}
