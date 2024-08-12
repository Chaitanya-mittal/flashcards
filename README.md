Database Setup:
  Platform:
    Supabase (for cloud-based database functionality)

-------------------------------------------------

User Roles:
Admin:
  Permissions:
    Create flashcards
    Edit flashcards
    Delete flashcards

User:
  Permissions:
    Read-only access to flashcards

-------------------------------------------------

Implemented the backend locally 
1. Database - MySQL
2. ExpressJS
3. Authentication - jsonwebtoken
4. Encryption - bcryptjs


5. ROUTES -
  1. USER - 
    1. POST :  /api/users  - create a new user
    2. GET : /api/users/:id - return user w.r.t to id
    3. POST : /api/users/login - to login a user
  2. Flashcard
    1. GET : /api/flashcards - get all flashcards
    2. POST : /api/flashcards - create a new flashcard
    3. PUT : /api/flashcards/:id - edit the flashcard w.r.t id
    4. DELETE : /api/flashcards/:id - delete the flashcard w.r.t id
    5. GET : /api/flashcards/:id - get flashcard w.r.t id



  
      
