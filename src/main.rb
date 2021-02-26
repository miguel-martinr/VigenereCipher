require_relative '../require/vigenere-cipher'

puts "Clave > "
key = gets.chomp
puts "Mensaje > "
msg = gets.chomp

vigenere = VigenereCipher.new(key)
ciphered_msg = vigenere.cipher_message(msg)
puts "Mensaje cifrado > " + ciphered_msg
puts "Mensaje descifrado > " + vigenere.decipher_message(ciphered_msg)