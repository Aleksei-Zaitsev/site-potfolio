'use strict'

document.addEventListener('DOMContentLoaded', () => {

    // Появление менюшки сверху при прокрутке вниз

    const menu = document.querySelector('[data-menu]');

    window.addEventListener('scroll', () => {

        if (window.pageYOffset > 900) {
            menu.classList.add('menu-scroll');
        } else {
            menu.classList.remove('menu-scroll');
        }
        
    });

    // Menu adaptive 

    const menuAdaptive = document.querySelector('.menu-adaptive-block'),
        burger = document.querySelector('.burger'),
        menuBtn = document.querySelector('.menu-close'),
        menuItems = document.querySelectorAll('menu-adpative a');
    
    burger.addEventListener('click', openMenu);

    menuAdaptive.addEventListener('click', (e) => {
        if (e.target || e.target === menuBtn || e.target === menuItems) {
            menuAdaptive.classList.remove('menu-active');
        }
    });

   

    function openMenu() {
        menuAdaptive.classList.add('menu-active');
    }

    // Отправка формы 


    const form = document.querySelector('form');
    
    const thanksModal = document.getElementById('thanks-modal');

    form.addEventListener('submit', formSend);

    async function formSend(event) {
        event.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);
        
        if (error === 0) {
            form.classList.add('_sending');
            console.log(formData);

            let response = await fetch('mail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                showModal();
                let result = await response.json();
                alert(result.message);
                form.reset();
                form.classList.remove('_sending');
            } else {
                alert('Ошибка!');
                form.reset();
                form.classList.remove('_sending');
            }
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.value === '') {
                formAddError(input);
                error++;
            }

        }

        return error;
    }  

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    // Функция проверки почты
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }


    // Попап спасибо

    const closeBtn = document.getElementById('modal-close');

    console.log(closeBtn);

    thanksModal.addEventListener('click', (e) => {
        console.log(e.target);
        if (e.target || e.target === closeBtn) {
            closeModal();
        }
    });

    function showModal() {
        thanksModal.classList.add('modal-show');
        thanksModal.classList.remove('modal-swipe');
    };

    function closeModal() {
        thanksModal.classList.remove('modal-show');
        thanksModal.classList.add('modal-swipe');
    };

});