document.addEventListener("DOMContentLoaded", () => {
    // 1. Sélection des éléments du formulaire
    const form = document.querySelector("form");
    const passwordInput = document.querySelector("input[placeholder='Password']");
    const confirmInput = document.querySelector("input[placeholder='Confirm Password']");
    const inputGroups = document.querySelectorAll(".input-group");

    // 2. Animation dynamique au focus (optionnelle mais très pro)
    // Ajoute une ombre lumineuse sur tout le bloc quand on clique dans l'input
    inputGroups.forEach(group => {
        const input = group.querySelector("input");
        
        input.addEventListener("focus", () => {
            group.style.boxShadow = "0 0 10px rgba(166, 60, 201, 0.5)";
            group.style.borderColor = "#a63cc9";
        });
        
        input.addEventListener("blur", () => {
            group.style.boxShadow = "none";
            group.style.borderColor = "transparent";
        });
    });

    // 3. Validation de la confirmation du mot de passe
    function validatePasswords() {
        if (confirmInput.value === "") {
            confirmInput.parentElement.style.background = "#4c126b"; // Couleur normale
            return;
        }

        if (passwordInput.value === confirmInput.value) {
            // Si c'est identique : le fond devient légèrement vert discret
            confirmInput.parentElement.style.background = "#1b4d3e";
        } else {
            // Si c'est différent : le fond devient rouge bordeaux discret
            confirmInput.parentElement.style.background = "#6b1226";
        }
    }

    // On écoute ce que l'utilisateur écrit dans les deux champs de mot de passe
    passwordInput.addEventListener("input", validatePasswords);
    confirmInput.addEventListener("input", validatePasswords);

    // 4. Gestion de la soumission du formulaire
    form.addEventListener("submit", (e) => {
        // Bloque le rechargement de la page par défaut pour faire nos vérifications
        e.preventDefault(); 

        // Double vérification des mots de passe
        if (passwordInput.value !== confirmInput.value) {
            alert("Les mots de passe ne correspondent pas !");
            return;
        }

        // Si tout est bon, on simule une inscription réussie
        const registerCard = document.querySelector(".register-card");
        
        // Petit effet d'animation de sortie
        registerCard.style.transition = "all 0.5s ease";
        registerCard.style.opacity = "0";
        registerCard.style.transform = "scale(0.9)";

        setTimeout(() => {
            // Remplace le contenu par un message de succès
            registerCard.innerHTML = `
                <div style="padding: 40px 0;">
                    <i class="fa-solid fa-circle-check" style="color: #a63cc9; font-size: 60px; margin-bottom: 20px;"></i>
                    <h2 style="margin: 10px 0;">Account Created!</h2>
                    <p style="color: #cca3e3; font-family: sans-serif; font-size: 14px;">Welcome on board. Please check your email to verify your account.</p>
                </div>
            `;
            registerCard.style.opacity = "1";
            registerCard.style.transform = "scale(1)";
        }, 500);
    });
});