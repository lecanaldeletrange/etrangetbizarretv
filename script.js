window.onload = function() {
    const grille = document.getElementById('video-grid');
    
    if (typeof videos !== 'undefined') {
        grille.innerHTML = ""; // On vide la grille

        videos.forEach(film => {
            // Ici, on utilise EXACTEMENT la structure simple 
            // qui marche avec ton fichier style.css
            grille.innerHTML += `
                <div class="video">
                    <a href="video.html?id=${film.id}">
                        <img src="${film.image}" alt="${film.titre}">
                        <h3>${film.titre}</h3>
                    </a>
                </div>
            `;
        });
    }
};
