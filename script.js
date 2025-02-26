document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menuToggle");
    const closeMenu = document.getElementById("closeMenu");
    const sideMenu = document.getElementById("sideMenu");
    const menuLinks = document.querySelectorAll(".side-menu a");
    const contentContainer = document.createElement("div");

    // Creazione della finestra modale
    contentContainer.id = "contentContainer";
    contentContainer.style.position = "fixed";
    contentContainer.style.top = "50%";
    contentContainer.style.left = "50%";
    contentContainer.style.transform = "translate(-50%, -50%)";
    contentContainer.style.width = "80%";
    contentContainer.style.maxWidth = "600px";
    contentContainer.style.background = "rgba(0, 47, 94, 0.95)";
    contentContainer.style.color = "white";
    contentContainer.style.padding = "20px";
    contentContainer.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.5)";
    contentContainer.style.borderRadius = "10px";
    contentContainer.style.textAlign = "center";
    contentContainer.style.display = "none";
    contentContainer.style.zIndex = "1002";

    document.body.appendChild(contentContainer);

    menuToggle.addEventListener("click", function() {
        sideMenu.classList.add("open");
    });

    closeMenu.addEventListener("click", function() {
        sideMenu.classList.remove("open");
    });

    // Chiudi il menu se si clicca fuori
    document.addEventListener("click", function(event) {
        if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target) && event.target !== contentContainer) {
            sideMenu.classList.remove("open");
            contentContainer.style.display = "none";
        }
    });

    // Gestisci il click sui link del menu
    menuLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Evita il comportamento predefinito
            const sectionName = this.getAttribute("href").substring(1);
            showContent(sectionName);
            sideMenu.classList.remove("open");
        });
    });

    function showContent(section) {
        let content = "";
        switch(section) {
            case "progetti":
                content = "<h2>Projects</h2><p>Details about our projects.</p>";
                break;
            case "eventi":
                content = "<h2>Events</h2><p>Upcoming events and past highlights.</p>";
                break;
            case "risorse":
                content = "<h2>Sources</h2><p>Useful resources and references.</p>";
                break;
                case "contatti":
                    content = `
                        <h2>Get in touch</h2>
                        <div class="team-container">
                            <div class="team-member">
                                <img src="img/member1.jpg" alt="Member 1">
                                <h3>Asiel Velasco</h3>
                                <p>BSc. Mechanical Engineering</p>
                                <a href="mailto:asielvs28@gmail.com">asielvs28@gmail.com</a>
                            </div>
                            <div class="team-member">
                                <img src="img/member2.jpg" alt="Member 2">
                                <h3>Andrea Veltri</h3>
                                <p>BSc. Mechanical Engineering</p>
                                <a href="mailto:andreaveltri60@gmail.com">andreaveltri60@gmail.com</a>
                            </div>
                            <div class="team-member">
                                <img src="img/member3.jpg" alt="Member 3">
                                <h3>Jonathan Caro</h3>
                                <p>BSc. Mechanical Engineering</p>
                                <a href="mailto:jonathancarogonzalez5@gmail.com">jonathancarogonzalez5@gmail.com</a>
                            </div>
                            <div class="team-member">
                                <img src="img/member4.jpg" alt="Member 4">
                                <h3>Luis Tey</h3>
                                <p>MSc. Mechanical Engineering</p>
                                <a href="mailto:alextey987@gmail.com">alextey987@gmail.com</a>
                            </div>
                            <div class="team-member">
                                <img src="https://raw.githubusercontent.com/MarcosDanielJ/Guajiros-di-Calabria/refs/heads/main/IMG_0094.jpg" alt="Member 5">
                                <h3>Marcos Jimenez</h3>
                                <p>BSc. Electronic Engineering</p>
                                <a href="mailto:marcosdaniel20cu@gmail.com">marocsdaniel20cu@gmail.com</a>
                            </div>
                        </div>
                    `;
                    break;
                default:
                    content = "<h2>Section not found</h2>";
            }
        contentContainer.innerHTML = content + '<br><button id="closeContent">Close</button>';
        contentContainer.style.display = "block";

        document.getElementById("closeContent").addEventListener("click", function() {
            contentContainer.style.display = "none";
        });
    }
});
