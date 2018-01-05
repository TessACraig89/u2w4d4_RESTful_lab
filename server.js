const express = require('express');
const app = express();

app.use(express.static('public'));

//an array of objects representing songs resource
const songs = [
    { id: 1,
      title: "Why iii Love The Moon",
      artist: "",
      url: "https://www.youtube.com/watch?v=0Y6Uy_-hJRQ"
    },
    { id: 2,
      title: "Black Magic",
      artist: "",
      url: "https://www.youtube.com/watch?v=3rZNRpehiRU"
    },
    { id: 3,
      title: "Hold Me Down",
      artist: "",
      url: "https://www.youtube.com/watch?v=AYzxqFvIA4g"
    }
    { id: 4,
      title: "Dern Kale",
      artist: "Khruangbin",
      url: "https://www.youtube.com/watch?v=X3yHzw_JHTY"
    }
    { id: 5,
      title: "Wheels of Confusion",
      artist: "Black Sabbath",
      url: "https://www.youtube.com/watch?v=GJlBfgu7HDk"
    }
    { id: 6,
      title: "What you Don't Do - Tom Misch Remix",
      artist: "Lianne La Havas & Tom Misch,",
      url: "https://www.youtube.com/watch?v=7vVpe8qFWPA"
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

// route to return the collection of that resource
app.get("/songs", (request, response) => {
    response.send("All songs.");
});

// the route to return the song id resource from the songs collection by ID
app.get("/songs/:id", (request, response) => {
    response.send("Song by id.");
});

app.get("/artists", (request, response) => {
    response.send("All artists.");
});

// the route to return the id resource from the songs collection by ID
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
