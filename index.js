const cards = document.querySelectorAll(".card");
for(let i=0; i<cards.length; i++){
	cards[i].addEventListener('mousemove', rotate);
	cards[i].addEventListener('mouseleave', clearRotate);
}

function rotate(e){
	const cardItem = this.querySelector(".card-item");
	const force = 10;
	const offsetY = -(e.offsetY - cardItem.offsetHeight/2)/force;
	const offsetX = (e.offsetX - cardItem.offsetWidth/2)/force;
	cardItem.style.transform = 'rotateX(' + offsetY + 'deg) rotateY(' + offsetX + 'deg)';
}

function clearRotate(e){
	if(e.target.classList.contains("card")){
		const cardItem = this.querySelector(".card-item");
		cardItem.style.transform = 'rotateX(0) rotateY(0)';
	}
}