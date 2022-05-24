
export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    html() {
        return `
        <header>
        <svg
        fill="none"
        height="105"
        viewBox="0 0 500 105"
        width="500"
        class="logo"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <linearGradient
          id="a"
          gradientUnits="userSpaceOnUse"
          x1="74.392"
          x2="-20.7869"
          y1="-27.1994"
          y2="24.1018"
        >
          <stop offset="0" stop-color="#ff7bff" />
          <stop offset=".350158" stop-color="#a0f" />
          <stop offset=".998876" stop-color="#80c" />
        </linearGradient>
        <linearGradient
          id="b"
          gradientUnits="userSpaceOnUse"
          x1="28.1275"
          x2="86.6668"
          y1="-11.7575"
          y2="38.2921"
        >
          <stop offset=".0354358" stop-color="#ff7bff" />
          <stop offset=".576537" stop-color="#80c" />
          <stop offset="1" stop-color="#311b92" />
        </linearGradient>
        <g fill="#fff">
          <path
            d="m130.842 81.7569c-2.525-.3986-4.802-.9869-6.871-1.7272v-8.7687c4.897 1.5943 9.528 2.3725 13.912 2.3725 3.815 0 6.643-.7402 8.522-2.2207 1.86-1.4804 2.79-3.6252 2.79-6.4722 0-1.5943-.284-2.9229-.854-4.0238-.569-1.1008-1.518-2.0688-2.847-2.9229-1.328-.8541-3.132-1.6702-5.447-2.4484l-3.72-1.2527c-9.092-3.0937-13.647-8.8637-13.647-17.2718 0-3.7581.816-6.9847 2.468-9.6798 1.651-2.6952 4.099-4.764 7.364-6.2065 3.264-1.4235 7.307-2.1447 12.09-2.1447 2.164 0 4.328.1328 6.453.4175 2.126.2847 4.005.6643 5.618 1.1768v8.7308c-3.359-1.0629-7.098-1.5943-11.198-1.5943-8.294 0-12.451 2.847-12.451 8.522 0 1.5374.266 2.8091.778 3.834.513 1.0249 1.386 1.9549 2.582 2.7521 1.214.8161 2.885 1.5753 5.029 2.2966l3.721 1.2526c4.726 1.5944 8.313 3.7961 10.761 6.6241 2.43 2.828 3.663 6.5101 3.663 11.0464 0 3.8149-.835 7.0985-2.524 9.8316s-4.138 4.8399-7.364 6.3014c-3.227 1.4614-7.118 2.1827-11.654 2.1827-2.259 0-4.65-.1898-7.174-.6074z"
          />
          <path
            d="m166.448 29.9228c-.93-.8731-1.385-2.1068-1.385-3.7011 0-1.5944.455-2.8281 1.385-3.7201.93-.8731 2.297-1.3286 4.1-1.3286s3.189.4555 4.119 1.3476c.93.892 1.404 2.1257 1.404 3.7011 0 1.5943-.455 2.828-1.385 3.7011-.93.873-2.297 1.3096-4.138 1.3096-1.803 0-3.17-.4366-4.1-1.3096z"
          />
          <path d="m175.976 36.0155h-10.154v45.5521h10.154z" />
          <path
            d="m184.972 36.0153h8.428l.759 4.8778h.55c1.443-1.8031 3.151-3.1886 5.106-4.1566s4.118-1.4425 6.491-1.4425c3.872 0 6.947 1.2147 9.205 3.6442 2.259 2.4294 3.398 6.3583 3.398 11.7486v30.8615h-10.098v-30.0833c0-2.5623-.512-4.3844-1.537-5.4662-1.025-1.0819-2.486-1.6323-4.384-1.6323-1.443 0-2.904.3606-4.347 1.0628-1.442.7023-2.6 1.7842-3.473 3.2456v32.9114h-10.098z"
          />
          <path
            d="m239.711 92.6516c3.872 0 6.719-.892 8.56-2.6762 1.841-1.7841 2.753-4.7829 2.753-9.0155v-4.0048h-.494c-.968 1.5944-2.316 2.8471-4.005 3.7961s-3.625 1.4235-5.808 1.4235c-2.733 0-5.219-.7593-7.478-2.2777-2.258-1.5184-4.08-3.9668-5.447-7.3262-1.386-3.3595-2.069-7.668-2.069-12.9065 0-8.1234 1.822-14.216 5.447-18.2398 3.626-4.0427 9.13-6.0736 16.513-6.0926 2.278 0 4.631.1898 7.061.5884 2.429.3986 4.555.9111 6.396 1.5943v41.7941c0 7.535-1.708 13.0203-5.087 16.4177-3.397 3.3974-8.56 5.0866-15.487 5.0866-.361 0-.494 0-.855-.019zm8.598-19.8721c1.158-.5694 2.069-1.3665 2.733-2.3535v-26.7239c-1.385-.3037-2.79-.4555-4.175-.4555-3.587 0-6.282 1.1768-8.086 3.5493-1.803 2.3725-2.695 6.3393-2.695 11.9384 0 3.8909.342 6.9467 1.044 9.1294s1.67 3.7011 2.904 4.5362c1.234.8352 2.809 1.2527 4.707 1.2527 1.215 0 2.411-.2847 3.568-.8731z"
          />
          <path d="m270.155 81.5863v-67.493h10.098v67.474h-10.098z" />
          <path
            d="m321.477 62.0369h-23.839c.114 3.0937.57 5.5042 1.386 7.2693.816 1.7462 2.05 2.9989 3.72 3.7581s3.891 1.1198 6.681 1.1198c2.866 0 6.187-.5315 9.945-1.5943v8.2183c-2.03.5504-3.928.968-5.694 1.2147-1.765.2468-3.587.3796-5.447.3796-4.84 0-8.788-.7971-11.843-2.4104-3.056-1.6133-5.315-4.1377-6.795-7.592-1.481-3.4734-2.221-8.0476-2.221-13.7606 0-7.8007 1.538-13.6276 4.612-17.5185 3.075-3.8909 7.421-5.8269 13.059-5.8269 10.97 0 16.455 7.8767 16.455 23.6301v3.1128zm-20.403-18.6194c-1.044.7782-1.879 2.1447-2.487 4.0996-.607 1.955-.93 4.6312-.968 8.0666h14.33c-.019-3.4164-.322-6.1116-.873-8.0666-.55-1.9549-1.328-3.3214-2.334-4.0996s-2.259-1.1768-3.758-1.1768c-1.557 0-2.866.3986-3.91 1.1768z"
          />
          <path
            d="m334.949 81.7571c-2.524-.3986-4.802-.987-6.871-1.7272v-8.7688c4.897 1.5943 9.528 2.3725 13.913 2.3725 3.815 0 6.643-.7402 8.522-2.2206 1.86-1.4805 2.79-3.6252 2.79-6.4722 0-1.5944-.285-2.923-.854-4.0238-.57-1.1009-1.519-2.0688-2.847-2.9229-1.329-.8541-3.132-1.6703-5.447-2.4484l-3.721-1.2527c-9.11-3.1128-13.646-8.8827-13.646-17.2908 0-3.7581.816-6.9847 2.467-9.6799 1.651-2.6951 4.1-4.7639 7.364-6.2064 3.265-1.4235 7.308-2.1448 12.091-2.1448 2.163 0 4.327.1329 6.453.4176s4.005.6643 5.618 1.1768v8.7308c-3.359-1.0629-7.098-1.5944-11.198-1.5944-8.294 0-12.451 2.8471-12.451 8.5221 0 1.5374.266 2.809.778 3.8339.513 1.025 1.386 1.955 2.581 2.7522 1.215.8161 2.885 1.5753 5.03 2.2965l3.72 1.2527c4.726 1.5943 8.313 3.796 10.762 6.624 2.429 2.8281 3.663 6.5102 3.663 11.0464 0 3.815-.835 7.0985-2.524 9.8317-1.69 2.7331-4.138 4.8399-7.365 6.3014-3.226 1.4614-7.117 2.1826-11.653 2.1826-2.278.019-4.669-.1708-7.175-.5883z"
          />
          <path
            d="m393.388 73.1402v8.4272c-2.201.5314-4.479.7971-6.852.7971-4.764 0-8.37-1.2527-10.856-3.777-2.487-2.5244-3.72-6.5291-3.72-11.9954v-22.5103h-6.966v-8.0665h6.966l1.803-16.2469h8.313v16.2469h10.933v8.0665h-10.933v21.2956c0 2.0878.228 3.7391.702 4.9348.475 1.1957 1.215 2.0498 2.221 2.5623s2.354.7782 4.043.7782c1.025 0 2.467-.1708 4.346-.5125z"
          />
          <path
            d="m401.057 76.7082c-3.151-3.796-4.726-9.7178-4.726-17.7273 0-15.7914 6.093-23.6681 18.259-23.6681 5.846 0 10.344 1.9359 13.514 5.8079 3.15 3.8719 4.745 9.7937 4.745 17.7842 0 15.6776-6.093 23.5163-18.24 23.5163-5.884 0-10.401-1.917-13.552-5.713zm17.86-3.3594c1.12-.8921 1.993-2.4864 2.62-4.764.626-2.2776.911-5.4473.911-9.528 0-4.1756-.304-7.4402-.911-9.7747-.608-2.3346-1.481-3.9668-2.639-4.8779-1.157-.911-2.581-1.3855-4.308-1.3855-1.746 0-3.208.4555-4.347 1.3665-1.138.9111-2.011 2.5054-2.619 4.821-.607 2.3155-.911 5.5042-.911 9.6039 0 4.1566.304 7.3832.911 9.6798.608 2.3155 1.481 3.9099 2.619 4.8209 1.12.911 2.582 1.3665 4.366 1.3665 1.746.019 3.169-.4365 4.308-1.3285z"
          />
          <path
            d="m439.889 36.0151h8.352l.797 6.2634h.493c1.12-2.3345 2.62-4.0617 4.536-5.1625 1.898-1.1009 4.062-1.6513 6.492-1.6513.968 0 1.936.0759 2.885.2468v9.433c-.949-.1708-2.107-.2467-3.512-.2467-2.031 0-3.948.4745-5.77 1.4045-1.803.93-3.207 2.2207-4.175 3.8719v31.393h-10.098z"
          />
          <path
            d="m499.981 62.0369h-23.839c.114 3.0937.57 5.5042 1.386 7.2693.816 1.7462 2.05 2.9989 3.72 3.7581s3.891 1.1198 6.681 1.1198c2.866 0 6.187-.5315 9.945-1.5943v8.2183c-2.031.5504-3.929.968-5.694 1.2147-1.765.2468-3.587.3796-5.447.3796-4.84 0-8.788-.7971-11.843-2.4104-3.056-1.6133-5.315-4.1377-6.795-7.592-1.481-3.4734-2.221-8.0476-2.221-13.7606 0-7.8007 1.537-13.6276 4.612-17.5185s7.421-5.8269 13.058-5.8269c10.971 0 16.456 7.8767 16.456 23.6301v3.1128zm-20.403-18.6194c-1.044.7782-1.879 2.1447-2.487 4.0996-.607 1.955-.93 4.6312-.968 8.0666h14.33c-.019-3.4164-.322-6.1116-.873-8.0666-.55-1.9549-1.329-3.3214-2.334-4.0996-1.006-.7782-2.259-1.1768-3.759-1.1768-1.556 0-2.865.3986-3.909 1.1768z"
          />
        </g>
        <path
          d="m54.664 0c11.2059 3.11664 21.4156 10.9706 25.649 20.5698 6.4745 15.5833 4.9803 35.2804-2.1167 46.999-5.9765 9.5992-15.1902 14.7106-25.7735 14.5859-16.4352-.1247-29.7577-13.2146-29.8822-29.6705 0-16.4558 12.9489-30.0444 29.8822-30.0444 2.7392 0 6.6888.3799 11.1712 2.2499 0 0-3.2225-1.9087-11.4985-3.1908-23.7813-3.1166-51.842124 14.9035-45.36763 56.4172 8.96463 15.9572 26.14693 26.8029 45.69493 26.6789 28.7617-.125 52.2942-23.687 52.1692-52.6094 0-27.6758-22.5359-51.237606-49.928-51.9856z"
          fill="url(#a)"
        />
        <path
          d="m74.2119 22.0658c-3.9843-8.3526-12.2019-14.95989-22.2872-17.57787-2.2412-.62333-4.6069-.87266-7.2216-.99733-3.8597 0-7.595.49868-11.4548 1.496-9.5873 2.86732-16.3108 8.4773-20.2951 12.8406-5.10485 5.8592-8.46661 11.9679-10.45876 18.0765 0 .1246-.12451.2493-.12451.4987-.12451.4986-.62255 1.9946-.62255 2.3686-.12451.2493-.12451.6233-.24902.8727-.12451.4986-.24901.9973-.37352 1.496 0 .1246 0 .2493-.12451.3739-3.23725 16.0819 2.1406 30.5138 5.37784 35.8744.80971 1.3408 1.47462 2.4595 2.14098 3.4858-7.34605-39.893 13.77225-58.9327 37.80265-59.4313 12.5754-.2494 25.1509 4.8619 31.2518 15.0845-.3735-5.6099-.747-8.7266-3.3617-14.4612z"
          fill="url(#b)"
        />
      </svg>
      </header>`;
    },

    css() {
        return `<style>    
 
header {
  height: 80px;
  width: 1024px;
  background: var(--neutral-900);
  opacity: var(--header-opacity);
  color: black;
  position: relative;
}

.logo {

  width: 135.52px;
  height: 28.35px;
  display: block;
  position: absolute;
  top: 28.35px;
  left: 24px;
 

}
                </style>`;
    },
}
