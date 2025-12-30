const grid = document.getElementById('video-grid');

function displayVideos() {
    // Sécurité si la grille ou les données manquent
    if (!grid || typeof videos === 'undefined') return;

    grid.innerHTML = ''; 

    videos.forEach(film => {
        const card = document.createElement('div');
        card.innerHTML = `
            <a href="video.html?id=${film.id}" style="text-decoration: none; color: inherit;">
                <div class="vhs-box">
                    <img src="images/vhs-texture.png" class="vhs-tranche-img">
                    
                    <img src="${film.image}" class="vhs-poster">
                    
                    <span class="vhs-title">${film.titre}</span>
                </div>
            </a>
        `;
        grid.appendChild(card);
    });
}

// Lancement automatique
displayVideos();
