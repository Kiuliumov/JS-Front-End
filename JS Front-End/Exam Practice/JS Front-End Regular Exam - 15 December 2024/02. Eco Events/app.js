function solve() {

  function nextButtonEvent(e){
      const ul = document.querySelector('#preview-list');
      
      const email = document.querySelector('#email');
      const eventName = document.querySelector('#event');
      const location = document.querySelector('#location');

      const emailVal = email.value;
      const eventVal = eventName.value;
      const locationVal = location.value;

    
      const li = document.createElement('li');
      ul.appendChild(li);
      li.classList.add('application');
      const article = document.createElement('article');
      li.appendChild(article);
      const h4 = document.createElement('h4');
      h4.innerText = emailVal;
      article.appendChild(h4);     
    

      const p = document.createElement('p');
      const strong = document.createElement('strong');
      const text = document.createTextNode(`${eventVal}`);
      strong.textContent = 'Event:'
      const br = document.createElement('br');
      p.appendChild(strong);
      p.appendChild(br);
      p.appendChild(text);
      article.appendChild(p);


      const p1 = document.createElement('p');
      const strong1 = document.createElement('strong');
      strong1.innerText = 'Location:';
      const br1 = document.createElement('br');
      const texta = document.createTextNode(`${locationVal}`);
      p1.appendChild(strong1);
      p1.appendChild(br1);
      p1.appendChild(texta);
      article.appendChild(p1);

      const editbtn = document.createElement('button');
      editbtn.classList.add('action-btn', 'edit');
      const applybtn = document.createElement('button');
      applybtn.classList.add('action-btn', 'apply');
      editbtn.textContent = 'edit';
      applybtn.textContent = 'apply';


      editbtn.addEventListener('click', editButtonEvent);
      applybtn.addEventListener('click', applyButtonEvent);


      li.appendChild(editbtn);
      li.appendChild(applybtn);

      e.target.disabled = true;
      email.value = '';
      eventName.value = '';
      location.value = '';

  
  }

  function editButtonEvent(e){
      const email = document.querySelector('#email');
      const eventName = document.querySelector('#event');
      const location = document.querySelector('#location');

    const li = e.target.parentNode;
        email.value = li.querySelector('h4').textContent;
        eventName.value = li.querySelectorAll('p')[0].childNodes[2].textContent;
        location.value = li.querySelectorAll('p')[1].childNodes[2].textContent;
        nextButton.disabled = false;
        li.remove();

  }


  function applyButtonEvent(e){
    const ul = document.querySelector('#event-list')
    const li = document.createElement('li');
    li.classList.add('application');
    const article = e.target.parentNode.querySelector('article');
    e.target.parentNode.remove();

    li.appendChild(article);
    ul.appendChild(li);
    nextButton.disabled = false;

  }
  
  const nextButton = document.querySelector('#next-btn');
  nextButton.addEventListener('click', nextButtonEvent);
}


window.addEventListener("load", solve)

