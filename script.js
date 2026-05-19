// Movie data
const movies = [
    {
        id: 1,
        title: "Inception",
        genre: "sci-fi",
        year: 2010,
        rating: 4.8,
        description: "En tjuv som stjal foretagshemligheter genom dromdelning far i uppdrag att plantera en ide i nagon annans undermedvetna.",
        image: "https://picsum.photos/seed/inception/400/300"
    },
    {
        id: 2,
        title: "The Dark Knight",
        genre: "action",
        year: 2008,
        rating: 4.9,
        description: "Batman maste acceptera en av de storsta psykologiska och fysiska testerna i kampen mot Jokern som sprider kaos i Gotham.",
        image: "https://picsum.photos/seed/darkknight/400/300"
    },
    {
        id: 3,
        title: "Parasite",
        genre: "thriller",
        year: 2019,
        rating: 4.7,
        description: "En fattig familj lurar sig in i en rik familjs hem. En mork och oforutsagbar historia om klassklyftor i Sydkorea.",
        image: "https://picsum.photos/seed/parasite/400/300"
    },
    {
        id: 4,
        title: "Interstellar",
        genre: "sci-fi",
        year: 2014,
        rating: 4.7,
        description: "En grupp utforskare reser genom ett maskhol i rymden for att sakerstalla mansklighetens overlevnad.",
        image: "https://picsum.photos/seed/interstellar/400/300"
    },
    {
        id: 5,
        title: "The Shawshank Redemption",
        genre: "drama",
        year: 1994,
        rating: 5.0,
        description: "Tva fangade man knyter band under ett antal ar och finner troost och slutligen frigorelse genom medmansklig anstandighet.",
        image: "https://picsum.photos/seed/shawshank/400/300"
    },
    {
        id: 6,
        title: "Superbad",
        genre: "komedi",
        year: 2007,
        rating: 4.0,
        description: "Tva oskiljakliga basta vanner gor planer for att deras sista high school-fest ska bli oforglomlig.",
        image: "https://picsum.photos/seed/superbad/400/300"
    },
    {
        id: 7,
        title: "Mad Max: Fury Road",
        genre: "action",
        year: 2015,
        rating: 4.6,
        description: "I en postapokalyptisk ooken jagar en tyrann en rebellisk kvinna och Max som soker frihet over de karga landen.",
        image: "https://picsum.photos/seed/madmax/400/300"
    },
    {
        id: 8,
        title: "Forrest Gump",
        genre: "drama",
        year: 1994,
        rating: 4.8,
        description: "Berattelsen om Forrest Gump som oavsiktligt paverkar flera historiska handelser i USA under 1900-talet.",
        image: "https://picsum.photos/seed/forrest/400/300"
    },
    {
        id: 9,
        title: "The Grand Budapest Hotel",
        genre: "komedi",
        year: 2014,
        rating: 4.3,
        description: "En legendarisk hotellportier och hans unga protege hamnar i ett aventyr med stold av en ovarderlig malning.",
        image: "https://picsum.photos/seed/budapest/400/300"
    },
    {
        id: 10,
        title: "Blade Runner 2049",
        genre: "sci-fi",
        year: 2017,
        rating: 4.5,
        description: "En ny blade runner avsloojar en hemlighet som hotar att kasta samhallet i kaos och leder honom till att soka den forsvunna Rick Deckard.",
        image: "https://picsum.photos/seed/bladerunner/400/300"
    },
    {
        id: 11,
        title: "Indiana Jones",
        genre: "aventyr",
        year: 1981,
        rating: 4.7,
        description: "Arkeologen Indiana Jones ger sig ut pa ett aventyr for att hitta Forbundsarken innan nazisterna gor det.",
        image: "https://picsum.photos/seed/indiana/400/300"
    },
    {
        id: 12,
        title: "Se7en",
        genre: "thriller",
        year: 1995,
        rating: 4.6,
        description: "Tva detektiver jagar en seriemordare som anvander de sju dodssynderna som motiv for sina fruktansvarda brott.",
        image: "https://picsum.photos/seed/seven/400/300"
    },
    {
        id: 13,
        title: "The Lord of the Rings",
        genre: "aventyr",
        year: 2001,
        rating: 4.9,
        description: "En hobbit och hans vanner ger sig ut pa en episk resa for att forstora den Ena Ringen och besegra den morke harskaren Sauron.",
        image: "https://picsum.photos/seed/lotr/400/300"
    },
    {
        id: 14,
        title: "Whiplash",
        genre: "drama",
        year: 2014,
        rating: 4.7,
        description: "En ung trummis soker perfektion till varje pris under ledning av en brutal och hamndlysten instruktor.",
        image: "https://picsum.photos/seed/whiplash/400/300"
    },
    {
        id: 15,
        title: "John Wick",
        genre: "action",
        year: 2014,
        rating: 4.4,
        description: "En pensionerad loejemodare tvingas tillbaka till sitt gamla liv nar man staal hans bil och doodar hans hund.",
        image: "https://picsum.photos/seed/johnwick/400/300"
    }
];

