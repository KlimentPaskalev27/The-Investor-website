document.addEventListener("DOMContentLoaded", newsSlideshowBanner);

var newsSlideNumber = 0;

function newsSlideshowBanner() 
{
	var i;
	var newsSlide = document.getElementsByClassName("newsSlide");

	for (i = 0; i < newsSlide.length; i++) 
	{
		newsSlide[i].style.display = "none";
	}

	newsSlideNumber++;

	if (newsSlideNumber > newsSlide.length) 
	{
		newsSlideNumber = 1
	}

	newsSlide[newsSlideNumber-1].style.display = "block";
	setTimeout(newsSlideshowBanner, 7000); // Change image every 7 seconds
}