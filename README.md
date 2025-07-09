# Etch-a-Sketch

This project creates a dynamic square grid using HTML, CSS, and JavaScript. The grid is displayed inside a fixed-size container, and each cell automatically resizes to fit perfectly within the container, no matter how many rows and columns are generated.

---

## 🧩 Features

- Dynamically generate an `N x N` square grid based on user input
- Hover effect on grid cells
- Fixed-size container (400x400px) that never stretches
- JavaScript calculates exact cell size including margins
- Grid size is saved in `localStorage` and persists on reload
- Reset button to prompt the user for a new grid size

---

## 💻 Usage

1. Open `index.html` in a browser.
2. A default 16×16 grid appears.
3. Hover over any square to see a highlight effect.
4. Click the **Reset Grid** button to enter a new grid size.
5. The new grid size will be saved and applied automatically on reload.

---

## 📁 Files

- `index.html` – Basic HTML structure
- `styles.css` – Container and grid cell styling
- `script.js` – Dynamic grid generation and interactivity
- `README.md` – Project overview (this file)

---

## 🔧 Configuration

You can change the default settings in `script.js`:

```js
const DEFAULT_VALUE = 16; // Change default grid size here
const containerSize = 400; // Change fixed container size here (in pixels)
const spacing = 1; // Cell margin (in pixels)
