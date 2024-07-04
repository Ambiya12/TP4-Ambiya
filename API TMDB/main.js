document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('searchInput').value;
    searchMovies(query);
});

async function searchMovies(query) {
    const apiKey = 'a84a6add061bcfc8b66fabbc0cb1e6f3';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayResults(data.results);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayResults(movies) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (movies.length === 0) {
        resultsDiv.innerHTML = '<p>No results found.</p>';
        return;
    }

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
            <div class="movie-info">
                <h2>${movie.title}</h2>
                <p>${movie.overview}</p>
            </div>
        `;
        resultsDiv.appendChild(movieElement);
    });
}
