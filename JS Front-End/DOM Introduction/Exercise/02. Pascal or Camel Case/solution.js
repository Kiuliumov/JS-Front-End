function solve() {
  const text = document.getElementById('text').value.toLowerCase();
  const namingConvention = document.getElementById('naming-convention').value;
  let result = '';
  const allWords = text.split(' ');
  if(namingConvention == 'Camel Case'){
    result += allWords[0];
    for (const word of allWords.slice(1)) {
        const capitalizedWord = word[0].toUpperCase() + word.slice(1);
        result += capitalizedWord;
    }
  } else if(namingConvention == 'Pascal Case'){
    for (const word of allWords) {
        const capitalizedWord = word[0].toUpperCase() + word.slice(1);
        result += capitalizedWord;
    }
  } else {
    result += 'Error!';
  }

  const resultField = document.getElementById('result');
  resultField.innerText = result;
}
