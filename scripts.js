function sendMail() {
    document.getElementById("mailsuccess").innerHTML = "Thanks for confirming your mail.";
}

const signInButton = document.getElementById("signInButton");
const modal = document.getElementById("signInModal");

signInButton.onclick = function () {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

function signIn() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "user" && password === "pass") {
        alert("Welcome " + username);
        closeModal();
    } else {
        alert("Invalid credentials");
    }
}


let secretNumber = Math.floor(Math.random() * 101);

function checkGuess() {
    const guess = Number(document.getElementById("userGuess").value);
    const feedback = document.getElementById("feedback");

    if (guess === secretNumber) {
        feedback.textContent = "Correct! You guessed the number!";
        feedback.style.color = "green";
    } else if (guess > secretNumber) {
        feedback.textContent = "Too high! Try a smaller number.";
        feedback.style.color = "orange";
    } else if (guess < secretNumber) {
        feedback.textContent = "Too low! Try a bigger number.";
        feedback.style.color = "orange";
    } else {
        feedback.textContent = "Please enter a valid number.";
        feedback.style.color = "red";
    }
}

function openFlowchartModal(imageSrc, description) {
  const modal = document.getElementById("flowchartModal");
  const img = document.getElementById("flowchartImg");
  const desc = document.getElementById("flowchartDesc");

  img.src = imageSrc;
  desc.textContent = description;
  modal.style.display = "flex";
}

function closeFlowchartModal() {
  const modal = document.getElementById("flowchartModal");
  modal.style.display = "none";
}


function toggleEventDetails(index) {
    const details = document.getElementById(`event-details-${index}`);
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
}