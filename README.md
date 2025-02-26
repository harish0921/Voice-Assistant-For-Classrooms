# Voice-Activated Classroom Assistant

## Overview
The **Voice-Activated Classroom Assistant** is a smart tool designed to help teachers manage lectures with hands-free voice commands. It allows seamless control over presentations, notes, assignments, and student engagement while integrating with existing classroom technology. Built using **JavaScript, Vite, and modern web technologies**, this project aims to enhance classroom management and improve the teaching experience.

## Features
- 🎙 **Voice Command Recognition** – Enables hands-free control using speech recognition.
- 📊 **Presentation Management** – Navigate slides and control presentations without touching a device.
- 📝 **Note-Taking** – Add, update, or display lecture notes effortlessly.
- 📌 **Assignment Handling** – Manage and distribute assignments via voice commands.
- 🎯 **Student Engagement Tools** – Conduct quizzes, polls, and attendance tracking through voice.
- 🔄 **Seamless Integration** – Works with common classroom technologies like projectors, LMS, and cloud storage.

## Tech Stack
- **Frontend:** React.js, Vite, Tailwind CSS, Framer Motion
- **Backend:** Node.js, Express.js
- **Speech Recognition:** Web Speech API, Wit.ai (Optional)
- **Database:** Firebase / MongoDB (Choose based on your preference)
- **Deployment:** Vercel / Netlify (Frontend), Render / Heroku (Backend)

## Installation
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Vite](https://vitejs.dev/)
- [Git](https://git-scm.com/)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/harish0921/voice-classroom-assistant.git
   cd voice-classroom-assistant
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

4. Open the app in your browser:
   ```sh
   http://localhost:5173
   ```

## Usage
- Use the microphone button to activate voice commands.
- Say commands like **"Next slide"**, **"Show notes"**, **"Mark attendance"**.
- View logs in the console for debugging.

## Deployment
### Frontend (Vercel / Netlify)
```sh
npm run build
```
Upload the `dist` folder to Vercel or Netlify.

### Backend (Render / Heroku)
```sh
npm start
```
Push to a remote repository and deploy via Render or Heroku.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.


