# 🌐 Teqmavens UI Animation App

This is a **Vite + React** project showcasing animated UI interactions — including a glowing sphere and a sliding modal, all styled with **Tailwind CSS** and animated using **Framer Motion**. The app also supports **dark/light theme toggling**.

---

## 🚀 Getting Started

Follow these steps to run the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/GurpinderKaur073/teqmavenspro.git
   cd teqmavenspro
Install dependencies:
npm install

Start the development server:
npm run dev

Open your browser and go to:
http://localhost:5173

🛠 Tech Stack
React – for building UI components

Vite – fast bundler and dev server

Tailwind CSS – for styling with utility classes

Framer Motion – for seamless animations

Dark/Light Mode – handled via Tailwind’s dark: class and React state

✨ Features
Click on a background image to:

Animate a glowing sphere

Trigger a Page1 modal that slides in with delayed opacity transition

After a few seconds, the modal becomes fully visible (100% opacity)

Smooth slide-back animation on modal close

Theme toggle button with dark/light mode styling

Assets like logos, sphere, and background images are placed in /assets

Modal and animations are built using Framer Motion

📌 Assumptions & Design Decisions
Default theme is dark mode

Tailwind’s dark mode is toggled by adding/removing dark class on html element

Light mode switches to light backgrounds and dark text

Animations are deliberately time-delayed for visual emphasis

The popup Page1 overlay is styled with gradients and overlaps a semi-transparent sphere

🧑‍💻 Author
Made with ❤️ by Gurpinder Kaur

