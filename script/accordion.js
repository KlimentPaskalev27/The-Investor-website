// Drew inspiration from the W3schools tutorial on accordion 
// https://www.w3schools.com/howto/howto_js_accordion.asp

function toggleAccordion()
{
    var acc = document.getElementsByClassName("faq-question");
    var i;

    for (i = 0; i < acc.length; i++) 
    {
        acc[i].addEventListener("click", function() 
        {
            this.classList.toggle("opened");

            var panel = this.nextElementSibling;

            if (panel.style.maxHeight) 
            {
                panel.style.maxHeight = null;
            } 
            else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
    }
}