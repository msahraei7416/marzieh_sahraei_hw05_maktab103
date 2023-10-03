let user = {
  name: "jone",
  age: 30,
  sayHello: function () {
    return "Hello" + " " + this.name;
  },
};
document.write(user.sayHello());
