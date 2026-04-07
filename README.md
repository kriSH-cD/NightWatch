# 🌌 NightWatch | Premium Movie Explorer

NightWatch is a high-end, responsive movie discovery platform built with **React**, **Vite**, and **Tailwind CSS**. It provides users with real-time access to popular and trending movies globally, featuring a sleek glassmorphism design and advanced data manipulation capabilities.

---

## 🎯 Project Milestones Completion

### 🌐 Milestone 2 - API Integration
I have integrated the **TMDB (The Movie Database) API** to fetch real-time movie data.
*   **Fetch Implementation**: Used the `fetch` API inside a dedicated service layer (`src/services/tmdb.js`) to decouple API logic from the UI.
*   **Dynamic Data**: Successfully mapped raw API responses to clean JavaScript objects, ensuring only necessary properties (titles, ratings, high-res posters) are passed to components.
*   **Loading States**: Designed a custom loader that provides visual feedback to the user while data is being streamed from the multiverse.
*   **Responsive Excellence**: Leveraged Tailwind's utility-first approach to ensure a seamless experience across mobile, tablet, and desktop viewports.

### ⚙️ Milestone 3 - Core Features & Interactivity
Enhanced the application with professional-grade features for discovering and organizing content.
*   **Advanced Searching**: Implemented a real-time keyword search bar using the `.filter()` higher-order function to scan movie titles across the dataset.
*   **Smart Filtering**: Developed a genre-based filtering system using `.filter()` to narrow down movies by specific categories (e.g., Action, Animation).
*   **Precision Sorting**: Integrated sorting logic using the `.sort()` HOF, allowing users to arrange data by **Highest Rating**, **Release Date**, or **Alphabetical Order**.
*   **Premium Theme Toggle**: Created a theme switcher that transitions between a deep indigo "NightWatch" dark mode and a clean, accessible light mode.
*   **Interactivity**: Added interactive elements like hover scale effects and a functional "View Details" action on every movie card.

---

## 🧠 Real-Time Web Search & Data Handling

### 1. The Service Layer
I handle API communication in `tmdb.js`. This centralizes the `fetch` logic, endpoint management, and error handling. It ensures that the application remains robust even if the API structure changes.

```javascript
// Example of fetching movies with error handling
export const fetchPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    if (!response.ok) throw new Error('API Sync Failed');
    const data = await response.json();
    return data.results.map(movie => ({ ... })); // Transform for UI
};
```

### 2. State & Higher-Order Functions (HOFs)
To ensure high performance and clean code, **I do not use traditional for/while loops**. Instead, I use React's `useMemo` combined with Array HOFs to derive the visible movie list based on user input.

*   **Searching**: `movies.filter(m => m.title.includes(searchTerm))`
*   **Filtering**: `movies.filter(m => m.genreIds.includes(selectedGenre))`
*   **Sorting**: `result.sort((a, b) => b.rating - a.rating)`
*   **Rendering**: `processedMovies.map(movie => <MovieCard />)`

This approach ensures that every time the user types a letter or changes a filter, the UI updates instantly with the most relevant data.

---

## 🛠️ Tech Stack & Styling
*   **UI Core**: React.js 18+ (Hooks: `useState`, `useEffect`, `useMemo`)
*   **Build Tool**: Vite (for lightning-fast HMR)
*   **Styling**: Tailwind CSS + Custom Vanilla CSS Utilities
*   **Design Tokens**:
    *   **Glassmorphism**: Backdrop blur (12px-16px) with translucent borders.
    *   **Typography**: Google Font **Inter** for professional readability.
    *   **Color Palette**: Slate 900 to Indigo 500 gradient transitions.

---

## 🚀 Getting Started

1.  **Clone the repository**
2.  **Install dependencies**: `npm install`
3.  **Launch Dev Server**: `npm run dev`
4.  **API Key**: The application is pre-configured with a valid TMDB key for demonstration.

---

## 📅 Roadmap
- [x] Milestone 2: API Integration & Dynamic UI
- [x] Milestone 3: Search, Filter, Sort & Theme Toggle
- [ ] Milestone 4: Persistence (Watchlist & LocalStorage)
- [ ] Milestone 5: Detailed Movie Modals

---

## 🙌 Acknowledgements
*   **TMDB API** for the extensive movie database.
*   **Google Deepmind** for the agentic design inspiration.
