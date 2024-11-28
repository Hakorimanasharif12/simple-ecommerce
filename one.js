function changeLanguage() {
    const languageSelect = document.getElementById("language");
    const selectedLanguage = languageSelect.value;

    // Here you can implement the logic to change the website language
    // For demonstration, we'll just alert the selected language
    alert("Language changed to: " + selectedLanguage);
}
function searchFunction() {
    const query = document.getElementById("searchInput").value;
    
    if (query) {
        alert("You searched for: " + query);
        // Implement your search logic here
    } else {
        alert("Please enter something to search!");
    }
}
// Pre-translated content in different languages
const translations = {
    en: {
        title: "Welcome to Our Website",
        description: "This is a sample website demonstrating language selection.",
        learnMore: "Learn More"
    },
    fr: {
        title: "Bienvenue sur notre site Web",
        description: "Ceci est un site Web d'exemple démontrant la sélection de la langue.",
        learnMore: "En savoir plus"
    },
    es: {
        title: "Bienvenido a nuestro sitio web",
        description: "Este es un sitio web de ejemplo que demuestra la selección de idioma.",
        learnMore: "Aprende más"
    },
    rw: {
        title: "Murakaza neza ku rubuga rwacu",
        description: "Iyi ni urubuga rugaragaza guhitamo ururimi.",
        learnMore: "Menya byinshi"
    }
};

// Function to change language dynamically
function changeLanguage() {
    const selectedLanguage = document.getElementById("languageSelect").value;
    const translation = translations[selectedLanguage];

    // Update content dynamically with selected language
    document.getElementById("title").innerText = translation.title;
    document.getElementById("description").innerText = translation.description;
    document.getElementById("learnMore").innerText = translation.learnMore;
}
joi3425
