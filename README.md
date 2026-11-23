# Job Application API

A REST API for tracking job applications throughout the hiring process.

The project is being developed as a practical backend engineering exercise with a focus on API design, TypeScript, Express, MongoDB, authentication, authorization, and maintainable application structure.

## Project goals

The planned application will allow users to manage their job applications, including company and role details, application dates, hiring stages, notes, and pipeline statistics.

The intended lifecycle is:

```text
applied -> screening -> interview -> offer
                              \-> rejected
```

The project is intentionally being built incrementally. Features described as planned below should not be considered implemented until they are available in the codebase.

## Tech stack

- Node.js 22+
- TypeScript
- Express 5
- MongoDB
- Mongoose
- dotenv
- Node.js test runner with tsx

## Current implementation

- Express application and API route mounting
- MongoDB connection
- Initial User Mongoose model
- Initial user signup endpoint
- Environment configuration
- Centralized application error handling
- Health/readiness endpoint

Authentication hardening, login, job application resources, authorization, querying, statistics, and automated test coverage are still planned. The current signup implementation is a work in progress and is not production-ready.

## Project structure

```text
job-application-api/
├── src/
│   ├── config/
│   │   └── env.ts
│   ├── controllers/
│   │   └── userController.ts
│   ├── middleware/
│   │   └── errorMiddleware.ts
│   ├── models/
│   │   └── userModel.ts
│   ├── routes/
│   │   ├── healthRoutes.ts
│   │   └── userRoutes.ts
│   ├── utils/
│   │   ├── appError.ts
│   │   └── db.ts
│   ├── app.ts
│   └── server.ts
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── tsconfig.json
```

## Getting started

### Requirements

- Node.js 22 or later
- npm
- A running MongoDB instance or MongoDB connection string

### Install dependencies

```bash
npm install
```

### Configure environment variables

Copy the example file and update the MongoDB connection string:

```bash
cp .env.example .env
```

Required variables:

| Variable | Description | Default |
|---|---|---|
| `NODE_ENV` | Runtime environment | `development` |
| `PORT` | HTTP server port | `3000` |
| `MONGO_URI` | MongoDB connection string | — |

Never commit real credentials or `.env` files.

### Run in development

```bash
npm run dev
```

### Build and run

```bash
npm run typecheck
npm run build
npm start
```

### Run tests

```bash
npm test
```

Tests can be added using the Node.js test runner and `tsx`.

## API endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| `GET` | `/health` | Reports API and database readiness |
| `POST` | `/api/v1/users/signup` | Initial user registration endpoint |

The API uses the `/api/v1` prefix for versioned application routes.

## Engineering roadmap

1. Establish project configuration and runtime infrastructure.
2. Complete user registration validation and password security.
3. Implement login and JWT authentication.
4. Add authorization and user-owned resources.
5. Implement job application data modeling and CRUD endpoints.
6. Add filtering, searching, sorting, and pagination.
7. Add application pipeline statistics using MongoDB aggregation.
8. Add automated tests and API documentation.
9. Prepare deployment configuration.

## Author

**Fateme Kharazmi**

Frontend Developer expanding into backend development.

GitHub: [@faanid](https://github.com/faanid)
