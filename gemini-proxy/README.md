# Gemini Proxy Backend

This is a secure backend (Node.js + Express) that proxies requests from the Chrome extension to the Gemini API.  
It ensures your **Google Gemini API key** is never exposed in the frontend.

---

## 🚀 Features (Current)

- Simple Express server
- Forwards requests to Gemini API
- Protects your API key via `.env`

---

## 📂 Folder Structure

gemini-proxy/
│── server.js
│── package.json
│── .env (ignored from git)
│── .gitignore

---

## 🛠 Installation

1. Clone the repo
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a .env file:
   GEMINI_API_KEY=your-secret-gemini-key
4. Run locally:
   node server.js
5. Your proxy will run on:
   http://localhost:3000/api/gemini

🔒 Security

.env is ignored in .gitignore

Never commit your API key to GitHub

Use Vercel (or another host) with environment variables for deployment

📊 Tech Stack

Node.js

Express.js

node-fetch
