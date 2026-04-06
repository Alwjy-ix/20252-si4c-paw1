// simpan ke local storage
localStorage.setItem("npm", 123);

//baca data local storage
// tampilkan di console
console.log(localStorage.getItem("npm"))

//tampilkan di paragaf id=npm
document.getElementById("npm").innerHTML= localStorage.getItem("npm")