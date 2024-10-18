export function ada_logo(width: number, height: number) {
  return `
  <svg width="${width}" height="${height}" viewBox="0 0 193 66" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M82.927 21.6644L75.2243 22.6583L74.2925 19.1486H70.7517L69.9752 22.6583L62.0551 21.8819L68.2359 1.19623L76.8704 0.761401L82.927 21.6644ZM73.7334 14.3965L72.5532 8.99217L71.404 14.3965H73.7334ZM100.848 10.6694C100.848 12.1188 100.662 13.4285 100.289 14.5984C99.9166 15.758 99.3937 16.7933 98.7208 17.7044C98.0582 18.6051 97.2662 19.3816 96.3447 20.0338C95.4233 20.6861 94.4139 21.2244 93.3164 21.6489C92.219 22.063 91.0491 22.3736 89.8067 22.5807C88.5747 22.7774 87.3064 22.8758 86.0019 22.8758C85.5153 22.8758 85.0391 22.8654 84.5732 22.8447C84.1073 22.8136 83.631 22.7722 83.1444 22.7205L83.5793 1.87954C84.7181 1.51718 85.888 1.26353 87.089 1.11858C88.3003 0.963288 89.5013 0.885639 90.6919 0.885639C92.1724 0.885639 93.5339 1.10823 94.7762 1.55342C96.0186 1.9986 97.0902 2.6405 97.9909 3.47911C98.8916 4.31771 99.5905 5.34268 100.087 6.554C100.595 7.76532 100.848 9.13711 100.848 10.6694ZM94.4812 11.6633C94.4915 11.1042 94.4294 10.5658 94.2948 10.0482C94.1706 9.53053 93.9583 9.07499 93.6581 8.68157C93.3682 8.2778 92.9955 7.95685 92.5399 7.71873C92.0844 7.47025 91.5409 7.33566 90.9093 7.31495L90.2881 16.9434C90.9093 16.8502 91.4736 16.6483 91.9809 16.3377C92.4882 16.0168 92.923 15.6285 93.2854 15.173C93.6581 14.7071 93.9428 14.1946 94.1395 13.6356C94.3466 13.0661 94.4605 12.4812 94.4812 11.8807V11.6633ZM120.602 21.6644L112.899 22.6583L111.968 19.1486H108.427L107.65 22.6583L99.7302 21.8819L105.911 1.19623L114.546 0.761401L120.602 21.6644ZM111.409 14.3965L110.228 8.99217L109.079 14.3965H111.409Z" fill="#A6F750"/>
    <path d="M15.4987 33.1853C15.4366 34.1585 15.3796 35.1213 15.3279 36.0738C15.2761 37.0263 15.2088 37.9892 15.126 38.9624L8.54136 39.304L8.38606 41.2608H13.0139L12.6723 46.075L8.01335 46.2303L7.85805 48.4976H11.7094H14.4427C14.3805 49.6365 14.3133 50.7701 14.2408 51.8986C14.1787 53.0168 14.1217 54.1401 14.07 55.2686L0.683309 55.5792L1.18026 33.1853H15.4987ZM15.7938 47.0068L15.7316 42.3478L25.7639 41.882L25.826 47.1931L15.7938 47.0068ZM43.0795 33.7444L42.2099 40.2979C41.9096 40.2151 41.6094 40.1582 41.3091 40.1271C41.0089 40.096 40.7086 40.0805 40.4084 40.0805C39.6423 40.0805 38.9124 40.184 38.2187 40.3911C37.525 40.5878 36.909 40.8932 36.3707 41.3074C35.8427 41.7215 35.4182 42.2391 35.0972 42.8603C34.7866 43.4815 34.6313 44.2114 34.6313 45.05C34.6313 45.5884 34.7142 46.0543 34.8798 46.4477C35.0558 46.8411 35.2991 47.1672 35.6097 47.4261C35.9203 47.6849 36.2878 47.8764 36.7123 48.0007C37.1368 48.1249 37.6027 48.187 38.11 48.187C38.4931 48.187 38.8917 48.1456 39.3058 48.0628C39.7199 47.98 40.1289 47.8713 40.5326 47.7367C40.9364 47.6021 41.3298 47.4468 41.7129 47.2708C42.096 47.0948 42.448 46.9136 42.7689 46.7272L42.1477 54.0262C41.744 54.2333 41.304 54.4196 40.8277 54.5853C40.3618 54.7406 39.8804 54.8804 39.3834 55.0046C38.8865 55.1185 38.3895 55.2065 37.8926 55.2686C37.3956 55.3307 36.9194 55.3618 36.4638 55.3618C35.149 55.3618 33.9221 55.1185 32.7833 54.6319C31.6445 54.1453 30.6557 53.4775 29.8171 52.6285C28.9785 51.7796 28.3159 50.7805 27.8293 49.6313C27.3531 48.4717 27.1149 47.2242 27.1149 45.8886C27.1149 44.1182 27.3686 42.4514 27.8759 40.8881C28.3832 39.3144 29.1286 37.9374 30.1122 36.7571C31.0957 35.5769 32.3122 34.6451 33.7617 33.9618C35.2215 33.2785 36.8987 32.9368 38.7933 32.9368C39.5077 32.9368 40.2376 32.9938 40.983 33.1076C41.7388 33.2215 42.4376 33.4338 43.0795 33.7444ZM63.0042 43.6834C63.0042 44.6255 62.8955 45.5366 62.6781 46.4166C62.4606 47.2863 62.1449 48.1042 61.7307 48.8703C61.327 49.6365 60.83 50.3405 60.2399 50.9824C59.6601 51.6139 59.0027 52.1575 58.2676 52.613C57.5429 53.0686 56.7509 53.4257 55.8916 53.6846C55.0323 53.933 54.1212 54.0573 53.1583 54.0573C52.2265 54.0573 51.3362 53.9382 50.4872 53.7001C49.6486 53.462 48.8618 53.1307 48.1267 52.7062C47.3916 52.2714 46.7238 51.7537 46.1234 51.1532C45.5332 50.5424 45.0259 49.8694 44.6014 49.1343C44.1873 48.3889 43.8612 47.5917 43.6231 46.7428C43.3953 45.8938 43.2814 45.0086 43.2814 44.0872C43.2814 43.1865 43.3901 42.3064 43.6075 41.4471C43.8249 40.5775 44.1355 39.7596 44.5393 38.9934C44.9534 38.2273 45.4504 37.5233 46.0302 36.8814C46.61 36.2395 47.257 35.6856 47.9714 35.2197C48.6961 34.7538 49.4778 34.3914 50.3164 34.1326C51.155 33.8738 52.0402 33.7444 52.972 33.7444C54.4732 33.7444 55.8398 33.9773 57.0718 34.4432C58.3142 34.9091 59.3702 35.5769 60.2399 36.4465C61.1199 37.3059 61.798 38.3515 62.2743 39.5836C62.7609 40.8052 63.0042 42.1718 63.0042 43.6834ZM56.109 44.0872C56.109 43.642 56.0417 43.2123 55.9071 42.7982C55.7829 42.3737 55.5965 42.001 55.348 41.6801C55.0995 41.3488 54.789 41.0848 54.4162 40.8881C54.0539 40.681 53.6346 40.5775 53.1583 40.5775C52.6717 40.5775 52.2369 40.6655 51.8538 40.8415C51.4708 41.0175 51.1395 41.2608 50.8599 41.5714C50.5907 41.8716 50.3837 42.2288 50.2387 42.6429C50.0938 43.0467 50.0213 43.4763 50.0213 43.9319C50.0213 44.3667 50.0834 44.8015 50.2077 45.2364C50.3319 45.6712 50.5183 46.0646 50.7667 46.4166C51.0152 46.7686 51.3206 47.0534 51.683 47.2708C52.0557 47.4882 52.4854 47.5969 52.972 47.5969C53.4586 47.5969 53.8934 47.5037 54.2765 47.3174C54.6699 47.1207 55.0012 46.8618 55.2704 46.5409C55.5396 46.2096 55.7466 45.8317 55.8916 45.4072C56.0365 44.9827 56.109 44.5427 56.109 44.0872ZM90.9577 45.05C90.9577 46.5305 90.9111 48.0059 90.818 49.476C90.7248 50.9462 90.6161 52.4215 90.4918 53.902L82.5096 54.2747C82.7477 52.4732 82.9599 50.6718 83.1463 48.8703C83.343 47.0585 83.4413 45.2467 83.4413 43.4349C83.4413 43.321 83.4362 43.1243 83.4258 42.8448C83.4155 42.5549 83.3947 42.2288 83.3637 41.8664C83.343 41.5041 83.3067 41.1314 83.255 40.7483C83.2136 40.3549 83.1514 39.9977 83.0686 39.6767C82.9962 39.3454 82.903 39.0762 82.7891 38.8692C82.6752 38.6621 82.5406 38.5586 82.3853 38.5586C82.023 38.5586 81.7382 38.6984 81.5312 38.9779C81.3241 39.2471 81.1688 39.5732 81.0653 39.9563C80.9721 40.3393 80.9152 40.7328 80.8945 41.1365C80.8738 41.5299 80.8634 41.8509 80.8634 42.0994C80.8634 42.5342 80.8738 42.969 80.8945 43.4039C80.9152 43.8387 80.9255 44.2839 80.9255 44.7394C80.9255 46.3442 80.8841 47.9437 80.8013 49.5381C80.7288 51.1325 80.6356 52.7321 80.5217 54.3368L73.1606 54.6163C73.3988 52.8149 73.6058 51.0186 73.7818 49.2275C73.9682 47.4261 74.0614 45.6194 74.0614 43.8076C74.0614 43.6938 74.0562 43.4867 74.0458 43.1865C74.0355 42.8862 74.0148 42.5497 73.9837 42.177C73.963 41.8043 73.9268 41.4161 73.875 41.0123C73.8232 40.6085 73.756 40.241 73.6731 39.9097C73.6007 39.568 73.5075 39.2885 73.3936 39.0711C73.2797 38.8537 73.1399 38.7449 72.9743 38.7449C72.7155 38.7449 72.498 38.8485 72.322 39.0555C72.146 39.2523 72.0011 39.5111 71.8872 39.832C71.7837 40.153 71.7008 40.5102 71.6387 40.9036C71.587 41.2866 71.5455 41.6645 71.5145 42.0373C71.4938 42.41 71.4783 42.7568 71.4679 43.0777C71.4679 43.3883 71.4627 43.6213 71.4524 43.7766L71.1107 55.1133H63.2837C63.4494 53.3636 63.615 51.6088 63.7807 49.8487C63.9567 48.0887 64.1068 46.3338 64.231 44.5841C64.3656 42.8241 64.4743 41.0641 64.5572 39.304C64.64 37.544 64.6814 35.7839 64.6814 34.0239L72.0736 33.7133L72.0425 35.5148C72.2703 35.2249 72.5291 34.935 72.819 34.6451C73.1089 34.3449 73.4143 34.0808 73.7352 33.8531C74.0665 33.615 74.4134 33.4234 74.7757 33.2785C75.1485 33.1335 75.5315 33.0611 75.9249 33.0611C76.4322 33.0611 76.8878 33.1025 77.2916 33.1853C77.6953 33.2578 78.0577 33.3872 78.3786 33.5735C78.7099 33.7599 78.9998 34.0187 79.2483 34.35C79.4968 34.671 79.7142 35.0799 79.9006 35.5769C80.2319 35.2145 80.5632 34.878 80.8945 34.5674C81.2361 34.2568 81.5933 33.9928 81.966 33.7754C82.3387 33.5477 82.7425 33.3717 83.1773 33.2474C83.6122 33.1232 84.0936 33.0611 84.6216 33.0611C85.6259 33.0611 86.48 33.2578 87.184 33.6512C87.888 34.0343 88.473 34.5467 88.9389 35.1886C89.4151 35.8305 89.7827 36.5656 90.0415 37.3939C90.3107 38.2221 90.5125 39.0814 90.6471 39.9718C90.7817 40.8622 90.8646 41.7474 90.8956 42.6274C90.937 43.5074 90.9577 44.3149 90.9577 45.05ZM119.532 45.05C119.532 46.5305 119.486 48.0059 119.393 49.476C119.3 50.9462 119.191 52.4215 119.067 53.902L111.084 54.2747C111.322 52.4732 111.535 50.6718 111.721 48.8703C111.918 47.0585 112.016 45.2467 112.016 43.4349C112.016 43.321 112.011 43.1243 112.001 42.8448C111.99 42.5549 111.969 42.2288 111.938 41.8664C111.918 41.5041 111.881 41.1314 111.83 40.7483C111.788 40.3549 111.726 39.9977 111.643 39.6767C111.571 39.3454 111.478 39.0762 111.364 38.8692C111.25 38.6621 111.115 38.5586 110.96 38.5586C110.598 38.5586 110.313 38.6984 110.106 38.9779C109.899 39.2471 109.744 39.5732 109.64 39.9563C109.547 40.3393 109.49 40.7328 109.469 41.1365C109.448 41.5299 109.438 41.8509 109.438 42.0994C109.438 42.5342 109.448 42.969 109.469 43.4039C109.49 43.8387 109.5 44.2839 109.5 44.7394C109.5 46.3442 109.459 47.9437 109.376 49.5381C109.304 51.1325 109.21 52.7321 109.096 54.3368L101.735 54.6163C101.974 52.8149 102.181 51.0186 102.357 49.2275C102.543 47.4261 102.636 45.6194 102.636 43.8076C102.636 43.6938 102.631 43.4867 102.621 43.1865C102.61 42.8862 102.59 42.5497 102.558 42.177C102.538 41.8043 102.502 41.4161 102.45 41.0123C102.398 40.6085 102.331 40.241 102.248 39.9097C102.175 39.568 102.082 39.2885 101.968 39.0711C101.854 38.8537 101.715 38.7449 101.549 38.7449C101.29 38.7449 101.073 38.8485 100.897 39.0555C100.721 39.2523 100.576 39.5111 100.462 39.832C100.358 40.153 100.276 40.5102 100.213 40.9036C100.162 41.2866 100.12 41.6645 100.089 42.0373C100.069 42.41 100.053 42.7568 100.043 43.0777C100.043 43.3883 100.037 43.6213 100.027 43.7766L99.6855 55.1133H91.8585C92.0241 53.3636 92.1898 51.6088 92.3554 49.8487C92.5314 48.0887 92.6815 46.3338 92.8058 44.5841C92.9404 42.8241 93.0491 41.0641 93.1319 39.304C93.2147 37.544 93.2561 35.7839 93.2561 34.0239L100.648 33.7133L100.617 35.5148C100.845 35.2249 101.104 34.935 101.394 34.6451C101.684 34.3449 101.989 34.0808 102.31 33.8531C102.641 33.615 102.988 33.4234 103.35 33.2785C103.723 33.1335 104.106 33.0611 104.5 33.0611C105.007 33.0611 105.463 33.1025 105.866 33.1853C106.27 33.2578 106.632 33.3872 106.953 33.5735C107.285 33.7599 107.575 34.0187 107.823 34.35C108.072 34.671 108.289 35.0799 108.475 35.5769C108.807 35.2145 109.138 34.878 109.469 34.5674C109.811 34.2568 110.168 33.9928 110.541 33.7754C110.913 33.5477 111.317 33.3717 111.752 33.2474C112.187 33.1232 112.668 33.0611 113.196 33.0611C114.201 33.0611 115.055 33.2578 115.759 33.6512C116.463 34.0343 117.048 34.5467 117.514 35.1886C117.99 35.8305 118.357 36.5656 118.616 37.3939C118.885 38.2221 119.087 39.0814 119.222 39.9718C119.356 40.8622 119.439 41.7474 119.47 42.6274C119.512 43.5074 119.532 44.3149 119.532 45.05ZM138.292 43.0312C138.292 43.9319 138.23 44.8326 138.106 45.7333C136.336 45.8472 134.576 46.0336 132.826 46.2924C131.076 46.5409 129.327 46.7894 127.577 47.0378C127.846 47.7833 128.265 48.3786 128.835 48.8238C129.415 49.2689 130.103 49.4915 130.9 49.4915C131.314 49.4915 131.765 49.4139 132.251 49.2586C132.748 49.1033 133.24 48.9118 133.727 48.684C134.213 48.4459 134.679 48.1922 135.124 47.923C135.57 47.6538 135.953 47.4105 136.274 47.1931L135.528 54.2436C135.124 54.5542 134.684 54.8182 134.208 55.0357C133.742 55.2531 133.256 55.4291 132.748 55.5637C132.241 55.6983 131.728 55.7966 131.211 55.8587C130.693 55.9208 130.186 55.9519 129.689 55.9519C128.664 55.9519 127.727 55.8121 126.878 55.5326C126.029 55.2531 125.258 54.8648 124.564 54.3679C123.881 53.8606 123.28 53.2653 122.763 52.582C122.245 51.8986 121.815 51.1532 121.474 50.3457C121.132 49.5381 120.873 48.684 120.697 47.7833C120.521 46.8825 120.433 45.9715 120.433 45.05C120.433 44.0872 120.521 43.1243 120.697 42.1615C120.873 41.1986 121.137 40.272 121.489 39.3817C121.852 38.4913 122.302 37.6682 122.84 36.9124C123.389 36.1463 124.026 35.4785 124.75 34.9091C125.475 34.3397 126.293 33.8945 127.204 33.5735C128.126 33.2526 129.14 33.0921 130.248 33.0921C131.169 33.0921 132.008 33.2215 132.764 33.4804C133.53 33.7288 134.208 34.0808 134.798 34.5364C135.399 34.9816 135.916 35.5148 136.351 36.1359C136.796 36.7571 137.159 37.4404 137.438 38.1859C137.728 38.921 137.94 39.7026 138.075 40.5309C138.22 41.3488 138.292 42.1822 138.292 43.0312ZM132.081 42.2236C132.081 41.9337 132.049 41.6387 131.987 41.3384C131.925 41.0278 131.822 40.7483 131.677 40.4998C131.542 40.2513 131.361 40.0494 131.133 39.8941C130.905 39.7285 130.621 39.6457 130.279 39.6457C129.865 39.6457 129.497 39.7596 129.176 39.9873C128.866 40.2047 128.597 40.4843 128.369 40.8259C128.141 41.1572 127.955 41.5196 127.81 41.913C127.665 42.3064 127.556 42.6688 127.484 43.0001L132.081 42.5653V42.2236ZM157.518 40.6085C157.518 41.4161 157.446 42.1511 157.301 42.8137C157.166 43.466 156.949 44.0665 156.649 44.6152C156.348 45.1639 155.96 45.6712 155.484 46.1371C155.008 46.603 154.433 47.0482 153.76 47.4727L157.456 54.0573L150.468 55.4239L148.076 48.8082L146.15 48.8703L145.871 55.3307H139.193C139.245 52.9702 139.291 50.62 139.333 48.2802C139.385 45.9404 139.442 43.5902 139.504 41.2297C139.524 40.0391 139.545 38.8588 139.566 37.6889C139.587 36.519 139.628 35.3388 139.69 34.1481C140.415 33.879 141.129 33.6564 141.833 33.4804C142.537 33.3044 143.241 33.1698 143.945 33.0766C144.66 32.9731 145.379 32.9058 146.104 32.8747C146.839 32.8333 147.59 32.8126 148.356 32.8126C149.536 32.8126 150.675 32.9782 151.772 33.3095C152.88 33.6305 153.858 34.1171 154.707 34.7693C155.556 35.4216 156.234 36.2343 156.742 37.2075C157.259 38.1807 157.518 39.3144 157.518 40.6085ZM150.561 41.1055C150.561 40.6706 150.499 40.272 150.375 39.9097C150.261 39.5473 150.085 39.2367 149.847 38.9779C149.619 38.7087 149.329 38.5016 148.977 38.3567C148.635 38.2014 148.231 38.1238 147.766 38.1238C147.558 38.1238 147.357 38.1393 147.16 38.1703C146.963 38.1911 146.772 38.2273 146.585 38.2791L146.337 44.0561H146.71C147.155 44.0561 147.605 43.9992 148.061 43.8853C148.527 43.7714 148.941 43.5954 149.303 43.3573C149.676 43.1192 149.976 42.8137 150.204 42.441C150.442 42.0683 150.561 41.6231 150.561 41.1055ZM173.234 34.3656L172.675 40.9191C172.375 40.8363 172.08 40.7793 171.79 40.7483C171.5 40.7172 171.205 40.7017 170.905 40.7017C170.17 40.7017 169.466 40.7949 168.793 40.9812C168.13 41.1676 167.54 41.4523 167.022 41.8354C166.515 42.2184 166.106 42.705 165.796 43.2952C165.495 43.8749 165.345 44.5634 165.345 45.3606C165.345 45.9404 165.428 46.4477 165.594 46.8825C165.77 47.307 166.013 47.6642 166.324 47.9541C166.645 48.2336 167.028 48.4459 167.473 48.5908C167.928 48.7358 168.43 48.8082 168.979 48.8082C169.362 48.8082 169.756 48.772 170.159 48.6995C170.563 48.6167 170.967 48.508 171.371 48.3734C171.775 48.2388 172.163 48.0835 172.535 47.9075C172.908 47.7315 173.255 47.5451 173.576 47.3484L173.328 54.6474C172.924 54.8545 172.489 55.0408 172.023 55.2065C171.557 55.3618 171.076 55.4964 170.579 55.6103C170.092 55.7345 169.6 55.8277 169.103 55.8898C168.617 55.9519 168.151 55.983 167.706 55.983C166.236 55.983 164.895 55.7086 163.684 55.1599C162.483 54.6112 161.447 53.8657 160.578 52.9236C159.718 51.9711 159.05 50.8685 158.574 49.6158C158.098 48.363 157.86 47.0275 157.86 45.6091C157.86 43.9112 158.098 42.3271 158.574 40.857C159.061 39.3868 159.77 38.1134 160.702 37.0367C161.644 35.9496 162.804 35.1006 164.18 34.4898C165.568 33.8686 167.157 33.558 168.948 33.558C169.662 33.558 170.387 33.615 171.122 33.7288C171.857 33.8427 172.561 34.055 173.234 34.3656ZM192.056 43.0312C192.056 43.9319 191.994 44.8326 191.87 45.7333C190.1 45.8472 188.34 46.0336 186.59 46.2924C184.84 46.5409 183.091 46.7894 181.341 47.0378C181.61 47.7833 182.029 48.3786 182.599 48.8238C183.179 49.2689 183.867 49.4915 184.664 49.4915C185.078 49.4915 185.529 49.4139 186.015 49.2586C186.512 49.1033 187.004 48.9118 187.491 48.684C187.977 48.4459 188.443 48.1922 188.888 47.923C189.334 47.6538 189.717 47.4105 190.038 47.1931L189.292 54.2436C188.888 54.5542 188.448 54.8182 187.972 55.0357C187.506 55.2531 187.02 55.4291 186.512 55.5637C186.005 55.6983 185.492 55.7966 184.975 55.8587C184.457 55.9208 183.95 55.9519 183.453 55.9519C182.428 55.9519 181.491 55.8121 180.642 55.5326C179.793 55.2531 179.022 54.8648 178.328 54.3679C177.645 53.8606 177.044 53.2653 176.527 52.582C176.009 51.8986 175.579 51.1532 175.238 50.3457C174.896 49.5381 174.637 48.684 174.461 47.7833C174.285 46.8825 174.197 45.9715 174.197 45.05C174.197 44.0872 174.285 43.1243 174.461 42.1615C174.637 41.1986 174.901 40.272 175.253 39.3817C175.616 38.4913 176.066 37.6682 176.604 36.9124C177.153 36.1463 177.79 35.4785 178.514 34.9091C179.239 34.3397 180.057 33.8945 180.968 33.5735C181.89 33.2526 182.904 33.0921 184.012 33.0921C184.933 33.0921 185.772 33.2215 186.528 33.4804C187.294 33.7288 187.972 34.0808 188.562 34.5364C189.163 34.9816 189.68 35.5148 190.115 36.1359C190.56 36.7571 190.923 37.4404 191.202 38.1859C191.492 38.921 191.704 39.7026 191.839 40.5309C191.984 41.3488 192.056 42.1822 192.056 43.0312ZM185.844 42.2236C185.844 41.9337 185.813 41.6387 185.751 41.3384C185.689 41.0278 185.586 40.7483 185.441 40.4998C185.306 40.2513 185.125 40.0494 184.897 39.8941C184.669 39.7285 184.385 39.6457 184.043 39.6457C183.629 39.6457 183.261 39.7596 182.94 39.9873C182.63 40.2047 182.361 40.4843 182.133 40.8259C181.905 41.1572 181.719 41.5196 181.574 41.913C181.429 42.3064 181.32 42.6688 181.248 43.0001L185.844 42.5653V42.2236Z" fill="#A6F750"/>
  </svg>`;
}
