# Abhishek Verma — 3D Interactive Portfolio

An interactive, high-performance 3D developer portfolio showcasing engineering experience in distributed backend architectures, high-concurrency fintech microservices, and modern web systems.

Built with **React 19**, **Three.js** / **React Three Fiber**, and **GSAP ScrollTrigger**.

🌐 **Live Website:** [pseudo-iitian.github.io/Abhishek-Verma](https://pseudo-iitian.github.io/Abhishek-Verma/)

---

## 🚀 Overview

- **Interactive 3D Cryptographic Ledger Core & Microservice Topology**: Real-time WebGL visualisations reflecting distributed backend systems, event pipelines, and ledger nodes.
- **Scroll-Linked Camera & Scene Dynamics**: GSAP ScrollTrigger seamlessly synchronizes the 3D world with content progression.
- **Production-Ready Fallbacks**: Automatic WebGL detection and high-performance 2.5D fallback ensure zero crashes on mobile or low-power hardware.
- **Modular Data-Driven Architecture**: All portfolio data (experience, education, skills, projects, contact) is organized cleanly in `src/data/`.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | React 19 |
| **Build System** | Vite |
| **3D Engine** | Three.js + `@react-three/fiber` + `@react-three/drei` |
| **Motion & Scroll** | GSAP 3 (ScrollTrigger) |
| **Styling** | Modern CSS3 with responsive glassmorphism & CSS grid |
| **Deployment** | GitHub Pages via GitHub Actions |

---

## 💻 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation & Local Run

```bash
# Clone the repository
git clone https://github.com/Pseudo-iitian/Abhishek-Verma.git
cd Abhishek-Verma

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with Hot Module Replacement (HMR) |
| `npm run build` | Build optimized production bundle into `dist/` |
| `npm run preview` | Locally preview production build |
| `npm run lint` | Run ESLint check |

---

## 📂 Project Structure

```
├── public/                 # Static assets (resume.pdf, icons, favicon)
├── src/
│   ├── components/         # UI components (Hero, Nav, Sections, Scene3D, Fallback2D)
│   ├── data/               # Portfolio content (profile, experience, education, projects, skills)
│   ├── App.jsx             # Main application layout & scroll orchestration
│   ├── index.css           # Design tokens, typography, glassmorphism styles
│   └── main.jsx            # React root
├── .github/workflows/      # Automated GitHub Actions deployment pipeline
├── vite.config.js          # Vite build & asset base configuration
└── package.json
```

---

## 📄 License

MIT © [Abhishek Verma](https://github.com/Pseudo-iitian)
