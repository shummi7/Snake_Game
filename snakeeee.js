var board=document.getElementById('board');  

var startpage=document.getElementsByClassName('startpage');
var frontstartbutton=document.getElementById('frontstartbutton');
var frontinstrbutton=document.getElementById('frontinstrbutton');
var frontsettingbutton=document.getElementById('frontsettingbutton');
var soundcredit=document.getElementById('soundcredit');
var soundweb=document.getElementsByClassName('soundweb'); 

var instructionpage=document.getElementsByClassName('instructionpage');
var instrstartbutton=document.getElementById('instrstartbutton');

var speeddiffpage=document.getElementsByClassName('speeddiffpage');
var backbutton=document.getElementById('backbutton');

var lastpage=document.getElementsByClassName('lastpage');
var reloadbutton=document.getElementById('reloadbutton');


var speedradio=document.getElementsByClassName('speedradio');
var apple1=document.getElementById('apple1');
var apple2=document.getElementById('apple2');

var milk=document.getElementById('milk');
var milkbar=document.getElementById('milkbar');
var gameover=document.getElementById('gameover');
var buttonk=document.getElementById('buttonk');

var speedradioelements=speedradio[0].elements;
var defaultSpeed=10;
var selSpeed=10;

var bar=document.getElementById('bar').querySelectorAll('div');
var scorevalue=document.getElementById('scorevalue');
var cookievalue=document.getElementById('cookievalue');
var milkvalue=document.getElementById('milkvalue');
var milkbarvalue=document.getElementById('milkbarvalue');

var bwidth=28;
var bheight=28;
var bboard=[];
var leftk=rightk=upk=downk=false;
var grow=1;
var barvalue=0;
var scorenum=0;

var totalscore=document.getElementById('totalscore');
var totalcookies=document.getElementById('totalcookies');
var totalmilk=document.getElementById('totalmilk');
var totalmilkbar=document.getElementById('totalmilkbar');
var comment=document.getElementById('comment');

var finalCookies=0;
var finalMilk=0;
var finalMilkBar=0;
var finalcomment='';

var keybdirection='';



////////////////////////////////////////////////////////////////////////////////////////
//radiobutton selection


