"""Flashcard and spaced-repetition review routes."""

from fastapi import APIRouter

router = APIRouter()


@router.post("")
def create_flashcard():
    return {"message": "Create flashcard placeholder"}


@router.get("/review")
def get_review_cards():
    return {"message": "Review cards placeholder"}


@router.put("/{flashcard_id}/review")
def review_flashcard(flashcard_id: int):
    return {"message": f"Review flashcard {flashcard_id} placeholder"}
