# Schlagzeug!
---
HR-ATX57 MVP Project - Jason Dye

---

## Overview
Schlagzeug is a sample of a much larger project that aims to digitize and modernize the delivery and use of instructional materials for beginner percussionists and their instructors. Current method books, as well as online resources and web apps, have served their purpose well, but the time has come to move on.  Schlagzeug will allow for the continuing creation and updating of materials, delivering the most relevant and contemporary pedagogy to tomorrow's yound percussion student.

## Table of Contents
  1. Description
  2. Installation
  3. Usage
  4. Roadmap

---

## Description
This iteration of Schlagzeug is a sample of what a 'Unit' might look like for a student using the application.  There is a list of example music that can be selected, which renders sheet music and practice tracks when clicked.  The practice tracks allow for three different speeds of the selected music available in order to aid comprehension and building confidence.  The listed music includes some snapshot details such as the title,  instrument, level of difficulty, category and style, and goal performance tempo.

---

## Installation
  1. Clone the repository to your local machine using:
    `git clone https://github.com/thejasondye/Dye-MVP.git`
  2. Run `npm install` to install dependencies
  3. Use command `npm run build-dev` to compile the build.js file
  4. Run `npm start` to start the local server
  5. Open a web browser to http://localhost:3000 to view and interact with the app

---

## Usage
On the left is a populated list of musical exercises and solos to choose from, which might be the assignments for the given term of 3 to 6 weeks of study. When an item from the list is clicked, the sheet music populates to the right, and three audio practie tracks are shown below the sheet music.  This setup is considering what a student might need access to when practicing alone, or what an instructor might need to see and have access to when using a projector in a classroom setting.  The list and music are scrollable to allow for optimal positioning, and the sheet music is allowed to take up most of the viewport for clear viewing the notes and rhythms.

![gif demonstrating click functionality](preview/ShlagzeugClickPreview.gif)


---

## Roadmap
Further iteration will produce features such as:
  * Login and session authentication
  * Customizable lists of favorite music examples
  * Pre-built units ("Paths") for instructors to choose from
  * "Path" builder feature for instructors to create and save playlists
  * Backing audio accompaniment tracks
  * Lesson videos
  * Styling and layout updates
