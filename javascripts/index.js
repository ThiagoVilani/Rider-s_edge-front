if(localStorage.getItem("username") !== null ||
   localStorage.getItem("username") === ""){
    window.location.href = "../html/productos-listados.html";
}


document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    if (this.checkValidity()) {
        const username = document.getElementById('input').value;

        localStorage.setItem('username', username);

        window.location.href = "../html/productos-listados.html";
    } else {
        this.reportValidity(); 
    }
});

