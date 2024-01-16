// TODO: Refactor validation function to follow the defined validations rules
const isValid = (gamerTag) => {
    // Le gamer tag doit contenir au moins 8 caractères
    if (gamerTag.length < 8) {
      return false;
    }
 
    // Le gamer tag doit contenir au moins un caractère spécial parmi &, $, !, è, §, à, _
    const specialCharacters = ['&', '$', '!', 'è', '§', 'à', '_'];
    if (!specialCharacters.some(char => gamerTag.includes(char))) {
      return false;
    }
 
    // Le gamer tag doit contenir au moins un chiffre
    if (!/\d/.test(gamerTag)) {
      return false;
    }
 
    return true;
  };
 
  exports.isValid = isValid;
