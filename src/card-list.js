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
      <fawaz-nice-card>
         <slot>bro 1</slot>
      </fawaz-nice-card>

      <flight-card>
        <slot>sis 1</slot>
      </flight-card>

      <fawaz-nice-card>
         <slot>bro 2</slot>
      </fawaz-nice-card>

      <flight-card>
        <slot>sis 2</slot>
      </flight-card>

      <fawaz-nice-card>
         <slot>bro 3</slot>
      </fawaz-nice-card>

      <flight-card>
        <slot>sis 3</slot>
      </flight-card>

      <fawaz-nice-card>
         <slot>bro 4</slot>
      </fawaz-nice-card>

      <flight-card>
        <slot>sis 4</slot>
      </flight-card>

      <fawaz-nice-card>
         <slot>bro 5</slot>
      </fawaz-nice-card>
      
      <flight-card>
        <slot>sis 5</slot>
      </flight-card>

     

      

      

     



    `;
  }
}

customElements.define('card-list', CardList);