
export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    renderDisqualified() {
        return `${this.css()}
                ${this.disqualifiedhtml()}`;
    },
    renderQualified() {
        return `${this.css()}
                ${this.qualifiedhtml()}`;
    },

    html() {
        return `<section id="book-demo-heading">
        <h2>Book a demo</h2>
        <p>
          Help us customize your demo by answering the followings questions
          below.
        </p>
      </section>`;
    },

    disqualifiedhtml() {
        return `<section id="book-demo-heading">
        <h2>Oh no!</h2>
        <h2>All our consultants are busy</h2>
        <p>
          We'll let you know when the next one is available.
        </p>
      </section>
        `
    },

    qualifiedhtml() {
        return `<section id="book-demo-heading">
        <h2>Awesome! We'll contact you shortly</h2>
        <p>
          We'll send you an email with available times to meet.
        </p>
      </section>
        `
    },

    css() {
        return `<style>    
        .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        
        section {
            margin: 24px;
            position: relative;
        }
        h2 {
          font-weight: 700;
          font-size: 34px;
          text-align: center;
         margin-bottom: 11px;
         margin-top: 40px;
      }
      
      p {
          font-size: 16px;
          text-align: center;
          color: var(--neutral-700);
          font-weight: 400;
          line-height: 26px;
      }
          }
                </style>`;
    },
}
