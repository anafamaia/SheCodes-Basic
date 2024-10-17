function adoption() {
  let myFirstName = prompt("What is your name?");
  let age = prompt("How old are you?");
  let heading = document.querySelector("h2");

  if (age < 18) {
    alert(`I am sorry ${myFirstName}, but you need to be 18 to adopt a pet 😔`);
  } else {
    heading.innerHTML = `Congratulations ${myFirstName}, you are 1 step closer to have a new best friend! 😍`;
  }
}
let adoptButton = document.querySelector("button");
adoptButton.addEventListener("click", adoption);
