$(document).ready(function () {
// Adiciona classe 'active' ao clicar em um link da navbar
$('.navbar-nav .nav-link').on('click', function (e) {
    e.preventDefault();

    // Remove a classe 'active' de todos os links da navbar
    $('.navbar-nav .nav-link').removeClass('active');

    // Adiciona a classe 'active' ao link clicado
    $(this).addClass('active');

    // Obtém o ID da seção associada ao link clicado
    var targetId = $(this).attr('href').substring(1);
    if (!targetId && $(this).hasClass('dropdown-item')) {
        // Se for um link dentro do menu "More", obtenha o ID da seção associada diretamente
        targetId = $(this).attr('data-target');
    }

    // Calcula o deslocamento considerando a altura da barra de navegação e uma margem adicional menor
    var offset = $('#' + targetId).offset().top - $('.navbar').height();

    // Fecha o menu ao clicar em um link se a largura da janela for menor que 992
    if (window.innerWidth < 992) {
        $('.navbar-toggler').click(); // Fecha o menu
        offset += 200; // Adiciona margem adicional apenas para telas pequenas
    }

    // Anima a rolagem para a seção
    $('html, body').animate({
        scrollTop: offset
    }, 500);
});





    // Adiciona classe 'active' ao clicar em um link da navbar
    $('.navbar-nav .nav-link').on('click', function () {
        // Remove a classe 'active' de todos os links da navbar
        $('.navbar-nav .nav-link').removeClass('active');
        // Adiciona a classe 'active' ao link clicado
        $(this).addClass('active');
        // Fecha o menu ao clicar em um link se a largura da janela for menor que 992
        if (window.innerWidth < 992) {
            $('.navbar-toggler').click(); // Fecha o menu
        }
    });

    // Fecha o menu "More" ao clicar em um link do menu suspenso "More"
    $('.navbar-nav .dropdown-item').on('click', function () {
        $('.navbar-toggler').click(); // Fecha o menu
    });

    // Fecha o menu ao clicar fora do menu suspenso "More" ou do botão da barra de navegação se a largura da janela for menor que 992
    $(document).on('click', function (e) {
        if (window.innerWidth < 992) {
            if (!$(e.target).closest('.navbar-collapse, .navbar-toggler, .navbar-nav .dropdown').length) {
                $('.navbar-toggler').click(); // Fecha o menu
            }
        }
    });
});
