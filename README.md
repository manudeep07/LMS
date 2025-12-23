🎓 Learning Management System (LMS)

A full-stack Learning Management System (LMS) built using the MERN stack, integrated with Clerk for authentication and Stripe for secure payments.
This platform enables students to enroll in courses, make payments, and access learning content, while instructors/admins can manage courses efficiently.

🚀 Features
👨‍🎓 Student Features

Secure authentication using Clerk

Browse available courses

Purchase courses using Stripe payment gateway

Access enrolled course content

User dashboard for learning progress

👨‍🏫 Instructor / Admin Features

Create and manage courses

Upload course content

View enrolled students

Secure role-based access

🔐 Authentication & Payments

Clerk for login, signup, and session management

Stripe API for secure course payments

Webhook support for payment confirmation

🛠 Tech Stack
Frontend

React.js

Tailwind CSS

Clerk React SDK

Backend

Node.js

Express.js

MongoDB

Stripe API

Clerk Backend SDK

Other Tools

JWT (if applicable)

REST APIs

Git & GitHub

Project Structure
lms-project/
│
├── client/          # React frontend
│   ├── src/
│   └── package.json
│
├── server/          # Node + Express backend
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── package.json
│
├── .env
├── README.md
└── package.json

commands

git init
git status
git add .
git add README.md
git commit -m "Initial commit - LMS MERN project with Clerk and Stripe"
git branch feature-auth
git checkout feature-auth
git checkout -b feature-auth
git pull origin main
git remote add origin https://github.com/username/lms-project.git
git branch -M main
git push -u origin main
git checkout main
git merge feature-auth

