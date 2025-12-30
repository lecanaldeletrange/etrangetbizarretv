const grid = document.getElementById('video-grid');

function displayVideos() {
    // On vérifie si la grille existe et si la liste videos est chargée
    if (!grid || typeof videos === 'undefined') return;

    grid.innerHTML = ''; // On nettoie la grille avant d'afficher

    videos.forEach(film => {
        // Création de la carte du film
        const card = document.createElement('div');
        card.classList.add('movie-card'); // Assure-toi que ce nom correspond à ton CSS

        card.innerHTML = `
            <a href="video.html?id=${film.id}" style="text-decoration: none; color: inherit;">
                <div class="vhs-case">
                    <img src="${film.image}" alt="${film.titre}" onerror="this.src='https://via.placeholder.com/200x300?text=Image+Introuvable'">
                    <div class="vhs-info">
                        <h3>${film.titre}</h3>
                    </div>
                </div>
            </a>
        `;
        grid.appendChild(card);
    });
}

// On lance la fonction
displayVideos();
