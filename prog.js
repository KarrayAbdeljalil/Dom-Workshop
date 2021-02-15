function increment(id,pr1,totpr1){
    let inp=document.getElementById(id);
    let val=Number(inp.value);
    val++;
    inp.value=val;
    let price=document.getElementById(pr1).innerHTML;
    let Tot1=document.getElementById(totpr1);
    tot.innerHTML=price*val;
}
function decrement(id,pr1,totpr1){
    let inp=document.getElementById(id);
    let val=Number(inp.value);
    if(val>0) val--;
    inp.value=val;
    let price=document.getElementById(pr1).innerHTML;
    let Tot1=document.getElementById(totpr1);
    tot.innerHTML=price*val;
}
function increment(id,pr2,totpr2){
  let inp=document.getElementById(id);
  let val=Number(inp.value);
  val++;
  inp.value=val;
  let price=document.getElementById(pr2).innerHTML;
  let Tot1=document.getElementById(totpr2);
  tot.innerHTML=price*val;
}
function decrement(id,pr2,totpr2){
  let inp=document.getElementById(id);
  let val=Number(inp.value);
  if(val>0) val--;
  inp.value=val;
  let price=document.getElementById(pr2).innerHTML;
  let Tot1=document.getElementById(totpr2);
  tot.innerHTML=price*val;
}
function increment(id,pr3,totpr3){
  let inp=document.getElementById(id);
  let val=Number(inp.value);
  val++;
  inp.value=val;
  let price=document.getElementById(pr3).innerHTML;
  let Tot1=document.getElementById(totpr3);
  tot.innerHTML=price*val;
}
function decrement(id,pr3,totpr3){
  let inp=document.getElementById(id);
  let val=Number(inp.value);
  if(val>0) val--;
  inp.value=val;
  let price=document.getElementById(pr3).innerHTML;
  let Tot1=document.getElementById(totpr3);
  tot.innerHTML=price*val;
}
//function update_amounts(){
  var sum=0;
  $('#mytable > tbody > tr').each(function() {
    var qty = $(this).find('.qty').val();
    var price = $(this).find('.price').val();
    var amount = (qty*price);
    sum+=amount;
    $(this).find('.amount').text(''+amount);
   });
   $('.total').text(sum);
   
