export function HandleLanguage(language) {
    let idiom
    switch(language){
        case 'en':
            idiom = 'Inglês';
            break;
        case 'pt':
            idiom ='Português'
            break;
        case 'fr':
            idiom = 'Francês'
            break;
        case 'tr' :
            idiom = 'Turco'
            break;
        case 'de':
            idiom ='Alemão'
            break;
        case 'it' :
            idiom ='Italiano'
            break;
        case 'es':
            idiom ='Espanhol'
            break;
        case 'ja':
            idiom = 'Japonês'
            break;
        case 'cn' :
            idiom ='Chinês'
            break;
        case 'az':
            idiom= 'Azeri'
            break;
        case 'nl':
            idiom= 'Holandês'
            break;
        case 'ru':
            idiom='Russo'
            break;
        default:
            idiom = `${language}-(não catalogado)`;
            break;
    }
    return idiom
}