let openModalBtn = document.querySelectorAll('[data-modal-target]');
let closeModalBtn = document.querySelectorAll('[data-close-button]');
let overlay = document.getElementById('overlay');

openModalBtn.forEach(button => {
    button.addEventListener('click', ()=>{
       let modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
});

closeModalBtn.forEach(button => {
    button.addEventListener('click', ()=>{
         modal = button.closest('.modal');
        closeModal(modal);
    })
});

overlay.addEventListener('click', ()=>{
    let modal = document.querySelectorAll('.modal.active');
    modal.forEach(modal =>{
        closeModal(modal);
    })
})

function openModal(modal){
    if(modal == null) return
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal){
    if(modal == null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');

}

