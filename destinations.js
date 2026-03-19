document.addEventListener("DOMContentLoaded", () => {
  const stateFilter = document.getElementById("stateFilter");
  const typeFilter = document.getElementById("typeFilter");
  const ratingFilter = document.getElementById("ratingFilter");
  const resetBtn = document.getElementById("resetFilters");
  const cards = document.querySelectorAll(".dest-card");

  if (!stateFilter || !typeFilter || !ratingFilter || !cards.length) return;

  // Create results count element
  const filterBar = document.querySelector(".filter-bar");
  const resultsCount = document.createElement("div");
  resultsCount.className = "results-count";
  resultsCount.id = "resultsCount";
  filterBar.parentNode.insertBefore(resultsCount, filterBar.nextSibling);

  function updateResultsCount() {
    const visibleCards = Array.from(cards).filter(card => card.style.display !== "none");
    resultsCount.textContent = `Showing ${visibleCards.length} of ${cards.length} destinations`;
  }

  function filterCards() {
    const state = stateFilter.value;
    const type = typeFilter.value;
    const rating = ratingFilter.value;

    let visibleCount = 0;

    cards.forEach((card) => {
      const cardState = card.dataset.state;
      const cardType = card.dataset.type;
      const cardRating = parseFloat(card.dataset.rating);

      let show = true;

      if (state !== "all" && cardState !== state) {
        show = false;
      }

      if (type !== "all" && cardType !== type) {
        show = false;
      }

      if (rating !== "all" && cardRating < parseFloat(rating)) {
        show = false;
      }

      if (show) {
        card.style.display = "block";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    updateResultsCount();

    // Show message if no results
    if (visibleCount === 0) {
      resultsCount.textContent = "No destinations match your filters";
      resultsCount.style.background = "linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05))";
      resultsCount.style.color = "#ef4444";
    } else {
      resultsCount.style.background = "linear-gradient(135deg, rgba(40, 135, 255, 0.1), rgba(40, 135, 255, 0.05))";
      resultsCount.style.color = "var(--primary-color)";
    }
  }

  // Reset filters
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      stateFilter.value = "all";
      typeFilter.value = "all";
      ratingFilter.value = "all";
      filterCards();
    });
  }

  stateFilter.addEventListener("change", filterCards);
  typeFilter.addEventListener("change", filterCards);
  ratingFilter.addEventListener("change", filterCards);

  // Initial count
  updateResultsCount();
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".dest-book-btn");
  const modal = document.getElementById("destModal");
  const closeBtn = document.querySelector(".close-dest-modal");
  const form = document.getElementById("destBookingForm");
  const title = document.getElementById("destTitle");
  const startDateInput = document.getElementById("startDate");
  const endDateInput = document.getElementById("endDate");
  const travelersInput = document.getElementById("travelers");
  const summaryBox = document.getElementById("tripSummary");

  let selectedDestination = null;

  if (
    !buttons.length ||
    !modal ||
    !closeBtn ||
    !form ||
    !title ||
    !startDateInput ||
    !endDateInput ||
    !travelersInput ||
    !summaryBox
  ) {
    return;
  }

  const pricePerDay = {
    Budget: 1500,
    Standard: 3000,
    Luxury: 6000,
  };

  const getToday = () => new Date().toISOString().split("T")[0];

  const setDateLimits = () => {
    const today = getToday();
    startDateInput.min = today;
    endDateInput.min = startDateInput.value || today;
  };

  function calculateTrip() {
    const start = startDateInput.value;
    const end = endDateInput.value;
    const travelers = parseInt(travelersInput.value, 10) || 0;
    const planRadio = document.querySelector('input[name="plan"]:checked');
    const plan = planRadio ? planRadio.value : null;
    const today = getToday();

    summaryBox.classList.remove('error');

    if (!start || !end || !plan || !travelers) {
      summaryBox.textContent = "Fill all fields to see trip cost";
      return;
    }

    if (start < today) {
      summaryBox.textContent = "Start date cannot be in the past";
      summaryBox.classList.add('error');
      return;
    }

    const days = Math.ceil((new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24)) + 1;

    if (days <= 0) {
      summaryBox.textContent = "End date must be after start date";
      summaryBox.classList.add('error');
      return;
    }

    if (travelers < 1) {
      summaryBox.textContent = "At least 1 traveler required";
      summaryBox.classList.add('error');
      return;
    }

    const total = days * pricePerDay[plan] * travelers;
    summaryBox.textContent = `${days} days × ${travelers} traveler${travelers > 1 ? 's' : ''} × ₹${pricePerDay[plan].toLocaleString()}/day = ₹${total.toLocaleString()}`;
  }

  setDateLimits();

  startDateInput.addEventListener("change", () => {
    setDateLimits();
    if (endDateInput.value && endDateInput.value <= startDateInput.value) {
      endDateInput.value = "";
    }
    calculateTrip();
  });

  endDateInput.addEventListener("change", calculateTrip);
  travelersInput.addEventListener("input", calculateTrip);
  
  // Listen to plan radio buttons
  document.querySelectorAll('input[name="plan"]').forEach(radio => {
    radio.addEventListener("change", calculateTrip);
  });

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const isLoggedIn = localStorage.getItem("isLoggedIn");

      if (isLoggedIn !== "true") {
        window.location.href = "login.html";
        return;
      }

      selectedDestination = {
        name: btn.dataset.destination,
        state: btn.dataset.state,
      };

      title.textContent = selectedDestination.name;
      modal.style.display = "flex";
      form.reset();
      summaryBox.textContent = "Fill all fields to see trip cost";
      summaryBox.classList.remove('error');
      setDateLimits();
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!selectedDestination) {
      alert("Please select a destination first.");
      return;
    }

    const start = startDateInput.value;
    const end = endDateInput.value;
    const travelers = parseInt(travelersInput.value, 10);
    const planRadio = document.querySelector('input[name="plan"]:checked');
    const plan = planRadio ? planRadio.value : null;
    const today = getToday();

    if (!start || !end || !travelersInput.value || !plan) {
      alert("Please fill all fields.");
      return;
    }

    if (start < today) {
      alert("Start date cannot be in the past.");
      return;
    }

    if (end <= start) {
      alert("End date must be after start date.");
      return;
    }

    if (!Number.isFinite(travelers) || travelers < 1) {
      alert("Travelers must be at least 1.");
      return;
    }

    if (!pricePerDay[plan]) {
      alert("Please select a valid plan.");
      return;
    }

    const days = Math.ceil((new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24)) + 1;
    const totalPrice = days * pricePerDay[plan] * travelers;

    const booking = {
      type: "destination",
      user: localStorage.getItem("username"),
      destination: selectedDestination.name,
      state: selectedDestination.state,
      startDate: start,
      endDate: end,
      duration: `${days} days`,
      travelers: travelers,
      plan: plan,
      price: `₹${totalPrice.toLocaleString()}`,
    };

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    alert("Trip planned successfully! Check My Bookings for details.");
    modal.style.display = "none";
    this.reset();
    summaryBox.textContent = "";
    summaryBox.classList.remove('error');
  });
});
