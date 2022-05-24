var mudarCor = document.querySelector('.mudarColor');
var mudarBlack = document.querySelector('.mudarBlack');
function mudar(e){
    var img = document.querySelector('.img-ctn');
    if(e.target.className == 'mudarColor')
    {
        img.src = '../image/white-t-shirt-mockup.webp'
        img.alt = 'camisa da mockup branca'
    }
    function mudarB (e){
        var img = document.querySelector('.img-ctn');
        if(e.target.className == 'mudarBlack'){
            img.src = '../image/black-t-shirt-mockup.webp'
        }
    }
    mudarBlack.addEventListener('click',mudarB)
}

mudarCor.addEventListener('click',mudar);