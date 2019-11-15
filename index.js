let storage=[
	{id: 1, name: "CPU", quantity: 3, price: 5000},
	{id: 2, name: "GPU", quantity: 5, price: 7000},
	{id: 3, name: "HDD", quantity: 4, price: 2000},
	{id: 4, name: "SSD", quantity: 7, price: 3000},
	{id: 5, name: "Monitor", quantity: 2, price: 8000},
	{id: 6, name: "Printer", quantity: 3, price: 15000},
]

let bascket = [];
//let copyBascket = [];


const itemList = document.getElementById("item-list");
const cartList = document.getElementById("cart-list");
const itemRows = itemList.getElementsByTagName("tbody")[0];
const cartRows = cartList.getElementsByTagName("tbody")[0];
const itemColumns = itemList.getElementsByTagName("td");
const cartColumns = cartList.getElementsByTagName("td");
const price = document.getElementById("price");




let columnsId = [];
for (let i = 0; i <itemColumns.length; i++){
	let c = itemColumns[i].getAttribute('class');
columnsId.push(c);
}


function main(){
	for (let i = 0; i < storage.length; i++){
		addRow(itemRows, storage[i]);
	}
}

//main();

document.addEventListener("DOMContentLoaded", main);



function addRow(tableRows, item){
	let row = tableRows.insertRow(tableRows.rows.length);
	for (let i = 0; i < columnsId.length; i++){
		let cell = row.insertCell(i);
		let key = columnsId[i];
		cell.innerHTML = item[key];
		cell.className += key;
		row.setAttribute( 'data-id', tableRows.rows.length);
	}
	for(let i = 0; i < itemRows.rows.length; i++){
		itemRows.rows[i].addEventListener('click', addToBasket);
	}
}


function renderBasket(){
	bascket[bascket.length-1]["quantity"] = 1;
	addCartRow(cartRows, bascket[bascket.length-1]);
	console.log(bascket);
}


function addCartRow(tableRows, item){	
	let f = false;
	let cache;
	cache = bascket[bascket.length-1]["name"];
	for (let j = 0; j < bascket.length-1; j++){
		if(cache == bascket[j]["name"]){	
			f = false;
			for(i=0; i< tableRows.rows.length; i++){
				if (tableRows.children[i].children[1].innerHTML == cache){
					tableRows.children[i].children[2].innerHTML++;
					tableRows.children[i].children[3].innerHTML = parseInt(tableRows.children[i].children[3].innerHTML)+bascket[j]["price"];
				}
				tableRows.getAttribute("data-id");
			} 
			break;		 
		} else 	f = true;
	}

	if (f || (bascket.length == 1)){
		let row = tableRows.insertRow();	
		for (let i = 0; i < columnsId.length; i++){
			let cell = row.insertCell(i);
			let key = columnsId[i];
			cell.className += key;
			row.setAttribute( 'data-id', tableRows.rows.length);

			if (cell.getAttribute('class') == "price"){
				cell.innerHTML = item["price"];
			}

			if (cell.getAttribute('class') == "name"){
				cell.innerHTML = item["name"];
			}

			if (cell.getAttribute('class') == "quantity"){
				cell.innerHTML = item["quantity"];
			}

			if (cell.getAttribute('class') == "id"){
				cell.innerHTML = tableRows.rows.length;
			}
		}
	}//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	 for(let i = 0; i < itemRows.rows.length; i++){
		cartRows.rows[i].addEventListener('click', addToStorage);
	}//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}

function addToBasket(e) {
	let dataId = e.target.parentNode.getAttribute('data-id');
	let foundStoreItem = storage.find(function(currentElem) {
		if (currentElem.id == dataId) {
			return true;
		}
		return false;
	});
	if (foundStoreItem.quantity == 0) {
		alert('Failed');
	} else {
		bascket.push(JSON.parse(JSON.stringify(foundStoreItem)));
		foundStoreItem.quantity--;
		renderBasket();
		//console.log(foundStoreItem.id);	
	}
	//console.log(foundStoreItem);

	//bascket.push()
	/*let row = cartRows.insertRow(cartRows.rows.length);
	if (+(this.children[2].textContent) > 0){
		for (let i = 0; i < cartColumns.length; i++){
			let cell = row.insertCell(i);
			console.log(this.children[i].textContent);
			cell.innerHTML = this.children[i].textContent;

			this.children[2].innerHTML = +(this.children[2].textContent) - 1;
	}
} else alert("error");*/
//	console.log(this.children[1].textContent);
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function addToStorage(e) {
	let dataId = e.target.parentNode.getAttribute('data-id');
	let foundStoreItem = bascket.find(function(currentElem) {
		if (currentElem.id == dataId) {
			return true;
		}
		return false;
	});
	/*if (foundStoreItem.quantity == 0) {
		alert('Failed');
	} else {
		bascket.push(JSON.parse(JSON.stringify(foundStoreItem)));
		foundStoreItem.quantity--;
		main();
		//console.log(foundStoreItem.id);	
	}*/

	alert('!!!');
}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!