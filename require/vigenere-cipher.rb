ALPHABET = %w[a b c d e f g h i j k l m n o p q r s t u v w x y z]

class VigenereCipher

  def initialize(key, alphabet = ALPHABET)
    @key, @alphabet = key.downcase, alphabet
  end

  def cipher_message(message)
    i = 0    # Iterates over key
    ciphered_msg = ""
    message.gsub(/[ |\n|\t]/, '')
      .downcase
      .each_char do |c|
        ciphered_msg << cipher_char(c, i % @key.size)
        i += 1
      end
    ciphered_msg
  end

  def cipher_char(c, index)
    @alphabet[(@alphabet.index(c) + @alphabet.index(@key[index])) % @alphabet.size]
  end

  
  def decipher_message(message)
    i = 0    # Iterates over key
    deciphered_msg = ""
    message.gsub(/[ |\n|\t]/, '')
    .downcase
    .each_char do |c|
      deciphered_msg << decipher_char(c, i % @key.size)
      i += 1
    end
    deciphered_msg
  end

  def decipher_char(c, index)
    @alphabet[(@alphabet.index(c) - @alphabet.index(@key[index])) % @alphabet.size]
  end


end