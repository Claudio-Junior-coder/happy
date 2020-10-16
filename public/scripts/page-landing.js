let txt = new Textos ();

$(document).ready(function() {

    txt.verificaLingua();

    txt.setTextos();
});

function trocarLinguagem() {
    txt.trocaLingua();
    txt.setTextos();
}