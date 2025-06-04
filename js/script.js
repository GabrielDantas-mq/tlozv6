let galeriaAberta = false;
    function toggleGaleria() {
             const galeria = document.getElementById('galeria-lateral');
                const btn = document.getElementById('btn-galeria');

             if (galeriaAberta) {
                    galeria.style.right = '-300px';
                    btn.innerHTML = '➤';
            } else {
                    galeria.style.right = '0';
                    btn.innerHTML = '❮';
            }
    galeriaAberta = !galeriaAberta;
}


$('#regioes-mapa #hyrule').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
});
