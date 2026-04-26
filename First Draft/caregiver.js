let selectedName = "";
let selectedAvailability = "";
let fromService = false;

/* ---------------------------
   INIT
----------------------------*/
window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const type = params.get("type");

  fromService = type !== null;

  // if coming from service page, filter by type
  filterByCategory(type);
};

/* ---------------------------
   CATEGORY FILTER (Basic / Medical / Specialized)
----------------------------*/
function filterByCategory(type) {
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

/* ---------------------------
   AVAILABILITY / TIME FILTER (NEW FILTER SYSTEM)
----------------------------*/
function filterCaregivers(filterType) {
  const cards = document.querySelectorAll(".profile");

  cards.forEach(card => {
    const availability = card.querySelector(".availability")?.classList.contains("available")
      ? "available"
      : "not-available";

    const time = card.querySelector(".work-type")?.innerText.toLowerCase();

    let show = true;

    // Availability filters
    if (filterType === "available" && availability !== "available") show = false;
    if (filterType === "not-available" && availability !== "not-available") show = false;

    // Time filters
    if (filterType === "part-time" && !time.includes("part-time")) show = false;
    if (filterType === "full-time" && !time.includes("full-time")) show = false;

    card.style.display = show ? "flex" : "none";
  });
}

/* reset filter */
function resetFilter() {
  const cards = document.querySelectorAll(".profile");
  cards.forEach(card => {
    card.style.display = "flex";
  });
}

/* ---------------------------
   PROFILE MODAL
----------------------------*/
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

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

/* BOOKING KO LAGI */
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

// open/close dropdown
function toggleDropdown(id) {
  const box = document.getElementById(id);

  // close other dropdowns first
  document.querySelectorAll(".dropdown-box").forEach(d => {
    if (d.id !== id) d.style.display = "none";
  });

  box.style.display = box.style.display === "block" ? "none" : "block";
}

// close dropdown if clicking outside
window.onclick = function(event) {
  if (!event.target.matches('.filter-btn')) {
    document.querySelectorAll(".dropdown-box").forEach(box => {
      box.style.display = "none";
    });
  }
};