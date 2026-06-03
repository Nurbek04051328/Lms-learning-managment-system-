# 📚 LMS (Learning Management System)

A full-stack Learning Management System built with **Vue 3 (Vite)** frontend and **Node.js (Express/Nest optional)** backend.  
This project is designed with a **scalable, modular, and production-ready architecture**.

---

## 🚀 Tech Stack

### Frontend
- Vue 3 + Vite
- Vue Router
- Pinia (State Management)
- Axios
- PrimeIcons / PrimeVue (optional)
- CSS / Tailwind (optional)

### Backend
- Node.js
- Express / NestJS (depending on setup)
- MongoDB (Mongoose)
- JWT Authentication

---

## 📁 Project Structure
```
lms/
│
├── front/ # Vue 3 frontend (LMS UI)
├── backend/ # Node.js backend (API server)
```


---

## 🎯 Features (Planned / In Progress)

### 👨‍🎓 Student
- Login / Register
- View courses
- Watch lessons
- Track progress
- Profile management

### 👨‍🏫 Teacher
- Create courses
- Upload lessons
- Manage students
- Assign tasks

### 🛠 Admin
- Manage users
- Manage roles (student / teacher)
- System analytics

---

## 🧠 Architecture Highlights

- Feature-based modular structure
- Clean separation of frontend/backend
- Reusable components (UI system)
- Pinia-based state management
- API abstraction layer (Axios services)
- Role-based routing system
- Scalable folder structure for LMS growth

---

## 🔐 Authentication

- JWT-based authentication
- Role-based access control (RBAC)
- Protected routes (Vue Router guards)
- Persistent login (Pinia persisted state)

---

## ⚙️ Setup Instructions

### 1. Clone repository
```bash
git clone https://github.com/Nurbek04051328/Lms-learning-managment-system-.git
cd lms
```
### 2. Frontend setup
cd front
npm install
npm run dev
### 3. Backend setup
cd backend
npm install
npm run dev

---

## 🌐 Environment Variables
### Backend (.env)
```
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
```
### Frontend (.env)
```
VITE_API_URL=http://localhost:5173`
```