# 📹 React Video Meeting App (ZEGOCLOUD)

This is a lightweight video conferencing application built with **React** and powered by **ZEGOCLOUD**. Users can join or create video rooms by sharing unique links.

## 🚀 Features

- 🔗 Generate or enter a room ID to join a meeting
- 📹 Video conferencing powered by [ZEGOCLOUD UIKit](https://docs.zegocloud.com/)
- 🔐 Private rooms with dynamic UUID-based links
- 🧼 Minimal and responsive UI with Tailwind CSS
- ⚛️ Built with React and React Router

---

## 🧰 Technologies Used

- **React** (Frontend)
- **React Router DOM** (Routing)
- **ZEGOCLOUD UIKit Prebuilt** (Video conferencing)
- **Tailwind CSS** (Styling)
- **UUID** (Unique room ID generation)

---

## 📁 Project Structure
.
├── src/
│ ├── App.jsx # Main App with routing
│ ├── pages/
│ │ ├── Home.jsx # Join/create room UI
│ │ └── Room.jsx # Video conferencing component
│ └── index.jsx # Entry point
├── public/
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md


---

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/react-video-meeting.git
cd [files name]

Install Dependencies
npm install

Run the App
npm run dev

Frontend will run on http://localhost:5173/ (or your configured port)

MIT License

Copyright (c) [2025] [Mamudul islam]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
