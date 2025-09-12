# 🏆 Quiz App - Pedro Eduardo Roel

> Project Status: Completed ✔️

---

### Table of Contents
* [Project Description](#project-description)
* [App Demo](#app-demo)
* [Features](#-features)
* [Technologies Used](#️-technologies-used)
* [How to Run Locally](#️-how-to-run-locally)
* [Additional Feature](#-additional-feature)
* [Author](#-author)

---

### Project Description
<p align="center">
This project is a cross-platform Quiz application developed with React Native and Expo as the final project for the programming course. The app features a quiz with instant feedback, a results screen, and the option to play again.
</p>

---

### App Demo
<p align="center">
   <img src="link-to-your-gif-or-video.gif" alt="App Demo" width="300"/>
</p>

---

### 🚀 Features

- **Interactive Quiz:** Question and answer flow with validation.
- **Visual Feedback:** Answers are instantly marked as correct or incorrect.
- **Scoreboard:** Score is calculated and updated each round.
- **Results Screen:** At the end of the quiz, a screen displays the final score.
- **Play Again:** Users can restart the quiz from the results screen.
- **Additional Feature:** **[Name of your new feature]** (e.g., Countdown timer per question).

---

### 🛠️ Technologies Used

- **[React Native](https://reactnative.dev/)**
- **[Expo](https://expo.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**

---

### ⚙️ How to Run Locally

```bash
# 1. Clone the repository
$ git clone [your-repository-link]

# 2. Navigate to the project directory
$ cd quiz-app

# 3. Install dependencies
$ npm install

# 4. Start the development server
$ npm start
```
After running `npm start`, press `w` to open in the browser or scan the QR Code with the Expo Go app on your phone.

---

## ✨ Additional Feature: Animations

This section details the extra feature implemented as part of the final course challenge.

### Description
The Quiz App now includes smooth animations using the `react-native-animatable` library. Animations are applied to question transitions, answer feedback, and the results screen, making the user experience more engaging and visually appealing. For example, questions fade in and out, and correct or incorrect answers are highlighted with animated effects.

### Challenges and Learnings
To implement these animations, I researched how to use the `react-native-animatable` library and integrate it with React Native components. The biggest challenge was synchronizing animation timing with state changes, especially ensuring that feedback animations played before moving to the next question. I learned how to use refs and callbacks with Animatable components to control animation flow and improve user interaction.

---

### 👨‍💻 Author

Developed by **Pedro Eduardo Roel**.

Under the guidance of **Prof. Rafael Ribas**.