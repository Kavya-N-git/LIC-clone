const navbarLinks = document.getElementsByClassName("navbarLinks")[0];
function displayNavbar(){
    navbarLinks.classList.toggle('active');
}

function changeMode(){
    let mybody = document.body;
        mybody.classList.toggle('mydark')
}



