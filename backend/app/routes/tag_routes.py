"""Tag routes."""

from fastapi import APIRouter

router = APIRouter()


@router.post("")
def create_tag():
    return {"message": "Create tag placeholder"}


@router.get("")
def get_tags():
    return {"message": "Get tags placeholder"}
