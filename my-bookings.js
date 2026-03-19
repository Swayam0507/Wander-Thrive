document.addEventListener("DOMContentLoaded", () => {
  const bookingList = document.getElementById("bookingList");

  const currentUser = localStorage.getItem("username");
  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

  const userBookings = bookings.filter(b => b.user === currentUser);

  if (userBookings.length === 0) {
    bookingList.innerHTML = "<p>No bookings yet.</p>";
    return;
  }

  userBookings.forEach((booking) => {

    const originalIndex = bookings.indexOf(booking);

    const card = document.createElement("div");
    card.classList.add("booking-card");

    let title = "";
    let extraInfo = "";

    if (booking.type === "destination") {
      title = booking.destination;
      extraInfo = `
        <p><strong>Plan:</strong> ${booking.plan}</p>
        <p><strong>State:</strong> ${booking.state}</p>
      `;
    } else {
      title = booking.packageName;
      extraInfo = `
        <p><strong>Duration:</strong> ${booking.duration}</p>
        <p><strong>Price:</strong> ${booking.price}</p>
      `;
    }

    let dateText = "Not Available";

    if (booking.startDate && booking.endDate) {
      dateText = `${booking.startDate} to ${booking.endDate}`;
    } else if (booking.date) {
      dateText = booking.date;
    }

    card.innerHTML = `
      <h3>${title}</h3>
      <p><strong>Date:</strong> ${dateText}</p>
      <p><strong>Travelers:</strong> ${booking.travelers}</p>
      ${extraInfo}
      <button class="btn receipt-btn" data-index="${originalIndex}">
        View Receipt
      </button>
      <button class="btn cancel-btn" data-index="${originalIndex}">
        Cancel Booking
      </button>
    `;

    bookingList.appendChild(card);
  });

  // View Receipt
  document.querySelectorAll(".receipt-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;
      localStorage.setItem("selectedReceipt", index);
      window.location.href = "receipt.html";
    });
  });

  // Cancel Booking
  document.querySelectorAll(".cancel-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;

      bookings.splice(index, 1);
      localStorage.setItem("bookings", JSON.stringify(bookings));

      location.reload();
    });
  });

});
