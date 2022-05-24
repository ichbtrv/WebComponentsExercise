
export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    html() {
        return `
        <section id="book-demo-icon">
          <div class="svg-overlay">
            <img src="./calendar-days-regular.svg" />
          </div>
      </section>`;
    },
    mapDOM(scope) {
      return {
         img: scope.querySelector('img'),
      }
  },

    css() {
        return `<style>    

        :host {
            height: 120px;
        }
        img {
          display: block;
          padding: 30px;
        }
        .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        
        section {
            margin: 24px;
            position: relative;
        }
        #book-demo-icon{
            width: 120px;
            height: 120px;
            background: var(--purple-200);
            border-radius: 50%;
              margin: 20px auto 10px auto;
          }
          
          
          .svg-overlay {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            background-color: transparent;
          }
                </style>`;
    },
}
