// Добавьте картинку на страницу. При наведении на картинку мышкой необходимо
// ее изменять на другую картинку. Но как только мышка снова отходит в сторону, то
// возвращается первая картинка
const img = document.querySelector('img');

img.addEventListener('mouseover', function () {
    img.src = './HS1.png';
})

img.addEventListener('mouseout', function () {
    img.src = './HS2.png';
})