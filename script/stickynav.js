function resizeNav () 
{
	const mediaQuery = window.matchMedia('(min-width: 481px)')
	//checks if website is accessed on a wide screen device, otherwise sticky nav isn't needed
	if ( mediaQuery.matches )
	{
		// Inspired by scroll instructions at https://www.w3schools.com/howto/howto_js_shrink_header_scroll.asp
		
		if (document.body.scrollTop > 1 || document.documentElement.scrollTop >= 320) 
		{
			//reduce height of nav when it becomes sticky
			document.getElementById("navheader").classList.add("shrink");

			// make logo appear as nav ul li item
			var logo = document.getElementById("logo");
			logo.classList.remove("hidden");
			logo.classList.add("shown");

			//change nav grid to 6, adding extra one for the new logo item
			var navitems = document.getElementById("navlist");
			navitems.style.gridTemplateColumns='repeat(6, 1fr)';
		} 
		else if (document.body.scrollTop <= 1 || document.documentElement.scrollTop <= 280) 
		{
			// make logo disappear as nav ul li item
			var logo = document.getElementById("logo");
			logo.classList.add("hidden");
			logo.classList.remove("shown");

			//revert nav grid columns back to 5 since logo isnt there anymore
			var navitems = document.getElementById("navlist");
			navitems.style.gridTemplateColumns='repeat(5, 1fr)';
			
			//revert back normal height of nav div
			document.getElementById("navheader").classList.remove("shrink");
		}
	}
}

// When user scroll run the resizeNav function
window.onscroll = function() 
{
	resizeNav()
};