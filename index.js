(function(){
  const screen = document.querySelector('.screen');
  const buttons = document.querySelectorAll('.btn');
  const clear = document.querySelector('.btn-clear');
  const equal = document.querySelector('.btn-equal');

  buttons.forEach(function(button){
    button.addEventListener('click',function(evalue){
      let value = evalue.target.dataset.num;
      screen.value += value;
    })
  });

 equal.addEventListener('click',function(evalue){
  if(screen.value === '' ){
    screen.value="";
  }else{
    let answer = eval(screen.value);
    screen.value = answer;
  }
 })

 clear.addEventListener('click',function(evalue){
  screen.value="";
 })


})();

