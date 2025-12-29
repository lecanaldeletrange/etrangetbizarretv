window.onload = function() {
    const grille = document.getElementById('video-grid');
    
    if (typeof videos !== 'undefined') {
        grille.innerHTML = ""; 

        videos.forEach(film => {
            grille.innerHTML += `
                <div class="video-card">
                    <a href="video.html?id=${film.id}">
                        <img src="${film.image}" alt="${film.titre}">
                        <div class="video-info">
                            <h3>${film.titre}</h3>
                            <p>${film.resume}</p>
                        </div>
                    </a>
                </div>
            `;
        });
    }
};
