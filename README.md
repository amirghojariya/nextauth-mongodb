🚀 NextAuth MongoDB

A full-stack authentication system built with Next.js, NextAuth, and MongoDB.
This project handles secure signup, login, logout, email verification, and protected routes — all in one clean setup.

🧩 Tech Stack

Next.js 14+ — App Router

TypeScript — Type-safe and modern

MongoDB + Mongoose — Database layer

NextAuth / Custom JWT Auth — Authentication flow

Tailwind CSS — UI styling

Nodemailer + Mailtrap — Email verification system

⚙️ Features

✅ User Signup & Login
✅ JWT-based Authentication
✅ Email Verification & Password
✅ Protected API Routes (Middleware Guard)
✅ MongoDB Connection via Mongoose
✅ Easy to Deploy & Extend


📦 Installation
git clone https://github.com/amirghojariya/nextauth-mongodb.git
cd nextauth-mongodb


🧠 How It Works

User signs up → verification email sent using Mailtrap.

User verifies account → token stored in cookies.

Middleware checks token before allowing access to private pages.

Logout clears session + token.

Simple. Secure. Scalable. 🔒