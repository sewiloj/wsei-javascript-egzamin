const buttons = document.querySelectorAll("button");

for(let i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener('click', function(){ 
        document.getElementById("container").innerHTML = this.getAttribute("data-text");
    });
}