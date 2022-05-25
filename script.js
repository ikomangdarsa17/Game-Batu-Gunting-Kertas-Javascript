var tanya = true;
while (tanya) {
  //menangkap pilihan palyer
  var p = prompt("pilih : gunting ,batu ,kertas");
  //menangkap pilihan computer
  //membangkitkan bilangan random

  var comp = Math.random();
  console.log(comp);

  if (comp < 0.34) {
    comp = "batu";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "gunting";
  } else {
    comp = "kertas";
  }
  //menentukan rules
  var hasil = "";

  if (p == comp) {
    hasil = "SERI";
  } else if (p == "batu") {
    //if (comp == ' gunting') {
    // hasil = 'menang'
    //}else {
    //hasil = 'KALAH'
    //}
    hasil = comp == "gunting" ? "MENANG" : "KALAH";
  } else if (p == "gunting") {
    hasil = comp == "batu" ? "KALAH" : "MENANG";
  } else if (p == "kertas") {
    hasil = comp == "batu" ? "MENANG" : "KALAH";
  } else {
    hasil = "anda tidak memasukan pilihan";
  }
  //tampilkan hasil
  alert(
    "kamu memilih " + p + " \nkomputer memilih " + comp + "\nhasilnya " + hasil
  );
  tanya = confirm("ingin mengulang permainan lagi?");
}
alert("permainan selesai");

// ok
