document.getElementById("contact").addEventListener("submit", function(event) {
    const name =document.getElementById("Name").value.trim();
    const email =document.getElementById("Email").value.trim();
    const message=document.getElementById("Message").value.trim();

    if (!name || !email || message) {
        alert("Tous les champs sont obligatoires.");
        event.preventDefault();
    }
    else if (!/^\S+@\S+\.\S+$/.test(email))
    {
        alert("Veuillez entrer un email valide.");
        event.preventDefault();
    }
});