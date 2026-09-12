# Job Application API

A RESTful API for keeping track of job applications throughout the hiring process.

Applying for jobs usually means dealing with a growing list of companies, positions, application dates, interviews, rejections, and offers. This project provides a backend API for organizing that information in one place and managing each application through its lifecycle.

The project is built with Node.js, Express, MongoDB, and Mongoose, with JWT-based authentication and authorization.

---

## Why I Built This

The main goal of this project is not simply to build another CRUD API.

I built it as a practical backend project to move from following tutorials to designing and implementing an API independently.

The project focuses on understanding how the different parts of a backend application work together:

- Designing RESTful endpoints
- Structuring an Express application
- Working with MongoDB and Mongoose
- Building CRUD operations
- Handling filtering, sorting, searching, and pagination
- Implementing authentication with JWT
- Restricting access to authenticated users
- Making resources belong to specific users
- Working with MongoDB aggregation
- Testing APIs with Postman

The idea is to keep the project small enough to understand completely, while still being realistic enough to resemble a backend service rather than a basic tutorial exercise.

---

## What the API Does

A user can create and manage their job applications.

Each application can contain information such as:

```json
{
  "company": "Siemens",
  "position": "Frontend Developer",
  "location": "Berlin",
  "status": "interview",
  "jobType": "full-time",
  "appliedAt": "2026-09-10",
  "notes": "Technical interview next week"
}
```

Applications can move through different stages of the hiring process, for example:

```text
applied → screening → interview → offer
                         ↓
                      rejected
```

The API also provides statistics to give an overview of the application pipeline.

### Features

#### Authentication

- User registration
- User login
- JWT authentication
- Protected routes

#### Authorization

- Job Applications
  - Create an application
  - Get all applications
  - Get a single application
  - Update an application
  - Delete an application
  - User-owned applications

#### Querying

- Filter applications by status and other fields
- Search applications
- Sort results
- Paginate results

#### Statistics

- Total number of applications
- Applications grouped by status
- Overview of the current application pipeline

#### API Testing

The API is tested and documented using Postman.

---

## API Overview

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/v1/users/signup` | Create a new user |
| `POST` | `/api/v1/users/login` | Login and receive a JWT |

### Applications

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/v1/applications` | Get user's applications |
| `GET` | `/api/v1/applications/:id` | Get a single application |
| `POST` | `/api/v1/applications` | Create an application |
| `PATCH` | `/api/v1/applications/:id` | Update an application |
| `DELETE` | `/api/v1/applications/:id` | Delete an application |

### Statistics

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/v1/applications/stats` | Get application statistics |

---

## Example Queries

**Filter applications:**

```http
GET /api/v1/applications?status=interview
```

**Filter by job type:**

```http
GET /api/v1/applications?jobType=full-time
```

**Sort by most recent applications:**

```http
GET /api/v1/applications?sort=-appliedAt
```

**Search by company:**

```http
GET /api/v1/applications?company=Siemens
```

**Paginate results:**

```http
GET /api/v1/applications?page=2&limit=5
```

---

## Tech Stack

- **Node.js** — JavaScript runtime
- **Express** — REST API framework
- **MongoDB** — Database
- **Mongoose** — MongoDB object modeling
- **JWT** — Authentication
- **Postman** — API testing and documentation

---

## Project Structure

```text
job-application-api/
│
├── controllers/
│   ├── applicationController.js
│   └── authController.js
│
├── models/
│   ├── applicationModel.js
│   └── userModel.js
│
├── routes/
│   ├── applicationRoutes.js
│   └── userRoutes.js
│
├── utils/
│   ├── appError.js
│   └── catchAsync.js
│
├── config.env
├── app.js
├── server.js
├── package.json
└── README.md
```

The project follows a simple separation of concerns:

- **Models** handle database structure and Mongoose logic.
- **Controllers** contain the application logic.
- **Routes** define the API endpoints.
- **Utils** contain reusable helpers such as error handling.

---

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>

cd job-application-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create your environment configuration based on the provided example:

```env
NODE_ENV=development

PORT=3000

DATABASE=your_mongodb_connection_string

DATABASE_PASSWORD=your_database_password

JWT_SECRET=your_jwt_secret

JWT_EXPIRES_IN=90d
```

Do not commit real credentials or secrets to the repository.

### 4. Run the server

For development:

```bash
npm run start:dev
```

The API will be available at:

`http://localhost:3000`

---

## Postman

A Postman collection is included with the project so the API can be tested without needing a frontend application.

The collection is organized into:

```text
Job Application API
│
├── Auth
│   ├── Signup
│   └── Login
│
├── Applications
│   ├── Get All
│   ├── Get One
│   ├── Create
│   ├── Update
│   └── Delete
│
└── Statistics
    └── Get Stats
```

The Postman environment stores reusable values such as the API base URL and authentication token.

---

## Example Statistics Response

```json
{
  "total": 24,
  "applied": 12,
  "interview": 5,
  "rejected": 4,
  "offer": 3
}
```

---

## What This Project Demonstrates

This project demonstrates practical experience with:

- REST API design
- Express routing and middleware
- MVC-style project structure
- MongoDB data modeling
- Mongoose queries
- CRUD operations
- Query parameters
- Filtering and sorting
- Pagination
- JWT authentication
- Authorization
- Resource ownership
- MongoDB aggregation
- API testing with Postman
- Error handling

---

## Project Status

This project is being developed incrementally, with each feature implemented and tested separately.

The focus is on understanding the decisions behind the implementation rather than simply completing the feature list.

---

## Future Improvements

Possible future additions include:

- More advanced search
- Application reminders
- Interview tracking
- Resume/document management
- API rate limiting
- Automated tests
- API deployment

These features are intentionally outside the initial scope of the project.

---

## Author

**Fateme Kharazmi**

Frontend Developer expanding into backend development.

**GitHub:** github.com/faanid
