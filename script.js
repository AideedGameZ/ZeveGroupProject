let cartquery = getquery('cart');

function openSideBar(){

	let sidebar = document.getElementById('sidebar');
	sidebar.style.animation = 'openSideBar 0.5s ease-in-out';
	sidebar.style.display = 'block';
}

function closeSideBar(){

	let sidebar = document.getElementById('sidebar');
	sidebar.style.animation = 'closeSideBar 0.5s';
	
	setTimeout(function(){
		sidebar.style.display = 'none';
	},500);
}


function getquery(str){
 	var url_string = window.location.href;
    	var url = new URL(url_string);
    	var paramValue = url.searchParams.get(str);
	if(paramValue === null){
		return '';
	}else{
		return paramValue;
	}
}


initialwebMaster();

function initialwebMaster(){

	let mainbody = document.getElementById('mainbody');

	mainbody.innerHTML =
`

	<div class="header">

		<div id='testbtn' onclick="openSideBar()" style='display:block !important; overflow-y: hidden !important;'>
			<div class="hamburger1"></div>
			<div class="hamburger2"></div>
		</div>
	
		<h1>Zeve</h1>
	</div>

	<div id="sidebar" style='display:none;'>
		<div class="sidehead">
			<i onclick="closeSideBar()">X</i>
			<h1>Zeve</h1>
		</div>

		<ul>
			<li onclick="window.location.href = 'home.html'"><span class="material-symbols-outlined">
home
</span> Home</li>

<li onclick="gotoPage('products.html','');"><span class="material-symbols-outlined">
styler
</span> Products</li>

<li onclick="gotoPage('cart.html','');"><span class="material-symbols-outlined">
shopping_cart
</span> View Cart</li>

<li onclick="gotoPage('aboutus.html','');"><span class="material-symbols-outlined">
question_mark
</span> About Us</li>
		</ul>
	</div>

` + mainbody.innerHTML;
}

function toggleUnderlinebtn(doc){
	let myborder = doc.style.borderBottom;
	
	if(myborder.length < 1){
		doc.style.borderBottom = '3px black solid';
	}else{
		doc.style.borderBottom = 'none';
	}
}



//______________PRODUCT PAGE

let item = [];

item[0] = {
	title : 'Green Plain Shirt',
	price : '70.00',
	from : 'Arau',
	seller : 'Ahmad',
	rating : '7.2',
	desc : '',
	image : '4.jpeg'
};

item[1] = {
	title : 'Brown Stripe Shirt',
	price : '120.00',
	from : 'Arau',
	seller : 'Ahmad',
	rating : '7.2',
	desc : '',
	image : '5.jpeg'
};

item[2] = {
	title : 'Blue Plain Shirt',
	price : '710.00',
	from : 'Arau',
	seller : 'Ahmad',
	rating : '7.2',
	desc : '',
	image : '6.jpeg'
};

item[3] = {
	title : 'Chocolate Bright Pants',
	price : '30.00',
	from : 'Arau',
	seller : 'Ahmad',
	rating : '7.2',
	desc : '',
	image : '8.jpeg'
};

item[4] = {
	title : 'Green-ish Pants',
	price : '730.00',
	from : 'Arau',
	seller : 'Ahmad',
	rating : '7.2',	
	desc : '',
	image : '9.jpeg'
};

item[5] = {
	title : 'Black Slag Pants',
	price : '780.00',
	from : 'Arau',
	seller : 'Ahmad',
	rating : '7.2',
	desc : '',
	image : '10.jpeg'
};

item[6] = {
	title : 'Brown Shoes Fancy',
	price : '230.00',
	from : 'Arau',
	seller : 'Ahmad',
	rating : '7.2',
	desc : '',
	image : '1.jpg'
};

item[7] = {
	title : 'Black Shoes',
	price : '50.00',
	from : 'Arau',
	seller : 'Ahmad',
	rating : '7.2',
	desc : '',
	image : '2.jpg'
};

item[8] = {
	title : 'Brown Shoes',
	price : '560.00',
	from : 'Arau',
	seller : 'Ahmad',
	rating : '7.2',
	desc : '',
	image : '3.jpg'
};

function loadAllItem(){
	let i=0;
	item.forEach(info => {
		addItem(i,info.title, info.price, info.from, info.seller, info.rating, info.image);
		i++;
	});
	
	let id = 0;
	item.forEach(info => {
		let delay = parseFloat(id) * 0.5;
		let itemu = document.getElementById(`item${id}`);
		stayAnimation(itemu, 'opacity: 0', delay, 'itemApeal', 2);
		id++;
	});
}

function gotoPage(url,params){

	if(url === 'receipt.html'){
		cartquery = '';
	}
	if(params.length > 0){
		window.location.href = `${url}?cart=${cartquery}&${params}` ;
	}else{
		window.location.href = `${url}?cart=${cartquery}` ;

	}
}


