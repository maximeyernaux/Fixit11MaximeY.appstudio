let personType = ["Optimistic", "Pessimistic","Trusting","Envious"]

rdoPersonType.onchange=function(){
  // parameters for NSB.MsgBox: NSB.MsgBox(func,prompt,buttons,title) 
//                                       (usually skip func)
// We won't use func in general
// We did on click, you can click whereever you want and it will work (not really good),
// We should have done "on change".
// https://wiki.nsbasic.com/NSB.MsgBox 

   if (rdoPersonType.value == 0)  // picked the first choice
      NSB.MsgBox("I would agree that you are a 'optimistic' person too!")
  else if (rdoPersonType.value == 1)
      NSB.MsgBox("I would agree that you are a 'pessimistic' person too!")
      
  else if (rdoPersonType.value == 2)
      NSB.MsgBox("I would agree that you are a 'trusting' person too!")

   else if (rdoPersonType.value == 3)
      NSB.MsgBox("I would agree that you are a 'envious' person too!")


}

btnFavExercices.onclick=function(){
  ChangeForm(favExercises)
}