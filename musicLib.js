//Used this for some practice with JS prototypes.

function Library(libName, creator) {
  this.libName = libName;
  this.creator = creator;
  this.playlists = [];
}

function Playlist(name) {
  this.name = name;
  this.tracks = [];
}

function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

Playlist.prototype.overallRating = function() {
  let ratingSum = 0;
  let length = this.tracks.length;
  this.tracks.forEach((track) => {
    ratingSum = ratingSum + track.rating;
  })
  return ratingSum/length;
}

Playlist.prototype.totalDuration = function() {
  let duration = 0;
  this.tracks.forEach((track) => {
    duration = duration + track.length;
  })
  return duration;
}

// Use this to add a playlist to a library
Library.prototype.addPlaylist = function(name) {
  this.playlists.push(new Playlist(name));
}

// Use this to add a track to a specific playlist
Library.prototype.addTrack = function(playlist, title, rating, length) {
  this.playlists.forEach((item, ind)=>{
    if (item.name === playlist) {
      return this.playlists[ind].tracks.push(new Track(title, rating, length));
    }
  })
}
//Use this to look up a specific playlist's rating
Library.prototype.playlistRating = function(playlistName) {
  let rating = 0;
  this.playlists.forEach((item, ind)=>{
    if (item.name === playlistName) {
    rating = this.playlists[ind].overallRating();
    return;
    }
  })
  return rating;
}

// Use this to check a playlist's duration
Library.prototype.playlistDuration = function(playlistName) {
  let duration = 0;
  this.playlists.forEach((item, ind)=>{
    if (item.name === playlistName) {
    duration = this.playlists[ind].totalDuration();
    return;
    }
  })
  return duration;
}

const myLib = new Library('New', 'Bob');
myLib.addPlaylist('Jazz');
myLib.addTrack('Jazz', 'Smooth', 4, 180);
myLib.addTrack('Jazz', 'Relax', 2, 200);
console.log(myLib.playlists[0].tracks);
console.log(myLib.playlistDuration('Jazz'));
console.log(myLib.playlistRating('Jazz'));