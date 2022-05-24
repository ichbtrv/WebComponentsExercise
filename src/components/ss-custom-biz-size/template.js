
export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    html() {
        return `    
        <section class="select-container">
          <p class="custom-label">Business Size</p>
          <div class="custom-select">
            <div class="closed">
              <p id="selection-display">Select Size</p>
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9336 1.34375L12.4141 0.796875C12.2773 0.660156 12.0586 0.660156 11.9492 0.796875L7 5.74609L2.02344 0.796875C1.91406 0.660156 1.69531 0.660156 1.55859 0.796875L1.03906 1.34375C0.902344 1.45312 0.902344 1.67188 1.03906 1.80859L6.75391 7.52344C6.89062 7.66016 7.08203 7.66016 7.21875 7.52344L12.9336 1.80859C13.0703 1.67188 13.0703 1.45312 12.9336 1.34375Z"
                  fill="#777582"
                />
              </svg>
            </div>
            <div class="open" hidden>
              <option value="1-10">1-10</option>
              <option value="11-15">11-15</option>
              <option value="51-100">51-100</option>
              <option value="101-250">101-250</option>
              <option value="250-1000">250-1000</option>
              <option value="1000+">1000+</option>
            </div>
          </div>
      </section>`;
    },

    css() {
        return `
        <style>
        section {
          margin: 24px 0;
        }
        .custom-select {
          display: flex;
          border-radius: 4px;
          padding: 6px 12px;
          background: var(--neutral-200);
          text-align: left;
          position: relative;
        }
  
        .closed {
          display: flex;
          width: 100%;
          justify-content: space-between;
          cursor: pointer;
          color: gray;
        }
  
        .closed svg {
          margin: auto 0;
        }
        .open {
          position: absolute;
          top: 115%;
          right: 1px;
          background: white;
          border: none;
          outline: none;
          border-radius: 4px;
          font-size: 14px;
          line-height: 20px;
          color: var(--neutral-900);
          padding: 6px 1px;
          width: 396px;
          filter: drop-shadow(0 1px 4px rgba(27, 26, 33, 0.25));
          z-index: 10;
        }
  
        .open option {
          padding: 12px 16px;
        }
  
        .open option:hover {
          background: var(--neutral-200);
          cursor: pointer;
        }
  
        .select-container {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          text-align: left;
          width: 400px;
    

        }
  
        p {
          text-align: left;
          margin: 0 0 0 1px;
          font-size: 13px;
          color: var(--neutral-700);
        }

        p.custom-label {
          color: var(--neutral-800);
          margin-bottom: 6px;
        }
      </style>`;
    },
}
