let personData = [
  { nama: "Rhomadon", jurusan: "Teknik Informatika", lulus: "2020" },
  { nama: "Miqdad", jurusan: "Teknik Elektro", lulus: "2019" },
  { nama: "Azam", jurusan: "Teknik Industri", lulus: "2021" },
  { nama: "Hanif", jurusan: "Teknik Sipil", lulus: "2020" },
];

window.onload = () => {
  loadTableData(personData);
};

function loadTableData(personData) {
  const tableBody = document.getElementById("tableData");
  let dataHTML = "";
  let i = 1;

  for (let person of personData) {
    dataHTML += "<tr><th>" + i + "</th><td>" + person.nama + "</td><td>" + person.jurusan + "</td><td>" + person.lulus + "</td></tr>";
    i++;
  }

  tableBody.innerHTML = dataHTML;
}
