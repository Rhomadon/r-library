export default class Table {
  constructor(table) {
    this.table = table;
  }

  createHeader(data) {
    let open = "<thead><tr>";
    let close = "</tr></thead>";
    data.forEach((d) => {
      open += `<th>${d}</th>`;
    });

    return open + close;
  }

  createBody(data) {
    let open = "<tbody>";
    let close = "</tbody>";

    data.forEach((d) => {
      open += `
        <tr>
          <td>${d[0]}</td>
          <td>${d[1]}</td>
          <td>${d[2]}</td>
          <td>${d[3]}</td>
        </tr>
      `;
    });

    return open + close;
  }

  render(element) {
    let table = "<table class='table table-success table-striped'>" + this.createHeader(this.table.columns) + this.createBody(this.table.data) + "</table>";
    element.innerHTML = table;
  }
}
