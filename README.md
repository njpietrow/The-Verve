# The Verve

<a href="https://the-verve.herokuapp.com/#/">Live Link</a>

Welcome to The Verve. This full-stack, single-page app is intended to be a clone of the <a href="https://www.vervecoffee.com/" target="_blank" rel="noopener noreferrer">Verve Coffee Roasters</a> website. I intentionally chose to clone this Shopify site so I could connect relevant ecommerce backend logic with a clean and seamless front end experience. 

<h2 id="table-of-contents">Table of Contents</h2>

- [Key Features](#features)
- [Technologies Used](#technologies-used)
- [Future Plans](#future-plans)

#
<h2 id="features">Key Features</h2>

- TBD

#
<h2 id="technologies-used">Technologies used</h2>

- __Front End__: React.js, Redux
  - Supports front-end handling of cart, rendering of pages, and navigation.
  - Persists cart to `localStorage` to maintain cart information through page refresh
- __Back End__: Ruby on Rails, with PostgreSQL database
  - Supports back-end server access, and acts as a middleware for the PostgreSQL database, manipulating the database where needed.
  - Handles User Authentication via session tokens which are then bootstrapped to the window and sent forward to the front-end.
- __Other__: Google Maps JavaScript API, Google Places API, Amazon AWS S3, JavaScript
  - Google Maps and Google Places were used to get accurate information about local restaurants, like name, address, review-count, rating, and pricing.
  - The Google Maps JavaScript API is also used to render the map with appropriate markers and infowindows on the Pickup page.
  - AWS S3 handles image hosting to allow for a more lightweight and modular implementation of the app. Images changed on the buckets will reflect on the site with no need to change the code.
  - Webpack and Babel.js transpile the code
- __Hosting__: The Verve is hosted on heroku.

#
<h2 id="future-plans">Planned Features</h2>

- Add transaction table to database to persist transations for a user account and view order history in the account page
- Add ReCaptcha for user verfication during account creation

#
### Credit
- Images are property of Verve Coffee Roasters
- The Verve does not sell any products or merchandise and is intended for display purposes only