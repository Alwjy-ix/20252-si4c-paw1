//alert("Belajar javascript");


function kirim(){
    //ambil value dari nama
    let nama = document.getElementById("nama").value;
    console.log("Nama : "+nama);
    let saran = document.getElementById("saran").value;
    console.log("Saran : "+saran);

    //tampilkan nama ke ul id list pesan
    document.getElementById("list-pesan").innerHTML += "<tr><td>"+nama+"</td><td>"+saran+"</td></tr>";
}