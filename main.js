import Table from "./module.js";

new Table({
  columns: ["No", "Nama", "Jurusan", "Lulus"],
  data: [
    ["1", "Rhomadon", "Teknik Informatika", "2020"],
    ["2", "Miqdad", "Teknik Elektro", "2019"],
    ["3", "Azam", "Teknik Industri", "2018"],
    ["4", "Hanif", "Teknik Sipil", "2020"],
  ],
}).render(document.getElementById("tableData1"));

new Table({
  columns: ["No", "Nama", "Pembimbing", "Keterangan"],
  data: [
    ["1", "Shinta", "Teknik Informatika", "-"],
    ["2", "Siti", "Teknik Elektro", "-"],
    ["3", "Ulum", "Teknik Industri", "-"],
    ["4", "Randy", "Teknik Sipil", "-"],
  ],
}).render(document.getElementById("tableData2"));
