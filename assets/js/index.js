// Скрипт для слайдера swiperjs
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 10, // Расстояние между карточками
        loop: true, // Бесконечный цикл
        autoplay: {
            delay: 2000, // Автопрокрутка каждые 2 секунды
            disableOnInteraction: false, // Не останавливать при клике
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: { slidesPerView: 1 }, // На маленьких экранах - 1 слайд
            768: { slidesPerView: 2 }, // На планшетах - 2 слайда
            1024: { slidesPerView: 3 } // На десктопах - 3 слайда
        }
    });
});

// Изменение текста "В корзину" на "В корзине (1)"
document.querySelectorAll('.in-basket').forEach(button => {
    button.addEventListener('click', function () {
        this.textContent = 'В корзине (1)';
        this.style.backgroundColor = '#E53A43'; 
    });
});


// Создание скрипта для переключающегося блока описаний товара на странице товара
function openTab(event, tabId) {
    // Убираем активность у всех вкладок и контента
    document.querySelectorAll('.tab-link').forEach(button => button.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    // Активируем выбранную вкладку и её контент
    event.currentTarget.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}



// Создание скрипта для переключающегося блока обзоров, faq и т.д.
function openTabReview(event, tabId) {
    // Убираем активность у всех вкладок и контента
    document.querySelectorAll('.review-toogle-btn').forEach(button => button.classList.remove('active-1'));
    document.querySelectorAll('.tab-content-review').forEach(content => content.classList.remove('active-1'));

    // Активируем выбранную вкладку и её контент
    event.currentTarget.classList.add('active-1');
    document.getElementById(tabId).classList.add('active-1');
}




// создание скрипта для переключеиня блока отзывов для страницы товара
function toggleFeedback(event, tabId) {
    let button = event.currentTarget;
    let feedbackBlock = document.getElementById(tabId);
    let feedbackList = document.querySelector('.feedbacks-block');

    if (feedbackBlock.classList.contains('active-2')) {
        // Закрываем окно отзыва
        feedbackBlock.classList.remove('active-2');
        feedbackList.style.display = 'block';
        button.textContent = 'Написать отзыв';
        button.style.backgroundColor = '#1B335A';
    } else {
        // Открываем окно отзыва
        feedbackBlock.classList.add('active-2');
        feedbackList.style.display = 'none';
        button.textContent = 'Отменить';
        button.style.backgroundColor = '#E53A43'; // изменение цвета кнопки при открытии
    }
}



// Получаем все элементы с классом 'video-thumbnail'
const videoThumbnails = document.querySelectorAll('.video-thumbnail');

videoThumbnails.forEach(function(videoThumbnail) {
    videoThumbnail.addEventListener('click', function() {
        // Находим родительский элемент video-card
        let videoCard = videoThumbnail.closest('.video-card');
        let videoContainer = videoCard.querySelector('.video-container'); // Получаем контейнер видео
        
        // Показываем видео и скрываем превью
        videoContainer.style.display = 'block';
        videoThumbnail.style.display = 'none';
    });
});


// Создание скрипта для блока FAQ
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        const isActive = parent.classList.contains('active');

        document.querySelectorAll('.faq-item').forEach(q => q.classList.remove('active'));

        if (!isActive) {
            parent.classList.add('active');
        }
    });
});



// наведение и заполнение звезд при написании отзыва товара
const stars = document.querySelectorAll('.star');
let selectedValue = 0;

stars.forEach(star => {
    star.addEventListener('mouseover', function () {
        let value = this.getAttribute('data-value');
        fillStars(value);
    });

    star.addEventListener('mouseout', function () {
        fillStars(selectedValue); // Возвращаемся к сохранённому значению
    });

    star.addEventListener('click', function () {
        selectedValue = this.getAttribute('data-value');
        fillStars(selectedValue);
    });
});

function fillStars(value) {
    stars.forEach(star => {
        if (star.getAttribute('data-value') <= value) {
            star.classList.add('filled');
        } else {
            star.classList.remove('filled');
        }
    });
}



// Скрипт для открытия диалогового окна редактирования данных аккаунта пользователя
// Получаем модальное окно
const modal = document.getElementById("edit-info-modal");
// Получаем кнопку, которая открывает модальное окно
const btn = document.getElementById("open-edit-info-modal");
// Получаем элемент <span>, который закрывает модальное окно
const span = document.getElementsByClassName("close")[0];


// Когда пользователь нажимает на кнопку, открываем модальное окно
btn.onclick = function() {
    modal.style.display = "flex";
}
// Когда пользователь нажимает на <span> (x), закрываем модальное окно
span.onclick = function() {
    modal.style.display = "none";
}
// Когда пользователь нажимает в любом месте вне модального окна, закрываем его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




// Смена имена пользователя при редактировании

    const save_btn = document.querySelector('.save')

    const form = document.querySelector(".edit-info-form")

form.addEventListener('submit', (event) => {
    const name = document.querySelector('#user-name')
    const name_input = document.querySelector('#user-name-input')
    
    const fullname = document.querySelector('#user-fullname')
    const fullname_input = document.querySelector('#user-fullname-input')

    const email = document.querySelector('#user-email')
    const email_input = document.querySelector('#user-email-input')

    event.preventDefault(); // Отменяем действие по умолчанию (отправку формы)
    name.textContent = name_input.value
    fullname.textContent = fullname_input.value
    email.textContent = email_input.value
    

    alert('Данные успешно изменены!')
});



