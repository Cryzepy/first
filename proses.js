function hitung() {
    var totalmatchnow = document.getElementById("totalmatchnow").value;
    var wrwinasli = document.getElementById("wrwinasli").value;
    var wrwiningin = document.getElementById("wrwiningin").value;

    var wrloseingin = 100-wrwiningin;
    var wrloseasli = (100-wrwinasli)/100;
    var totalloseasli = totalmatchnow*wrloseasli;
    var persatu = totalloseasli/wrloseingin;
    var totalwiningin = persatu*wrwiningin;
    var totalmatchingin = totalwiningin + totalloseasli;
    var hasil = totalmatchingin-totalmatchnow;
    var hasilbulat = Math.ceil(hasil);

    if ((totalmatchnow == "") || (wrwinasli == "") || (wrwiningin == "")) {
        keluaran = "Masukkan Nilai Terlebih Dahulu";
    } else if (wrwinasli == wrwiningin) {
        keluaran = "Winrate Kamu Sudah Tercapai";
    } else if (wrwinasli >= wrwiningin) {
        keluaran = "Winrate Kamu Sudah Melebihi Winrate Yang Diinginkan";
    } else if (wrwinasli <= wrwiningin) {
        keluaran = "Kamu Membutuhkan Sekitar "+hasilbulat+" Kali Menang Tanpa Kalah</br> Untuk Mencapai "+wrwiningin+"% Win Rate";
    }


    document.getElementById("display").innerHTML = keluaran;
}