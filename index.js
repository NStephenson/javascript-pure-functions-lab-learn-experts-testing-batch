const episodes = [
  { id: 's06e01', title: 'The Red Woman' },
  { id: 's06e02', title: 'Home' },
  { id: 's06e03', title: 'Oathbreaker' },
  { id: 's06e04', title: 'Book of the Stranger' },
  { id: 's06e05', title: 'The Door' },
  { id: 's06e06', title: 'Blood of My Blood' },
  { id: 's06e07', title: 'The Broken Man' },
  { id: 's06e08', title: 'No One' },
  { id: 's06e09', title: 'Battle of the Bastards' },
];

const finaleEpisode = { id: 's06e10', title: 'The Winds of Winter' };

function getNextEpisodeInPlaylist(playlist){
  return playlist[0];
}

function addToPlaylist(playlist, episode){
  return [...playlist, episode];
}

function removeFromPlaylist(playlist, episode){
  let newPlaylist = []
  playlist.forEach(function(playlistEpisode){
    if(playlistEpisode != episode){
      newPlaylist.push(playlistEpisode);
    }
  });
  return newPlaylist;
}

function bingeWatch(playlist){
  if(playlist.length){
    const updatedList = removeFromPlaylist(playlist, getNextEpisodeInPlaylist(playlist));
    bingeWatch(updatedList);
  }
  
  return "Please let there be more!"
}