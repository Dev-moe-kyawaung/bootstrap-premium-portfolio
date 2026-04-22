const texts = [
  "Frontend Developer",
  "React Developer",
  "Bootstrap Designer",
  "Modern Web Creator"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing-text").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1200);
  } else {
    setTimeout(type, 100);
  }
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (!name || !email || !message) {
    formMessage.textContent = "ကျေးဇူးပြု၍ အချက်အလက်အားလုံးကို ဖြည့်ပါ။";
    formMessage.style.color = "orange";
    return;
  }

  formMessage.textContent = "သင့် message ကိုအောင်မြင်စွာပို့ပြီးပါပြီ။";
  formMessage.style.color = "lightgreen";

  document.getElementById("contactForm").reset();
});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
