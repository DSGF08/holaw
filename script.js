var btnGreet = document.getElementById("btnSaludo");
var txtName = document.getElementById("txtNombre");
var txtGreet = document.getElementById("txtSaludo");

var lista = [
    "Hello",
    "Bonjour",
    "Hallo",
    "k hizo socio",
    "wenas",
    "Aloha",
    "K mas",
]
function Saludar(){
    if (txtName.value == ""){
        alert("Error, Ingresar un nombre.")
        txtGreet.innerHTML=""
}else{
    var nombre = txtName.value
    var numero = Math.floor(Math.random()*lista.length)
    var Saludo = lista [numero] + "," + nombre
    txtGreet.innerHTML = Saludo 
    }
}