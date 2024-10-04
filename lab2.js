
function currentTime(){
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      var currentTime = `${hours} : ${minutes} : ${seconds} ${ampm}`
      return currentTime;

    
}  

console.log(currentTime());



function remove(str) { 
  if (str.length > 2) {
    return str.slice(1,-1);
  } else {
    return" string is too short!";
  }
}
var originalstring = "Hello, world!";
var modifiedstring = remove(originalstring);
console.log(modifiedstring);



