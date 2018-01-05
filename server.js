const express = require('express');
const app = express();

app.use(express.static('public'));

//an array of objects representing songs resource
const songs = [
    { id: 1,
      songName: "Why iii Love The Moon",
      artist: "Phonny Ppl",
      url: "https://www.youtube.com/watch?v=0Y6Uy_-hJRQ"
    },
    { id: 2,
      songName: "Black Magic",
      artist: "Brimstone Coven",
      url: "https://www.youtube.com/watch?v=3rZNRpehiRU"
    },
    { id: 3,
      songName: "Hold Me Down",
      artist: "Daniel Caesar",
      url: "https://www.youtube.com/watch?v=AYzxqFvIA4g"
    },
    { id: 4,
      songName: "Dern Kale",
      artist: "Khruangbin",
      url: "https://www.youtube.com/watch?v=X3yHzw_JHTY"
    },
    { id: 5,
      songName: "Wheels of Confusion",
      artist: "Black Sabbath",
      url: "https://www.youtube.com/watch?v=GJlBfgu7HDk"
    },
    { id: 6,
      songName: "What you Don't Do - Tom Misch Remix",
      artist: "Lianne La Havas & Tom Misch,",
      url: "https://www.youtube.com/watch?v=7vVpe8qFWPA"
    }
];

// route to return one resource from that collection by ID
// express get songs by id
  //for loop that loops through songs array
    //if the song index id is === the id the client entered
      //send response of the songs index object
      //if not send apology response
app.get('/songs/:id', (request, response) => {
  for (let i = 0; i < songs.length; i++) {
    if ((songs[i].id) == (request.params.id)) {
      response.send(songs[i]);
    }
  }

response.send("Sorry this song id does not exit in this data-base.");
});


app.get('/songs', (request, response) => {
      let songsJSON = JSON.stringify(songs[i].id)
      response.send(songsJSON);
});

// route to return the collection of that resource
app.get("/songs", (request, response) => {
    response.send();
});


app.get("/songs/:id", (request, response) => {
    response.send("Song by id.");
});

app.get("/artist", (request, response) => {
    response.send("All artists.");
});

app.get("/artist/:id", (request, response) => {
    response.send("Artist by id.");
});

app.get("/artist/:id/songs", (request, response) => {
    response.send("All songs by artist.");
});

app.get("/artist/:id/songs/:id", (request, response) => {
    response.send("Specific song by artist.");
});

app.listen(3000, () => {
    console.log("I am listening");
});
