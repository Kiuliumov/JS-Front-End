function sumTable() {
    const tdObjects = document.getElementsByTagName('td');
    const total = document.getElementById('sum');
    let counter = 0;
    let sum = 0;

    for (const td of tdObjects) {
        counter += 1;

        if(counter % 2 == 0){
            sum += Number(td.innerHTML);
        }
    }

    total.innerHTML = sum;

}