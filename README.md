How Data Flows into MovieModal

User clicks a movie card
setShowModal(true) opens modal.
MovieModal movie={movie} passes the movie object.

MovieModal receives movie
Uses movie.id to fetch trailer.
Stores the trailer key in state.

UI updates
If trailer found → plays inside <iframe>.
If not found → shows "No Trailer Available 😔".

Close button
Calls onClose (from parent MovieCard) → hides modal.

👉 So MovieModal is like a popup player that depends on:
movie (data passed from MovieCard)
onClose (function passed from MovieCard)


Where props are passed
To Banner
<Banner movie={NowPlaying[Math.floor(Math.random() * NowPlaying.length)]} />
👉 You are sending 1 random movie object from NowPlaying.

Inside Banner.js, you receive it like this:
const Banner = ({ movie }) => { ... }


To MovieRow
<MovieRow title="Now Playing" movies={NowPlaying} />

👉 You are sending two props:
title → string ("Now Playing")
movies → array of movies (NowPlaying)

Inside MovieRow.js, you receive it like this:
const MovieRow = ({ title, movies }) => { ... }


Inside MovieRow → To MovieCard
{movies?.map((movie) => (
  <MovieCard key={movie.id} movie={movie} />
))}


👉 Each movie object is passed as movie prop to MovieCard.

Inside MovieCard → To MovieModal (on click)
{showModal && (
  <MovieModal movie={movie} onClose={() => setShowModal(false)} />
)}
👉 When clicked, that same movie object is passed into MovieModal.


✅ So, all data is passed down from Browse.js → Banner / MovieRow → MovieCard → MovieModal.
The source of truth is Redux (useSelector).

