let title = document.querySelector('.title')
let korish = document.querySelector('.korish')
let yashirish = document.querySelector('.yashirish')

korish.addEventListener('click', function() {
    title.classList.remove('hidden')
})
yashirish.addEventListener('click', function() {
    title.classList.add('hidden')
})
