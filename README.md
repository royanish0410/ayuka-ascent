# Ayuka Ascent

A modern, high-performance frontend built with **Vite**, **React**, **TypeScript**, and **Tailwind CSS**, designed for scalability, clean UI, and smooth developer experience.

---

## 🚀 Tech Stack

- **Vite** – Fast build tool and dev server
- **React** – Component-based UI library
- **TypeScript** – Type-safe JavaScript
- **Tailwind CSS** – Utility-first styling
- **shadcn/ui** – Accessible, customizable UI components
- **PostCSS** – CSS transformations
- **ESLint** – Code quality and linting

---

## 📁 Project Structure

```txt
.
├── public/              # Static assets
├── src/                 # Application source code
│   ├── components/      # Reusable UI components
│   ├── styles/          # Global styles (Tailwind)
│   ├── main.tsx         # App entry point
│   └── App.tsx          # Root component
├── index.html           # HTML template
├── tailwind.config.ts   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── vite.config.ts       # Vite configuration
├── tsconfig*.json       # TypeScript configurations
└── package.json         # Project metadata & scripts
🛠️ Getting Started
1️⃣ Clone the repository
bash
Copy code
git clone https://github.com/<your-username>/ayuka-ascent.git
cd ayuka-ascent
2️⃣ Install dependencies
bash
Copy code
npm install
or

bash
Copy code
pnpm install
3️⃣ Start the development server
bash
Copy code
npm run dev
The app will be available at:

arduino
Copy code
http://localhost:8080/
📦 Available Scripts
Command	Description
npm run dev	Start development server
npm run build	Build for production
npm run preview	Preview production build
npm run lint	Run ESLint

🎨 Styling & UI
Tailwind CSS is used for styling

Custom design tokens are defined via CSS variables

shadcn/ui components are fully themeable

Supports gradients, glassmorphism, and glow effects

🌙 Theming
The project supports dark mode using CSS variables and Tailwind utilities.

You can extend or customize:

Colors

Shadows

Border radius

Animations

via tailwind.config.ts and global styles.

📈 Performance
Fast HMR via Vite

Tree-shaking enabled

Optimized production builds

Minimal runtime overhead

🧪 Linting & Code Quality
ESLint configured for React + TypeScript

Enforced consistent coding standards

Easy to extend rules as the project grows

🚀 Deployment
This project can be deployed on platforms like:

Vercel

Netlify

Cloudflare Pages

Build command:

bash
Copy code
npm run build
Output directory:

Copy code
dist/
🤝 Contributing
Contributions are welcome!

Fork the repo

Create a feature branch

Commit your changes

Open a pull request

📄 License
This project is licensed under the MIT License.

✨ Author
Built and maintained by Ayuka.