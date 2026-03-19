// ========================================
// MAIN.JS - Global JavaScript Functions
// Handles navigation, authentication, and homepage interactions
// ========================================

// ========================================
// MOBILE MENU TOGGLE
// Handles responsive navigation menu
// ========================================
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {
  const menuBtnIcon = menuBtn.querySelector("i");

  // Toggle menu open/close on button click
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    // Change icon based on menu state
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
      "class",
      isOpen ? "ri-close-line" : "ri-menu-line"
    );
  });

  // Close menu when a link is clicked
  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });
}

// ========================================
// NAVBAR SCROLL EFFECT
// Adds shadow to navbar on scroll
// ========================================
const navbar = document.querySelector("nav");
if (navbar) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// ========================================
// SCROLL REVEAL ANIMATIONS
// Animates elements as they enter viewport
// Only runs if ScrollReveal library is loaded
// ========================================
if (typeof ScrollReveal !== "undefined") {
  const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
  };

  // Header animations
  ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
  });
  ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".header__btns", {
    ...scrollRevealOption,
    delay: 1500,
  });

  // Showcase section animations
  ScrollReveal().reveal(".showcase__image img", {
    ...scrollRevealOption,
    origin: "left",
  });
  ScrollReveal().reveal(".showcase__content h4", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".showcase__content p", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".showcase__btn", {
    ...scrollRevealOption,
    delay: 1500,
  });

  // Banner and discover cards animations
  ScrollReveal().reveal(".banner__card", {
    ...scrollRevealOption,
    interval: 500,
  });

  ScrollReveal().reveal(".discover__card", {
    ...scrollRevealOption,
    interval: 500,
  });
}

// ========================================
// DESTINATION CARDS REVEAL
// Animates destination cards on page load
// ========================================
const destinationCards = document.querySelectorAll(".reveal-card");

if (destinationCards.length > 0) {
  // Animate cards if ScrollReveal exists
  if (typeof ScrollReveal !== "undefined") {
    ScrollReveal().reveal(".reveal-card", {
      interval: 200,
      distance: "50px",
      duration: 1000,
      origin: "bottom",
    });
  }

  // Show "Explore More" button after page loads
  window.addEventListener("load", () => {
    const exploreBtn = document.querySelector(".explore-more-container");
    if (exploreBtn) {
      exploreBtn.classList.add("show");
    }
  });
}

// ========================================
// SWIPER CAROUSEL
// Initializes review carousel
// Only runs if Swiper library is loaded
// ========================================
if (typeof Swiper !== "undefined") {
  const reviewSwiper = document.querySelector(".client__container .swiper");

  if (reviewSwiper) {
    new Swiper(reviewSwiper, {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      speed: 5000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        reverseDirection: false,
      },
    });
  }
}

// ========================================
// GLOBAL LOGIN/PROFILE LOGIC
// Manages user authentication state across all pages
// ========================================
window.addEventListener("load", () => {
  const loginBtn = document.getElementById("loginBtn");
  const profileWrapper = document.getElementById("profileWrapper");
  const profileInitial = document.getElementById("profileInitial");
  const profileIcon = document.getElementById("profileIcon");
  const profileMenu = document.getElementById("profileMenu");
  const logoutMenuBtn = document.getElementById("logoutMenuBtn");

  // Check if user is logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const username = localStorage.getItem("username");

  // Show profile if logged in, otherwise show login button
  if (isLoggedIn === "true" && username) {
    if (loginBtn) loginBtn.style.display = "none";
    if (profileWrapper) profileWrapper.style.display = "block";
    if (profileInitial) {
      profileInitial.textContent = username.charAt(0).toUpperCase();
    }
  } else {
    if (loginBtn) loginBtn.style.display = "inline-block";
    if (profileWrapper) profileWrapper.style.display = "none";
  }

  // Toggle profile dropdown menu
  if (profileIcon && profileMenu) {
    profileIcon.addEventListener("click", () => {
      profileMenu.style.display =
        profileMenu.style.display === "flex" ? "none" : "flex";
    });
  }

  // Handle logout
  if (logoutMenuBtn) {
    logoutMenuBtn.addEventListener("click", () => {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("username");
      window.location.href = "homepage.html";
    });
  }

  // Close profile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      profileWrapper &&
      profileMenu &&
      !profileWrapper.contains(e.target)
    ) {
      profileMenu.style.display = "none";
    }
  });
});

// ========================================
// LOGOUT BUTTON HANDLER
// Alternative logout button (if exists on page)
// ========================================
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "homepage.html";
  });
}

