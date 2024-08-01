function solve() {
    const givenText = document.getElementById('input').value;
    const sentences = givenText.split('.').filter(sentence => sentence.trim() !== '');
    const result = document.getElementById('output');
    let sentencesToAdd = [];

    result.innerHTML = '';
  console.log(sentences.length)
    for (const sentence of sentences) {
      sentencesToAdd.push(sentence);
        if(sentencesToAdd.length + 8 == 11){
          result.innerHTML += '<p>' + sentencesToAdd.join('. ') + '.';
          console.log(sentencesToAdd)
          sentencesToAdd = [];
        }
    }


    if (sentencesToAdd.length > 0) {
      console.log(sentencesToAdd)
      result.innerHTML += '<p>' + sentencesToAdd.join('. ') + '.';
    }

}