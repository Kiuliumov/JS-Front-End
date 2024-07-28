function songs(info){
    class Song{
        constructor(type, name, time){
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    const songs = [];
    info.shift();
    let typeSong = info.pop();

    for(songInfo of info){
        const [type, name, time] = songInfo.split('_');
        const song = new Song(type, name, time);
        songs.push(song);
    }

    if(typeSong == 'all'){
        for(song of songs){
            console.log(song.name);
        }
    } else {
        const filteredSongs = songs.filter((song) => song.type == typeSong);
        for(song of filteredSongs){
            console.log(song.name);
        } 
    }
}

songs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);