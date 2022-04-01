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

### Adding Items to the Cart


### Searching for Products
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