function addItem(id,name, price, place, owner, rating,img){
	let itemlist = document.getElementById('shopItem');
	itemlist.innerHTML += 
`

  	<div class="grid-item" id="item${id}" onclick="gotoPage('product_details.html','id=${id}')">

		<div>
			<img src='assets/products/${img}?id=${id}' width='200'/>
			<br/>
			<div style='text-align:start; box-shadow:none;'>
				<label>${name}</label>
				<h3>RM${price}</h3>
			</div>
			<div style='display:grid; grid-template-columns: auto auto auto; width:90%; box-shadow: none; align-items: center;'>

			<p><span class="material-symbols-outlined">
location_pin
</span><br/> ${place}</p>

			<p><span class="material-symbols-outlined">
person
</span><br/> ${owner}</p>

			<p><span class="material-symbols-outlined">
star
</span><br/> ${rating}</p>

			</div>
		</div>
	</div>

`;

}

function buyNow(){
	let quantitytxt = document.getElementById('quantitytxt');

	let id = getquery('id');
	cartquery = getquery('cart');
	if(cartquery.length > 0){
		cartquery += ','
	}
	cartquery += `${id}q${quantitytxt.value}`;
	alert('Added to cart!');
	gotoPage('cart.html',`id=${id}`);
}

function gotoPreference(){
	let id = getquery('id');
	gotoPage('product_preference.html',`id=${id}`);
}

function AddToCart(){
	let quantitytxt = document.getElementById('quantitytxt');

	let id = getquery('id');
	cartquery = getquery('cart');
	if(cartquery.length > 0){
		cartquery += ','
	}
	cartquery += `${id}q${quantitytxt.value}`;
	alert('Cart : ' + cartquery);
	gotoPage('product_details.html',`id=${id}`);
}

function emptyCart(){
	cartquery = '';
	gotoPage('cart.html','');
}

function addCartItem(bil,id,quantity){
	let cartlist = document.getElementById('cartlist');

	cartlist.innerHTML += 
`
				<div class="cartitem" id="cart${bil}">
					<div style="display:flex; align-items: center;">
						<img src="assets/products/${item[id].image}"/>
						<label>${item[id].title}</label>
					</div>
					<h3>x${quantity}</h3>
				</div>
`;
}

function loadAllCart(){
	let pricetag = document.getElementById('pricetag');
	let totalpricetag = document.getElementById('totalpricetag');

	let totalprice = 0.00;
	let Aquantity = 0;
	let bil = 0;
	if(cartquery.length > 0){
		if(cartquery.includes(',')){
	
			let citem = cartquery.split(',');
			for(let i=0; i<citem.length; i++){
				let cqitem = citem[i].split('q');
				let id = cqitem[0];
				let quantity = cqitem[1];
				addCartItem(bil,id, quantity);

				totalprice += parseFloat(item[i].price);
				Aquantity += parseInt(quantity);
				bil++;
			}

		}else{
				let cqitem = cartquery.split('q');
				let id = cqitem[0];
				let quantity = cqitem[1];
				addCartItem(bil,id, quantity);

				totalprice = parseFloat(item[id].price) * quantity;
				Aquantity = quantity;
				bil = 1;
		}
	}

	for(let i=0; i<bil; i++){
		let delay = parseFloat(i) * 0.5;
		let itemu = document.getElementById(`cart${i}`);
		stayAnimation(itemu, 'opacity: 0', delay, 'itemApeal', 2);
	}


	pricetag.innerHTML = `RM ${totalprice}`;
	totalpricetag.innerHTML = `Total Quantity : ${Aquantity}`;
}

function setupProductDetails(){
	let prodprev_img = document.getElementById('prodprev_img');
	let prodprev_title = document.getElementById('prodprev_title');
	let prodprev_price = document.getElementById('prodprev_price');

	let id = parseInt( getquery('id') );
	console.log(item[id]);
	prodprev_img.setAttribute('src',`assets/products/${item[id].image}`);

	prodprev_title.textContent = item[id].title;
	prodprev_price.textContent = 'Price Range : RM' + item[id].price;

	let carddetails = document.getElementsByClassName('card');

	for(let i=1; i<carddetails.length; i++){
		let delay = i * 0.5;
		stayAnimation(carddetails[i], 'opacity: 0', delay, 'itemApeal', 2);
	}
}

function stayAnimation(doc, stylebefore, delay, animation, duration){
	let initialclass = doc.getAttribute('class');
	doc.setAttribute('style',`opacity: 0; animation-delay:${delay}s; animation-name: ${animation}; animation-duration: ${duration}s`);


	let miliseconds = (delay + duration) * 900;
	setTimeout(function(){
		doc.setAttribute('style','');
	},miliseconds); 
}

function setupProductPreference(){
	let id = getquery('id');

	let prefimg = document.getElementById('prefimg');
	let preftxt = document.getElementById('preftxt');
	let prefprice = document.getElementById('prefprice');
	
	prefimg.setAttribute('src',`assets/products/${item[id].image}`);

	preftxt.textContent = item[id].title;

	prefprice.textContent = `Price : RM ${item[id].price}`;
	
}