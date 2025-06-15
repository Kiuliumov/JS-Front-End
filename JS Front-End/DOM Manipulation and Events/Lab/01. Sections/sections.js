document.addEventListener('DOMContentLoaded', solve);

function solve() {
   const arrayOfStrings = document.querySelector('input[type="text"]').value.split(',');
   const content = document.querySelector('#content');

   arrayOfStrings.forEach(e=> {
         const div = document.createElement('div');
         const p = document.createElement('p');

         p.textContent = e;
         div.appendChild(p);
         content.appendChild(div);
   });
}