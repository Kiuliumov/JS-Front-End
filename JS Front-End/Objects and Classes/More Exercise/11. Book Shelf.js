function bookShelf(array){
    const bookShelves = {};
    for (const command of array) {
        if(command.includes('->')){
            const [id, genre] = command.split(' -> ');
            if(!(id in bookShelves)){
                bookShelves[id] = {};
                const currentBookShelf = bookShelves[id];
                if(!(genre in currentBookShelf)){
                    currentBookShelf[genre] = [];
                }
            }
        } else {
            const [bookTitle, ...bookInformation] = command.split(': ');
            const [bookAuthor, bookGenre] = bookInformation.join(': ').split(', ');
            for (const id in bookShelves) {
                const currentBookShelf = bookShelves[id];
                if(bookGenre in currentBookShelf){
                    currentBookShelf[bookGenre].push({bookTitle: bookTitle, bookAuthor: bookAuthor});
                }
            }
        }
    }

    const sortedShelves = Object.entries(bookShelves).sort((a, b) => {
        const aBookCount = Object.values(a[1]).reduce((sum, books) => sum + books.length, 0);
        const bBookCount = Object.values(b[1]).reduce((sum, books) => sum + books.length, 0);
        return bBookCount - aBookCount;
    });

    sortedShelves.forEach(([_, genres]) => {
        for (const genre in genres) {
            genres[genre].sort((a, b) => a.bookTitle.localeCompare(b.bookTitle));
        }
    });


    sortedShelves.forEach(([id, genres]) => {
        for(const genre in genres){
            const currentGenre = genres[genre];
            console.log(`${id} ${genre}: ${currentGenre.length}`);
            currentGenre.forEach(book => {
                console.log(`--> ${book.bookTitle}: ${book.bookAuthor}`);
            });
        }
    });
}
