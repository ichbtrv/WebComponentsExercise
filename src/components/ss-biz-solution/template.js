
export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    html() {
        return ` <section id="solution-pref">
        <fieldset>
          <legend>
            What is the most important thing to you in a solution?
          </legend>
          <div class="radio-group">
            <div class="radio-left">
              <div class="radio-button">
                <input
                  type="radio"
                  id="rt-analytics"
                  name="solution"
                  value="Real-time Analytics"
                />
                <label for="rt-analytics">Real-time Analytics</label>
              </div>
              <div class="radio-button">
                <input
                  type="radio"
                  id="query-response-time"
                  name="solution"
                  value="Query Response Time"
                />
                <label for="query-response-time">Query Response Time</label>
              </div>
              <div class="radio-button">
                <input
                  type="radio"
                  id="h-concurrency"
                  name="solution"
                  value="High Concurrency"
                />
                <label for="h-concurrency">High Concurrency</label>
              </div>
              <div class="radio-button">
                <input
                  type="radio"
                  id="ast-data-ingest"
                  name="solution"
                  value="Fast Data Ingest"
                />
                <label for="fast-data-ingest">Fast Data Ingest</label>
              </div>
            </div>
            <div class="radio-right">
              <div class="radio-button">
                <input
                  type="radio"
                  id="scalability"
                  name="solution"
                  value="Scalability"
                />
                <label for="scalability">Scalability</label>
              </div>
              <div class="radio-button">
                <input
                  type="radio"
                  id="doc-storage"
                  name="solution"
                  value="Document Storage"
                />
                <label for="doc-storage">Document Storage</label>
              </div>
              <div class="radio-button">
                <input
                  type="radio"
                  id="fts"
                  name="solution"
                  value="Full Text Search"
                />
                <label for="fts">Full Text Search</label>
              </div>
              <div class="radio-button">
                <input
                  type="radio"
                  id="price"
                  name="solution"
                  value="Price"
                />
                <label for="">Price</label>
              </div>
            </div>
          </div>
        </fieldset>
      </section>`;
    },

    css() {
        return `<style>
        :host {
       
        }
    

      label {
        color: var(--neutral-800);
         line-height: 16px;
         font-size: 13px;
         display: flex;
        align-items: center;
   
    }

 
        
        section {
            margin: 24px 0;
            position: relative;
        }
        .radio-left, .radio-right {
          display: flex;
          flex-direction: column;
      }

      input {
        background: var(--neutral-200);
        outline: none;
    }

    input[type="radio"] {
      -webkit-appearance: none;
      -moz-appearance: none;
      background-color: white;
      box-sizing: border-box;
      cursor: default;
      border-radius: 50%;
      height: 16px;
      width: 16px;
      padding: initial;
      border: 1.5px solid var(--neutral-700); 
      }

      input[type="radio"]:hover  {
        -webkit-appearance: none;
        -moz-appearance: none;
        background-color: white;
        box-sizing: border-box;
        cursor: pointer;
        border-radius: 50%;
        height: 16px;
        width: 16px;
        padding: initial;
        border: 1.5px solid var(--purple-900); 
        }

        input[type="radio" i]:checked  {
          -webkit-appearance: none;
          -moz-appearance: none;
          background-color: white;
          box-sizing: border-box;
          cursor: pointer;
          border-radius: 50%;
          height: 16px;
          width: 16px;
          padding: initial;
          border: 4px solid var(--purple-900); 
          }
      
      legend {
        margin-bottom: 8px;
        color: var(--neutral-800);
        font-size: 13px;
        line-height: 16px;
    }

      fieldset {
        border: none;
        padding: 0;
    }
    #solution-pref  {
      display: flex;
      width: 400px;
      align-items: center;
      margin-bottom: 40px;
  }
  .radio-group {
      display: flex;
      justify-content: stretch;
      justify-content: space-between;
      width: 384px;
  }
  
  .radio-button {
      display: flex;
      font-size: 14px;
      line-height: 20px;
      margin-top: 8px;
  }
  
  
  .radio-button label {
      margin-left: 6px;
  }
                </style>`;
    },
}
