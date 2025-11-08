# 🎮 Rock Paper Scissors
Rock Paper Scissors is a fun and interactive **web-based game** built using **HTML**, **CSS**, and **JavaScript**, enhanced with Firebase Authentication and Firestore Database for secure user management and persistent gameplay data. Play against the computer and test your luck in this digital version of the timeless hand game- now with sound effects, animation and theme toggling! The sleek, minimalist design and responsive layout ensure smooth gameplay across all devices — from desktops to mobile screens.

## Live Demo
**Play now:** [Rock Paper Scissors Game](https://rockpaperscissor-ddb1e.web.app)

## Features:

- **User Login & Signup** with Firebase Authentication
- **User Data Storage** with Firebase Firstore and localStorage
- **Smart Score Tracking** - Stores wins, losses, ties, and high scores per user
- **Sound Effects** for win / lose / tie and button clicks
- **Dark/Light Theme Toggle** for personalized gameplay
- **Animated buttons** with emoji-based visuals
- **Responsive design** - Smooth experience across mobile and desktop
- **Persistent Session Handling** with Firebase Auth
- **Click-based** and **touch-optimized** controls for seamless play

## Tech Stack

| Layer | Technology |
|:--:|:--:|
| Frontend | HTML, CSS, JavaScript |
| Framework | Bootstrap 5 |
| Authentication | Firebase Authentication |
| Database | Firebase Firestore |
| Hosting | Firebase Hosting |
| Sound | Howler.js | 

## How It Works

1. **User Authentication**
   Users sign up or log in through Firebase Authentication.
   Once logged in, the app retrieves the user's data from the Firestore Database.

2. **Gameplay Logic**  
   Each round updates local game statistics (win, lose, tie).  
   Once the user completes a full game session (e.g., 50 moves), their scores are synced to Firebase.

3. **Persistent Storage**  
   User scores are stored under their unique UID, so progress is retained even after logout.

4. **Responsive & Thematic Design**  
   The layout adapts to any screen size, and users can toggle between light and dark themes seamlessly.

## Future Enhancements
- Add Multiplayer mode with real-time sync
- Global leaderboard for all users
- Chat support or social sharing of scores
- Progressive Web App (PWA) support for offline gameplay
- Enhanced animations
- Integrating AI as opponent

## What I learned

- Implementing Firebase Authentication and handling OAuth redirects
- Using Firestore Database for user data storage and score synchronization
- Managing secure API keys during deployment
- Working with Howler.js for game sound effects
- Deploying and managing a production-ready app on Firebase Hosting

## Author

**Kishor Kumar G S**

**Email:** kishorkumargs85@gmail.com
**LinkedIn:** Kishor Kumar G S