// ========================================
// HOMEPAGE DESTINATION BOOKING MODAL
// Handles trip planning modal for destinations
// Only runs on homepage
// ========================================
window.addEventListener("DOMContentLoaded", () => {
  // Only run on homepage
  if (document.body.id !== "home") return;

  // Get all required elements
  const buttons = document.querySelectorAll(".dest-book-btn");
  const modal = document.getElementById("destModal");
  const title = document.getElementById("destTitle");
  const closeBtn = document.querySelector(".close-dest-modal");
  const form = document.getElementById("destBookingForm");
  const startDateInput = document.getElementById("startDate");
  const endDateInput = document.getElementById("endDate");
  const travelersInput = document.getElementById("travelers");
  const summaryBox = document.getElementById("tripSummary");

  // Exit if required elements don't exist
  if (
    !buttons.length ||
    !modal ||
    !form ||
    !startDateInput ||
    !endDateInput ||
    !travelersInput ||
    !summaryBox
  ) {
    return;
  }

  // Price per day for each plan type
  const pricePerDay = {
    Budget: 1500,
    Standard: 3000,
    Luxury: 6000,
  };

  // Set minimum date to today
  const today = new Date().toISOString().split("T")[0];
  startDateInput.min = today;
  endDateInput.min = today;

  /**
   * Calculate and display trip cost
   * Updates summary box with total price
   */
  function calculateTrip() {
    const start = startDateInput.value;
    const end = endDateInput.value;
    const travelers = parseInt(travelersInput.value, 10) || 0;
    const planRadio = document.querySelector('input[name="plan"]:checked');
    const plan = planRadio ? planRadio.value : null;

    summaryBox.classList.remove('error');

    // Validate all fields are filled
    if (!start || !end || !plan || !travelers) {
      summaryBox.textContent = "Fill all fields to see trip cost";
      return;
    }

    // Validate start date is not in the past
    if (start < today) {
      summaryBox.textContent = "Start date cannot be in the past";
      summaryBox.classList.add('error');
      return;
    }

    // Calculate number of days
    const days = Math.ceil((new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24)) + 1;

    // Validate end date is after start date
    if (days <= 0) {
      summaryBox.textContent = "End date must be after start date";
      summaryBox.classList.add('error');
      return;
    }

    // Validate minimum travelers
    if (travelers < 1) {
      summaryBox.textContent = "At least 1 traveler required";
      summaryBox.classList.add('error');
      return;
    }

    // Calculate and display total cost
    const total = days * pricePerDay[plan] * travelers;
    summaryBox.textContent = `${days} days × ${travelers} traveler${travelers > 1 ? 's' : ''} × ₹${pricePerDay[plan].toLocaleString()}/day = ₹${total.toLocaleString()}`;
  }

  // Update end date minimum when start date changes
  startDateInput.addEventListener("change", () => {
    endDateInput.min = startDateInput.value || today;
    if (endDateInput.value && endDateInput.value <= startDateInput.value) {
      endDateInput.value = "";
    }
    calculateTrip();
  });

  // Recalculate on input changes
  endDateInput.addEventListener("change", calculateTrip);
  travelersInput.addEventListener("input", calculateTrip);

  // Listen to plan radio button changes
  document.querySelectorAll('input[name="plan"]').forEach(radio => {
    radio.addEventListener("change", calculateTrip);
  });

  // Open modal when "Plan Trip" button is clicked
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const isLoggedIn = localStorage.getItem("isLoggedIn");

      // Redirect to login if not logged in
      if (isLoggedIn !== "true") {
        window.location.href = "login.html";
        return;
      }

      // Mark active button and set destination
      document.querySelectorAll(".dest-book-btn").forEach(b => b.removeAttribute("data-active"));
      btn.setAttribute("data-active", "true");

      title.textContent = btn.dataset.destination;
      modal.dataset.state = btn.dataset.state;

      // Show modal and reset form
      modal.style.display = "flex";
      form.reset();
      summaryBox.textContent = "Fill all fields to see trip cost";
      summaryBox.classList.remove('error');
      startDateInput.min = today;
      endDateInput.min = today;
      document.body.style.overflow = "hidden";
    });
  });

  // Close modal when X button is clicked
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    });
  }

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
});

// ========================================
// HOMEPAGE BOOKING FORM SUBMISSION
// Saves booking to localStorage
// Only runs on homepage
// ========================================
window.addEventListener("DOMContentLoaded", () => {
  // Only run on homepage
  if (document.body.id !== "home") return;

  const form = document.getElementById("destBookingForm");
  const modal = document.getElementById("destModal");
  const destinationTitle = document.getElementById("destTitle");
  const startDateInput = document.getElementById("startDate");
  const endDateInput = document.getElementById("endDate");
  const travelersInput = document.getElementById("travelers");

  // Exit if required elements don't exist
  if (
    !form ||
    !modal ||
    !destinationTitle ||
    !startDateInput ||
    !endDateInput ||
    !travelersInput
  ) {
    return;
  }

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const destination = destinationTitle.textContent.trim();
    const startDate = startDateInput.value;
    const endDate = endDateInput.value;
    const travelers = travelersInput.value;
    const planRadio = document.querySelector('input[name="plan"]:checked');
    const plan = planRadio ? planRadio.value : null;
    const today = new Date().toISOString().split("T")[0];

    // Validate all fields
    if (!startDate || !endDate || !travelers || !plan) {
      alert("Please fill all fields.");
      return;
    }

    // Validate start date
    if (startDate < today) {
      alert("Start date cannot be in the past.");
      return;
    }

    // Validate end date
    if (endDate <= startDate) {
      alert("End date must be after start date.");
      return;
    }

    // Get state from modal dataset
    const state = modal.dataset.state || "";
    const currentUser = localStorage.getItem("username");

    // Calculate price
    const pricePerDay = {
      Budget: 1500,
      Standard: 3000,
      Luxury: 6000,
    };
    const days = Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24)) + 1;
    const totalPrice = days * pricePerDay[plan] * parseInt(travelers);

    // Create booking object
    const booking = {
      type: "destination",
      user: currentUser,
      destination: destination,
      state: state,
      plan: plan,
      travelers: travelers,
      startDate: startDate,
      endDate: endDate,
      duration: `${days} days`,
      price: `₹${totalPrice.toLocaleString()}`,
      date: `${startDate} to ${endDate}`
    };

    // Save to localStorage
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    alert("Trip planned successfully! Check My Bookings for details.");

    // Close modal and reset form
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    form.reset();
  });
});
