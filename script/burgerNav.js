function navDrop() 
{
    var dropdown = document.getElementById("navlist");
    var mobilelogo = document.getElementById("mobilelogo");

    if (dropdown.style.display === "grid") 
    {
        dropdown.style.display = "none";
        mobilelogo.style.display = "block";
    } 
    else 
    {
        dropdown.style.display = "grid";
        mobilelogo.style.display = "none";
    }
}