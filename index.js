// add solution here
function theBeatlesPlay(musicians, instruments) {
  var response = [];
  for (var i = 0; i < musicians.length; i++) {
    response.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return response;
}
