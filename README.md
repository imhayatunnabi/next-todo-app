# Next.js Todo Application

This is a simple todo application built with Next.js that uses a JSON server as its backend to store todo data.

## Prerequisites

Before running this application, make sure you have the following installed on your machine:
- Node.js (v14 or later)
- npm (Node Package Manager)

## Getting Started

Follow these steps to set up and run the todo application:

### 1. Clone the Repository

```bash
git clone <repository_url>
cd nextjs-todo-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create the Database File

Before starting the JSON server, you need to create the database file manually. Create a file named `database.json` inside the `data` directory (`nextjs-todo-app/data`) with the following content:

```json
{
  "todos": []
}
```

This file will initially contain an empty array to store todo items.

### 4. Start the JSON Server for the Database

Ensure you have the `json-server` package installed globally. If not, install it using:

```bash
npm install -g json-server
```

Now, start the JSON server with the following command:

```bash
npm run json-server
```

This will start the JSON server and serve the database from `data/database.json` on port `3001`.

### 5. Run the Next.js Application

Open a new terminal window/tab in the project directory.

```bash
npm run dev
```

This will start the Next.js development server. You can view the application by navigating to `http://localhost:3000` in your web browser.

## Available Scripts

In the project directory, you can run the following npm scripts:

- `npm run dev`: Runs the Next.js development server.
- `npm run build`: Builds the Next.js application for production.
- `npm run start`: Starts the Next.js application in production mode.
- `npm run lint`: Lints the project files using ESLint.
- `npm run json-server`: Starts the JSON server for the database.

## Folder Structure

The important files and directories within this project are structured as follows:

```
nextjs-todo-app/
├── components/
│   └── ... (React components for the todo app)
├── data/
│   └── database.json (JSON file used as the database)
├── pages/
│   └── ... (Next.js pages for routing)
├── public/
│   └── ... (Static assets)
├── styles/
│   └── ... (CSS stylesheets)
├── .eslintrc.js (ESLint configuration)
├── next.config.js (Next.js configuration)
├── package.json
└── README.md
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.