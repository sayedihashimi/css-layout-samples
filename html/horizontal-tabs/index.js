//hljs.initHighlightingOnLoad();
window.onload = (event) => {
    // register click handlers for the tab headers
    const tabHeaders = document.querySelectorAll(".navLink");
    tabHeaders.forEach( (th)=>{
        th.addEventListener("click", handleOnClick, false);
    });

    hljs.highlightAll();
    hljs.highlightElement(document.querySelector("#rawResult"));
    // this prevents a flicker on the content after styles are applied
    document.querySelector('.content').removeAttribute('hidden');
};

function handleOnClick(event){
    // hide all the content and then show the selected one
    const contentElements = document.querySelectorAll(".tabContent");
    contentElements.forEach( (element)=>{
        element.setAttribute('hidden','');
    });
    const tabHeaderElements = document.querySelectorAll(".navLink");
    tabHeaderElements.forEach( (element)=>{
        element.removeAttribute('current');
    });
    
    document.querySelector(event.currentTarget.getAttribute('href')).removeAttribute('hidden');

    event.currentTarget.setAttribute('current','');
    event.preventDefault();
}