function composeEmail() {
  const composeArea = document.getElementById('compose-area');
  composeArea.classList.remove('hidden');

  composeArea.innerHTML = `
    <h3>Compose Email with AI Templates</h3>
    <textarea id="email-content" placeholder="Write your message here..." style="width:80%;height:150px;"></textarea><br><br>
    <button onclick="insertTemplate('business')">Business Template</button>
    <button onclick="insertTemplate('personal')">Personal Template</button>
    <button onclick="sendEmail()">Send Email</button>
  `;
}

function insertTemplate(type) {
  const emailContent = document.getElementById('email-content');
  if (type === 'business') {
    emailContent.value = "Dear [Recipient],\n\nI hope this message finds you well. I am reaching out regarding...\n\nBest regards,\n[Your Name]";
  } else if (type === 'personal') {
    emailContent.value = "Hey [Friend],\n\nJust wanted to check in and see how you're doing!...\n\nTalk soon,\n[Your Name]";
  }
}

function sendEmail() {
  const content = document.getElementById('email-content').value;
  if (content.trim() === "") {
    alert("Please write something before sending!");
  } else {
    alert("Email Sent Successfully! (Simulation Mode)");
    document.getElementById('compose-area').classList.add('hidden');
  }
}