function radioValue(){
for (var i=0; i<speedradioelements.length; i++){
   
    if (speedradioelements[i].checked){
            switch(speedradioelements[i].value){
              case 'veryslow': selSpeed=6;break;
              case 'slow': selSpeed=7;break;
              case 'normal': selSpeed=10;break;
              case 'fast': selSpeed=15;break;
              case 'veryfast': selSpeed=18;break;
              default:selSpeed=defaultSpeed;
            }
            }
   } 
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//frontPage Button functions
function frontstartbuttonfunc(){
buttonk.currentTime=0;
buttonk.play(); 
startpage[0].style.display='none';
instructionpage[0].style.display='none';
speeddiffpage[0].style.display='none';
lastpage[0].style.display='none';
}

function frontinstrbuttonfunc(){
  buttonk.currentTime=0;
buttonk.play(); 
startpage[0].style.display='none';
}

function frontsettingbuttonfunc(){
  buttonk.currentTime=0;
buttonk.play(); 
startpage[0].style.display='none';
instructionpage[0].style.display='none';
}

function soundcreditfunc(){
  soundcredit.style.display='none';
  soundweb[0].style.display='inline-block';
}

function instrstartbuttonfunc(){
  buttonk.currentTime=0;
buttonk.play(); 
instructionpage[0].style.display='none';
speeddiffpage[0].style.display='none';
lastpage[0].style.display='none';
}

function reloadbuttonfunc(){
  buttonk.currentTime=0;
buttonk.play(); 
lastpage[0].style.display='none';
window.location.reload();
}

function backbuttonfunc(){
  buttonk.currentTime=0;
buttonk.play(); 
speeddiffpage[0].style.display='none';
lastpage[0].style.display='none';
startpage[0].style.display='none';
}

frontstartbutton.addEventListener('click',frontstartbuttonfunc,false);
frontinstrbutton.addEventListener('click',frontinstrbuttonfunc,false);
frontsettingbutton.addEventListener('click',frontsettingbuttonfunc,false);
soundcredit.addEventListener('mouseover',soundcreditfunc,false);

instrstartbutton.addEventListener('click',instrstartbuttonfunc,false);

reloadbutton.addEventListener('click',reloadbuttonfunc,false);

backbutton.addEventListener('click',backbuttonfunc,false);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function keyDownFunc(e){
    switch(e.keyCode){
        case 37:
            if (keybdirection!=='right') {
                keybdirection = 'left';
               e.preventDefault();}
            break;

        case 39:
            if (keybdirection!=='left') {
                keybdirection = 'right';
               e.preventDefault();}
            break;

        case 38:
            if (keybdirection!=='down'){
                keybdirection = 'up';
               e.preventDefault();}
            break;

        case 40:
            if (keybdirection!=='up'){
                keybdirection = 'down';
               e.preventDefault();}
            break;
        }
    }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//kkeyboard function calling

document.addEventListener('keydown',keyDownFunc,false);
document.addEventListener('keyup',keyDownFunc,false);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//snake Board

for(var i=0;i<bheight;i++){
	 var row=[];
	 for(var j=0;j<bwidth;j++){
 	 	var cube={};
 	 	var div=document.createElement('div');
 	 	// div.innerHTML='('+i+","+j+')';
    // div.style.color='white';
 	 	var idd='('+i+","+j+')';
 	 	div.setAttribute("id",idd);
 	 	div.setAttribute("value",0);
 	 	div.setAttribute("data-row", i);
 	 	div.setAttribute("data-col", j);
 	 	cube.element=div;
 	 	board.appendChild(div);
 	 	row.push(cube);
 	 	}

 bboard.push(row);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// snakeHead

var snake={
	x:[8],
  y:[8]
}

function snakeHead(a,b){
  var c=snake.x.length;
  // console.log('length',c);
if(a>=0||b>=0){
for(var i=grow;i>0;i--){
  // console.log('for st',snake);
  snake.x[i]=snake.x[i-1];
  snake.y[i]=snake.y[i-1];
  snake.x[i-1]=a;
  snake.y[i-1]=b;
  // console.log('for en',snake);
}

}
////////////////////////////////////////////////
//to avoid trailing

for(var i=0;i<grow;i++){
  var d=snake.x[i];
  var e=snake.y[i];

  if((snake.x[0]>27 || snake.y[0]>27 || snake.x[0]<0 || snake.y[0]<0 )&&(!(snake.x[0]===-3 && snake.y[0]===-3))){
    finalcomment='Ooops!!!! Off the field..';
    comment.innerHTML=finalcomment;
     gameover.currentTime=0;
     gameover.play();
    lastpage[0].style.display='';

  }

bboard[d][e].element.style.backgroundColor='limegreen';
bboard[d][e].element.style.color='limegreen';
bboard[d][e].element.innerHTML='s';

// bboard[d][e].element.style.borderColor='#ff0066';
}
for(var i=grow;i<c;i++){
  var f=snake.x[i];
  var g=snake.y[i];

bboard[f][g].element.style.backgroundColor='';
bboard[f][g].element.style.color='';
bboard[f][g].element.innerHTML='';

}



}
///////////////////////////////////////////////////////////////////////////////////////////////////////
//snakkeFood
var food={};

function snakeFood(){
food.x=Math.floor(Math.random() * (27 - 0 + 1)) + 0;
food.y=Math.floor(Math.random() * (27 - 0 + 1)) + 0;

  var c=food.x;
  var d=food.y;


/////////////////////////////////////////////////////////////
//to avoid placing food aover thee body of snake

//////////////////////////////////////////////////////////
function foodcrash(c,d){
if(bboard[c][d].element.innerHTML==='///' || bboard[c][d].element.innerHTML==='s' || bboard[c][d].element.innerHTML===':'){
  return true;
}
else{
  return false;
}
}

while(foodcrash(c,d)===true){

  food.x=Math.floor(Math.random() * (27 - 0 + 1)) + 0;
  food.y=Math.floor(Math.random() * (27 - 0 + 1)) + 0;
  var c=food.x;
  var d=food.y;
}

bboard[c][d].element.style.backgroundColor='orangered';   
bboard[c][d].element.innerHTML=':-:';
// console.log(c,d,food.x,food.y);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
//snakeFoodDeal
var deal={};

function snakeFoodDeal(){
  
deal.x=Math.floor(Math.random() * (27 - 0 + 1)) + 0;
deal.y=Math.floor(Math.random() * (27 - 0 + 1)) + 0;
var c=deal.x;
var d=deal.y;

function dealcrash(c,d){
if(bboard[c][d].element.innerHTML==='///' || bboard[c][d].element.innerHTML==='s' ||  bboard[c][d].element.innerHTML===':-:'){
  return true;
}
else{
  return false;
}
}

while(dealcrash(c,d)===true){

  deal.x=Math.floor(Math.random() * (27 - 0 + 1)) + 0;
  deal.y=Math.floor(Math.random() * (27 - 0 + 1)) + 0;
  var c=deal.x;
  var d=deal.y;
}


var u=c;var v=d;
  
bboard[u][v].element.style.backgroundColor='rgb(254, 252, 255)'; 
bboard[u][v].element.innerHTML=':'; 

setTimeout(function () {
  if(bboard[u][v].element.style.backgroundColor==='rgb(254, 252, 255)'){
  bboard[u][v].element.style.backgroundColor='';
  bboard[u][v].element.innerHTML='';
  deal.x=-1;deal.y=-1;}
}, 8000); 



}


//////////////////////////////////////////////////////////////////////////////////////////////////////
///snakkeEatFood
var foodOffer=0;

function snakeEatFood(){
  if(snake.x[0]===food.x && snake.y[0]===food.y){
    
    bboard[food.x][food.y].element.innerHTML='';
  snakeFood();
  grow=grow+1;
  finalCookies=finalCookies+1;
if(finalCookies%2===1){apple1.currentTime=0;
    apple1.play();}
  if(finalCookies%2===0){apple2.currentTime=0;
    apple2.play();}


  scorenum=scorenum+10;
  scorevalue.innerHTML=scorenum;
  totalscore.innerHTML=scorenum;
  totalcookies.innerHTML=finalCookies;
  cookievalue.innerHTML=finalCookies;
  foodOffer=foodOffer+1;
    if(foodOffer%5===0){
    snakeFoodDeal();
   }  

  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////
//snakeEatFoodDeal
function snakeEatFoodDeal(){
  if(snake.x[0]===deal.x && snake.y[0]===deal.y){
    milk.currentTime=0;
    milk.play();
    bboard[deal.x][deal.y].element.innerHTML='';
  grow=grow+1;scorenum=scorenum+15;
  finalMilk=finalMilk+1;
   totalmilk.innerHTML=finalMilk;
   milkvalue.innerHTML=finalMilk;
  scorevalue.innerHTML=scorenum;
  totalscore.innerHTML=scorenum;
  var u=deal.x;var v=deal.y;
  deal.x=-2;deal.y=-2;
  barvalue=barvalue+1;  
   
   barColor(barvalue); 
   }
   if(deal.x===-1 && deal.y===-1){
barvalue=0; barColor(barvalue); 
}
  }

////////////////////////////////////////////////////////////////////////////////////////////////////
//bar coloring
function barColor(barv){
 
if(barv<=4 && barv>0){
  for(var i=1;i<=barv;i++)
  {
    var k=i-1;
       bar[k].style.backgroundColor='#FEFCFF';
  }
  for(var j=barv+1;j<=5;j++){
    var l=j-1;
    bar[l].style.backgroundColor='';
  }

}

if(barv===5){
  milkbarcurrentTime=0;
    milkbar.play();
  barvalue=0;
  bar[4].style.backgroundColor='#FEFCFF';
  scorenum=scorenum+500;
  finalMilkBar=finalMilkBar+1;
  milkbarvalue.innerHTML=finalMilkBar;
  scorevalue.innerHTML=scorenum;
  totalscore.innerHTML=scorenum;
   totalmilkbar.innerHTML=finalMilkBar;
setTimeout(function () {
  for(var p=1;p<=5;p++)
  {
    var q=p-1;
       bar[q].style.backgroundColor='';
  }
}, 3500); 
}

if(barv<=0){
  for(var m=1;m<=5;m++)
  {
    var n=m-1;
       bar[n].style.backgroundColor='';
  }
}
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
//snakeeatsnake but it couldnt control reversing th keybdirection 
function snakeEatBody(){
   for(var i=1;i<grow;i++){
    if(snake.x[0]===snake.x[i] && snake.y[0]===snake.y[i]){
      snake.x[0]=-3;snake.y[0]=-3; 
      finalcomment='Oh My God!! Wrong move..';
       gameover.currentTime=0;
       gameover.play();
      comment.innerHTML=finalcomment;
      }
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
//creating obstacles
var obstaclex=[]; 
var obstacley=[];
function snakeObstacle(){
var m=[0,2,5,7,10,12,15,17,20,22,25,27];var n=[0,2,5,7,10,12,15,17,20,22,25,27];
var e=[];f=[];var c=d=0;
for(var i=0;i<m.length;i++){
for(var j=0;j<n.length;j++){

c=Math.floor(Math.random() * (m[i+1] - m[i] + 1)) + m[i];
d=Math.floor(Math.random() * (n[j+1] - n[j] + 1)) + n[j];

    if( ((c===0 || c===27) &&(d===1 || d===26)) || ((c===1 || c===26) && (d===0||d===27)) )
    {
    if(d===26){ d=d-1;}
    if(d===27){ d=d-2;}
    if(d===0){ d=d+2; }
    if(d===1){ d=d+1; }
    }
e.push(c);
f.push(d);
j++;
  }
i++
}


for(var k=0;k<15;k++){
  var ee=e.length-1;
  var l=Math.floor(Math.random() * (ee - 0 + 1)) + 0;
  obstaclex.push(e[l]);
  obstacley.push(f[l]);

   bboard[e[l]][f[l]].element.style.backgroundColor='#373472'; 
   bboard[e[l]][f[l]].element.innerText='13';
   bboard[e[l]][f[l]].element.innerHTML='///'; 
  bboard[e[l]][f[l]].element.style.color='#C42E93'; 
   
}

}
///////////////////////////////////////////////////////////////////////////////////////////
//snakehitobstacle
function snakeHitObst(){
for(var p=0;p<obstaclex.length;p++){
  if(snake.x[0]===obstaclex[p] && snake.y[0]===obstacley[p]){
    snake.x[0]=-3;snake.y[0]=-3;
    finalcomment='Rocks Rocks...That looks painfull!!';
     gameover.currentTime=0;
     gameover.play();
 
    comment.innerHTML=finalcomment;
  }
}
}
//////////////////////////////////////////////////////////////////////////////////////////
//snakeOut
function snakeOut(){

  if ((snake.x[0]===-3 && snake.y[0]===-3)){

    lastpage[0].style.display='';
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
//snakekeybdirection

function snakekeybdirection(){

  if(keybdirection==='right'){
  var a=snake.x[0];
  var b=snake.y[0]+1;
  snakeHead(a,b);
  // console.log('right',snake);
  }

  else if(keybdirection==='left'){
  var a=snake.x[0];
  var b=snake.y[0]-1;
  snakeHead(a,b);
  // console.log('left',snake);
  }

  
  else if(keybdirection==='down'){
  var a=snake.x[0]+1;
  var b=snake.y[0];
  snakeHead(a,b);
  // console.log('down',snake);
  }
  else if(keybdirection==='up'){
  var a=snake.x[0]-1;
  var b=snake.y[0];
  snakeHead(a,b);
  // console.log('up',snake);
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

var fps = 10;var id=null;
function animate() {
    setTimeout(function() {
    radioValue();
    snakeHead();
    snakekeybdirection();
    snakeEatFood();
    snakeEatFoodDeal();
    snakeEatBody();
    snakeHitObst();
    snakeOut();

fps=selSpeed; 
  requestAnimationFrame(animate);
  }, 1000 / fps);
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////


animate();
snakeObstacle();
snakeFood();

