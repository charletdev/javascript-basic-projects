const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('color');

btn.addEventListener('click', function(){
	// get a random between 0-3
	const randomNumber = getRandomNumber();
	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
})

function getRandomNumber(){
    // generate random numbers within 0 to 3
    return Math.floor(Math.random() * colors.length) ;
}