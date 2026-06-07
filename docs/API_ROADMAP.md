# MindVault API Roadmap

## Auth
- `POST /auth/register` - Create user account
- `POST /auth/login` - Login and receive JWT token
- `GET /auth/me` - Get current logged-in user

## Notes
- `POST /notes` - Create a note
- `GET /notes` - Get logged-in user's notes
- `GET /notes/{note_id}` - Get one note
- `PUT /notes/{note_id}` - Update note
- `DELETE /notes/{note_id}` - Delete note
- `GET /notes/search?query=...` - Search notes

## Tags
- `POST /tags` - Create tag
- `GET /tags` - List tags

## Flashcards
- `POST /flashcards` - Create flashcard from note
- `GET /flashcards/review` - Cards due today
- `PUT /flashcards/{id}/review` - Update review difficulty

## Public Vault
- `GET /public/{username}` - Public profile
- `GET /public/{username}/notes` - Public notes
