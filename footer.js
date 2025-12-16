// components/footer.js

// Create a template for the footer content
const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
  <style> 
  footer {
      background-color: #222;
      color: #999;
      text-align: center;
      padding: 10px;
      font-size: 0.9rem;
    }
  </style>
  <footer>
    Created by <a href="https://www.twitch.tv/ellyskey">Ellyskey</a> · Inspired by chaos and creativity
  </footer>
`;

class CustomFooter extends HTMLElement {
  constructor() {
    super();
    // Attach a shadow root
    this.attachShadow({ mode: 'open' });
    // Append the template content
    this.shadowRoot.appendChild(footerTemplate.content.cloneNode(true));
  }
}

// Define the custom element
customElements.define('custom-footer', CustomFooter);