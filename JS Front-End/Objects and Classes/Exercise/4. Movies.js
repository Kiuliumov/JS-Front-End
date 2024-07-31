function movies(data) {
    const movies = {};
    for (let entry of data) {
        if (entry.startsWith('addMovie')) {
            let movieName = entry.split(' ').slice(1).join(' ');
            movies[movieName] = ({name: movieName, director: null, date: null });
        } else if (entry.includes('onDate')) {
            let [movieName, ...rest] = entry.split(' onDate ');
            let date = rest[0]
            if (movies[movieName.trim()]) {
                movies[movieName.trim()].date = date;
            }
        }
         else if (entry.includes('directedBy')) {
            let [movieName, ...rest] = entry.split(' directedBy ');
            let directorName = rest.join(' ');
            if (movies[movieName.trim()]) {
                movies[movieName.trim()].director = directorName;
            }
        }
    }

    
    let filteredMovies = Object.entries(movies).filter(([name, details]) => details.director && details.date);
    filteredMovies = Object.fromEntries(filteredMovies);
    for(const movie in filteredMovies){
        console.log(JSON.stringify(filteredMovies[movie]))
    }
}

movies(['addMovie Fast and Furious', 'addMovie Godfather', 'Inception directedBy Christopher Nolan', 'Godfather directedBy Francis Ford Coppola', 'Godfather onDate 29.07.2018', 'Fast and Furious onDate 30.07.2018', 'Batman onDate 01.08.2018', 'Fast and Furious directedBy Rob Cohen']);
