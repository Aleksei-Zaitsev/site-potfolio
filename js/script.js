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


    // Potfolio tabs 

    const portfolioBtn1 = document.querySelectorAll('.portfolio-item-text')[0],
        portfolioBtn2 = document.querySelectorAll('.portfolio-item-text')[1],
        portfolioBtn3 = document.querySelectorAll('.portfolio-item-text')[2],
        portfolioBtn4 = document.querySelectorAll('.portfolio-item-text')[3],
        portfolioCard1 = document.querySelectorAll('.portfolio_card_area')[0],
        portfolioCard2 = document.querySelectorAll('.portfolio_card_area')[1],
        portfolioCard3 = document.querySelectorAll('.portfolio_card_area')[2],
        portfolioCard4 = document.querySelectorAll('.portfolio_card_area')[3],
        portfolioCardBtnClose1 = document.querySelectorAll('.porfolio_card_close')[0],
        portfolioCardBtnClose2 = document.querySelectorAll('.porfolio_card_close')[1],
        portfolioCardBtnClose3 = document.querySelectorAll('.porfolio_card_close')[2],
        portfolioCardBtnClose4 = document.querySelectorAll('.porfolio_card_close')[3];
    


    // 1

    portfolioBtn1.addEventListener('click', openPorfolioCard1);

    portfolioCard1.addEventListener('click', (e) => {
        console.log(e.target);
        if (e.taget === portfolioCard1 || e.target.classList.contains('card_active')) {
            closePortfolioCard1();
        }
    });

    portfolioCardBtnClose1.addEventListener('click', closePortfolioCard1);


    function openPorfolioCard1() {
        portfolioCard1.classList.add('card_active');
        document.body.style.overflow = 'hidden';
    }

    function closePortfolioCard1() {
        portfolioCard1.classList.remove('card_active');
        document.body.style.overflow = '';
    }

    //2

    portfolioBtn2.addEventListener('click', openPorfolioCard2);

    portfolioCard2.addEventListener('click', (e) => {
        console.log(e.target);
        if (e.taget === portfolioCard2 || e.target.classList.contains('card_active')) {
            closePortfolioCard2();
        }
    });

    portfolioCardBtnClose2.addEventListener('click', closePortfolioCard2);


    function openPorfolioCard2() {
        portfolioCard2.classList.add('card_active');
        document.body.style.overflow = 'hidden';
    }

    function closePortfolioCard2() {
        portfolioCard2.classList.remove('card_active');
        document.body.style.overflow = '';
    }

    // 3

    portfolioBtn3.addEventListener('click', openPorfolioCard3);

    portfolioCard3.addEventListener('click', (e) => {
        console.log(e.target);
        if (e.taget === portfolioCard3 || e.target.classList.contains('card_active')) {
            closePortfolioCard3();
        }
    });

    portfolioCardBtnClose3.addEventListener('click', closePortfolioCard3);


    function openPorfolioCard3() {
        portfolioCard3.classList.add('card_active');
        document.body.style.overflow = 'hidden';
    }

    function closePortfolioCard3() {
        portfolioCard3.classList.remove('card_active');
        document.body.style.overflow = '';
    }

    // 4

    portfolioBtn4.addEventListener('click', openPorfolioCard4);

    portfolioCard4.addEventListener('click', (e) => {
        console.log(e.target);
        if (e.taget === portfolioCard4 || e.target.classList.contains('card_active')) {
            closePortfolioCard4();
        }
    });

    portfolioCardBtnClose4.addEventListener('click', closePortfolioCard4);


    function openPorfolioCard4() {
        portfolioCard4.classList.add('card_active');
        document.body.style.overflow = 'hidden';
    }

    function closePortfolioCard4() {
        portfolioCard4.classList.remove('card_active');
        document.body.style.overflow = '';
    }
});