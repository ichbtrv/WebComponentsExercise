
export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    html() {
        return `<section id="biz-email" value>
        <label for="business-email"> Business Email </label>
        <input
          name="business-email"
          type="email"
          id="biz-email-input"
          placeholder="Enter your business email"
          value=""
        />
        <svg class="valid-email" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.7812 7.75C13.7812 4.03125 10.7188 0.96875 7 0.96875C3.25391 0.96875 0.21875 4.03125 0.21875 7.75C0.21875 11.4961 3.25391 14.5312 7 14.5312C10.7188 14.5312 13.7812 11.4961 13.7812 7.75ZM6.20703 11.3594C6.04297 11.5234 5.74219 11.5234 5.57812 11.3594L2.73438 8.51562C2.57031 8.35156 2.57031 8.05078 2.73438 7.88672L3.36328 7.28516C3.52734 7.09375 3.80078 7.09375 3.96484 7.28516L5.90625 9.19922L10.0078 5.09766C10.1719 4.90625 10.4453 4.90625 10.6094 5.09766L11.2383 5.69922C11.4023 5.86328 11.4023 6.16406 11.2383 6.32812L6.20703 11.3594Z" fill="#00873F"/>
</svg>

<svg class="invalid-email" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6836 12.8086L10.1211 1.40625C9.62891 0.558594 8.34375 0.53125 7.85156 1.40625L1.28906 12.8086C0.796875 13.6562 1.42578 14.75 2.4375 14.75H15.5352C16.5469 14.75 17.1758 13.6836 16.6836 12.8086ZM9 10.4297C9.68359 10.4297 10.2578 11.0039 10.2578 11.6875C10.2578 12.3984 9.68359 12.9453 9 12.9453C8.28906 12.9453 7.74219 12.3984 7.74219 11.6875C7.74219 11.0039 8.28906 10.4297 9 10.4297ZM7.79688 5.91797C7.76953 5.72656 7.93359 5.5625 8.125 5.5625H9.84766C10.0391 5.5625 10.2031 5.72656 10.1758 5.91797L9.98438 9.63672C9.95703 9.82812 9.82031 9.9375 9.65625 9.9375H8.31641C8.15234 9.9375 8.01562 9.82812 7.98828 9.63672L7.79688 5.91797Z" fill="#C41337"/>
</svg>

        <p id="invalid-email" hidden="true">Please make sure this isn't a personal email address</p>
      </section>`;
    },

    css() {
        return `<style>    

        :host {
          display: flex;
          flex-direction: column;
        }

        svg {
          position: absolute;
          top: 33%;
          right: 1%;
        }

        #invalid-email {
          color: red;
          font-size: 12px;
          
        }

        #biz-email {
          display: flex;
          flex-direction: column;
          position: relative;
        }
        label {
          color: var(--neutral-800);
           line-height: 16px;
           font-size: 13px;
           display: flex;
          align-items: center;
          margin: 0 0 6px 0;
      }
      input {
          padding: 6px 12px;
          background: var(--neutral-200);
          outline: none;
          border: none;
          border-radius: 4px;
      }
      
      input:focus {
          border: none;
          outline: 1px solid var(--purple-600);
      }
      
      input:selected {
          background: var(--purple-900);
      
      }
      .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
      }

      .valid-email  {
        display: none;
        position: absolute;
        top: 55%;
        right: 1%;
      }

      .invalid-email  {
        display: none;
        position: absolute;
        top: 33%;
        right: 1%;
      }
      
      section {
          width: 400px;
          position: relative;
      }
    </style>`;
    },
}
