let selectedName = "";
let selectedAvailability = "";
let fromService = false;

// detect if user came from service page
window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const type = params.get("type");

  fromService = type !== null;

  filterCaregivers();
};

// FILTER
function filterCaregivers() {
  const type = new URLSearchParams(window.location.search).get("type");
  const cards = document.querySelectorAll(".profile");

  let count = 0;

  cards.forEach(card => {
    if (!type || card.dataset.type === type) {
      card.style.display = "flex";
      count++;
    } else {
      card.style.display = "none";
    }
  });

  document.getElementById("noResult").style.display =
    count === 0 ? "block" : "none";
}

// OPEN PROFILE
function openProfile(name, role, skills, availability) {
  selectedName = name;
  selectedAvailability = availability;

  document.getElementById("name").innerText = name;

  document.getElementById("desc").innerHTML = `
    <b>${role}</b><br><br>
    <b>Skills:</b> ${skills}<br><br>
    <b>Availability:</b> ${availability}
  `;

  const btn = document.getElementById("bookBtn");

  // show button only if coming from service page AND available
  if (fromService && availability === "Available") {
    btn.style.display = "block";
    btn.disabled = false;
    btn.style.opacity = "1";
  } else {
    btn.style.display = "block";
    btn.disabled = true;
    btn.style.opacity = "0.5";
  }

  document.getElementById("modal").style.display = "flex";
}

// CLOSE
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// BOOK
function bookCaregiver() {
  if (selectedAvailability !== "Available") {
    alert("Sorry, this caregiver is currently not available 😕");
    return;
  }

  document.getElementById("modal").style.display = "none";

  const popup = document.createElement("div");

  popup.innerHTML = `
    <div class="booking-popup">
      <h2>Thank You 💙</h2>
      <p>You booked <b>${selectedName}</b></p>
      <p>Saha Yatri will contact you soon.</p>
      <button onclick="this.parentElement.parentElement.remove()">Close</button>
    </div>
  `;

  document.body.appendChild(popup);
}