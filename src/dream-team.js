module.exports = function createDreamTeam(members) {
  let myTeam = '';
  
  if(Array.isArray(members) == false) return false;
  
  for(let teamate of members.sort()) {
    if(typeof teamate === 'string') {
        myTeam += teamate.trim()[0];
    }
  }
    
  return myTeam ? myTeam.toUpperCase().split('').sort().join('') : false;
};