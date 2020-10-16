
let Textos = function () {

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
                'buttonLang': 'Translate for English',
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
                'buttonLang': 'Traduzir para Português',
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
        $('.textIdiom').html(txt.getTexto("textIdiom"));
        $('.buttonLang').html(txt.getTexto("buttonLang"));
        $('.translateHeader').html(txt.getTexto("translateHeader"));
        $('.translateVisit').html(txt.getTexto("translateVisit"));
        $('.translateLocation').html(txt.getTexto("translateLocation"));
        $('.TranslateTextOneOrphanages').html(txt.getTexto("TranslateTextOneOrphanages"));
        $('.TranslateTextPOneOrphanages').html(txt.getTexto("TranslateTextPOneOrphanages"));
        $('.TranslateTextInstructionsOrphanage').html(txt.getTexto("TranslateTextInstructionsOrphanage"));
        $('.TranslateWeekendYes').html(txt.getTexto("TranslateWeekendYes"));
        $('.TranslateWeekendNot').html(txt.getTexto("TranslateWeekendNot"));
        $('.TranslateContactText').html(txt.getTexto("TranslateContactText"));
        $('.translateRoutesText').html(txt.getTexto("translateRoutesText"));
        $('.titleTranslateOrphanage').html(txt.getTexto("titleTranslateOrphanage"));
        $('.legendTranslateOrphanage').html(txt.getTexto("legendTranslateOrphanage"));
        $('.touchInMapTranslateOrphanage').html(txt.getTexto("touchInMapTranslateOrphanage"));
        $('.NameTranslateOrphanage').html(txt.getTexto("NameTranslateOrphanage"));
        $('.AboutTranslateOrphanage').html(txt.getTexto("AboutTranslateOrphanage"));
        $('.NumberWTranslateOrphanage').html(txt.getTexto("NumberWTranslateOrphanage"));
        $('.PhotoTranslateOrphanage').html(txt.getTexto("PhotoTranslateOrphanage"));
        $('.VisitionTranslateOrphanage').html(txt.getTexto("VisitionTranslateOrphanage"));
        $('.InstructionsTranslateOrphanage').html(txt.getTexto("InstructionsTranslateOrphanage"));
        $('.HourVisitionTranslateOrphanage').html(txt.getTexto("HourVisitionTranslateOrphanage"));
        $('.OpenWeekendTranslateOrphanage').html(txt.getTexto("OpenWeekendTranslateOrphanage"));
        $('.yesTranslateWeekeend').html(txt.getTexto("yesTranslateWeekeend"));
        $('.noTranslateWeekeend').html(txt.getTexto("noTranslateWeekeend"));
        $('.translateSubmitButton').html(txt.getTexto("translateSubmitButton"));

    }

}