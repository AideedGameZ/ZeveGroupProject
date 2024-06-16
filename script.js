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

function gotoHref(doc){
	let url = doc.getAttribute('href');
	window.location.href = url;
}

initialwebMaster();

function initialwebMaster(){

	let mainbody = document.getElementById('mainbody');

	mainbody.innerHTML =
`

	<div class="header">
		<h2 id='testbtn' onclick="openSideBar()"><span class="material-symbols-outlined">
menu
</span></h2>
		<h1>Zeve</h1>
	</div>

	<div id="sidebar" style='display:none;'>
		<div class="sidehead">
			<i onclick="closeSideBar()">X</i>
			<h1>Zeve</h1>
		</div>

		<ul>
			<li onclick="gotoHref(this)" href="#"><span class="material-symbols-outlined">
home
</span> Home</li>

<li onclick="gotoHref(this)" href="products.html"><span class="material-symbols-outlined">
styler
</span> Products</li>

<li onclick="gotoHref(this)" href="cart.html"><span class="material-symbols-outlined">
shopping_cart
</span> View Cart</li>

<li onclick="gotoHref(this)" href="aboutus.html"><span class="material-symbols-outlined">
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

function loadAllItem(){
	addItem('Brown Shoes', '30.00','Selangor', 'Ahmad', '7.2');
	addItem('Brown Shoes', '30.00','Semenyih', 'Ahmad', '7.2');
	addItem('Brown Shoes', '30.00','Kelang', 'Ahmad', '7.2');
	addItem('Brown Shoes', '30.00','Arau', 'Ahmad', '7.2');
	addItem('Brown Shoes', '30.00','Kelantan', 'Ahmad', '7.2');
	addItem('Brown Shoes', '30.00','Nilai', 'Ahmad', '7.2');
}

function gotoPage(url){
	window.location.href = url;
}


function addItem(name, price, place, owner, rating){
	let itemlist = document.getElementById('shopItem');

	itemlist.innerHTML += 
`

  	<div class="grid-item" onclick="gotoPage('product_details.html')">

		<div>
			<img src='assets/products/1.jpg' width='200'/>
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

function addCartItem(name,quantity){
	let cartlist = document.getElementById('cartlist');

	cartlist.innerHTML += 
`

				<div class="cartitem">
					<div style="display:flex; align-items: center;">
						<img src="assets/products/1.jpg"/>
						<label>${name}</label>
					</div>
					<h3>x${quantity}</h3>
				</div>
`;
}