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
			<li onclick="gotoHref(this)" href="www.google.com"><span class="material-symbols-outlined">
home
</span> Home</li>

<li onclick="gotoHref(this)" href="www.google.com"><span class="material-symbols-outlined">
styler
</span> Products</li>

<li onclick="gotoHref(this)" href="www.google.com"><span class="material-symbols-outlined">
shopping_cart
</span> View Cart</li>

<li onclick="gotoHref(this)" href="www.google.com"><span class="material-symbols-outlined">
question_mark
</span> About Us</li>
		</ul>
	</div>

` + mainbody.innerHTML;
}



//______________PRODUCT PAGE

addItem('Brown Shoes', '30.00', 'Ahmad', '7.2');
addItem('Brown Shoes', '30.00', 'Ahmad', '7.2');
addItem('Brown Shoes', '30.00', 'Ahmad', '7.2');
addItem('Brown Shoes', '30.00', 'Ahmad', '7.2');
addItem('Brown Shoes', '30.00', 'Ahmad', '7.2');
addItem('Brown Shoes', '30.00', 'Ahmad', '7.2');


function addItem(name, price, place, owner, rating){
	let itemlist = document.getElementById('shopItem');

	itemlist.innerHTML += 
`

  	<div class="grid-item">

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