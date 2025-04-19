# Meditation App

Meditation App is a web application designed to help you meditate, with a customizable timer and background sounds to create a relaxing atmosphere. The timer can be started, paused, and reset, with the option to choose between various natural sounds like waves, rain, forest, and nature.

## Features

- **Customizable meditation timer**: Set the timer in minutes and start it for your meditation session.
- **Background sounds**: Choose from rain, waves, forest, and nature sounds to create a calm environment during meditation.
- **Simple and responsive interface**: The interface adapts to mobile devices, tablets, and desktops.
- **Motivational quotes**: Occasionally, a meditation quote is displayed to inspire you.

## Prerequisites

To run the project locally, make sure you have installed:

- [Node.js](https://nodejs.org/) (version 16.x or higher)
- [npm](https://www.npmjs.com/) (automatically installed with Node.js)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/stefano-hm/ProgettoReact.git
   cd meditation-app

2. Install dependencies:

   ```bash
   npm install

3. Start the development server:

   ```bash
   npm run dev

The application will be available at http://localhost:5173.

## Project structure

The project is structured as follows:

   ```bash
   meditation-app/
├── index.html
├── package.json
├── public/
│   ├── favicon/
│   │   ├── android-chrome-192x192.png
│   │   ├── android-chrome-512x512.png
│   │   ├── apple-touch-icon.png
│   │   ├── favicon-32x32.png
│   │   ├── favicon-16x16.png
│   │   ├── favicon.ico
│   │   └── site.webmanifest
│   ├── images/
│   │   └── logo.PNG
│   └── sounds/
│       ├── forest.mp3
│       ├── nature.mp3
│       ├── ocean.mp3
│       └── rain.mp3
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── components/
│   │   ├── BackgroundAudio.jsx
│   │   ├── BackgroundImage.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── MeditatioQuotes.jsx
│   │   └── Timer.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Guide.jsx
│   │   └── Home.jsx
│   ├── store/
│   │   ├── index.js
│   │   └── slices/
│   │       └── timerSlice.js
│   └── styles/
│       ├── about-media.css
│       ├── About.css
│       ├── BackgroundImage.css
│       ├── Footer.css
│       ├── global.css
│       ├── guide-media.css
│       ├── Guide.css
│       ├── Header.css
│       ├── home-media.css
│       ├── Logo.css
│       ├── MeditationQuotes.css
│       └── Timer.css

   ``` 

## Contributing

If you’d like to contribute to the project, follow these steps:

1. Fork the repository.
2. Create a new branch: ```git checkout -b branch-name.```
3. Make your changes and commit: ```git commit -am 'Add a description of your changes'.```
4. Push to your branch: ```git push origin branch-name.```
5. Create a pull request.

## License

Distributed under the MIT License. See the LICENSE file for details.

## What's in the README?

**Project description**: A brief overview of what the app does and its main features.

**Prerequisites**: Tools needed to run the project locally.

**Installation**: Steps to set up the development environment and run the app.

**Project structure**: An overview of the main folders and files.

**Contributing**: How to contribute to the project.

**License**: A note about the project license.

You can further customize the README.md file by adding other sections like CI/CD setup or additional information useful for contributors and developers.

