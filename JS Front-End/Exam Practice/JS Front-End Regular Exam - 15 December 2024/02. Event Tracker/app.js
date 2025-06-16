window.addEventListener("load", solve);

function solve(){
    const form = document.querySelector('.event-content');
    const event = form.querySelector('#event');
    const note = form.querySelector('#note');
    const date = form.querySelector('#date');
    const save = form.querySelector('button');

    save.addEventListener('click', (e) =>{
        e.preventDefault();
        const eventText = event.value;
        const noteText = note.value;
        const dateText = date.value;

        if(eventText && noteText && dateText){
            const ul = document.querySelector('#upcoming-list');
            const li = document.createElement('li');
            ul.appendChild(li);
            li.classList.add('event-item');
            const div = document.createElement('div');
            div.classList.add('event-container');
            li.appendChild(div);
            const article = document.createElement('article');
            div.appendChild(article);
            const pName = document.createElement('p');
            pName.textContent = `Name: ${eventText}`;
            article.appendChild(pName);
            const pNote = document.createElement('p');
            pNote.textContent = `Note: ${noteText}`;
            article.appendChild(pNote);
            const pDate = document.createElement('p');
            pDate.textContent = `Date: ${dateText}`;
            article.appendChild(pDate);
            const buttons = document.createElement('div');
            buttons.classList.add('buttons');
            div.appendChild(buttons);
            const editBtn = document.createElement('button');
            editBtn.classList.add('btn', 'edit');
            editBtn.textContent = 'Edit';
            
            editBtn.addEventListener('click', (e) => {
                const article = e.target.parentNode.parentNode.querySelector('article');
                const paragraphs = article.querySelectorAll('p');
                console.log(paragraphs);
                const name = paragraphs[0].textContent.split(': ')[1];
                const noteVal = paragraphs[1].textContent.split(': ')[1];
                const dateVal = paragraphs[2].textContent.split(': ')[1];
                event.value = name;
                note.value = noteVal;
                date.value = dateVal;
                ul.removeChild(e.target.parentNode.parentNode);
            })

            buttons.appendChild(editBtn)
            const doneBtn = document.createElement('button');
            doneBtn.classList.add('btn', 'done');
            doneBtn.textContent = 'Done';
            buttons.appendChild(doneBtn);

            doneBtn.addEventListener('click', (e) => {
            const eventItem = e.target.closest('li');
            const eventsList = document.querySelector('#events-list');

            eventItem.remove(); 

            const buttonsDiv = eventItem.querySelector('.buttons');
            if (buttonsDiv) buttonsDiv.remove();

            const eventContainer = eventItem.querySelector('.event-container');
            if (eventContainer) {
                const article = eventContainer.querySelector('article');
                eventContainer.remove();

                eventItem.appendChild(article);
            }

            eventsList.appendChild(eventItem);
        });


        }

        note.value = '';
        date.value = '';
        event.value = '';
    })

    const deleteBtn = document.querySelector('.btn.delete');
    deleteBtn.addEventListener('click', (e) =>{
        e.target.parentNode.querySelector('ul').innerHTML = '';
    });
}

