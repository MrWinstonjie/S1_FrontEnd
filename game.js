// inisialisasi variabel
let cekmenangkalah = true; // pengecekan kalo permainan selesai
let pemain = "X"; // simbol pemain 
let kotakkosong = ["", "", "", "", "", "", "", "", ""]; //kotak-kotak pada papan permainan
const kotak = document.querySelectorAll(".kotak"); // mengambil semua elemen dengan kelas "kotak" di html
const menangkalah = document.getElementById("game-result"); // mendapatkan elemen game-result di html
const infobermain = document.getElementById("pemain-info"); // mendapatkan elemen pemain-info di html
const restart = document.getElementById("reset-game"); // mendapatkan elemen reset-game untuk tombol restart di html

// fungsi untuk cek hasil permainan
function cekpermainan() {
  const kemenangan = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (const tanda of kemenangan) {
    const [a, b, c] = tanda;
    if (kotakkosong[a] !== "" && kotakkosong[a] === kotakkosong[b] && kotakkosong[a] === kotakkosong[c]) {
      menangkalah.textContent = `${pemain} WIN!`; // tampilan kalo menang
      cekmenangkalah = false; //permainan sudah selesai
      return;
    }
  }

  if (!kotakkosong.includes("")) {
    menangkalah.textContent = "DRAW!"; // tampilan kalo seri
    cekmenangkalah = false; //permainan sudah selesai
    return;
  }
}

//klikan pada kotak
kotak.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (kotakkosong[index] === "" && cekmenangkalah) {
      kotakkosong[index] = pemain; // untuk menyimpan X O pada kotak yang diklik
      item.textContent = pemain; // untuk menampilkan X O pada kotak
      cekpermainan(); // memeriksa hasil permainan setelah setiap langkah
      pemain = pemain === "X" ? "O" : "X"; // tanda X O berganti ganti
      infobermain.textContent = pemain; // menampilkan informasi pemain saat ini
    }
  });
});

// kalo mau restart
restart.addEventListener("click", () => {
  kotakkosong = ["", "", "", "", "", "", "", "", ""]; //kotak-kotak jadi kosong
  kotak.forEach(item => {
    item.textContent = ""; // menghapus simbol X O di kotak
  });
  menangkalah.textContent = ""; // hapus hasil permainan
  cekmenangkalah = true; // game mulai lagi
  pemain = "X"; // tampilan awal kalo mau main lagi
  infobermain.textContent = pemain; // menampilkan informasi pemain saat ini
});
