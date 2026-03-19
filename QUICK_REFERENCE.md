# WanderThrive - Quick Reference Guide

## 📋 Table of Contents
- [Project Structure](#project-structure)
- [Feature Location Map](#feature-location-map)
- [File Dependencies](#file-dependencies)
- [Common Tasks](#common-tasks)
- [Styling Guide](#styling-guide)
- [JavaScript Functions](#javascript-functions)

---

## 🗂️ Project Structure

```
WanderThrive(v4.1)/
├── 📄 HTML Files
│   ├── homepage.html          # Main landing page
│   ├── destinations.html      # All destinations listing
│   ├── packages.html          # Travel packages listing
│   ├── package-details.html   # Individual package details
│   ├── login.html             # Login/Register page
│   ├── my-bookings.html       # User bookings dashboard
│   └── receipt.html           # Booking receipt page
│
├── 🎨 CSS Files
│   ├── styleshome.css         # Global styles + homepage
│   ├── destinations.css       # Destinations page styles
│   ├── packages.css           # Packages page styles
│   ├── package-details.css    # Package details styles
│   └── styles.css             # Login/Auth page styles
│
├── ⚙️ JavaScript Files
│   ├── main.js                # Global functions (nav, auth, homepage)
│   ├── destinations.js        # Destinations page logic
│   ├── packages.js            # Packages page logic
│   ├── package-details.js     # Package details logic
│   ├── my-bookings.js         # Bookings management
│   └── scripts.js             # Login/Register logic
│
└── 🖼️ Assets
    ├── assets/                # Header images, client photos
    └── img/                   # Destination images
```

---

## 🎯 Feature Location Map

### 🏠 HOMEPAGE FEATURES

| Feature | HTML File | CSS File | JS File | Line Reference |
|---------|-----------|----------|---------|----------------|
| **Navigation Bar** | homepage.html | styleshome.css | main.js | HTML: ~30-60<br>CSS: ~80-150<br>JS: ~10-35 |
| **Mobile Menu Toggle** | homepage.html | styleshome.css | main.js | JS: ~10-35 |
| **Hero Section** | homepage.html | styleshome.css | main.js | HTML: ~65-85<br>CSS: ~250-350 |
| **Popular Destinations** | homepage.html | styleshome.css | main.js | HTML: ~90-180<br>CSS: ~400-500 |
| **Destination Booking Modal** | homepage.html | styleshome.css | main.js | HTML: ~450-520<br>CSS: ~900-1100<br>JS: ~200-350 |
| **Showcase Section** | homepage.html | styleshome.css | - | HTML: ~185-205<br>CSS: ~550-620 |
| **Journey Features** | homepage.html | styleshome.css | - | HTML: ~210-260<br>CSS: ~650-750 |
| **Statistics Banner** | homepage.html | styleshome.css | - | HTML: ~265-280<br>CSS: ~760-800 |
| **Reviews Carousel** | homepage.html | styleshome.css | main.js | HTML: ~340-420<br>CSS: ~850-950<br>JS: ~140-160 |
| **Footer** | homepage.html | styleshome.css | - | HTML: ~425-480<br>CSS: ~1000-1100 |

### 🗺️ DESTINATIONS PAGE

| Feature | HTML File | CSS File | JS File | Line Reference |
|---------|-----------|----------|---------|----------------|
| **Filter Bar** | destinations.html | destinations.css | destinations.js | HTML: ~40-75<br>CSS: ~30-120<br>JS: ~1-80 |
| **Destination Cards** | destinations.html | destinations.css | destinations.js | HTML: ~80-250<br>CSS: ~130-250<br>JS: ~85-200 |
| **Trip Planning Modal** | destinations.html | destinations.css | destinations.js | HTML: ~255-310<br>CSS: ~260-400<br>JS: ~85-250 |
| **Booking Form** | destinations.html | destinations.css | destinations.js | HTML: ~270-305<br>JS: ~150-250 |

### 📦 PACKAGES PAGE

| Feature | HTML File | CSS File | JS File | Line Reference |
|---------|-----------|----------|---------|----------------|
| **Package Filters** | packages.html | packages.css | packages.js | HTML: ~35-70<br>CSS: ~50-150<br>JS: ~20-80 |
| **Package Cards** | packages.html | packages.css | packages.js | HTML: ~75-220<br>CSS: ~20-100<br>JS: ~85-95 |
| **View Details Button** | packages.html | packages.css | packages.js | JS: ~85-95 |

### 📋 PACKAGE DETAILS PAGE

| Feature | HTML File | CSS File | JS File | Line Reference |
|---------|-----------|----------|---------|----------------|
| **Package Header** | package-details.html | package-details.css | package-details.js | HTML: ~40-75<br>CSS: ~30-100<br>JS: ~90-110 |
| **Itinerary Display** | package-details.html | package-details.css | package-details.js | HTML: ~95-110<br>CSS: ~150-200<br>JS: ~130-145 |
| **Booking Sidebar** | package-details.html | package-details.css | package-details.js | HTML: ~125-165<br>CSS: ~220-320<br>JS: ~165-200 |
| **Booking Modal** | package-details.html | package-details.css | package-details.js | HTML: ~170-200<br>CSS: ~330-450<br>JS: ~200-280 |

### 🔐 AUTHENTICATION

| Feature | HTML File | CSS File | JS File | Line Reference |
|---------|-----------|----------|---------|----------------|
| **Login Form** | login.html | styles.css | scripts.js | HTML: ~20-50<br>CSS: ~50-150<br>JS: ~15-30 |
| **Register Form** | login.html | styles.css | scripts.js | HTML: ~55-90<br>CSS: ~160-250<br>JS: ~10-15 |
| **Profile Dropdown** | All pages | styleshome.css | main.js | CSS: ~1200-1250<br>JS: ~165-220 |
| **Logout Function** | All pages | - | main.js | JS: ~225-235 |

### 📱 MY BOOKINGS PAGE

| Feature | HTML File | CSS File | JS File | Line Reference |
|---------|-----------|----------|---------|----------------|
| **Bookings List** | my-bookings.html | my-bookings.html | my-bookings.js | HTML: ~20-30<br>CSS: ~15-100<br>JS: ~1-70 |
| **View Receipt** | my-bookings.html | - | my-bookings.js | JS: ~50-60 |
| **Cancel Booking** | my-bookings.html | - | my-bookings.js | JS: ~62-72 |

### 🧾 RECEIPT PAGE

| Feature | HTML File | CSS File | JS File | Line Reference |
|---------|-----------|----------|---------|----------------|
| **Receipt Display** | receipt.html | receipt.html | receipt.html | HTML: ~10-150<br>CSS: ~10-120<br>JS: ~155-220 |
| **Print Function** | receipt.html | - | receipt.html | JS: ~210 |

---

## 🔗 File Dependencies

### Global Dependencies (Required on ALL pages)
```
styleshome.css  →  All pages (global styles)
main.js         →  All pages (navigation, auth)
```

### Page-Specific Dependencies

**Homepage (homepage.html)**
```
├── styleshome.css (global + homepage styles)
├── main.js (navigation, auth, homepage features)
├── ScrollReveal library (animations)
└── Swiper library (carousel)
```

**Destinations (destinations.html)**
```
├── styleshome.css (global styles)
├── destinations.css (page-specific styles)
├── main.js (navigation, auth)
└── destinations.js (filters, booking modal)
```

**Packages (packages.html)**
```
├── styleshome.css (global styles)
├── packages.css (page-specific styles)
├── main.js (navigation, auth)
└── packages.js (filters, navigation)
```

**Package Details (package-details.html)**
```
├── styleshome.css (global styles)
├── package-details.css (page-specific styles)
├── main.js (navigation, auth)
└── package-details.js (package data, booking)
```

**Login (login.html)**
```
├── styles.css (auth page styles)
└── scripts.js (login/register logic)
```

**My Bookings (my-bookings.html)**
```
├── styleshome.css (global styles)
├── main.js (navigation, auth)
└── my-bookings.js (bookings display, management)
```

**Receipt (receipt.html)**
```
└── Inline styles + scripts (standalone page)
```

---

## 🛠️ Common Tasks

### 1. Change Navigation Links
**File:** All HTML files
**Location:** `<nav>` section (~line 30-60)
```html
<ul class="nav__links" id="nav-links">
  <li><a href="destinations.html">DESTINATIONS</a></li>
  <li><a href="packages.html">PACKAGES</a></li>
  <li><a href="#contact">CONTACT</a></li>
</ul>
```

### 2. Update Color Scheme
**File:** `styleshome.css`
**Location:** `:root` variables (~line 15-30)
```css
:root {
  --primary-color: #2887ff;        /* Main brand color */
  --primary-color-dark: #2476da;   /* Hover state */
  --heading-color: #0b1b3f;        /* Headings */
  --text-dark: #0a0a0a;            /* Body text */
  --text-light: #737373;           /* Secondary text */
}
```

### 3. Add New Destination Card (Homepage)
**File:** `homepage.html`
**Location:** Inside `.destination__grid` (~line 95-175)
```html
<div class="destination__card reveal-card">
  <span class="badge">POPULAR</span>
  <img src="img/your-image.jpg" alt="Destination name" />
  <div class="destination__overlay">
    <h3>Destination Name</h3>
    <p>Tags • Here</p>
    <button class="overlay-btn dest-book-btn"
            data-destination="Name"
            data-state="State">
      Plan Trip
    </button>
  </div>
  <div class="destination__card__details">
    <div>
      <h4 class="highlight dest-book-btn"
          data-destination="Name"
          data-state="State">
        Subtitle
      </h4>
      <p>Location</p>
    </div>
    <div class="destination__rating">
      <span><i class="ri-star-fill"></i></span>
      4.5
    </div>
  </div>
</div>
```

### 4. Add New Package
**File:** `packages.html`
**Location:** Inside `.packages__grid` (~line 80-220)
**Also Update:** `package-details.js` packageData object (~line 1-200)

```html
<!-- In packages.html -->
<div class="package__card" data-price="15000" data-duration="3">
  <img src="img/package-image.jpg" alt="Package Name">
  <div class="package__content">
    <h3>Package Name</h3>
    <p class="package__meta">3 Days / 2 Nights</p>
    <ul>
      <li>🏖 Feature 1</li>
      <li>🍽 Feature 2</li>
    </ul>
    <div class="package__footer">
      <span class="price">₹15,000</span>
      <button class="btn package-btn"
              data-name="Package Name"
              data-price="15000"
              data-days="3 Days / 2 Nights">
        View Details
      </button>
    </div>
  </div>
</div>
```

```javascript
// In package-details.js (add to packageData object)
"Package Name": {
  image: "img/package-image.jpg",
  duration: "3 Days / 2 Nights",
  price: "₹15,000",
  overview: "Description here...",
  highlights: ["Feature 1", "Feature 2"],
  itinerary: [
    {
      day: "Day 1",
      title: "Title",
      description: "Description"
    }
  ],
  inclusions: ["Item 1", "Item 2"],
  exclusions: ["Item 1", "Item 2"]
}
```

### 5. Modify Booking Form Fields
**File:** `homepage.html` or `destinations.html`
**Location:** Inside `#destBookingForm` (~line 270-305)
**Also Update:** `main.js` or `destinations.js` form submission handler

### 6. Change Footer Content
**File:** All HTML files
**Location:** `<footer>` section (~line 425-480)
```html
<footer id="contact">
  <div class="section__container footer__container">
    <!-- Update content here -->
  </div>
</footer>
```

### 7. Update Price Plans
**File:** `main.js` and `destinations.js`
**Location:** `pricePerDay` object
```javascript
const pricePerDay = {
  Budget: 1500,      // Change these values
  Standard: 3000,
  Luxury: 6000,
};
```

### 8. Modify Mobile Menu Behavior
**File:** `main.js`
**Location:** Mobile Menu Toggle section (~line 10-35)

### 9. Add/Remove Filter Options
**File:** `destinations.html` or `packages.html`
**Location:** `.filter-bar` section (~line 40-75)
**Also Update:** Corresponding `.js` file filter functions

### 10. Change Hero Section Text
**File:** `homepage.html`
**Location:** `.header__content` (~line 70-80)
```html
<div class="header__content">
  <p>YOUR TAGLINE HERE</p>
  <h1>Your Main <span class="highlight">Heading</span> Here!</h1>
</div>
```

---

## 🎨 Styling Guide

### Key CSS Classes

#### Layout Classes
```css
.section__container    /* Max-width container for sections */
.section__header       /* Section title styling */
.section__description  /* Section subtitle styling */
```

#### Button Classes
```css
.btn                   /* Primary button */
.btn--outline          /* Outline button variant */
.btn:hover             /* Button hover state */
```

#### Card Classes
```css
.destination__card     /* Destination card container */
.package__card         /* Package card container */
.booking-card          /* Booking display card */
```

#### Navigation Classes
```css
.nav__links            /* Navigation menu */
.nav__links.open       /* Mobile menu open state */
.nav__btns             /* Auth buttons container */
```

#### Modal Classes
```css
.booking-modal         /* Modal overlay */
.booking-content       /* Modal content box */
.trip-planner-modal    /* Trip planning modal */
```

### Responsive Breakpoints
```css
/* Mobile First - Default styles for mobile */

@media (min-width: 540px) {
  /* Small tablets */
}

@media (min-width: 768px) {
  /* Tablets and small desktops */
}

@media (min-width: 992px) {
  /* Desktops */
}

@media (min-width: 1200px) {
  /* Large desktops */
}
```

---

## ⚙️ JavaScript Functions

### Global Functions (main.js)

| Function | Purpose | Location |
|----------|---------|----------|
| Mobile Menu Toggle | Opens/closes mobile navigation | Line ~10-35 |
| Navbar Scroll Effect | Adds shadow on scroll | Line ~40-50 |
| ScrollReveal Animations | Animates elements on scroll | Line ~55-135 |
| Swiper Carousel | Initializes review slider | Line ~140-160 |
| Login/Profile UI | Manages auth state display | Line ~165-220 |
| Logout Handler | Logs out user | Line ~225-235 |
| Destination Booking Modal | Opens trip planning modal | Line ~240-320 |
| Booking Form Submission | Saves booking to localStorage | Line ~325-400 |

### Destinations Functions (destinations.js)

| Function | Purpose | Location |
|----------|---------|----------|
| filterCards() | Filters destinations by criteria | Line ~30-70 |
| updateResultsCount() | Updates results counter | Line ~20-28 |
| calculateTrip() | Calculates trip cost | Line ~100-150 |
| Form Submission | Saves destination booking | Line ~180-250 |

### Packages Functions (packages.js)

| Function | Purpose | Location |
|----------|---------|----------|
| filterPackages() | Filters packages by budget/duration | Line ~30-70 |
| updateResultsCount() | Updates results counter | Line ~15-30 |
| View Details Handler | Redirects to package details | Line ~85-95 |

### Package Details Functions (package-details.js)

| Function | Purpose | Location |
|----------|---------|----------|
| packageData Object | Stores all package information | Line ~1-200 |
| Load Package Details | Populates page with package data | Line ~205-280 |
| Booking Modal Handler | Opens booking modal | Line ~285-310 |
| Form Submission | Saves package booking | Line ~315-380 |

### Bookings Functions (my-bookings.js)

| Function | Purpose | Location |
|----------|---------|----------|
| Display Bookings | Shows user's bookings | Line ~1-50 |
| View Receipt | Redirects to receipt page | Line ~52-60 |
| Cancel Booking | Removes booking from storage | Line ~62-72 |

---

## 📊 LocalStorage Structure

### Stored Data Keys

```javascript
// Authentication
localStorage.setItem("isLoggedIn", "true");
localStorage.setItem("username", "JohnDoe");

// Bookings Array
localStorage.setItem("bookings", JSON.stringify([
  {
    type: "destination",           // or "package"
    user: "JohnDoe",
    destination: "Manali",         // or packageName
    state: "Himachal Pradesh",
    plan: "Standard",              // Budget/Standard/Luxury
    travelers: 2,
    startDate: "2024-06-01",
    endDate: "2024-06-05",
    duration: "5 days",
    price: "₹30,000",
    date: "2024-06-01 to 2024-06-05"
  }
]));

// Receipt Selection
localStorage.setItem("selectedReceipt", "0");  // Index of booking
```

---

## 🔍 Quick Search Tips

### Find by Feature
- **Navigation:** Search for `nav__` in HTML/CSS files
- **Modals:** Search for `modal` in HTML/CSS/JS files
- **Forms:** Search for `form` or `input` in HTML/JS files
- **Cards:** Search for `__card` in HTML/CSS files
- **Buttons:** Search for `.btn` in CSS or `addEventListener("click"` in JS

### Find by Page
- **Homepage:** Files with `home` in name or `id="home"`
- **Destinations:** Files with `dest` in name
- **Packages:** Files with `package` in name
- **Auth:** Files with `login` or `auth` in name

### Find by Functionality
- **Filters:** Search for `filter` in JS files
- **Booking:** Search for `booking` in JS files
- **Authentication:** Search for `localStorage` in JS files
- **Animations:** Search for `ScrollReveal` or `Swiper` in JS files

---

## 📞 Support & Maintenance

### Common Issues & Solutions

**Issue:** Mobile menu not working
- **Check:** `main.js` lines 10-35
- **Verify:** Menu button has `id="menu-btn"`
- **Verify:** Nav links have `id="nav-links"`

**Issue:** Booking not saving
- **Check:** Form submission handlers in respective JS files
- **Verify:** User is logged in (`localStorage.getItem("isLoggedIn")`)
- **Verify:** All form fields are filled

**Issue:** Styles not applying
- **Check:** CSS file is linked in HTML `<head>`
- **Verify:** Class names match between HTML and CSS
- **Check:** Browser cache (hard refresh: Ctrl+Shift+R)

**Issue:** Images not loading
- **Check:** Image paths in HTML files
- **Verify:** Images exist in `img/` or `assets/` folders
- **Check:** File extensions match (jpg vs jpeg)

---

## 📝 Version History

- **v4.1** - Current version with full commenting and documentation
- Includes: Homepage, Destinations, Packages, Authentication, Bookings

---

## 🚀 Quick Start for Developers

1. **Start Here:** Open `homepage.html` in browser
2. **Global Styles:** Edit `styleshome.css` for site-wide changes
3. **Navigation:** Modify `main.js` for menu behavior
4. **Add Content:** Follow templates in "Common Tasks" section
5. **Test:** Check all pages after changes
6. **Deploy:** Upload all files maintaining folder structure

---

**Last Updated:** 2024
**Maintained By:** WanderThrive Development Team
