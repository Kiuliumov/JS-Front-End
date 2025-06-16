window.addEventListener("load", solve);

function solve() {
  const newButton = document.querySelector('#add-btn');


  newButton.addEventListener('click', (e) => {
    const nameField = document.querySelector('#name');
    const name = nameField.value;
    const timeField = document.querySelector('#time');
    const time = timeField.value;
    const descriptionField = document.querySelector('#description');
    const description = descriptionField.value;
    const arrOfData = [name, time, description];

    if(name && time && description) {
      const ul = document.querySelector('#preview-list');
      const li = document.createElement('li');
      ul.appendChild(li);
      const article = document.createElement('article');
      li.appendChild(article);
      for(const data of arrOfData){
        const p = document.createElement('p');
        p.textContent = data;
        article.appendChild(p);
      }
      
      const div = document.createElement('div');
      div.classList.add('buttons');
      const editBtn = document.createElement('button');
      editBtn.classList.add('edit-btn');
      editBtn.textContent = 'Edit';

      editBtn.addEventListener('click', (e) =>{
        const li = e.currentTarget.closest('li');
        const paragraphs = li.querySelectorAll('p');
        const name = paragraphs[0].textContent;
        const date = paragraphs[1].textContent;
        const description = paragraphs[2].textContent;
        const nameField = document.querySelector('#name');
        const timeField = document.querySelector('#time');
        const descriptionField = document.querySelector('#description');

        nameField.value = name;
        timeField.value = date;
        descriptionField.value = description;

        newButton.disabled = false;
        ul.removeChild(li);
      });

      div.appendChild(editBtn);

      const nextBtn = document.createElement('button');
      nextBtn.classList.add('next-btn');
      nextBtn.textContent = 'Next'

      nextBtn.addEventListener('click', (e) => {
        const li = e.currentTarget.closest('li');
        li.removeChild(li.querySelector('.buttons'));
        li.parentNode.removeChild(li);
        const archiveList = document.querySelector('#archive-list');
        const archiveBtn = document.createElement('button');
        archiveBtn.classList.add('archive-btn');
        archiveBtn.textContent = 'Archive'
        archiveBtn.addEventListener('click', (e) =>{
          li.remove();
        });
        li.appendChild(archiveBtn);
        archiveList.appendChild(li);
        const newButton = document.querySelector('#add-btn');
        newButton.disabled = false;

      });

      div.appendChild(nextBtn);
      li.appendChild(div);

      nameField.value = '';
      timeField.value = '';
      descriptionField.value = '';

      e.currentTarget.disabled = true;
    }
  });
}
