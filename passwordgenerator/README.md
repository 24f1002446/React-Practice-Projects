# 🔐 React Password Generator

A simple and modern Password Generator built with **React and Tailwind CSS**.

Generate random passwords by selecting the password length and choosing whether to include numbers and special characters.

## ✨ Features

- 🔑 Random password generation
- 📏 Adjustable password length from 6 to 100
- 🔢 Optional numbers
- 🔣 Optional special characters
- 📋 One-click copy to clipboard
- ⚡ Automatically generates a new password when options change
- 🎨 Clean and responsive interface
- 💨 Styled using Tailwind CSS

## 🛠️ Technologies Used

- React
- JavaScript
- Tailwind CSS v4
- Vite
- HTML

## ⚛️ React Concepts Used

### useState

Used to store:

- Password length
- Generated password
- Number option
- Character option

### useCallback

Used for the password generation and copy functions.

### useEffect

Automatically generates a new password whenever the selected options change.

### useRef

Used to access the password input and select the generated password before copying it.

## 🔄 How It Works

```text
Select Password Length
        ↓
Enable Numbers / Characters
        ↓
React State Updates
        ↓
useEffect Runs
        ↓
Password Generator
        ↓
Random Password Generated
        ↓
Password Displayed
        ↓
Click Copy
        ↓
Password Copied to Clipboard