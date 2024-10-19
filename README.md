# Store Project
https://mosnad-web01.github.io/Abdulmajeed-store-project/

This is a store database project, where it shows products, their description, ratings, images, prices, categories, and so on.

This project uses The Fake Store API: `https://fakestoreapi.com`. It is up to
you to use your Google and Postman skills to explore the API and understand the
data.

# Already built for you

- A home page that shows products from the API
- When you click one of the products, you'll see the Single product page, which should includes:
  - Product image
  - Product title
  - Product rating
  - Product price
  - Product description
  - An add to Cart button

# What you and your partners will build

### Navbar

Add a universal navbar (it appears on every page) to the home page that includes
buttons that go to the following pages:

- Home button, takes you to the home page
- Categories button that has a dropdown list to show different products categories. For
  example: electronics, jewelery ...etc, When you click one of them it should
  load the products for that category.
- About page that has a description of the website
- Search box where you can type the product name and display the
  related results.
- A filter dropdown to filter the displayed products in the home page, based
  on (ratings and prices)
- A cart icon that shows the number of items in the cart, once clicked opens another page that shows the current items and allows you to checkout.

### Footer

Add a universal footer that includes:

- Credit to you and your partner for building the website,
- You and your partner's github link inside an icon and optionally, your social
  media links

### Home Page products

- Make it so that hovering over the product makes the mouse pointer icon seem
  clickable. Right now, if you are about to click a movie, it's not obvious that
  it's clickable.
- Using Bootstrap, display the page as a grid with 3 columns (3 products
  in the same row)
- Make it responsive where it displays 2 columns for tablets and 1 column for
  phones
- Style the rest of the page however you like.
- Add the title, image, price and category to the product in the home page.
- Add a small cart icon to the top right of the image to add it to the cart with that small click, and make sure to update the cart icon on the navbar with the number of correct items in the cart.

## Single Product Page

I built part of the single product page for you, but the information isn't
totally complete, a few more features are needed:

- The title of the product
- The category of the product
- The description of the product
- The price of the product
- An image of the product
- An add to cart button to add it to the cart, make sure it is functionality works correctly.

### Functionality

- Clicking a product in the main page should go to the single product page.

### Other requirements

- There's an issue with duplication in the movie page that has to be fixed (and
  you need to open the site and read the code to fix it)
- Style the page however you like

## Cart Page

This page can be reached by clicking on the cart icon on the navbar.

It should display a list of current items on the cart, that is persistent across page refresh!

## Teamwork guide

In this project you will follow the pair-programming guideline where one of the teammates will be the driver and the other will be the navigator, you will switch roles every 30 minutes.

- The driver will be the one writing the code and the navigator will be the one guiding the driver on what to write
- The navigator will be the one looking at the big picture and making sure the code is clean and easy to read
- The driver will be the one typing and the navigator will be the one talking
- The driver will be the one pushing the code to the repo and the navigator will be the one reviewing the code

### Git workflow

- Make sure to create a new branch for each feature you are working on
- Make sure to push your code to the repo every 30 minutes or so.
- Make sure to review the code before merging it to the main branch

- These are things to look for while you are reviewing code:

  - Is the code clean and easy to read?
  - Are there any bugs?
  - Is the code efficient?
  - Is the code following the best practices?

## Bonus

If you finished early and want to add more features to the website, here are some suggestions:

- Add a loading spinner while the data is being fetched
- Add a dark mode to the website
- Add a login page that allows you to login to the page and save the user session and show it in the navbar section and the cart page.

## Submission

Make sure to include a live link to the website and a link to the repo in the README.md file.

## Demo

Here is a link to a demo website that you can use as a reference: `https://noelfakestore.netlify.app/`

PS: The demo website is for reference only, you should not copy the style.
