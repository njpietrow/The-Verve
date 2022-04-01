# The Verve

<a href="https://the-verve.herokuapp.com/#/">Live Link</a>

Welcome to The Verve. This full-stack, single-page app is intended to be a clone of the <a href="https://www.vervecoffee.com/" target="_blank" rel="noopener noreferrer">Verve Coffee Roasters</a> website. I intentionally chose to clone this Shopify site so I could connect relevant ecommerce backend logic with a clean and seamless front end experience. 

insert product show page here

<h2 id="table-of-contents">Table of Contents</h2>

- [Key Features](#features)
- [Technologies Used](#technologies-used)
- [Planned Features](#future-plans)

#
<h2 id="features">Key Features</h2>

### Filtering Products by Category
Clicking on the header dropdowns in the application updates the category in the app and fetches all products from the database that match the chosen category. The category is stored in the Redux state under the ui/filters slice of state before making a API request. I later added more specific frontend routes with a :filter wildcard so that components could access the current filter from either the url or the redux state. If I could restart, I would use the url method for all use cases.
```javascript
export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchProducts(getState().ui.filters)(dispatch);
};
```

### Adding Items to the Cart
Cart items are stored in local storage and will be persisted when the page is refreshed. This is done using the Redux store subscribe method. Upon page refresh, the cart and filters will be loaded from local storage and used to reload the page state as if it never changed. Another notable cart feature is that both logged in and logged out users can add items to the cart, but when a user logs out it will clear the cart for privacy purposes.
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

Typing into the search bar calls a debounced function to request all products from the database that match the query string. The API is only sent after 600ms have elapsed since the last keypress. Once the results are received back, they are dislayed in the search bar result dropdown. These results are links that lead to the individual product pages. Clicking outside of the result dropdown hides the results.


Results are queries from the database based on the product names, categories, and ingredient lists.
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

- video snippets of like and review errors.

#
<h2 id="technologies-used">Technologies used</h2>

- __Front End__: React.js, Redux
  - Supports front-end handling of cart, rendering of pages, and navigation.
  - Persists cart to `localStorage` to maintain cart information through page refresh
- __Back End__: Ruby on Rails, Jbuilder, Active Storage, and PostgreSQL database
  - The Back end was implemented using the Rails MVC framework along with Jbuilder to formate JSON responses for API endpoints
  - Active Storage blobs were use to create associations between products and images stored on S3
- __Other__: Amazon AWS S3, JavaScript
  - AWS S3 handles image hosting to allow for a more lightweight and modular implementation of the app.
  - Webpack and Babel.js transpile the code
- __Hosting__: The Verve is hosted on heroku.

#
<h2 id="future-plans">Planned Features</h2>

- Add transaction table to database to persist transations for a user account and view order history in the account page
- Add ReCaptcha for user verfication during account creation
- Allows users to delete reviews thaat they have posted

#
### Credit
- Images are property of Verve Coffee Roasters
- The Verve does not sell any products or merchandise and is intended for display purposes only
