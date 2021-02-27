ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 
  's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


function VigenereCipher(key, alphabet = ALPHABET) {
  this.key = key;
  this.alphabet = alphabet;

  this.cipherChar = function(char, index) {
    // @alphabet[(@alphabet.index(c) + @alphabet.index(@key[index])) % @alphabet.size]
    const key = this.key
    const alphabet = this.alphabet
    
    // TODO: handle out of bounds
    if (index < 0 || index >= key.length) {
      return undefined;
    }

    if (alphabet.indexOf(char) < 0) {
      return undefined;
    }
    
    const cipheredCharIndex = (alphabet.indexOf(char) + alphabet.indexOf(key[index])) % alphabet.length;
    const cipheredChar = alphabet[cipheredCharIndex];

    return cipheredChar;
  };

  this.cipherMessage = function (message) {
    // Limpiar el mensaje (eliminar espacios \n \t, poner todo a lowercase)


    // Descomponer la cadena en letras y cifrar cada una para formar el mensaje cifrado
    
    let keyIndex = 0;
    let cipheredMessage = "";

    message.split('').map( letter => {
      let cipheredChar = this.cipherChar(letter, keyIndex % this.key.length);
      if (cipheredChar) {
        cipheredMessage += cipheredChar;
        keyIndex++;
      }
    });

    return cipheredMessage;
  };


}


const vigenere = new VigenereCipher('mision');
console.log(vigenere.cipherMessage('este mensaje se autodestruira'));

