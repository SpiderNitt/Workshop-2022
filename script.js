let position =1;
let word_length=0;
let ans_array =[];
let tile;
let answer_word = "right";
let position_checker ;
let letter = document.querySelectorAll('.key');
let letterType ;
function checkAnswer()
{
  console.log(ans_array);
  tile =1;
  
  position_checker = position-5;
 
  for(let i =0;i<5;i++)
  {
    letter.forEach(function(element){ 
      if(element.dataset.key == ans_array[i] )
      {
        letterType  = element;
        
      }
    })
    if(ans_array[i] == answer_word[i])
    {
      push_letter = document.getElementById(`${position_checker}`);
      push_letter.style.backgroundColor = "green";
      letterType.style.backgroundColor = "green";
      push_letter.style.color = "white";
      letterType.style.color = "white";
    }
    else if(answer_word.includes(ans_array[i]))
    {
      push_letter = document.getElementById(`${position_checker}`);
      push_letter.style.backgroundColor = "yellow";
      letterType.style.backgroundColor = "yellow";
      push_letter.style.color = "white";
      letterType.style.color = "white";
    }
    else{
      push_letter = document.getElementById(`${position_checker}`);
      push_letter.style.backgroundColor = "grey";
      push_letter.style.color = "white";
      letterType.style.color = "white";
      letterType.style.backgroundColor = "grey";
      
    }
    position_checker++;
  }
 

}
window.addEventListener('keydown', function(e){
  let l = e.key;
  if(l == "Enter")
  {
    if(position%5 == 1)
    {
      for(let i = position-5,j=0;i<position;i++,j++)
      {
        push_letter = document.getElementById(`${i}`);
        ans_array[j] = push_letter.innerHTML;
      }
      checkAnswer();
      word_length =0;

    }
      
  }
  else if(l == "Backspace")
  {
    console.log(position);
    if(word_length){
      position--;
      push_letter = document.getElementById(`${position}`);
      console.log(push_letter);
      push_letter.innerHTML = "";
      word_length--;
    }
    
  }
  else{
    if(word_length != 5){
      console.log(l);
      push_letter = document.getElementById(`${position}`);
      push_letter.innerHTML = l;
      position++;
      word_length++;
    }
   
  }

})
letter.forEach(function(element){
  element.addEventListener('click',function(){
    let l = element.dataset.key;
    if(l == "Enter")
    {
      if(position%5 == 1)
      {
        for(let i = position-5,j=0;i<position;i++,j++)
        {
          push_letter = document.getElementById(`${i}`);
          ans_array[j] = push_letter.innerHTML;
        }
        checkAnswer();
        word_length =0;
      }
    }
    else if(l == "Backspace")
    {
      if(word_length){
        position--;
        push_letter = document.getElementById(`${position}`);
        console.log(push_letter);
        push_letter.innerHTML = "";
        word_length--;
      }
      
    }
    else{
      if(word_length != 5){
        console.log(l);
        push_letter = document.getElementById(`${position}`);
        push_letter.innerHTML = l;
        position++;
        word_length++;
      }
    }

  })
})
function instructions(){
  document.getElementById("container").style.display = "None";
  document.getElementById("game-box").style.display = "Block";
}
function remove(){
  document.getElementById("game-box").style.display = "None";
  document.getElementById("container").style.display = "Block";
}