function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const targetString = document.getElementById('searchField').value;
      const tableRecords = document.querySelectorAll('tbody tr');

      for(const tr of tableRecords){
            tr.classList.remove('select');
      }

      for (const tr of tableRecords) {
         if(targetString && tr.innerHTML.includes(targetString)){
            tr.classList.add('select');
         }
      }

      document.getElementById('searchField').value = '';
   }
}