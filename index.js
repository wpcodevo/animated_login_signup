const container = document.getElementById("container");
const signIn = document.getElementById("sign-in");
const signUp = document.getElementById("sign-up");

setTimeout(() => {
  container.classList.add("sign-in");
}, 200);

const toggle = () => {
  container.classList.toggle("sign-in");
  container.classList.toggle("sign-up");
};

signIn.addEventListener("click", toggle);
signUp.addEventListener("click", toggle);
