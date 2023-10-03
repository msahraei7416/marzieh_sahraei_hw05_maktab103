let user = [
  { name: "marzi", age: 28 },
  { name: "majid", age: 20 },
  { name: "parisa", age: 32 },
];
user.sort(function (a, b) {
  return a.age - b.age;
});
sortByAge();

function sortByAge() {
  document.getElementById("sort").innerHTML =
    user[0].name +
    " " +
    user[0].age +
    "<br>" +
    user[1].name +
    " " +
    user[1].age +
    "<br>" +
    user[2].name +
    " " +
    user[2].age;
}
