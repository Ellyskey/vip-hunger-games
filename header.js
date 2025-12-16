// components/header.js

// Create a template for the header content
const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
    <style>
    header {
      background-color: #222;
      padding: 20px;
      text-align: center;
      border-bottom: 1px solid #444;
    }
    nav{
    display: flex;
      flex-direction: row;        /* 🔥 force horizontal */
      justify-content: center;
      align-items: center;
      gap: 30px;
      white-space: nowrap;        /* 🔥 prevent wrapping */
    }
    nav a {
      display: inline-block;      /* 🔥 behave the same */
      text-decoration: none;
      color: #ffcc00;
      font-weight: bold;
      font-size: 18px;
      cursor: pointer;
      
    }
    nav a:hover {
      color: #fff;
    }
    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 40px 20px;
    }
    /* Dropdown wrapper */
    .dropdown {
       position: relative;
      display: inline-block;      /* 🔥 NOT block */
    }

    /* Dropdown menu */
    .dropdown-menu {
      display: none;
      position: absolute;
      top: 28px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #333;
      border: 1px solid #555;
      border-radius: 6px;
      min-width: 220px;
      padding: 6px 0;
      z-index: 10;
    }

    .dropdown-menu a {
      display: block;
      padding: 8px 16px;
      font-size: 16px;
      color: #ffcc00;
    }

    .dropdown-menu a:hover {
      background-color: #444;
      color: #fff;
    }

    /* Show dropdown on hover */
    .dropdown:hover .dropdown-menu {
      display: block;
    }

    h1 {
      font-size: 3rem;
      margin-bottom: 10px;
    }
    p {
      font-size: 1.2rem;
      max-width: 600px;
    }
    </style>
    
    <header>
    <h1>Welcome to the Hunger Games</h1>
    <nav>
      <a href="index.html">Home</a>
      <a href="tributes.html">The Reaping Ceremony</a>
      <a href="scores.html">The Scores</a>
       <div class="dropdown">
        <a href="#" class="dropdown-toggle">The Hunger Games</a>
        <div class="dropdown-menu">
          <a href="hungergamesmain.html">Default Events</a>
          <a href="simulator.html">Custom Events</a>
        </div>
      </div>
    </nav>
  </header>
`;

class CustomHeader extends HTMLElement {
  constructor() {
    super();
    // Attach a shadow root to the element
    this.attachShadow({ mode: 'open' }); // 'open' allows external JS to access shadow DOM if needed
    // Append the template content to the shadow root
    this.shadowRoot.appendChild(headerTemplate.content.cloneNode(true));
  }
}

// Define the custom element
customElements.define('custom-header', CustomHeader);