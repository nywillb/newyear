var deadline = '2017-01-01 00:00:00 GMT-0500';

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(endtime){
  var timeinterval = setInterval(function(){
    var t = getTimeRemaining(endtime);
    document.getElementById("countdown").innerHTML = ('0' + t.days).slice(-2) + ':' + ('0' + t.hours).slice(-2) + ':' + ('0' + t.minutes).slice(-2) + ':' + ('0' + t.seconds).slice(-2) +" Until 2016!"
    if(t.total<=0){
      clearInterval(timeinterval);
      document.getElementById("countdown").innerHTML = '<i class="fa fa-flag"></i> Happy New Year!'
    }
  },1000);
}

initializeClock(deadline);

function hello(){
  alert("Hello!")
}
