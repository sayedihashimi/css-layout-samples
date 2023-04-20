window.onload = (event) => {

    // register click handlers for the tab headers
    const tabHeaders = document.querySelectorAll(".navLink");
    tabHeaders.forEach( (th)=>{
        th.addEventListener("click", handleOnClick, false);
    });
};

function handleOnClick(event){
    console.log('clicked');
    // hide all the content and then show the selected one
    const contentElements = document.querySelectorAll(".tabContent");
    contentElements.forEach( (element)=>{
        console.log('here');
        element.setAttribute('hidden','');
    });

    document.querySelector(event.currentTarget.getAttribute('href')).removeAttribute('hidden');

    event.preventDefault();
}