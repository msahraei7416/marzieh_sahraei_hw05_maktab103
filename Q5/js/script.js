// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
//   }
//   ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
//   );
const ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};
const yes = () => alert("You agreed.");
const no = () => alert("You canceled the execution.");

ask("Do you agree?", yes, no);
// ask(
//   "Do you agree?",
//   (yes = () => alert("You agreed.")),
//   (no = () => alert("You canceled the execution."))
// );
