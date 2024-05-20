// Begin: Modal
const  buyBtns = document.querySelectorAll('.js-buy-ticket');
        const modal = document.querySelector('.js-modal')

        const modalClose = document.querySelector('.js-modal-close')
        const modalContainer = document.querySelector('.js-modal-container')

        function hiddenModel(){
            modal.classList.remove('open-modal');

        }

        // listen button show model
        for(const buyBtn of buyBtns){
            buyBtn.addEventListener('click',function(){
                modal.classList.add('open-modal');
            })
        }

        //listen hidden modal
        modalClose.addEventListener('click',hiddenModel);
        modal.addEventListener('click',hiddenModel);

        // stop 
        modalContainer.addEventListener('click',function(event){
            event.stopPropagation();
        })

// End: Modal 

// Begin: Header
var menuBtn = document.querySelector('.menu-btn')
var header = document.getElementById('header')
var headerHeight = header.clientHeight;

// show modal
menuBtn.addEventListener('click',function(){
    let isClosed = header.clientHeight === headerHeight;
    if(isClosed){
        header.style.height = 'auto';
    }
    else{
        header.style.height = null;
    }
})


// close modal
var menuItems = document.querySelectorAll('#nav li a[href*="#"]')

menuItems.forEach(item => {
    item.addEventListener('click',(e)=>{
        var isParent = item.nextElementSibling && item.nextElementSibling.classList.contains('subnav');
        if(isParent){
            e.preventDefault();
        }else {
            header.style.height = null;
       }
    })
});

// End: Header