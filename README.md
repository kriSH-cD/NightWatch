# 🎬 Movie Watchlist App

## 📌 Project Overview

The **Movie Watchlist App** is a modern web application that allows users to search for movies and maintain a personalized watchlist. The app provides a seamless experience where users can discover movies, add them to a watchlist, and manage their selections efficiently.

This project focuses on frontend development concepts such as API integration, state management, and user interface design.

---

## 🎯 Purpose

The goal of this project is to:

* Help users easily search for movies
* Allow users to create and manage a watchlist
* Provide a clean and interactive UI experience
* Practice real-world frontend development skills

---

## 🌐 APIs Used

### 1. OMDb API (Primary)

* Used for fetching movie data such as:

  * Title
  * Year
  * Poster
  * IMDb ID
* Example:

  ```
  https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=batman
  ```

### 2. (Optional Enhancements)

* **TMDB API** – for better images and detailed movie data
* **Watchmode API** – for streaming availability

---

## 🚀 Features

### ✅ Core Features

* 🔍 **Live Movie Search**

  * Fetch results dynamically as the user types
* ⭐ **Add/Remove from Watchlist**

  * Toggle button on each movie card
* 📌 **Persistent Watchlist**

  * Data stored in localStorage
* 🧊 **Empty States**

  * Message when no search results are found
  * Message when watchlist is empty
* 🎨 **Modern UI**

  * Dark theme inspired by streaming platforms

### 🎲 Optional Features

* Random Movie Picker ("Movie Night" feature)
* Movie details modal
* Pagination or infinite scrolling
* Search debounce optimization

---

## 🛠️ Technologies Used

### Frontend

* **React.js** – UI development
* **Vite** – Fast build tool
* **JavaScript (ES6+)**

### Styling

* **Tailwind CSS** (or CSS)

### API Handling

* **Axios** (or Fetch API)

### State Management

* React Hooks (`useState`, `useEffect`)

### Storage

* **localStorage** (for watchlist persistence)

---

## 📂 Project Structure

```
movie-watchlist/
│── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieList.jsx
│   │   └── WatchlistSidebar.jsx
│   ├── App.jsx
│   └── main.jsx
│
│── public/
│── package.json
│── README.md
```

---



### 2. Install Dependencies

```
npm install
```



### 4. Run the Project

```
npm run dev
```

## 🧠 How It Works (Brief Workflow)

1. User enters a movie name in the search bar
2. API request is sent to OMDb
3. Results are displayed as movie cards
4. User can add/remove movies from the watchlist
5. Watchlist is stored in localStorage
6. UI updates automatically based on state

---

## ⚠️ Known Limitations

* Limited data from OMDb API (basic info only)
* No backend or user authentication
* API rate limits may apply

---

## 🔮 Future Improvements

* Add authentication (login/signup)
* Integrate TMDB for richer data
* Add recommendations system
* Improve UI animations and transitions

---

## 🙌 Acknowledgements

* OMDb API for movie data
* Inspiration from Netflix / Disney+ UI design

---
