"""Public vault routes for public notes/profile."""

from fastapi import APIRouter

router = APIRouter()


@router.get("/{username}")
def get_public_profile(username: str):
    return {"message": f"Public profile placeholder for {username}"}


@router.get("/{username}/notes")
def get_public_notes(username: str):
    return {"message": f"Public notes placeholder for {username}"}
