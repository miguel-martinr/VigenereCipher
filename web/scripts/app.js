
import {VigenereCipher} from './vigenere-cipher.js'

let showKey = false;
let vigenere = new VigenereCipher();

function toggleKeyView() {
  let keyCheckBox = document.getElementById('keyCheckBox');
  let keyInput = document.getElementById('keyInput');
  
  showKey = !showKey;
  if (showKey) {
    keyInput.type = 'text';
  } else {
    keyInput.type = 'password';
  }
}


function cipherMessage() {
  let message = document.getElementById('message').value;
  let cipheredMessage = vigenere.cipherMessage(message);

  document.getElementById('cipheredMessage').value = cipheredMessage;
}

function decipherMessage() {
  let cipheredMessage = document.getElementById('cipheredMessage').value;
  let message = vigenere.decipherMessage(cipheredMessage);

  document.getElementById('message').value = message;
}

function updateKey() {
  let newKey = document.getElementById('keyInput').value;
  if (newKey) {
    vigenere.key = newKey;
  }
}

window.updateKey = updateKey;
window.decipherMessage = decipherMessage;
window.cipherMessage = cipherMessage;
window.toggleKeyView = toggleKeyView; 
window.vigenere = vigenere;

