function search() {
   const target = document.getElementById('searchText').value;
   const ul = document.getElementById('towns');
   const result = document.getElementById('result');
   let matches = 0;

   for (const li of ul.getElementsByTagName('li')) {
      li.style.textDecoration = 'none';
      li.style.fontWeight = 'normal';

      if(li.textContent.includes(target)){
         matches += 1;
         li.style.textDecoration = 'underline';
         li.style.fontWeight = 'bold';
         
      }
   }

   result.innerText = matches + ' matches found';

}
