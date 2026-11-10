# Product Web Application With ExpressJS

A simple Product Management Web Application developed using **Node.js, Express.js, EJS and MySQL**.

## Technologies Used

- Node.js
- Express.js
- MySQL
- EJS
- HTML
- CSS
- JavaScript

## Features

- User Registration
- User Login and Authentication
- Session Management
- Add Product
- View Products
- Update Product
- Delete Product
- MySQL Database Integration

## Project Structure

- `controller/` - Handles application logic.
- `router/` - Manages application routes.
- `views/` - Contains EJS templates.
- `public/` - Contains CSS and static files.
- `database/` - Contains SQL database setup script.
- `databaseconfig/` - MySQL connection configuration.

## Database Setup


This project uses **MySQL** as its database.

### Step 1: Create Database

1. Open MySQL Workbench.
2. Connect to your local MySQL server.
3. Open the `database/product_management.sql` file.
4. Execute the complete SQL script.

This will automatically create:
- Database: `product_management`
- Table 1: `USERLOGIN`
- Table 2: `PRODUCT`

### Step 2: Configure Environment Variables

Create a `.env` file in the project root directory.

Configure the following variables according to your local MySQL setup:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=product_management
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Start the Application

```bash
npx nodemon server.js
```

### Step 5: Open in Browser

http://localhost:3131

**Note:** Database credentials are not included in this repository. Configure your own local MySQL credentials before running the application.


## Author

Pankaj Kumar Sah