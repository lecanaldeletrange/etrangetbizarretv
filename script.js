window.addEventListener('load', function() {
    const grille = document.getElementById('video-grid');
    
    if (typeof videos !== 'undefined') {
        grille.innerHTML = ""; 

        // CONFIGURATION DE LA GRILLE
        grille.style.display = "grid";
        // On crée autant de colonnes de 250px que possible
        grille.style.gridTemplateColumns = "repeat(auto-fill, 250px)"; 
        grille.style.gap = "25px";             // Espace entre les cases
        grille.style.justifyContent = "center"; // CENTRE les colonnes horizontalement
        grille.style.width = "95%";            // Utilise presque toute la largeur
        grille.style.margin = "20px auto";     // Centre le bloc complet dans la page
        grille.style.padding = "20px";

        videos.forEach(film => {
            grille.innerHTML += `
                <div style="background: #1a1a1a; border: 1px solid #333; border-radius: 10px; padding: 15px; text-align: center; transition: 0.3s;">
                    <a href="video.html?id=${film.id}" style="text-decoration: none; color: white; display: block;">
                        <img src="${film.image}" style="width: 100%; height: 330px; object-fit: cover; border-radius: 5px; margin-bottom: 10px;">
                        <h3 style="margin: 10px 0; font-size: 1.1em; height: 2.4em; overflow: hidden; line-height: 1.2;">${film.titre}</h3>
                        <p style="font-size: 0.85em; color: #bbb; margin-bottom: 15px; height: 3em; overflow: hidden;">${film.resume || ''}</p>
                        <span style="background: #e50914; color: white; padding: 8px 15px; border-radius: 4px; font-weight: bold; display: inline-block;">VOIR LE FILM</span>
                    </a>
                </div>
            `;
        });
    }
});
