"""Auth routes: register, login, and current user."""

from fastapi import APIRouter

router = APIRouter()


@router.post("/register")
def register_user():
    # TODO: Create user with hashed password
    return {"message": "Register route placeholder"}


@router.post("/login")
def login_user():
    # TODO: Verify credentials and return JWT token
    return {"message": "Login route placeholder"}


@router.get("/me")
def get_current_user_profile():
    # TODO: Return currently logged-in user
    return {"message": "Current user route placeholder"}
