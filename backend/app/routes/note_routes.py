"""Note CRUD and search routes."""

from fastapi import APIRouter

router = APIRouter()


@router.post("")
def create_note():
    return {"message": "Create note placeholder"}


@router.get("")
def get_my_notes():
    return {"message": "Get notes placeholder"}


@router.get("/search")
def search_notes(query: str):
    return {"message": f"Search notes placeholder for: {query}"}


@router.get("/{note_id}")
def get_note(note_id: int):
    return {"message": f"Get note {note_id} placeholder"}


@router.put("/{note_id}")
def update_note(note_id: int):
    return {"message": f"Update note {note_id} placeholder"}


@router.delete("/{note_id}")
def delete_note(note_id: int):
    return {"message": f"Delete note {note_id} placeholder"}
