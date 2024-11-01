const buyBtns = document.querySelectorAll('.place-button');
const model = document.querySelector('.model');
const modelContainer = document.querySelector('.model-container');
const closeBtns = document.querySelectorAll('.close');

function showModel(){
    model.classList.add('open');
}

function hideModel() {
    model.classList.remove('open');
}

for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click',showModel);
}

for(const closeBtn of closeBtns){
    closeBtn.addEventListener('click',hideModel);
}

model.addEventListener('click',hideModel)

modelContainer.addEventListener('click',function(even){
    even.stopPropagation();
})


// Mobile menu

const header = document.querySelector('#header');
const menuIcon = document.querySelector('.menu-btn');
const menuItems = document.querySelectorAll('#nav li a[href*="#"]');
const headerHeight = header.clientHeight;

menuIcon.onclick = function(){
    // open
    if(header.clientHeight == headerHeight){
        header.style.height = 'auto';
    }
    // close
    else{
        header.style.height = null;
    }
}

menuItems.forEach(menuItem => {
    menuItem.onclick = function (even) {
        var isParent = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isParent){
            even.preventDefault();
        }
        else{
            header.style.height = null;
        }
    }
});

