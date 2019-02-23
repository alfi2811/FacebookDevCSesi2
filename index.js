function tambah() {
    var j = document.getElementById('angka1').value
    var g = document.getElementById('angka2').value
    var hasill = Number(j) + Number(g)
    document.getElementById('hasil').innerHTML = "Hasil " + j + " + " + g + " = " + hasill
}

function kurang() {
    var j = document.getElementById('angka1').value
    var g = document.getElementById('angka2').value
    var hasill = Number(j) - Number(g)
    document.getElementById('hasil').innerHTML = "Hasil " + j + " - " + g + " = " + hasill
}

function kali() {
    var j = document.getElementById('angka1').value
    var g = document.getElementById('angka2').value
    var hasill = Number(j) * Number(g)
    document.getElementById('hasil').innerHTML = "Hasil " + j + " X " + g + " = " + hasill
}

function bagi() {
    var j = document.getElementById('angka1').value
    var g = document.getElementById('angka2').value
    var hasill = Number(j) / Number(g)
    document.getElementById('hasil').innerHTML = "Hasil " + j + " : " + g + " = " + hasill
}