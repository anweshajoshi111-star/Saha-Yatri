let selectedName = "";
let selectedAvailability = "";
let fromService = false;

<<<<<<< HEAD
// detect if user came from service page
=======
// user service page ma aako ho ki nai tha pauna
>>>>>>> adced960eb308c3f8b5d3e1d2fec9bafd6859600
window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const type = params.get("type");

  fromService = type !== null;

  filterCaregivers();
};

<<<<<<< HEAD
// FILTER
=======
// FILTER GARNA KO LAGI
>>>>>>> adced960eb308c3f8b5d3e1d2fec9bafd6859600
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

<<<<<<< HEAD
  // show button only if coming from service page AND available
=======
  // button service page ma huda matra dekhauna
>>>>>>> adced960eb308c3f8b5d3e1d2fec9bafd6859600
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

<<<<<<< HEAD
// BOOK
=======
// BOOK garna 
>>>>>>> adced960eb308c3f8b5d3e1d2fec9bafd6859600
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
<<<<<<< HEAD
=======
}
function applyFilters() {
  const availability = document.getElementById("availabilityFilter").value;
  const time = document.getElementById("timeFilter").value;

  const cards = document.querySelectorAll(".profile");

  cards.forEach(card => {
    const cardAvailability = card.querySelector(".availability")?.innerText;
    const cardTime = card.querySelector(".work-type")?.innerText;

    let show = true;

    // Availability filter ko lagi
    if (availability !== "all" && cardAvailability !== availability) {
      show = false;
    }

    // Time filter ko lagi
    if (time !== "all" && cardTime !== time) {
      show = false;
    }

    card.style.display = show ? "flex" : "none";
  });
>>>>>>> adced960eb308c3f8b5d3e1d2fec9bafd6859600
}