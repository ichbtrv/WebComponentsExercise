
export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    html() {
        return `
      <button type="submit" name="submit-form" id="schedule-btn">
        Continue to Schedule a Time 
      </button>`;
    },

    css() {
        return `<style>    
          :host { 
            display: flex;
            flex-direction: column;
          }

          .container {
              display: flex;
              flex-direction: column;
              justify-content: center;
          }

          button {
            border: none; 
            background: var(--purple-900);
            color: white;
            border-radius: 4px;
            padding: 9px 6px;
            cursor: pointer;
          }

          button:hover, button:focus {
            background: var(--purple-800);
            transform: translateY(-1px);
          }

          button:active {
            background: var(--purple-900);
            transform: translateY(1px);
          
          }

          button#schedule-btn {
            width: 228px;
            margin: 0 auto;
          }
                </style>`;
    },
}
