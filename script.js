hamberger=document.querySelector('.hamberger');
navi = document.querySelector('.navi');
hamberger.addEventListener('click',()=>{
    navi.classList.remove('hidden')
navi.classList.add('flex');
hamberger.classList.remove('block')
hamberger.classList.add('hidden')

})


arr = document.querySelectorAll('.navi a');
arr.forEach(item => {
    item.addEventListener('click', () => {
        hamberger.classList.remove('hidden');
        hamberger.classList.add('block');
        navi.classList.remove('flex');
        navi.classList.add('hidden');
    });
});