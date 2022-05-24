var shop = document.querySelector('.shop');
var drop = true;
function shopDawn(){
    let bgShop = document.querySelector('.menu-shop');
    bgShop.classList.toggle('on',drop);
    document.body.style.overflowY = drop ? 'hidden' : 'initial'
    drop = !drop
    console.log(drop)
}

shop.addEventListener('click',shopDawn)