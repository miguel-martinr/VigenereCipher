


export function VigenereCipher(key = "mision", alphabet = []) {
    if (alphabet.length === 0) {
      alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    }

    this.key = key;
    this.alphabet = alphabet;

    this.cipherChar = function(char, index) {
      return this.charCipher(char, index);
    };

    this.decipherChar = function(char, index) {
      return this.charCipher(char, index, false);
    };

    this.cipherMessage = function(message) {
      return this.messageCipher(message)  ;
    };

    this.decipherMessage = function(message) {
      return this.messageCipher(message, false);
    };


    this.charCipher = function(char, index, cipher = true) {
      const key = this.key
      const alphabet = this.alphabet
      
      if (index < 0 || index >= key.length) {
        return undefined;
      }

      if (alphabet.indexOf(char) < 0) {
        return undefined;
      }
      
      const charIndex = alphabet.indexOf(char);
      const keyCharIndex = alphabet.indexOf(key[index]);
      
      const offset = charIndex + (cipher ? keyCharIndex : -keyCharIndex);
      const cipheredCharIndex = (offset < 0 ? alphabet.length + offset : offset) % alphabet.length;
      const result = alphabet[cipheredCharIndex];

      return result;
    };

    this.messageCipher = function(message, cipher = true) {

      let keyIndex = 0;
      let cipheredMessage = "";

      message.split('').map( letter => {
        let cipheredChar = cipher ?  this.cipherChar(letter, keyIndex % this.key.length) : this.decipherChar(letter, keyIndex % this.key.length);
        if (cipheredChar) {
          cipheredMessage += cipheredChar;
          keyIndex++;
        }
      });

      return cipheredMessage;
    };
};

 



