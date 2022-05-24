import BookDemoEmail from '../ss-biz-email/ss-biz-email.js';
import BookDemoBizSolution from '../ss-biz-solution/ss-biz-solution.js';
import BookDemoHeading from '../ss-demo-heading/ss-demo-heading.js';
import BookDemoIcon from '../ss-demo-icon/ss-demo-icon.js';
import BookDemoButton  from '../ss-schedule-button/ss-schedule-button.js';
import BookDemoCustomBizSize from '../ss-custom-biz-size/ss-custom-biz-size.js';
import { accumulator } from '../../utils/accumulator.js';

export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    html() {
        return `  
        <section class="container">
        <ss-demo-icon path="calendar-days-regular.svg"></ss-demo-icon>
        <ss-demo-heading qualified="inprogress"></ss-demo-heading>
        <form>
          <ss-biz-email></ss-biz-email>
          <ss-custom-biz-size></ss-custom-biz-size>
          <ss-biz-solution></ss-biz-solution>
          <ss-schedule-button></ss-schedule-button>
        </form> 
      </section>`;
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
                        max-width: 400px;
                    }

                    ss-demo-icon {
                        height: 100%;
                    }
                </style>`;
    }
}
