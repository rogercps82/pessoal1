
//efeito de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({

            behavior: 'smooth'

        });

    });

});


document.querySelector('#scrollToButton').addEventListener('click', function() {
    var targetElement = document.querySelector('#targetElement');
    var scrollContainer = document.querySelector('#scrollContainer');

    if (targetElement && scrollContainer) {
        scrollContainer.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
});


//Menu responsivo hamburguer//

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "/imagens/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "/imagens/close_white_36dp.svg";
    }
}

//formulario de contato//

document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let name = formData.get('name');
    let email = formData.get('email');
    let subject = formData.get('subject');
    let message = formData.get('message');
    
    console.log(`Nome: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Assunto: ${subject}`);
    console.log(`Mensagem: ${message}`);
});
