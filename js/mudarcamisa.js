let btn = document.querySelector('.btn');

function clicou(){
    let div = document.querySelector('.card')[0];
    let show = document.getElementsByTagName('h2')[0].textContent
    let preco = document.getElementsByTagName('h3')[0].textContent
    let shop = document.querySelector('.menu-shop');
    shop.innerHTML = `<div class="show">
        <h2 id="add">adicionado</h2> <br> <h3 class="colorh3">${show}</h3>
        <br>
        <span class="preco">${preco}</span>
        <button>X</button>
    </div>`;
    let shopColor = document.querySelector('.shop i');
    shopColor.style.color = 'purple';
    shopColor.style.opacity = '0.6'
    
}
btn.addEventListener('click',clicou)