let npm = document.getElementById("npm");
let nama = document.getElementById("nama");
let image = document.getElementById("image");

function simpan() {
    console.log(npm.value)
    console.log(nama.value)

    // localStorage.setItem("npm", npm.value)
    // localStorage.setItem("nama", nama.value)

    //jika local sotrage belum ada isi
    if (localStorage.getItem("mahasiswa") === null) {
        //simpan array kosong[]
        localStorage.setItem("mahasiswa", "[]")
    }

    //panggil local sotrage (konversi string => object)
    let data = JSON.parse(localStorage.getItem("mahasiswa"))
    console.log(data)

    //simpan value npm dan nama ke dalam object data
    data.push({
        npm: npm.value,
        nama: nama.value,
        image: image.value
    })
    console.log(data)

    //simpan data terbaru ke dalam local storage 
    // konversi dari object menjadi string
    localStorage.setItem("mahasiswa", JSON.stringify(data))

    //panggil tampil()
    tampil()
}

function tampil(){
     //panggil dulu local storage nya
    let hasil = JSON.parse(localStorage.getItem("mahasiswa"))
    // clear element ul id = list-mhs
    document.getElementById("list-mhs").innerHTML = ""
    //lakukan perulangan (foreach)
    hasil.forEach(element => {
        document.getElementById("list-mhs").innerHTML += `
        <div class="col-lg-4 col-md-6 mb-3">
            <div class="card p-2">
                <img src="${element.image}" class="card-img-top" object-fit:contain style="height:200px;">
                <div class="card-body">
                    <h4 class="text-primary">${element.npm}</h4>
                    <h6 class="text-danger">${element.nama}</h6>
                </div>
            </div>
        </div>`
    });
}

//jalankan function tampil
tampil()



