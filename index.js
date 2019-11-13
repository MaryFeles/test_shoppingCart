let storage=[
	{id: 1, name: "CPU", quantity: 3, price: 5000},
	{id: 2, name: "GPU", quantity: 5, price: 7000},
	{id: 3, name: "HDD", quantity: 4, price: 2000},
	{id: 4, name: "SSD", quantity: 7, price: 3000},
	{id: 5, name: "Monitor", quantity: 2, price: 8000},
	{id: 6, name: "Printer", quantity: 3, price: 15000},
]

const itemList = document.getElementById("item-list");
const cartList = document.getElementById("cart-list");
const itemRows = itemList.getElementsByTagName("tbody")[0];
const cartRows = cartList.getElementsByTagName("tbody")[0];
const itemColumns = itemList.getElementsByTagName("td");
const cartColumns = cartList.getElementsByTagName("td");
const price = document.getElementById("price");


let classes = [];
for (let i = 0; i <itemColumns.length; i++){
	let c = itemColumns[i].getAttribute('class');
classes.push(c);
}


function main(){
	for (let i = 0; i < storage.length; i++){
		addRow(itemRows, storage[i]);
	}
}

main();

function addRow(tableRows, item){
	let row = tableRows.insertRow(tableRows.rows.length);
	for (let i = 0; i < classes.length; i++){
		let cell = row.insertCell(i);
		let key = classes[i];
		cell.innerHTML = item[key];
	}
}