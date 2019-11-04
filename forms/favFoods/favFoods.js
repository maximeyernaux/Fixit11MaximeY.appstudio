let goodFoods = ["pizza","apples","cookies","sushi","pasta","steak"]
lstFoods.onclick=function(choice){
  if (typeof(choice) == "object")   // user clicked the control
    return
    
  // otherwise get user selection (second click) which is the index 
  // of the item chosen
  NSB.MsgBox(`The choice is ${goodFoods[choice]}`)
}

btnNextForm.onclick=function(){
  ChangeForm(dessertVoting)
}
