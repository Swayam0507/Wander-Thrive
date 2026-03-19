// Login UI check
window.addEventListener("load", () => {
  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
    if (loginBtn) loginBtn.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "inline-block";
  } else {
    if (loginBtn) loginBtn.style.display = "inline-block";
    if (logoutBtn) logoutBtn.style.display = "none";
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("username");
      window.location.reload();
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const budgetFilter = document.getElementById("budgetFilter");
  const durationFilter = document.getElementById("durationFilter");
  const resetBtn = document.getElementById("resetPackageFilters");
  const cards = document.querySelectorAll(".package__card");
  const resultsCount = document.getElementById("packageResultsCount");

  if (!budgetFilter || !durationFilter || !cards.length) return;

  function updateResultsCount() {
    const visibleCards = Array.from(cards).filter(card => card.style.display !== "none");
    if (resultsCount) {
      resultsCount.textContent = `Showing ${visibleCards.length} of ${cards.length} packages`;
      
      if (visibleCards.length === 0) {
        resultsCount.textContent = "No packages match your filters";
        resultsCount.style.background = "linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05))";
        resultsCount.style.color = "#ef4444";
      } else {
        resultsCount.style.background = "linear-gradient(135deg, rgba(40, 135, 255, 0.1), rgba(40, 135, 255, 0.05))";
        resultsCount.style.color = "var(--primary-color)";
      }
    }
  }

  function filterPackages() {
    const budget = budgetFilter.value;
    const duration = durationFilter.value;

    cards.forEach((card) => {
      const price = parseInt(card.dataset.price, 10);
      const days = parseInt(card.dataset.duration, 10);

      let show = true;

      // Budget filter
      if (budget === "15000" && price >= 15000) {
        show = false;
      } else if (budget === "25000" && (price < 15000 || price > 25000)) {
        show = false;
      } else if (budget === "25001" && price <= 25000) {
        show = false;
      }

      // Duration filter
      if (duration === "3" && days > 3) {
        show = false;
      } else if (duration === "5" && (days < 4 || days > 5)) {
        show = false;
      } else if (duration === "6" && days < 6) {
        show = false;
      }

      card.style.display = show ? "block" : "none";
    });

    updateResultsCount();
  }

  // Reset filters
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      budgetFilter.value = "all";
      durationFilter.value = "all";
      filterPackages();
    });
  }

  budgetFilter.addEventListener("change", filterPackages);
  durationFilter.addEventListener("change", filterPackages);

  // Initial count
  updateResultsCount();
});

// View Details - Redirect to package details page
const buttons = document.querySelectorAll(".package-btn");

if (buttons.length) {
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const packageName = btn.dataset.name;
      window.location.href = `package-details.html?package=${encodeURIComponent(packageName)}`;
    });
  });
}
