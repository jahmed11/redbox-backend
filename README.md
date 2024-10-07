# Use node 21 or higher

# Todo App with Express and MongoDB

## Overview

This is a simple Todo app built using **Express** and **MongoDB**. It can be run using **Docker** or directly on your local machine (without Docker).

---

## 1. Running the Application with Docker

Docker allows you to easily run the application without installing dependencies manually. Ensure you have **Docker** installed on your machine.

### Steps:

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd <repository-folder>
    ```

2. Create a `.env.production` file in the root of your project and add the necessary environment variables. Example:

    ```bash
    # .env.production
    MONGO_URI=mongodb://mongodb:27017/REDBOX
    PORT=3000
    ```

    - `MONGODB_URI`: The URI of your MongoDB service inside Docker.
    - `PORT`: The port on which your application will run.

3. Run the Docker containers using **docker-compose**:

    ```bash
    docker-compose up --build
    ```

4. Your application will be available at [http://localhost:3000](http://localhost:3000).

5. To stop the containers, press `CTRL+C` or run:

    ```bash
    docker-compose down
    ```

---

## 2. Running the Application Locally Without Docker

If you prefer to run the application directly on your local machine, follow these steps:

### Prerequisites:

- **Node.js** (version 21+)
- **MongoDB** installed locally (Ensure it is running on port 27017 or update the environment variable accordingly)

### Steps:

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd <repository-folder>
    ```

2. Create a `.env` file in the root of your project and add the necessary environment variables. Example:

    ```bash
    # .env
    MONGO_URI=mongodb://mongodb:27017/REDBOX
    PORT=3000
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the MongoDB server if it's not already running:

    ```bash
    brew services start mongodb-community
    ```

5. Run the application:

    ```bash
    npm run dev
    ```

6. Your application will be available at [http://localhost:3000](http://localhost:3000).

---

## 3. Environment Variables

You will need the following environment variables for the application to run:

- `MONGODB_URI`: The URI of the MongoDB instance (local or Docker).
- `PORT`: The port the application will run on.

Ensure you add these variables to the corresponding `.env` or `.env.production` file.

---

## 4. Docker Tips

- To rebuild the Docker image after making changes to the code or dependencies, run:

    ```bash
    docker-compose up --build
    ```

- To view logs from the running containers, use:

    ```bash
    docker-compose logs -f
    ```

---

## 5. Issues

If you encounter any issues, make sure MongoDB is running (locally or inside Docker) and that all environment variables are correctly set up.
