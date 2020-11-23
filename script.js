let items=[];
let prices=[];
let counter=0;
let total=0;
function card () {
  let theSpan=document.getElementById('display');
  theSpan.innerHTML +=items[counter-1] + " $" + prices[counter-1] + '<br>';
}

function checkout(){
  let aSpan=document.getElementById('total');
  aSpan.innerHTML = "$" + total;
}
function onClick(item, price){
  items.push(item);
  prices.push(price);
  total +=Number(price);
  counter++;
  card();
}
