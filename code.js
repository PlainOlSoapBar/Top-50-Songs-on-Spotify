//Initial screen
setScreen("mainMenu");

//Main menu buttons
onEvent("buttonUSA", "click", function(){
  setScreen("top50USA");
  enterSound();
});

onEvent("buttonWorldwide", "click", function(){
  setScreen("top50Worldwide");
  enterSound();
});



//Top 50 USA buttons
onEvent("finderUSA", "click", function(){
  findSongUSA();
  enterSound();
});

onEvent("returnUSA", "click", function(){
  setScreen("mainMenu");
  exitSound();
});

//Top 50 Worldwide buttons
onEvent("finderWorldwide", "click", function(){
  findSongWorldwide();
  enterSound();
});

onEvent("returnWorldwide", "click", function(){
  setScreen("mainMenu");
  exitSound();
});



//Variables
var idUSA = getColumn("Top 50 USA", "id");
var songUSA = getColumn("Top 50 USA", "Track Name");
var artistUSA = getColumn("Top 50 USA", "Artist");

var idWorldwide = getColumn("Top 50 Worldwide", "id");
var songWorldwide = getColumn("Top 50 Worldwide", "Track Name");
var artistWorldwide = getColumn("Top 50 Worldwide", "Artist");

var id = 0; 

//Selected song/artist
var song;
var artist;

//Find song button
onEvent("finderUSA", "click", function(){
  findSongUSA();
});

onEvent("finderWorldwide", "click", function(){
  findSongWorldwide();
});



/*These functions generate a random id. The song and artist associated with that id are appended into the filtered lists. The
filtered lists are reset if the function is activated again.*/
function findSongUSA(){
  song = "";
  artist = "";
  id = idUSA[randomNumber(0, idUSA.length - 1)];
  
  for(var i = 0; i < idUSA.length; i++){
    if(idUSA[i] == id){
      song = songUSA[i];
      artist = artistUSA[i];
    }
  }
  
  updateScreenUSA();
}

function findSongWorldwide(){
  song = "";
  artist = "";
  id = idWorldwide[randomNumber(0, idWorldwide.length - 1)];
  
  for(var i = 0; i < idWorldwide.length; i++){
    if(idWorldwide[i] == id){
      song = songWorldwide[i];
      artist = artistWorldwide[i];
    
      
    }
  }
  
  updateScreenWorldwide();
}



/*These functions update the text boxes, displaying the results from the respective lists. Since the filtered lists are
always reset on subsequent button presses, the 1st item in the filtered lists will always be picked which matches their id.*/
function updateScreenUSA(){
  setText("resultsUSA", "Your results (Ranked #" + id + "):\n" + artist + " - " + song);
}

function updateScreenWorldwide(){
  setText("resultsWorldwide", "Your results (Ranked #" + id + "):\n" + artist + " - " + song);
}



/*These functions simply play a sound for the buttons*/
function enterSound(){
  playSound("assets/category_notifications/game_notification_81.mp3");
}

function exitSound(){
  playSound("assets/category_notifications/vibrant_unlock_or_open.mp3");
}




































//A little secret. Occurs when you click the Spotify icon!
onEvent("spotifyIcon", "click", function(){
  updateEasterEgg();
});

onEvent("easterEgg", "click", function(){
  updateEasterEgg();
});

/*Basically is the actual easter egg itself. The function is called when the easter egg
is called. A random sound out of a list is picked and played using a list and variable.*/
function updateEasterEgg(){
  setProperty("easterEgg", "image", "https://i.kym-cdn.com/photos/images/newsfeed/002/187/613/844");
  setText("title", "CONGRATULATIONS");
  setText("desc", "CONGRATULATIONS");
  setText("buttonUSA", "CONGRATULATIONS");
  setText("buttonWorldwide", "CONGRATULATIONS");
  setText("titleUSA", "CONGRATULATIONS");
  setText("finderUSA", "CONGRATULATIONS");
  setText("titleWorldwide", "CONGRATULATIONS");
  setText("finderWorldwide", "CONGRATULATIONS");
  
  var soundList = ["assets/category_male_voiceover/congratulations_male.mp3", "assets/category_animals/monkey.mp3"];
  var sound = 0;
  
  sound = randomNumber(0, 1);
  
  for(var i = 0; i < 30; i++){
    playSound(soundList[sound]);
  }
  
  console.log("W0wzers! You found the easter egg!!");  
}
