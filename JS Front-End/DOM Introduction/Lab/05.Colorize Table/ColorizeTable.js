function colorize() {
    const trObjects = document.getElementsByTagName('tr');
    let counter = 0;
    for (const tr of trObjects) {
        counter += 1;
        if(counter % 2 == 0){
            tr.style.backgroundColor = 'Teal';
        }
    }
}