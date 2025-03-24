# Amazon Clone

A fully responsive Amazon Clone built using HTML, CSS, and JavaScript. This project replicates Amazon's UI, including product listings, a shopping cart, and a checkout page.

## Features

- Responsive Design: Works on desktops, tablets, and mobile devices.
- Dynamic Cart System: Add, update, and remove items from the cart.
- Checkout Process: Displays a summary of selected items before purchase.
- Styled UI: Amazon-like design with custom CSS.
- Deployed on Vercel: Live hosting with fast performance.

## Folder Structure


```
📦 Amazon Clone
├── 📂 backend (optional for future enhancements)
├── 📂 data (stores JSON or other data files)
├── 📂 images (logo, product images, icons)
├── 📂 node_modules (not included in Git)
├── 📂 scripts (JavaScript files)
│   ├── cart.js
│   ├── checkout.js
│   ├── main.js
├── 📂 styles (CSS files)
│   ├── shared/general.css
│   ├── pages/home.css
│   ├── pages/checkout/checkout.css
├── amazon.html (Home Page)
├── checkout.html (Checkout Page)
├── orders.html (Order History)
├── package.json
├── .gitignore
└── README.md
```

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/amazon-clone.git
   cd amazon-clone
   ```
2. (Optional) Install dependencies (if using Node.js):
   ```sh
   npm install
   ```
3. Run a local development server:
   - Using Live Server (VS Code extension)
   - Or with Node.js:
     ```sh
     npx http-server
     ```
4. Open `index.html` in your browser.

## Usage

- Open the home page to browse products.
- Click Add to Cart to save items.
- Go to the Checkout Page to review your cart.
- Place an order (simulation).

## Deployment on Vercel

This project is live on Vercel for fast and reliable hosting.

### Steps to Deploy on Vercel:

1. Push your project to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and sign in.
3. Click New Project and select your GitHub repository.
4. Configure build settings (if needed) and click Deploy.
5. Your project will be live at `https://your-project.vercel.app`.

## Future Enhancements

- Add a backend (Node.js/Express.js) for authentication and order management.
- Implement a payment gateway.
- Enhance UI/UX with animations and better design.

## Contributing

Feel free to fork this repository and contribute with pull requests.

## License

This project is for educational purposes and follows an open-source license.

---

Made with ❤️ by Atul

