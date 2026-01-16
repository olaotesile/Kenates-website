# Kenate Landing Page

<div align="center">
  <h3>The Modern Standard for Robotics Development</h3>
  <p>A high-performance, visually stunning landing page for Kenate - the next-generation robotics framework.</p>
</div>

## Overview

This project is the official landing page for **Kenate**, a declarative and reactive framework designed to simplify robotics programming. Built with **Next.js 16** and **Tailwind CSS**, it features a modern, dark-themed aesthetic with advanced interactive elements like 3D globes, floating docks, and code comparisons.


## Tech Stack

-   **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **3D Graphics**: [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Language**: TypeScript. Please don't ask me why

## Getting Started

Clone the repository and install dependencies to get started locally.

```bash
# Clone the repository
git clone https://github.com/olaotesile/Kenates-website.git

# Navigate to the project directory
cd kenatelandingpage

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/              # Next.js App Router pages and layouts
├── components/       # Reusable UI components
│   ├── ui/           # Low-level UI primitives (Globe, Dock, etc.)
│   └── ...           # feature components (Hero, Navbar)
├── data/             # Static data files (Globe coordinates)
└── lib/              # Utility functions (cn, etc.)
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
