let txt = new Texts ();

$(document).ready(function() {

    txt.verifyLanguage();

    txt.setTexts();
});

function chooseLanguage() {
    txt.chooseLanguage();
    txt.setTexts();
}