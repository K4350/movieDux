# 🎬 **MovieDux — React Movie Explorer App**

MovieDux is a React-based movie browsing application where users can:

* ✅ Explore movies
* ✅ Filter by genre & rating
* ✅ Search by title
* ✅ View detailed movie pages
* ✅ Add/remove movies from a Watchlist
* ✅ Navigate through pages with React Router
* ✅ Fetch movie data from an external API
* ✅ Enjoy a clean, modern UI
* ✅ View the live site hosted on Firebase

---

## 🚀 **Live Demo**

🔗 **[https://moviedux-43.web.app](https://moviedux-43.web.app)**

---

## 🧠 **Features**

### 📌 **1. Movie List Page**

* Displays a grid of movies
* Fetches data from JSONBin API
* Includes:

  * Search bar
  * Genre filter
  * Rating filter
  * Watchlist toggle

### ⭐ **2. Watchlist**

* Users can store movies in their Watchlist
* Toggle watchlist from Home page or Details page
* Shows message/image if Watchlist is empty

### 🎥 **3. Movie Details Page**

* Dynamic route: `/movie/:id`
* Shows poster, rating, genre, and description
* Automatically loads correct movie based on URL

### 🌐 **4. React Router**

Routes:

* `/` → Movie Grid
* `/watchlist` → Watchlist Page
* `/movie/:id` → Movie Details

### ☁️ **5. Hosted Online (Firebase Hosting)**

* Project built with `npm run build`
* Deployed using `firebase deploy`

---

## 🛠 **Tech Stack**

| Technology            | Purpose                |
| --------------------- | ---------------------- |
| **React.js**          | UI and component logic |
| **React Router**      | Page navigation        |
| **CSS**               | Styling                |
| **JSONBin.io API**    | Movie data             |
| **Firebase Hosting**  | Deployment             |
| **JavaScript (ES6+)** | Language               |

---

## 📁 **Project Structure**

```
/src
  /components
    Header.js
    Footer.js
    MovieCard.js
    MoviesGrid.js
    MovieDetails.js
    Watchlist.js
  App.js
  App.css
  styles.css
/public
  images/
  index.html
```

---

## ⚙️ **Setup & Installation**

### 🔧 Install dependencies:

```bash
npm install
```

### ▶ Run development server:

```bash
npm start
```

### 🏗 Build for production:

```bash
npm run build
```

### ☁️ Deploy to Firebase:

```bash
firebase deploy
```

---

## 🔌 **API**

Movie data is fetched from JSONBin:

```
https://api.jsonbin.io/v3/b/69162d89d0ea881f40e6a7c4
```

---

## 🧩 **Key Code Concepts**

### 🔹 Fetching movies:

```jsx
useEffect(() => {
  fetch("API_URL")
    .then(res => res.json())
    .then(data => setMovies(data.record));
}, []);
```

### 🔹 Watchlist toggle logic:

```jsx
setWatchlist(prev =>
  prev.includes(id)
    ? prev.filter(item => item !== id)
    : [...prev, id]
);
```

### 🔹 Dynamic routing:

```jsx
<Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
```

### 🔹 Reading URL parameters:

```jsx
const { id } = useParams();
```

---

## 👨‍💻 **Author**

**Kaushik Baruah**