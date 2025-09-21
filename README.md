# Productivity Tracker + Gemini Proxy

A Chrome Extension to track productivity and visualize reports, integrated with Google Gemini API through a secure backend proxy.

This repository contains **two main parts**:

1. **Productivity Tracker Chrome Extension** (`/productivity-tracker-extension`)
2. **Gemini Proxy Backend** (`/gemini-proxy`)

---

## 🚀 Features (Current)

- Track productivity data inside Chrome
- Visualize reports with Chart.js
- Ask Gemini questions securely (via backend proxy)
- Secure API key management with `.env` (never exposed in frontend)

---

## 📂 Folder Structure

.
├── productivity-tracker-extension/ # Chrome Extension (Frontend)
│ └── README.md
├── gemini-proxy/ # Secure Backend Proxy
│ └── README.md
└── README.md # Root overview (this file)

---

## 🛠 Setup Instructions

### 1. Extension (Frontend)

See [Productivity Tracker Extension README](./productivity-tracker-extension/README.md)

### 2. Backend Proxy

See [Gemini Proxy README](./gemini-proxy/README.md)

---

## 🔒 Security

- The Gemini API key is **never stored in the Chrome extension**
- `.env` is used for secrets in the backend
- `.env` is already added to `.gitignore`, so your key won’t leak on GitHub
- Deploy safely with Vercel or another host that supports environment variables

---

## 📊 Tech Stack

- Chrome Extensions API
- JavaScript
- Chart.js
- Node.js + Express
- Google Gemini API (via proxy)
