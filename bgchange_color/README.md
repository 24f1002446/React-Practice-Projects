# 🎨 React Color Changer

A simple and interactive React project where the entire screen changes its background color instantly when a color button is clicked.

This project was built to understand the basics of **React state management, event handling, dynamic inline styling, and Tailwind CSS** in a small practical application.

---

## 🌈 What is this project?

Imagine a screen with a small color palette at the bottom.

Choose a color → the entire background changes.

That's the complete idea behind this project, but it is also a practical example of how React can make a UI respond instantly to changes in application state.

### Current colors

- 🔴 Red
- 🟡 Yellow
- 🟠 Orange
- 🟢 Green
- ⚫ Black
- 🔵 Blue

The application starts with an **olive** background.

---

## ✨ Features

- 🎨 Change the complete page background
- ⚡ Instant color updates
- 🖱️ Button-based color selection
- ⚛️ React state management
- 🎯 Dynamic inline styling
- 📱 Responsive button layout
- 🌙 Smooth background transition
- ✨ Styled buttons with Tailwind CSS
- 🧩 Simple and lightweight UI

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React | Building the user interface |
| JavaScript | Application logic |
| Tailwind CSS | Styling and responsive layout |
| Vite | Development environment |
| HTML | Application structure |
| CSS | Additional styling |

---

## 📦 Main React Concept

The main concept used in this project is React's `useState` Hook.

```javascript
const [color, setColor] = useState("olive");



How the Application Works

User clicks a color
        ↓
onClick event runs
        ↓
setColor() updates state
        ↓
React re-renders the component
        ↓
New color is applied
        ↓
Background changes

🎯 Project Goal

The goal of this project was not to build a complex application, but to understand an important React concept through a simple interactive UI.

The project demonstrates how a single state variable can control a visible part of the interface and how React automatically updates the UI when that state changes.