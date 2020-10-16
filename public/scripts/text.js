
let Texts = function () {

    let tongue;
    let self = this;

    self.verifyLanguage = function(){
        let aux = localStorage.getItem('tongue');
        if(aux === null){
            tongue = "pt";
        } else {
            tongue = aux;
        }
    }

    self.setLanguage = function(speech) {
        if(speech === 'pt' || speech === 'en') {
            localStorage.setItem("tongue", speech);
            tongue = speech;
            return true;
        } else {
            return false;
        }
    }

    self.chooseLanguage = function() {
        if(tongue === "pt"){
            self.setLanguage('en');
        } else {
            self.setLanguage('pt');
        }
    }

    self.getLanguage = function(){
        return tongue
    }

    self.getText = function(type){
        if (tongue == "pt") {
            let array = {
                'textIdiom': 'Escolha um idioma:',
                'buttonLang': 'Translate for English &nbsp; <img class="img-banders" src="https://images.emojiterra.com/google/android-11/512px/1f1fa-1f1f8.png" >',
                'translateHeader': 'Leve felicidade para o mundo',
                'translateVisit': 'Visite orfanatos e mude o dia de muitas crianças',
                'translateLocation': 'Localize um orfanato | Happy',
                'TranslateTextOneOrphanages': 'Escolha um orfanato no mapa',
                'TranslateTextPOneOrphanages': 'Muitas crianças estão esperando sua visita :)',
                'TranslateTextInstructionsOrphanage': 'Instruções para visita',
                'TranslateWeekendYes': 'Atendemos fim de semana',                
                'TranslateWeekendNot': 'Não Atendemos fim de semana',
                'TranslateContactText': 'Entrar em contato',
                'translateRoutesText': 'Ver rotas no Google Maps',
                'titleTranslateOrphanage': 'Adicionar um orfanato',
                'legendTranslateOrphanage': 'Dados',
                'touchInMapTranslateOrphanage': 'Clique no mapa para adicionar a localização',                
                'NameTranslateOrphanage': 'Nome',
                'AboutTranslateOrphanage': 'Sobre',
                'NumberWTranslateOrphanage': 'Número de whatsapp',
                'PhotoTranslateOrphanage': 'Foto',
                'VisitionTranslateOrphanage': 'Visitação',
                'InstructionsTranslateOrphanage': 'Instruções',
                'HourVisitionTranslateOrphanage': 'Horário das visitas',
                'OpenWeekendTranslateOrphanage': 'Atende fim de semana?',
                'yesTranslateWeekeend': 'Sim',
                'noTranslateWeekeend': 'Não',
                'translateSubmitButton': 'Confirmar'
            };

            return array[type];

        } else if(tongue === "en") {
            let array = {
                'textIdiom': 'Choose a language:',
                'buttonLang': 'Traduzir para Português &nbsp; <img class="img-banders" src="https://images.emojiterra.com/google/android-11/512px/1f1e7-1f1f7.png" >',
                'translateHeader': 'Bring happiness to the world',
                'translateVisit': `Visit orphanages and change many children's day`,
                'translateLocation': 'Locate an orphanage | Happy',
                'TranslateTextOneOrphanages': 'Choose an orphanage on the map',
                'TranslateTextPOneOrphanages': 'Many children are waiting for your visit :)',
                'TranslateTextInstructionsOrphanage': 'Visiting instructions',
                'TranslateWeekendYes': 'We serve weekend',
                'TranslateWeekendNot': 'We do not serve weekend',
                'TranslateContactText': 'Get in touch',
                'translateRoutesText': 'View directions on Google Maps',
                'titleTranslateOrphanage': 'Add an orphanage',                
                'legendTranslateOrphanage': 'Information',
                'touchInMapTranslateOrphanage': 'Click on the map to add the location',
                'NameTranslateOrphanage': 'Name',
                'AboutTranslateOrphanage': 'About',
                'NumberWTranslateOrphanage': 'Number of whatsapp',
                'PhotoTranslateOrphanage': 'Photo',
                'VisitionTranslateOrphanage': 'Visitation',
                'InstructionsTranslateOrphanage': 'Instructions',
                'HourVisitionTranslateOrphanage': 'Visiting hours',
                'OpenWeekendTranslateOrphanage': 'Attends weekend?',
                'yesTranslateWeekeend': 'Yes',
                'noTranslateWeekeend': 'No',
                'translateSubmitButton': 'Confirm'
            };

            return array[type];
        }
    }

    self.setTexts = function(){
        $('.textIdiom').html(txt.getText("textIdiom"));
        $('.buttonLang').html(txt.getText("buttonLang"));
        $('.translateHeader').html(txt.getText("translateHeader"));
        $('.translateVisit').html(txt.getText("translateVisit"));
        $('.translateLocation').html(txt.getText("translateLocation"));
        $('.TranslateTextOneOrphanages').html(txt.getText("TranslateTextOneOrphanages"));
        $('.TranslateTextPOneOrphanages').html(txt.getText("TranslateTextPOneOrphanages"));
        $('.TranslateTextInstructionsOrphanage').html(txt.getText("TranslateTextInstructionsOrphanage"));
        $('.TranslateWeekendYes').html(txt.getText("TranslateWeekendYes"));
        $('.TranslateWeekendNot').html(txt.getText("TranslateWeekendNot"));
        $('.TranslateContactText').html(txt.getText("TranslateContactText"));
        $('.translateRoutesText').html(txt.getText("translateRoutesText"));
        $('.titleTranslateOrphanage').html(txt.getText("titleTranslateOrphanage"));
        $('.legendTranslateOrphanage').html(txt.getText("legendTranslateOrphanage"));
        $('.touchInMapTranslateOrphanage').html(txt.getText("touchInMapTranslateOrphanage"));
        $('.NameTranslateOrphanage').html(txt.getText("NameTranslateOrphanage"));
        $('.AboutTranslateOrphanage').html(txt.getText("AboutTranslateOrphanage"));
        $('.NumberWTranslateOrphanage').html(txt.getText("NumberWTranslateOrphanage"));
        $('.PhotoTranslateOrphanage').html(txt.getText("PhotoTranslateOrphanage"));
        $('.VisitionTranslateOrphanage').html(txt.getText("VisitionTranslateOrphanage"));
        $('.InstructionsTranslateOrphanage').html(txt.getText("InstructionsTranslateOrphanage"));
        $('.HourVisitionTranslateOrphanage').html(txt.getText("HourVisitionTranslateOrphanage"));
        $('.OpenWeekendTranslateOrphanage').html(txt.getText("OpenWeekendTranslateOrphanage"));
        $('.yesTranslateWeekeend').html(txt.getText("yesTranslateWeekeend"));
        $('.noTranslateWeekeend').html(txt.getText("noTranslateWeekeend"));
        $('.translateSubmitButton').html(txt.getText("translateSubmitButton"));

    }

}