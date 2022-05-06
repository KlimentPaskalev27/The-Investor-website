// inspired by https://www.w3schools.com/bootstrap/bootstrap_carousel.asp
var slideOrder = 1;
slideSwitch(slideOrder);

// Next/previous controls
function nextSlide(n) 
{
	slideSwitch(slideOrder += n);
}

// Thumbnail image controls
function selectSlide(n) 
{
	slideSwitch(slideOrder = n);
}

function slideSwitch(n) 
{
	var i; //declare i which will be used later
	//grab elements with class slide and dot
	var slides = document.getElementsByClassName("slide");
	var dots = document.getElementsByClassName("dot");

	if (n > slides.length) 
	{
		slideOrder = 1
	}

	if (n < 1) 
	{
		slideOrder = slides.length
	}

	for (i = 0; i < slides.length; i++) 
	{
		slides[i].style.display = "none";
	}

	for (i = 0; i < dots.length; i++) 
	{
		dots[i].className = dots[i].className.replace(" active", "");
	}

	if (slideOrder > slides.length) 
	{
		slideOrder = 1	
	}

	slides[slideOrder-1].style.display = "block";
	dots[slideOrder-1].className += " active";
}