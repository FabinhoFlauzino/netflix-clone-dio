const closeModal = document.querySelector('.btn')
const modal = document.querySelector('#modal')
const modalBody = document.querySelector('.modal-body')
const btnInfo = document.querySelector('.informacao')
const body = document.querySelector('body')
const btnAssistir = document.querySelector('.assistir')
const btnAdd = document.querySelector('.add')
const btnCurtir = document.querySelector('.curtir')
const btnDescurtir = document.querySelector('.descurtir')

if (modalBody) {
    modalBody.addEventListener('click', e =>{
        modal.classList.add('close')
        body.style.overflow = ''
    })
}

if (closeModal) {
    closeModal.addEventListener('click', e => {
        modal.classList.add('close')
        body.style.overflow = ''
    })
}

if (btnInfo) {
    btnInfo.addEventListener('click', e => {
        modal.classList.remove('close')
        body.style.overflow = 'hidden'
    })
}

if (btnAssistir) {
    btnAssistir.addEventListener('click', e => {
        window.open("https://www.youtube.com/watch?v=6yIeotFLFcs", "_blank")
    })
}

if (btnAdd) {
    btnAdd.addEventListener('click', e =>{
        btnAdd.innerHTML = "Adicionado a playlist"
        btnAdd.style.color = '#54c871'

        setTimeout(() => {
            btnAdd.innerHTML = ""
            btnAdd.style.color = ''
        }, 1500); 
    })
}

if (btnCurtir) {
    btnCurtir.addEventListener('click', e =>{
        btnCurtir.innerHTML = "Gostei"
        btnDescurtir.innerHTML = ""
        btnCurtir.style.color = '#54c871'
        btnDescurtir.style.color = '#faf9f9'
        setTimeout(() => {
            btnCurtir.innerHTML = ""
        }, 1000); 
    })
}

if (btnDescurtir) {
    btnDescurtir.addEventListener('click', e =>{
        btnDescurtir.innerHTML = "Não é pra mim"
        btnCurtir.innerHTML = ""
        btnDescurtir.style.color = '#E50914'
        btnCurtir.style.color = '#faf9f9'
        setTimeout(() => {
            btnDescurtir.innerHTML = ""
        }, 1000); 
    })
}

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})