let cross = document.querySelector('.cross');
cross.addEventListener('click', (e) => {
    let modal = document.querySelector('.modal');
    modal.style.display = 'none';

    e.preventDefault()
})

let btn = document.querySelector('.btn1');
btn.addEventListener('click', () => {
    let modal = document.querySelector('.modal');
    modal.style.display = 'flex';
})