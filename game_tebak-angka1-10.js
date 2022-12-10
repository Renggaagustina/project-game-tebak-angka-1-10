alert("selamat datang di game tebak angka");
var lagi = true;
while (lagi) {
  //menangkap pilihan komputer
  //dan membangkitkan bilangan random yang dibulatkan kebawah 1-10
  var komputer = Math.floor(Math.random() * 10) + 1;

  for (var kesempatan = 3; kesempatan >= 1; kesempatan--) {
    //menangkap pilihan player
    var player = parseInt(prompt("masukkan tebakan 1-10"));

    //keputusan/rules
    if (player == komputer) {
      alert("tebakan mu " + player + "benar \ntebakan komputer " + komputer);
      break;
    } else if (player !== komputer && kesempatan == 3) {
      alert("tebakan mu salah kamu masih memiliki 2 kesempatan");
    } else if (komputer !== player && kesempatan == 2) {
      alert("tebakan mu salah kamu masih memiliki 1 kesempatan");
    } else if (kesempatan == 1) {
      alert("kesempatan mu habis kamu kalah");
    } else {
      alert("kamu tidak menebak angka");
    }
  }

  lagi = confirm("mau coba lagi");
}

alert("terima kasih");

//objek math pada project ini digunakan untuk melakukan perhitungan matematika
//dan floor untuk membulatkan bilangan kebawah dan random untuk menghasilkan bilangan acak dari 0-1
