var playlist = { CelineDion: 'My heart will go on' };

function updatePlaylist(obj, artistName, songTitle){
  obj[artistName] = songTitle;
  return obj;
}

