
# 💰 FinTrack – Personal Finance Tracker

FinTrack is a **full-stack personal finance application** designed for students and working professionals to track expenses, manage budgets, and understand spending habits.

This project is being built step-by-step to learn **Full-Stack Development + Basic Machine Learning** while creating a **real, deployable product**.

# 🚀 Tech Stack

### Frontend

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
fintrack-fullstack-app/
│
├── client/              # React Frontend
│
├── server/              # Node.js Backend
│   │
│   ├── config/
│   │   └── db.js        # MongoDB connection
│   │
│   ├── models/
│   │
│   ├── controllers/
│   │
│   ├── routes/
│   │
│   └── index.js         # Express server entry point
│
└── README.md
```

---

# ⚙️ Backend Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/Sneha-Srivastava11/fintrack-fullstack-app.git
```

```
cd fintrack-fullstack-app/server
```

---

### 2️⃣ Install dependencies

```
npm install
```

---

### 3️⃣ Create `.env` file inside **server**

```
PORT=5000
MONGO_URI=mongodb+srv://fintrackuser:fintrack1120sneha@cluster0.swcnbvx.mongodb.net/?appName=Cluster0
```

---

### 4️⃣ Run the backend server

```
npm run dev
```

Server will run on:

```
http://localhost:5000
```

---

# 📡 Current API

### Health Check

```
GET /
```

Response:

```
{
 "message": "FinTrack API running 🚀"
}
```

---

# 🛠 Features (Planned)

* Add expense
* Edit expense
* Delete expense
* Expense categories
* Monthly budget planning
* Spending analytics dashboard
* ML-based expense categorization
* Spending prediction

---

# 🎯 Learning Goals

This project is focused on learning:

* Full-Stack development
* REST API design
* Database modeling
* Clean backend architecture
* Deployment
* Basic ML integration

---

# 📅 Development Log

Day 1

* Project repository created
* Express backend initialized
* MongoDB Atlas connected
* Environment configuration setup

More features coming soon.

---

# 📌 Future Improvements

* Authentication system
* Dashboard analytics
* Expense charts
* ML predictions
* Deployment (Render + Vercel)

---

# 👩‍💻 Author

Sneha Srivastava
B.Tech CSE
