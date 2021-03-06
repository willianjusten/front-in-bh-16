Reveal.initialize({
    controls: false,
    progress: false,
    history: true,
    center: true,

    transition: 'fade', // none/fade/slide/convex/concave/zoom

    // Optional reveal.js plugins
    dependencies: [
        { src: '/js/vendor/classList.js', condition: function() { return !document.body.classList; } },
        { src: 'js/vendor/notes/notes.js', async: true }
    ]
});

var horaShow = false;
function hora() {
    if(!horaShow) {
        var audio = new Audio('musics/hora-do-show.mp3');
        audio.play();
        horaShow = true;
    }
}

var naoVai = false;
function daNao() {
    if(!naoVai) {
        var audio = new Audio('musics/que-num-vai-da-pai.mp3');
        audio.play();
        naoVai = true;
    }
}

Reveal.addEventListener('hora', hora);
Reveal.addEventListener('nao', daNao);