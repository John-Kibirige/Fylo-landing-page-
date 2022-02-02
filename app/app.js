// variable declaration
const email = document.querySelector("#email").value;
const getStartedBtn = document.querySelector(".get-started");
const error = document.querySelector(".error");

getStartedBtn.addEventListener("click", () => {
   if (!verifyEmail(email)) {
      error.textContent = "Please enter a valid email";
   }
});

function verifyEmail(em) {
   const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   return re.test(String(em.toLowerCase()));
}
