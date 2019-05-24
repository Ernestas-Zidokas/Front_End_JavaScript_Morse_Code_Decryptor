const morseCodeList = [ {'-.-.--': '!'},
{'.-..-.': '"'},
{'...-..-': '$'},
{'.-...': '&'},
{'.----.': '\''},
{'-.--.': '('},
{'-.--.-': ')'},
{'.-.-.': '+'},
{'--..--': ','},
{'-....-': '-'},
{'.-.-.-': '.'},
{'-..-.': '/'},
{'-----': '0'},
{'.----': '1'},
{'..---': '2'},
{'...--': '3'},
{'....-': '4'},
{'.....': '5'},
{'-....': '6'},
{'--...': '7'},
{'---..': '8'},
{'----.': '9'},
{'---...': ':'},
{'-.-.-.': ';'},
{'-...-': '='},
{'..--..': '?'},
{'.--.-.': '@'},
{'.-': 'A'},
{'-...': 'B'},
{'-.-.': 'C'},
{'-..': 'D'},
{'.': 'E'},
{'..-.': 'F'},
{'--.': 'G'},
{'....': 'H'},
{'..': 'I'},
{'.---': 'J'},
{'-.-': 'K'},
{'.-..': 'L'},
{'--': 'M'},
{'-.': 'N'},
{'---': 'O'},
{'.--.': 'P'},
{'--.-': 'Q'},
{'.-.': 'R'},
{'...': 'S'},
{'-': 'T'},
{'..-': 'U'},
{'...-': 'V'},
{'.--': 'W'},
{'-..-': 'X'},
{'-.--': 'Y'},
{'--..': 'Z'},
{'..--.-': '_'},
{'...---...': 'SOS'} ];

function decodeMorse(morseCode) {
  const morseCodeArray = morseCode.split('   ');
  let coddedWordsArray = morseCodeArray.reduce((result, word) => {
    result.push(word.split(' '));
    return result;
  }, []);

  let decodedSentenceArray = coddedWordsArray.reduce((result, coddedWord) => {
    let decodedSentence = coddedWord.reduce((result, char) => {
      let decodedWord = morseCodeList.reduce((result, code) => {
        if(code[char] !== undefined) {
          result.push(code[char]);
        }
        return result;
      }, []);
      result.push(decodedWord.join(''));
      return result;
    },[]);
    result.push(decodedSentence);
    return result;
  }, []);

  let decodedJoinedSentence = decodedSentenceArray.map(word => {
    return word.join('');
  });

  return decodedJoinedSentence.join(' ').trim();
}

decodeMorse('.... . -.--   .--- ..- -.. .'); // HEY JUDE
