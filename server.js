const express = require('express');
const app = express();

app.use(express.static('public'));

const songs = [
    { id: 1,
      title: "Why iii Love The Moon",
      url: "https://www.youtube.com/watch?v=0Y6Uy_-hJRQ"
    },
    { id: 2,
      title: "Black Magic",
      url: "https://www.youtube.com/watch?v=3rZNRpehiRU"
    },
    { id: 3,
      title: "Hold Me Down",
      url: "https://www.youtube.com/watch?v=AYzxqFvIA4g"
    }
];

// express get songs by id
  //for loop that loops through songs array
    //if song index id is == request
      //send response of the songs index if songs index's id is == to a objects id
        //params == object of focus
      //if not send apology response

app.get('/songs/:id', (request, response) => {
    for(let i=0; i < songs.length; i++) {
      if (songs[i].id == request.params.id) {
        response.send(songs[i]);
      }
      response.send("sorry");
    }
})



app.get('/songs', (request, response) => {
      let songsJSON = JSON.stringify(songs[1].id)
      response.send(songsJSON);
});

app.get("/songs", (request, response) => {
    response.send("All songs.");
});

app.get("/songs/:id", (request, response) => {
    response.send("Song by id.");
});

app.get("/artists", (request, response) => {
    response.send("All artists.");
});

app.get("/artists/:id", (request, response) => {
    response.send("Artist by id.");
});

app.get("/artists/:id/songs", (request, response) => {
    response.send("All songs by artist.");
});

app.get("/artists/:id/songs/:id", (request, response) => {
    response.send("Specific song by artist.");
});

app.listen(3000, () => {
    console.log("I am listening");
});
