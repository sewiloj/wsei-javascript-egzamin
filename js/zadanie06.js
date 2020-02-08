document.addEventListener("DOMContentLoaded",function(){

    const list = document.querySelector('#shopping-list');
    const button1 = document.querySelector('#button-1');
    const button2 = document.querySelector('#button-2');
    const button3 = document.querySelector('#button-3');

    function button1Click(){
        let li = document.createElement('li');
        li.textContent = 'chleb';
        list.appendChild(li);
    }

    function button2Click(){
        if(list.children.length > 0){
            list.removeChild(list.children[list.children.length - 1]);
        }
    }

    function button3Click(){
        if(list.children.length > 1){
            let newElement = list.children[1].cloneNode(true);
            list.appendChild(newElement);
        }
    }

    button1.addEventListener('click', button1Click);
    button2.addEventListener('click', button2Click);
    button3.addEventListener('click', button3Click);

});