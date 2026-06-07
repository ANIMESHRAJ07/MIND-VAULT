# MindVault Database Design

## users
- id
- name
- username
- email
- password_hash
- created_at

## notes
- id
- user_id
- title
- content
- summary
- category
- visibility: private/public
- created_at
- updated_at

## tags
- id
- name

## note_tags
- note_id
- tag_id

## flashcards
- id
- note_id
- question
- answer
- difficulty
- next_review_date
- created_at

## connections
- id
- note_id
- related_note_id
- relation_type

Relation type examples:
- connected_to
- depends_on
- example_of
- opposite_of
- similar_to
