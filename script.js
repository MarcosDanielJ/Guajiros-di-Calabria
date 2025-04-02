document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menuToggle");
    const closeMenu = document.getElementById("closeMenu");
    const sideMenu = document.getElementById("sideMenu");
    const menuLinks = document.querySelectorAll(".side-menu a");
    const contentContainer = document.createElement("div");

    // Create the modal container
    contentContainer.id = "contentContainer";
    contentContainer.style.position = "fixed";
    contentContainer.style.top = "50%";
    contentContainer.style.left = "50%";
    contentContainer.style.transform = "translate(-50%, -50%)";
    contentContainer.style.width = "90%"; // Adjust to screen width
    contentContainer.style.maxWidth = "900px"; // Larger for content
    contentContainer.style.height = "auto"; // Allows the window to grow without fixed limits
    contentContainer.style.maxHeight = "90vh"; // Prevents vertical overflow
    contentContainer.style.overflowY = "auto"; // Enables scrolling if needed
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

    // Close menu if clicked outside
    document.addEventListener("click", function(event) {
        if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target) && event.target !== contentContainer) {
            sideMenu.classList.remove("open");
            contentContainer.style.display = "none";
        }
    });

    // Handle click on menu links
    menuLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default behavior
            const sectionName = this.getAttribute("href").substring(1);
            showContent(sectionName);
            sideMenu.classList.remove("open");
        });
    });

    function showContent(section) {
        let content = "";
        switch(section) {
            case "projects":
                content = `
                    <h2>Projects</h2>
                    <p>Here are some of the projects we've been working on:</p>
                    <div class="project-video">
                        <h3>ASRW First Launch March, 21</h3>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/_HT3HqNchnY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="project-video">
                        
                    <p>More projects coming soon...</p>
                `;
                break;
            case "events":
                content = "<h2>Events</h2><p>Upcoming events and past highlights.</p>";
                break;
                case "sources":
    content = "<h2>Sources</h2><p>Useful resources and references.</p>";
    content += "<p><a href='path/to/your/file.pdf' 
    break;

           case "sources":
                content = "<h2>Sources</h2><p>Useful resources and references.</p>";
                content += "<p><a href='Airbus_Sloshing_Rocket_Workshop.pdf' target='_blank' style='color: #ff6600;'>Download the PDF of our preliminary report for the ASWR 2025!</a></p>";
                break;
            case "contacts":
                content = `
                    <h2>Get in touch</h2>
                    <div class="team-container">
                        <div class="team-member">
                            <img src="img/member1.jpg" alt="Member 1">
                            <h3>Asiel Velasco</h3>
                            <p>BEng. Mechanical Engineering</p>
                            <a href="mailto:email1@example.com">email1@example.com</a>
                        </div>
                        <div class="team-member">
                                <img src="img/member2.jpg" alt="Member 2">
                                <h3>Andrea Veltri</h3>
                                <p>BEng. Mechanical Engineering</p>
                                <a href="mailto:email2@example.com">email2@example.com</a>
                            </div>
                            <div class="team-member">
                                <img src="img/member3.jpg" alt="Member 3">
                                <h3>Jonathan Caro</h3>
                                <p>BEng. Mechanical Engineering</p>
                                <a href="mailto:jonathancarogonzalez5@gmail.com">jonathancarogonzalez5@gmail.com</a>
                            </div>
                            <div class="team-member">
                                <img src="https://raw.githubusercontent.com/MarcosDanielJ/Guajiros-di-Calabria/refs/heads/main/tey.jpg" alt="Member 4">
                                <h3>Luis O. Tey</h3>
                                <p>MEng. Mechanical Engineering</p>
                                <a href="mailto:email4@example.com">email4@example.com</a>
                            </div>
                            <div class="team-member">
                                <img src="https://raw.githubusercontent.com/MarcosDanielJ/Guajiros-di-Calabria/refs/heads/main/IMG_0094.jpg" alt="Member 5">
                                <h3>Marcos D. Jimenez</h3>
                                <p>BEng. Electronic Engineering</p>
                                <a href="mailto:marcosdaniel20cu@gmail.com">marcosdaniel20cu@gmail.com</a>
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
