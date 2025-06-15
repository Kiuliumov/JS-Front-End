document.addEventListener("DOMContentLoaded", solve);

function solve() {
  const generateBtn = document.querySelector('#input input');
  const buyBtn = document.querySelector('#shop input[type="submit"]');
  const tableBody = document.querySelector("tbody");
  const inputTextarea = document.querySelector("#input textarea");
  const resultTextarea = document.querySelector("#shop textarea");

  generateBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let data;
    try {
      data = JSON.parse(inputTextarea.value);
      if (!Array.isArray(data)) throw new Error();
    } catch {
      alert("Invalid JSON format");
      return;
    }

    for (const item of data) {
      const tr = document.createElement("tr");

      const imgTd = document.createElement("td");
      const img = document.createElement("img");
      img.src = item.img;
      imgTd.appendChild(img);
      tr.appendChild(imgTd);

      const nameTd = document.createElement("td");
      const nameP = document.createElement("p");
      nameP.textContent = item.name;
      nameTd.appendChild(nameP);
      tr.appendChild(nameTd);

      const priceTd = document.createElement("td");
      const priceP = document.createElement("p");
      priceP.textContent = item.price;
      priceTd.appendChild(priceP);
      tr.appendChild(priceTd);

      const decTd = document.createElement("td");
      const decP = document.createElement("p");
      decP.textContent = item.decFactor;
      decTd.appendChild(decP);
      tr.appendChild(decTd);

      const checkTd = document.createElement("td");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkTd.appendChild(checkbox);
      tr.appendChild(checkTd);

      tableBody.appendChild(tr);
    }
  });

 buyBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const selected = Array.from(tableBody.querySelectorAll("tr"))
    .filter(row => row.querySelector("input[type='checkbox']").checked);

  const names = [];
  let totalPrice = 0;
  let totalDecFactor = 0;

  for (const row of selected) {
    const tds = row.querySelectorAll("td");
    const name = tds[1].textContent.trim();
    const price = Number(tds[2].textContent);
    const decFactor = Number(tds[3].textContent);

    names.push(name);
    totalPrice += price;
    totalDecFactor += decFactor;
  }

  const avgDecFactor = selected.length ? totalDecFactor / selected.length : 0;

  resultTextarea.value =
    `Bought furniture: ${names.join(', ')}\n` +
    `Total price: ${totalPrice.toFixed(2)}\n` +
    `Average decoration factor: ${avgDecFactor.toFixed(2)}`;
});
}