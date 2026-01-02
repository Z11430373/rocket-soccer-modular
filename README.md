# Rocket Soccer: Modular Edition

A web-based 3D rocket car soccer game built with Three.js and Cannon.js. This version has been refactored from a single HTML file into a modern, modular ES Modules structure for better maintainability and scalability.

## Key Features

*   **Physics-Driven Gameplay:** Uses Cannon.js for realistic vehicle and ball physics, including a raycast-based vehicle system.
*   **3D Rendering:** Employs Three.js for rendering the scene, objects, lighting, and shadows.
*   **Advanced AI:** The AI opponent uses predictive tracking and a `driveTo` navigation function to create challenging gameplay.
*   **Modular Codebase:** The entire project is structured using ES Modules, separating concerns into logical units (Core, GameObjects, Controllers, UI, Services).
*   **Cloud Saves:** Integrates with Google Drive API for saving and loading player progress. Includes a fail-safe mechanism using Local Storage.
*   **Customizable UI:** Features dynamic UI elements and allows players to customize visuals like the ground texture, ball style, and HUD.

## Tech Stack

*   **Rendering:** [Three.js](https://threejs.org/)
*   **Physics:** [Cannon.js](https://github.com/schteppe/cannon.js)
*   **Authentication/Storage:** Google Drive API
*   **Language:** JavaScript (ES6 Modules)

## How to Run

Because this project uses ES Modules, you cannot run it by simply opening the `index.html` file in your browser due to CORS security policies. You must serve the files from a local web server.

1.  **Prerequisites:** Make sure you have [Node.js](https://nodejs.org/) installed.
2.  **Clone the repository:**
    ```bash
    git clone https://github.com/Z11430373/rocket-soccer-modular.git
    cd rocket-soccer-modular
    ```
3.  **Start a local server:** The easiest way is to use the `serve` package.
    ```bash
    npx serve
    ```
4.  **Open in browser:** Open your web browser and navigate to the local address provided by the server (usually `http://localhost:3000`).

Enjoy the game!

## Project Structure

```
rocket-soccer-modular/
├── index.html
├── README.md
└── src/
    ├── main.js
    ├── config.js
    ├── core/
    │   ├── Game.js
    │   ├── Scene.js
    │   └── World.js
    ├── gameObjects/
    │   ├── Car.js
    │   └── Ball.js
    ├── controllers/
    │   ├── InputController.js
    │   └── AIController.js
    ├── ui/
    │   ├── UIManager.js
    │   └── components/
    │       ├── effects.js
    │       └── textures.js
    └── services/
        └── CloudSave.js
```

## Version History

- **v18.015 Beta** - AI 智能大升級，實作 driveTo 高階導航，新增物理預判與自動跳躍
- **v18.014.2 Beta** - 登入按鈕 Fail-Safe 機制
- **v18.014.1 Beta** - 緊急修復物理運算
