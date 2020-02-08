// 1.
function getTagsOfElements(elements){
    let arr = [];
    for(let i = 0; i < elements.length; i++)
    {
        arr.push(elements[i].tagName);
    }
    return arr;
}

const sampleClass = document.querySelectorAll('.sample_class');
console.log(getTagsOfElements(sampleClass));

//2.
function getClassesOfElement(element){
    let arr = [];
    element = element.classList;
    for(let i = 0; i < element.length; i++)
    {
        arr.push(element[i]);
    }
    return arr;
}

const sampleId = document.querySelector('#sample_id');
console.log(getClassesOfElement(sampleId));

//3.
function getInnerTextsOfElements(elements){
    let arr = [];
    for(let i = 0; i < elements.length; i++)
    {
        arr.push(elements[i].innerHTML);
    }
    return arr;
}

const sampleClass2 = document.querySelectorAll(".sample_class_2 li");
console.log(getInnerTextsOfElements(sampleClass2));

//4.
function getAddressesOfElements(elements){
    let arr = [];
    for(let i = 0; i < elements.length; i++)
    {
        arr.push(elements[i].href);
    }
    return arr;
}

const links = document.querySelectorAll("a");
console.log(getAddressesOfElements(links));

//5.
const sampleClass3 = document.querySelector(".sample_class_3").children;
console.log(getTagsOfElements(sampleClass3));