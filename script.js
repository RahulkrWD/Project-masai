// submit form
function Submit() {
  let name = document.getElementById("name").value;
  let amount = document.getElementById("amount").value;
  let type = document.getElementById("type").value;
  let date = document.getElementById("date").value;
  let category = document.getElementById("category").value;

  // create Object
  let obj = {
    name: name,
    amount: amount,
    type: type,
    date: date,
    category: category,
  };

  let data = JSON.parse(localStorage.getItem("data")) || [];
  //   push the Object in Array
  data.push(obj);
  //   store the data in localstorage
  localStorage.setItem("data", JSON.stringify(data));
}

// Display the Data
function DisplayData() {
  let product = JSON.parse(localStorage.getItem("data"));
  let display = document.getElementById("list_items");

  product.forEach((e) => {
    let div = document.createElement("div");
    div.className = "each_items";
    div.innerHTML = `
    <p>Name: <b>${e.name}</b></p>
    <p>Amount:<b>${e.amount}</b> </p>
    <p>Type:<b>${e.type}</b> </p>
    <p>Date: <b>${e.date}</b> </p>
    <p>Category: <b>${e.category}</b> </p>
    `;
    display.appendChild(div);
  });
}
