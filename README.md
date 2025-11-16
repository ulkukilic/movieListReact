# Movie List React

A modern movie search and watchlist application built with React and Vite, integrated with The Movie Database (TMDB) API.

## 🎬 Features

- **Movie Search**: Search for movies using TMDB API
- **Watchlist Management**: Add and remove movies from your personal watchlist
- **Responsive Design**: Built with Bootstrap 5 for a seamless experience across devices
- **Modern UI**: Clean and intuitive user interface with Bootstrap Icons

## 🚀 Technologies

- **React 19** - JavaScript library for building user interfaces
- **Vite** - Next generation frontend tooling
- **Bootstrap 5.3** - CSS framework for responsive design
- **Bootstrap Icons** - Icon library
- **TMDB API** - The Movie Database API for movie data

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/ulkuk/movieListReact.git
cd movieListReact
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
movie_list/
├── public/
│   └── img/          # Movie images
├── src/
│   ├── components/   # React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Logo.jsx
│   │   ├── SearchForm.jsx
│   │   ├── MovieList.jsx
│   │   ├── Movie.jsx
│   │   ├── WatchList.jsx
│   │   ├── WatchListButton.jsx
│   │   └── WatchListMovie.jsx
│   ├── App.jsx       # Main application component
│   ├── main.jsx      # Application entry point
│   ├── data.js       # Sample movie data
│   └── index.css     # Global styles
└── package.json
```

## 🎯 Key Components

- **Header**: Navigation bar with logo, search form, and watchlist button
- **SearchForm**: Search input for finding movies
- **MovieList**: Display grid of movie search results
- **WatchList**: Sidebar showing user's saved movies
- **WatchListButton**: Toggle button for watchlist visibility

## 🔑 API Configuration

The app uses TMDB API. The API key is configured in `App.jsx`. For production use, consider moving it to environment variables.

## 📝 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

Created with ❤️ by ulkuk
