# MindVault

MindVault is a personal knowledge vault: a full-stack website where you can store what you learn, organize it with tags/categories, search it later, revise through flashcards, and eventually ask an AI questions from your own notes.

The goal is not to build a boring notes app. The goal is to build a **second brain**: a private knowledge system that can later become your public learning website and AI-powered knowledge engine.

---

## 1. What MindVault Will Do

### MVP Features

- User registration
- User login
- JWT-based authentication
- Create notes
- View all notes
- View one note in detail
- Edit notes
- Delete notes
- Search notes
- Public/private visibility toggle

### Later Features

- Tags and categories
- Flashcards
- Spaced repetition
- Public profile
- Public knowledge articles
- Knowledge map / graph view
- AI summarization
- AI tag suggestions
- Ask-your-notes chatbot using RAG

---

## 2. Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Router
- Axios

### Backend

- FastAPI
- SQLAlchemy
- Pydantic
- PostgreSQL
- JWT authentication
- Passlib / bcrypt for password hashing

### Tools

- Git
- GitHub
- Postman
- Docker later
- Render / Railway / VPS later

---

## 3. Folder Structure

```text
mindvault-starter/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── database.py
│   │   ├── core/
│   │   │   ├── config.py
│   │   │   └── security.py
│   │   ├── models/
│   │   │   ├── user.py
│   │   │   ├── note.py
│   │   │   ├── tag.py
│   │   │   ├── flashcard.py
│   │   │   └── connection.py
│   │   ├── schemas/
│   │   │   ├── user_schema.py
│   │   │   ├── note_schema.py
│   │   │   ├── tag_schema.py
│   │   │   └── flashcard_schema.py
│   │   ├── routes/
│   │   │   ├── auth_routes.py
│   │   │   ├── note_routes.py
│   │   │   ├── tag_routes.py
│   │   │   ├── flashcard_routes.py
│   │   │   └── public_routes.py
│   │   ├── services/
│   │   │   ├── auth_service.py
│   │   │   ├── note_service.py
│   │   │   └── flashcard_service.py
│   │   └── utils/
│   ├── tests/
│   ├── requirements.txt
│   └── .env.example
│
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── pages/
│       │   ├── Login.jsx
│       │   ├── Register.jsx
│       │   ├── Dashboard.jsx
│       │   ├── MyNotes.jsx
│       │   ├── AddNote.jsx
│       │   ├── NoteDetail.jsx
│       │   ├── Flashcards.jsx
│       │   ├── KnowledgeMap.jsx
│       │   ├── PublicVault.jsx
│       │   └── Settings.jsx
│       ├── components/
│       │   ├── Sidebar.jsx
│       │   ├── Navbar.jsx
│       │   ├── NoteCard.jsx
│       │   └── SearchBar.jsx
│       ├── layouts/
│       │   └── AppLayout.jsx
│       ├── api/
│       │   └── axios.js
│       ├── context/
│       │   └── AuthContext.jsx
│       ├── hooks/
│       │   └── useAuth.js
│       ├── utils/
│       │   └── formatDate.js
│       ├── assets/
│       └── styles/
│           └── global.css
│
├── docs/
│   ├── API_ROADMAP.md
│   ├── DATABASE_DESIGN.md
│   └── BUILD_PLAN.md
│
├── .gitignore
└── README.md
```

---

## 4. Backend Folder Explanation

### `backend/app/main.py`

The entry point of the FastAPI backend. It creates the FastAPI app, adds CORS middleware, and connects all API route files.

### `backend/app/database.py`

Handles the database connection using SQLAlchemy.

### `backend/app/core/config.py`

Loads environment variables like database URL, secret key, and JWT settings.

### `backend/app/core/security.py`

Will contain password hashing and JWT helper functions.

You will add:

```text
hash_password()
verify_password()
create_access_token()
decode_access_token()
```

### `backend/app/models/`

Contains SQLAlchemy database models.

Important models:

- `User`
- `Note`
- `Tag`
- `Flashcard`
- `Connection`

### `backend/app/schemas/`

Contains Pydantic schemas. These define what data the API accepts and returns.

Example:

- `NoteCreate`
- `NoteUpdate`
- `NoteResponse`

### `backend/app/routes/`

Contains API endpoints.

Example:

- `auth_routes.py` handles register/login.
- `note_routes.py` handles note CRUD.
- `flashcard_routes.py` handles revision.

### `backend/app/services/`

Contains business logic. Routes should stay clean. Complex logic should go into services.

---

## 5. Frontend Folder Explanation

### `frontend/src/App.jsx`

Contains frontend routes.

Current planned routes:

```text
/login
/register
/dashboard
/notes
/notes/new
/notes/:id
/review
/map
/settings
/public/:username
```

### `frontend/src/pages/`

Each major screen is a page.

Important pages:

- `Dashboard.jsx` - main knowledge command center
- `AddNote.jsx` - create new note
- `MyNotes.jsx` - browse/search notes
- `NoteDetail.jsx` - read one note deeply
- `Flashcards.jsx` - revise notes
- `KnowledgeMap.jsx` - later graph view
- `PublicVault.jsx` - public knowledge profile

### `frontend/src/components/`

Reusable UI pieces.

Examples:

- `Sidebar`
- `Navbar`
- `NoteCard`
- `SearchBar`

### `frontend/src/api/axios.js`

Central API client. It automatically adds JWT token from localStorage to backend requests.

---

## 6. Database Design

### users

```text
id
name
username
email
password_hash
created_at
```

### notes

```text
id
user_id
title
content
summary
category
visibility
created_at
updated_at
```

Visibility values:

```text
private
public
```

### tags

```text
id
name
```

### note_tags

```text
note_id
tag_id
```

### flashcards

```text
id
note_id
question
answer
difficulty
next_review_date
created_at
```

### connections

```text
id
note_id
related_note_id
relation_type
```

---

## 7. API Roadmap

### Auth

```text
POST /auth/register
POST /auth/login
GET  /auth/me
```

### Notes

```text
POST   /notes
GET    /notes
GET    /notes/{note_id}
PUT    /notes/{note_id}
DELETE /notes/{note_id}
GET    /notes/search?query=ethanol
```

### Tags

```text
POST /tags
GET  /tags
```

### Flashcards

```text
POST /flashcards
GET  /flashcards/review
PUT  /flashcards/{id}/review
```

### Public Vault

```text
GET /public/{username}
GET /public/{username}/notes
```

---

## 8. How to Run Backend

Go to backend folder:

```bash
cd backend
```

Create virtual environment:

```bash
python -m venv venv
```

Activate it on Windows:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create `.env` file from `.env.example`:

```bash
copy .env.example .env
```

Run backend:

```bash
uvicorn app.main:app --reload
```

Backend will run at:

```text
http://localhost:8000
```

FastAPI docs:

```text
http://localhost:8000/docs
```

---

## 9. How to Run Frontend

Go to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Frontend will run at:

```text
http://localhost:5173
```

---

© 2026 Animesh Raj. All rights reserved.
