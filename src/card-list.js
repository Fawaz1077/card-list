import { LitElement, html, css } from 'lit';
import "fawaz-nice-card/src/fawaz-nice-card.js";
import "farisflight/src/flight-card.js"



const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class CardList extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
   
  `;

  constructor() {
    super();
    this.header = 'My app';
    this.name = "Welcome";
  }

  render() {
    return html`
      <fawaz-nice-card></fawaz-nice-card>
      <flight-card>ç</flight-card>


    `;
  }
}

customElements.define('card-list', CardList);