"""
MindVault FastAPI entry point.

Start backend with:
uvicorn app.main:app --reload
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import auth_routes, note_routes, tag_routes, flashcard_routes, public_routes

app = FastAPI(
    title="MindVault API",
    description="Backend API for a personal knowledge vault.",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_routes.router, prefix="/auth", tags=["Auth"])
app.include_router(note_routes.router, prefix="/notes", tags=["Notes"])
app.include_router(tag_routes.router, prefix="/tags", tags=["Tags"])
app.include_router(flashcard_routes.router, prefix="/flashcards", tags=["Flashcards"])
app.include_router(public_routes.router, prefix="/public", tags=["Public Vault"])


@app.get("/")
def health_check():
    return {"message": "MindVault API is running"}
