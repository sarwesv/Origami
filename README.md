# Origami 3D

An interactive, artistic 3D web application for visualizing origami folds. Built with **React**, **Three.js (React Three Fiber)**, and **GSAP**.


## 🌟 Features

- **Realistic 3D Rendering:** High-quality paper textures, soft lighting, and shadows using Three.js.
- **GSAP Powered Animations:** Smooth, realistic folding sequences with precise hinge logic.
- **Interactive Step-by-Step:** Follow along with interactive controls to see how models like the **Ninja Star** and **Swan** are folded.
- **3D Camera Controls:** Rotate, zoom, and pan around the model at any point to inspect the folds from any angle.
- **Quick Reset:** Instantly unfold the paper back to its flat state.

## 🛠️ Tech Stack

- **Framework:** [React](https://reactjs.org/)
- **3D Engine:** [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) (Three.js)
- **Animation:** [GSAP](https://greensock.com/gsap/)
- **Styling:** CSS Modules / Vanilla CSS
- **Bundler:** Vite

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sarwesv/Origami.git
   cd Origami
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## 📂 Project Structure

- `src/components/origami/`: 3D and UI components for the origami tool.
- `src/data/models.ts`: Definitions for origami geometry and fold animation steps.
- `src/hooks/useFoldAnimation.ts`: Core GSAP animation logic.
- `src/styles/`: Application styling.

## 🎨 Adding New Models

To add a new origami model:
1. Define the faces (triangles/quads) in `src/data/models.ts`.
2. Define the animation steps, specifying the rotation axis and pivot for each fold.
3. Update the `Sidebar` model selector.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Inspired by the ancient art of Origami.
- Built as an exploration of GSAP in 3D environments.
