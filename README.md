# Node JS Starter Template with Prisma ORM

A starter template for any Enterprise Applications, Rest APIs or Microservices with Node.js, Express and Prisma ORM for MySQL, PostgreSQL or others.
This project offers production ready environment with all necessary supports for validation, unit testing, socket, redis and many more.
## Manual Installation

Clone the repo:

```bash
git clone https://github.com/ItzSamdam/nodejs-prisma-orm-typescript.git
cd nodejs-prisma-orm-typescript
```

Install the dependencies:

```bash
npm install
```
Start coding ....


## Project Structure

```
prisma\             # Prisma ORM and Data Model
src\
 |--config\         # Environment variables and configuration related things
 |--controllers\    # Route controllers (controller layer)
 |--dtos\           # Data Transfer Object for models
 |--exceptions\     # Http Exception Handler
 |--interfaces\     # typescript interface handler
 |--middlewares\    # Provide Security Layer in app
 |--routes\         # Routes
 |--services\       # Business logic (service layer)
 |--utilities\      # Utilities classes, loggers etc
 |--test            # test files
 |--app-main.ts     # Express app
 |--server.ts       # App entry point
```