// Generate star rating HTML
function getStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    let stars = '';
    for (let i = 0; i < fullStars; i++) {
        stars += '\u2605';
    }
    if (hasHalf) {
        stars += '\u2606';
    }
    return stars;
}

// Create movie card HTML
function createMovieCard(movie) {
    const liked = getLikedMovies().includes(movie.id);
    return `
        <article class="movie-card" data-genre="${movie.genre}" data-id="${movie.id}">
            <div class="movie-card-image">
                <img src="${movie.image}" alt="${movie.title}" loading="lazy">
                <span class="movie-card-genre">${movie.genre}</span>
            </div>
            <div class="movie-card-body">
                <h3 class="movie-card-title">${movie.title}</h3>
                <div class="movie-card-rating">
                    <span class="stars">${getStars(movie.rating)}</span>
                    <span class="rating-number">${movie.rating}/5</span>
                </div>
                <p class="movie-card-description">${movie.description}</p>
                <div class="movie-card-footer">
                    <button class="like-btn ${liked ? 'liked' : ''}" data-id="${movie.id}">
                        <span class="heart">${liked ? '\u2764' : '\u2661'}</span>
                        <span class="like-text">${liked ? 'Gillad' : 'Gilla'}</span>
                    </button>
                    <span class="movie-card-year">${movie.year}</span>
                </div>
            </div>
        </article>
    `;
}

// Create featured card HTML
function createFeaturedCard(movie) {
    return `
        <div class="featured-card">
            <div class="featured-card-image">
                <img src="${movie.image}" alt="${movie.title}" loading="lazy">
            </div>
            <div class="featured-card-body">
                <h3 class="featured-card-title">${movie.title}</h3>
                <span class="featured-card-genre">${movie.genre} \u2022 ${movie.year}</span>
            </div>
        </div>
    `;
}

// Get liked movies from localStorage
function getLikedMovies() {
    const stored = localStorage.getItem('likedMovies');
    return stored ? JSON.parse(stored) : [];
}

// Save liked movies to localStorage
function saveLikedMovies(likedIds) {
    localStorage.setItem('likedMovies', JSON.stringify(likedIds));
}

// Toggle like for a movie
function toggleLike(movieId) {
    const liked = getLikedMovies();
    const index = liked.indexOf(movieId);
    if (index > -1) {
        liked.splice(index, 1);
    } else {
        liked.push(movieId);
    }
    saveLikedMovies(liked);
    return index === -1;
}

// Render movies to the grid
function renderMovies(moviesToRender) {
    const grid = document.getElementById('movies-grid');
    grid.innerHTML = moviesToRender.map(createMovieCard).join('');
    attachLikeListeners();
}

// Render featured movies
function renderFeatured() {
    const scroll = document.getElementById('featured-scroll');
    const topRated = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 8);
    scroll.innerHTML = topRated.map(createFeaturedCard).join('');
}

// Attach like button event listeners
function attachLikeListeners() {
    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const movieId = parseInt(this.dataset.id);
            const isNowLiked = toggleLike(movieId);
            this.classList.toggle('liked', isNowLiked);
            this.querySelector('.heart').textContent = isNowLiked ? '\u2764' : '\u2661';
            this.querySelector('.like-text').textContent = isNowLiked ? 'Gillad' : 'Gilla';
        });
    });
}

// Filter movies by genre
function filterMovies(genre) {
    if (genre === 'alla') {
        renderMovies(movies);
    } else {
        const filtered = movies.filter(m => m.genre === genre);
        renderMovies(filtered);
    }
}

// Attach filter button listeners
function attachFilterListeners() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const genre = this.dataset.genre;
            filterMovies(genre);
        });
    });
}

// Header scroll effect
function initHeaderScroll() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(13, 17, 23, 0.95)';
        } else {
            header.style.background = 'rgba(13, 17, 23, 0.85)';
        }
    });
}

// Intersection Observer for scroll animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.movie-card').forEach(card => {
        card.style.animationPlayState = 'paused';
        observer.observe(card);
    });
}

// Initialize the app
function init() {
    renderMovies(movies);
    renderFeatured();
    attachFilterListeners();
    initHeaderScroll();

    // Delay scroll animations init to allow DOM rendering
    setTimeout(initScrollAnimations, 100);
}

// Start when DOM is ready
document.addEventListener('DOMContentLoaded', init);
