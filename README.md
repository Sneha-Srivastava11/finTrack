# 💰 FinTrack – Personal Finance Tracker

FinTrack is a **full-stack personal finance application** designed for students and working professionals to track expenses, manage budgets, and analyze spending habits.

This project is being built step-by-step to learn **Full-Stack Development + Basic Machine Learning** while creating a **real deployable product**.

---

# 🚀 Tech Stack

### Frontend (Coming Soon)

* React (Vite)
* TailwindCSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Planned ML Features

* Automatic expense categorization
* Spending prediction

---

# 📂 Project Structure

```
fintrack/
│
├── server
│   │
│   ├── config
│   │   └── db.js
│   │
│   ├── models
│   │   └── Expense.js
│   │
│   ├── controllers
│   │   └── expenseController.js
│   │
│   ├── routes
│   │   └── expenseRoutes.js
│   │
│   ├── .env
│   └── index.js
│
└── README.md
```

---

# ⚙️ Backend Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/YOUR_USERNAME/fintrack.git
cd fintrack/server
```

---

### 2️⃣ Install dependencies

```
npm install
```

---

### 3️⃣ Create `.env` file

Inside the `server` folder create:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

### 4️⃣ Run the backend

```
npm run dev
```

Server will run on:

```
http://localhost:5000
```

---

# 📡 API Endpoints

### Create Expense

```
POST /api/expenses
```

Example request body:

```
{
 "title": "Groceries",
 "amount": 1200,
 "category": "Food"
}
```

---

### Get All Expenses

```
GET /api/expenses
```

Returns all saved expenses from MongoDB.

---

### Update Expense

```
PUT /api/expenses/:id
```

Updates an existing expense.

---

### Delete Expense

```
DELETE /api/expenses/:id
```

Deletes an expense from the database.

---

# 📊 Example Expense Document

```
{
 "_id": "684c2a8e6d23b45c8d91b234",
 "title": "Groceries",
 "amount": 1200,
 "category": "Food",
 "date": "2026-03-04"
}
```

---

# 📅 Development Log

## Day 1

* Project repository created
* Express backend initialized
* Environment variables configured
* MongoDB Atlas connected

## Day 2

* Implemented Expense data model using Mongoose
* Built REST API for expense management
* Added CRUD operations:

  * Create expense
  * Fetch expenses
  * Update expense
  * Delete expense
* Tested APIs using Thunder Client

---

# 🎯 Learning Goals

This project focuses on learning:

* Full-Stack development
* REST API design
* MongoDB data modeling
* Clean backend architecture
* Git workflow and version control
* Deployment practices

---

# 📌 Upcoming Features

* React frontend dashboard
* Expense form UI
* Expense list with edit/delete
* Budget planning feature
* Data visualization (charts)
* ML-based expense categorization
* Deployment (Render + Vercel)

---

# 👩‍💻 Author

Sneha Srivastava
B.Tech CSE
