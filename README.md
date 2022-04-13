# The Verve

<a href="https://the-verve.herokuapp.com/#/">Live Link</a>

Welcome to The Verve. This full-stack, single-page app is intended to be a clone of the <a href="https://www.vervecoffee.com/" target="_blank" rel="noopener noreferrer">Verve Coffee Roasters</a> website. I intentionally chose to clone this Shopify site so I could connect relevant ecom server logic with a clean and seamless front end experience. 

<p align="center">
  <img width="500px" src="https://github.com/njpietrow/The-Verve/blob/main/readme_images/main_page.png"></img>
</p>

<h2 id="table-of-contents">Table of Contents</h2>

- [Key Features](#features)
- [Technologies Used](#technologies-used)
- [Planned Features](#future-plans)


<h2 id="features">Key Features</h2>

### Adding Items to the Cart
<p align="center">
  <img src="https://media.giphy.com/media/pluSLzxAajQd6vytlt/giphy.gif" alt="cart-add-gif"></img>
</p>

The cart is stored in both in the Redux state and in local storage to persist it across a page refresh. After a page refreshes, the cart will be loaded from local storage and then that info will be rendered on the page as if it never changed. Another notable cart feature is that both logged in and logged out users can add items to the cart, but when a user logs out it will clear the cart for privacy purposes.

```Javascript
store.subscribe(throttle(() => {
  saveState({
    entities: {
      cartItems: store.getState().entities.cartItems,
    },
    ui: {
      filters: {
        category: store.getState().ui.filters.category
      }
    },
  });
}, 1000));
```


### Searching for Products
<p align="center">
  <img src="https://media.giphy.com/media/4XYGnn0hgnIWNbUyF1/giphy.gif" alt="cart-add-gif"></img>
</p>

Typing into the search bar calls a debounced function to request all products from the database that match the query string. Results are queried from the database based on the product names, categories, and ingredient lists. The API request is only sent after 600ms have elapsed since the last keypress to limit load on the database. Once the results are received back, they are dislayed in the search bar result dropdown and each result links to the individual product pages. Clicking outside of the result dropdown hides the searchbar.

```Ruby
class Product < ApplicationRecord
  def self.match_search(query)
    Product.joins(:categories)
      .where(
        "products.product_name LIKE ? 
        OR categories.name LIKE ? 
        OR products.ingredients LIKE ?", 
        "%#{query}%", "%#{query}%", "%#{query}%"
      ).limit(15)
  end
```

### Review and Like action error handling

<p align="center">
  <img src="https://media.giphy.com/media/2b8x8TifiH8fLJt0e2/giphy.gif" alt="cart-add-gif"></img>
</p>

To replicate some validations that a real ecommerce site might have, users of The Verve are only permitted to publish reviews and vote on other users' reviews when logged in and error messages will be displayed if they are not. Similarly, users will also receive an error message after attempting to cast more than one vote on a review. I try to provide clear feedback to the user to explain the cause of the error and next steps.

<h2 id="technologies-used">Technologies used</h2>

- __Front End__: React.js, Redux
  - Supports front-end handling of cart, rendering of pages, and navigation
  - The frontend routes conditionally render components based on the url path and if a user is logged in
  - Persists cart to `localStorage` to maintain cart information through page refresh
- __Back End__: Ruby on Rails, Jbuilder, Active Storage, and PostgreSQL database
  - The back end was implemented using the Rails MVC framework along with Jbuilder to formulate JSON responses for the API endpoints
  - Active Storage blobs were use to create associations between products and images stored on S3
- __Other__: Amazon AWS S3, JavaScript
  - AWS S3 handles image hosting to allow for a more lightweight and modular implementation of the app.
  - Webpack was used for bundling and Babel.js for transpiling
  - The Faker gem was used to seed usernames and review content
  - Autoprefixer gem was used to automatically add vendor prefixes to CSS 
- __Hosting__: The Verve is hosted on heroku.


<h2 id="future-plans">Planned Features</h2>

- Add transaction table to database to persist transations for a user account and view order history in the account page
- Add ReCaptcha for user verfication during account creation
- Allow users to delete reviews that they have posted


### Credit
- Images are property of Verve Coffee Roasters
- The Verve does not sell any products or merchandise and is intended for display purposes only
- Improved search functionality (trim whitespace and search for individual keywords)
