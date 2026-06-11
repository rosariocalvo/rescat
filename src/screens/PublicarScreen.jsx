import { useState, useEffect } from "react";
import { supabase } from "../supabase";

const IconoDC = () => (
  <svg viewBox="252 89 21 21" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M271.931 100.156C271.931 105.219 267.827 109.323 262.764 109.323C257.702 109.323 253.598 105.219 253.598 100.156C253.598 95.0933 257.702 90.9893 262.764 90.9893C267.827 90.9893 271.931 95.0933 271.931 100.156Z" fill="#7890D0"/>
    <path d="M270.557 100.156C270.557 104.46 267.068 107.949 262.764 107.949C258.461 107.949 254.972 104.46 254.972 100.156C254.972 95.8521 258.461 92.3632 262.764 92.3632C267.068 92.3632 270.557 95.8521 270.557 100.156Z" fill="#B7C3E3"/>
    <path d="M260.603 97.8155C260.579 97.6961 260.59 97.3262 260.589 97.1863C260.587 96.4875 260.544 95.9835 260.948 95.3663C261.246 94.9161 261.761 94.5303 262.296 94.4284C262.965 94.301 263.595 94.3804 264.152 94.7652C265.012 95.36 265.17 96.2277 265.125 97.2068C265.116 97.3917 265.131 97.5939 265.118 97.7851C265.393 97.7813 265.669 97.7798 265.944 97.7807C266.364 97.7807 266.636 97.7723 267.038 97.9201C268.597 98.4927 268.929 100.702 267.808 101.83C267.345 102.296 266.844 102.474 266.196 102.481L265.488 102.481C265.397 102.481 265.19 102.486 265.112 102.476C265.166 103.44 265.147 104.603 264.406 105.313C263.492 106.189 262.037 106.136 261.18 105.22C260.548 104.545 260.552 103.257 260.592 102.384L260.595 102.358C260.505 102.325 260.252 102.356 260.152 102.356C259.969 102.355 259.779 102.347 259.597 102.333C258.906 102.282 258.313 102.203 257.785 101.705C257.373 101.317 257.067 100.691 257.059 100.126C257.067 99.5272 257.281 98.9466 257.691 98.5087C258.318 97.8376 259.259 97.8377 260.109 97.8053C260.274 97.799 260.44 97.8195 260.603 97.8155ZM260.597 98.1338C259.912 98.0819 258.982 98.1321 258.355 98.4277C257.821 98.6789 257.453 99.3398 257.41 99.9179C257.368 100.43 257.535 100.938 257.874 101.325C258.256 101.767 258.806 101.958 259.377 101.999C259.629 102.017 259.881 102.026 260.133 102.025C260.287 102.023 260.45 102.011 260.6 102.012C260.585 101.915 260.589 101.645 260.589 101.539L260.59 100.671L260.589 99.1033C260.589 98.7909 260.583 98.4434 260.597 98.1338ZM264.779 102.475C264.628 102.488 264.349 102.481 264.187 102.481L263.08 102.481L261.695 102.481C261.461 102.481 261.15 102.489 260.921 102.475C260.848 102.818 260.947 103.933 261.043 104.279C261.093 104.465 261.173 104.642 261.278 104.804C261.818 105.64 263.071 105.868 263.874 105.302C264.33 104.981 264.617 104.58 264.709 104.022C264.79 103.57 264.815 102.931 264.779 102.475ZM260.901 102.171C262.689 102.141 264.515 102.181 266.308 102.165C266.816 102.139 267.292 101.912 267.633 101.536C268.362 100.715 268.313 99.2839 267.462 98.5568C266.896 98.0726 266.351 98.0653 265.651 98.0879C265.388 98.094 265.088 98.0766 264.829 98.095C264.817 98.0959 264.804 98.097 264.792 98.0985C264.789 97.7566 264.789 97.4147 264.792 97.0728C264.793 96.3302 264.784 95.7989 264.199 95.231C263.835 94.8764 263.344 94.6812 262.836 94.6883C262.81 94.6888 262.784 94.6898 262.759 94.6914C262.383 94.7269 262.083 94.8017 261.769 95.01C261.223 95.3731 260.92 95.9617 260.908 96.6126C260.905 96.7697 260.903 96.9287 260.903 97.088L260.904 98.0131L260.904 100.727C260.904 101.182 260.917 101.727 260.901 102.171Z" fill="#252E52"/>
    <path d="M260.592 102.384C260.676 102.39 260.838 102.395 260.907 102.44L260.921 102.475C260.848 102.818 260.948 103.933 261.044 104.279C261.094 104.465 261.173 104.642 261.279 104.804C261.819 105.64 263.072 105.868 263.875 105.302C264.331 104.981 264.617 104.58 264.71 104.022C264.791 103.57 264.815 102.931 264.78 102.475C264.791 102.371 264.991 102.384 265.069 102.395C265.111 102.426 265.098 102.415 265.113 102.476C265.166 103.44 265.147 104.603 264.406 105.313C263.492 106.189 262.038 106.136 261.18 105.22C260.548 104.545 260.553 103.257 260.592 102.384Z" fill="#252E52"/>
    <path d="M260.603 97.8155C260.621 97.8499 260.613 98.0938 260.597 98.1338C259.912 98.0819 258.982 98.1321 258.355 98.4277C257.821 98.6789 257.453 99.3398 257.41 99.9179C257.368 100.43 257.535 100.938 257.874 101.325C258.256 101.767 258.806 101.958 259.377 101.999C259.629 102.017 259.881 102.026 260.133 102.025C260.287 102.023 260.45 102.011 260.6 102.012C260.609 102.096 260.638 102.288 260.595 102.358C260.505 102.325 260.252 102.356 260.152 102.356C259.969 102.355 259.779 102.347 259.597 102.333C258.906 102.282 258.313 102.203 257.785 101.705C257.373 101.317 257.067 100.691 257.059 100.125C257.067 99.5272 257.281 98.9466 257.691 98.5087C258.318 97.8376 259.259 97.8377 260.109 97.8053C260.274 97.799 260.44 97.8195 260.603 97.8155Z" fill="#252E52"/>
    <path d="M33.6054 171.573V157.573H35.9654V163.523H42.0754V157.573H44.4354V171.573H42.0754V165.563H35.9654V171.573H33.6054ZM49.2283 164.573C49.2283 167.493 51.4483 169.743 54.2683 169.743C57.0883 169.743 59.3183 167.493 59.3183 164.573C59.3183 161.663 57.0883 159.403 54.2683 159.403C51.4483 159.403 49.2283 161.663 49.2283 164.573ZM46.8383 164.573C46.8383 160.493 50.0683 157.333 54.2683 157.333C58.4683 157.333 61.7083 160.493 61.7083 164.573C61.7083 168.653 58.4683 171.813 54.2683 171.813C50.0683 171.813 46.8383 168.653 46.8383 164.573ZM64.0937 171.573V157.573H66.4537V169.533H72.4237V171.573H64.0937ZM78.3757 157.573H80.9957L86.1357 171.573H83.6057L82.4357 168.193H76.9257L75.7557 171.573H73.2257L78.3757 157.573ZM77.5757 166.223H81.7957L79.6857 160.133L77.5757 166.223ZM88.0566 170.243C88.0566 169.583 88.6466 168.903 89.5466 168.903C90.3766 168.903 91.0066 169.513 91.0066 170.553C91.0066 172.223 90.0766 173.653 88.1466 174.493L87.5166 173.693C89.0966 172.603 89.1066 172.053 88.3166 170.983C88.1666 170.783 88.0566 170.523 88.0566 170.243ZM100.09 171.573V157.573H108.59V159.603H102.45V163.533H108.09V165.543H102.45V169.553H108.77V171.573H100.09ZM111.457 157.573H116.167C119.147 157.573 121.017 159.333 121.017 162.013C121.017 164.183 119.787 165.733 117.727 166.233L121.317 171.573H118.727L115.307 166.443H113.807V171.573H111.457V157.573ZM116.027 159.563H113.807V164.493H116.027C117.697 164.493 118.647 163.513 118.647 162.033C118.647 160.533 117.697 159.563 116.027 159.563ZM123.746 157.573H126.106V171.573H123.746V157.573ZM140.615 166.973L142.045 168.013C140.635 170.553 138.565 171.813 135.715 171.813C131.745 171.813 128.655 168.743 128.655 164.573C128.655 160.413 131.745 157.333 135.715 157.333C139.065 157.333 141.495 159.253 142.235 162.363H139.765C139.185 160.433 137.575 159.403 135.745 159.403C133.235 159.403 131.045 161.403 131.045 164.573C131.045 167.753 133.285 169.743 135.835 169.743C137.935 169.743 139.535 168.703 140.615 166.973ZM148.278 157.573H150.898L156.038 171.573H153.508L152.338 168.193H146.828L145.658 171.573H143.128L148.278 157.573ZM147.478 166.223H151.698L149.588 160.133L147.478 166.223ZM168.392 172.973H188.392V152.973H168.392V172.973Z" fill="#252E52"/>
  </svg>
);

// Ícono caja extraído del Figma
const IconoCaja = () => (
  <svg viewBox="48 152 58 58" width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M77.2915 152.967C92.962 152.967 105.666 165.671 105.666 181.341C105.666 197.012 92.962 209.715 77.2915 209.715C61.621 209.715 48.9175 197.012 48.9175 181.341C48.9175 165.671 61.621 152.967 77.2915 152.967Z" stroke="#7890D0"/>
    <path d="M77.292 157.295C90.5723 157.295 101.338 168.061 101.338 181.342C101.338 194.622 90.5722 205.387 77.292 205.388C64.0116 205.388 53.2453 194.622 53.2451 181.342C53.2451 168.061 64.0115 157.295 77.292 157.295Z" stroke="#7890D0"/>
    <path d="M70.4849 173.969C70.4079 173.593 70.442 172.428 70.4405 171.987C70.4327 169.786 70.2979 168.198 71.57 166.254C72.5094 164.836 74.1311 163.621 75.8168 163.3C77.9237 162.899 79.9079 163.149 81.6621 164.361C84.373 166.235 84.8684 168.968 84.7271 172.052C84.7004 172.634 84.7479 173.271 84.7066 173.873C85.5737 173.861 86.4409 173.857 87.3081 173.86C88.63 173.859 89.487 173.833 90.7544 174.299C95.6634 176.102 96.7104 183.062 93.1802 186.615C91.7222 188.083 90.1418 188.644 88.1027 188.665L85.8719 188.666C85.5842 188.666 84.9322 188.68 84.6869 188.648C84.8557 191.686 84.7967 195.349 82.4622 197.586C79.5837 200.344 75.0018 200.179 72.3003 197.294C70.3095 195.167 70.3246 191.108 70.4483 188.358L70.4579 188.276C70.176 188.174 69.3781 188.27 69.0624 188.27C68.4875 188.269 67.8882 188.243 67.3154 188.2C65.1378 188.037 63.2703 187.788 61.6071 186.221C60.3097 184.998 59.3472 183.027 59.3213 181.245C59.3452 179.361 60.02 177.532 61.3105 176.152C63.288 174.039 66.2514 174.039 68.9288 173.937C69.4484 173.917 69.9701 173.982 70.4849 173.969ZM70.4655 174.972C68.3074 174.808 65.3788 174.966 63.4019 175.897C61.7212 176.689 60.5624 178.77 60.4251 180.591C60.2928 182.206 60.8213 183.805 61.8898 185.023C63.0911 186.415 64.824 187.017 66.6225 187.145C67.4152 187.203 68.2097 187.23 69.0045 187.227C69.4876 187.223 70.0027 187.185 70.4744 187.188C70.4274 186.881 70.4406 186.031 70.4407 185.697L70.4429 182.962L70.441 178.025C70.4408 177.042 70.4203 175.947 70.4655 174.972ZM83.6397 188.644C83.1623 188.688 82.2832 188.664 81.7719 188.664L78.2864 188.665L73.9253 188.665C73.1877 188.665 72.2073 188.691 71.4845 188.647C71.2546 189.726 71.5687 193.237 71.8708 194.329C72.0291 194.915 72.2787 195.473 72.6102 195.981C74.3126 198.615 78.2596 199.334 80.7875 197.552C82.2239 196.539 83.1271 195.278 83.4176 193.517C83.6729 192.096 83.7511 190.084 83.6397 188.644ZM71.4219 187.69C77.056 187.592 82.8057 187.719 88.455 187.67C90.0532 187.587 91.5535 186.874 92.6269 185.687C94.9255 183.101 94.7687 178.595 92.0905 176.304C90.3069 174.779 88.59 174.756 86.3847 174.827C85.5558 174.846 84.6103 174.791 83.7947 174.849C83.7563 174.852 83.718 174.856 83.6798 174.86C83.6698 173.784 83.6691 172.707 83.6777 171.63C83.6834 169.291 83.6543 167.617 81.8103 165.828C80.6632 164.711 79.1191 164.096 77.5182 164.119C77.4368 164.12 77.3553 164.124 77.274 164.128C76.0923 164.24 75.1456 164.476 74.1586 165.132C72.4386 166.276 71.4829 168.13 71.4447 170.18C71.4355 170.675 71.4291 171.176 71.4296 171.678L71.4336 174.591L71.4314 183.141C71.431 184.574 71.4743 186.288 71.4219 187.69Z" fill="#7890D0"/>
  </svg>
);

// Ícono apretón extraído del Figma
const IconoApret = () => (
  <svg viewBox="46 149 58 58" width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M75.0439 150.372C90.7145 150.372 103.418 163.076 103.418 178.746C103.418 194.417 90.7145 207.12 75.0439 207.12C59.3734 207.12 46.6699 194.417 46.6699 178.746C46.6699 163.076 59.3734 150.372 75.0439 150.372Z" stroke="#EC6765"/>
    <path d="M75.0444 154.7C88.3247 154.7 99.0903 165.466 99.0903 178.746C99.0901 192.027 88.3246 202.792 75.0444 202.792C61.7641 202.792 50.9978 192.027 50.9976 178.746C50.9976 165.466 61.7639 154.7 75.0444 154.7Z" stroke="#EC6765"/>
    <path d="M81.9126 185.584L81.9399 186.08C82.0239 187.591 82.0485 189.218 81.7739 190.733C81.4999 192.244 80.9347 193.609 79.8687 194.63C77.1938 197.193 72.9311 197.042 70.4175 194.357C69.5261 193.404 69.0528 191.98 68.8286 190.395C68.6746 189.306 68.6435 188.174 68.6587 187.127C68.6585 187.166 68.6576 187.205 68.6577 187.243C68.6596 187.756 68.6875 188.343 68.7319 188.926C68.8195 190.075 68.9755 191.265 69.1401 191.863V191.864C69.2907 192.421 69.5175 192.954 69.813 193.449L69.9438 193.659C71.8035 196.534 76.072 197.307 78.8276 195.365C80.3546 194.289 81.345 192.918 81.6616 191.01L81.6626 191.011C81.9262 189.544 82.0054 187.488 81.8911 186.011L81.8579 185.584C81.8761 185.584 81.8944 185.584 81.9126 185.584ZM68.7476 185.948C68.6992 186.174 68.675 186.471 68.6646 186.799C68.6728 186.452 68.6854 186.117 68.6997 185.797L68.7065 185.74L68.7222 185.602L68.8208 185.601L68.7476 185.948ZM70.6372 185.575C73.2257 185.547 75.8243 185.557 78.4263 185.57L76.0386 185.571L71.6782 185.57C71.3538 185.569 70.9956 185.573 70.6372 185.575ZM64.6802 185.071C65.3723 185.113 66.0658 185.135 66.7593 185.132H66.7612C67.0117 185.13 67.2702 185.119 67.5151 185.11C67.7637 185.1 68.0006 185.092 68.2241 185.093L68.6733 185.095L68.6646 185.314L68.3804 185.21C68.2349 185.158 68.0682 185.143 67.9399 185.137C67.7996 185.131 67.6469 185.134 67.5044 185.14C67.1865 185.153 66.965 185.175 66.8159 185.175C66.2551 185.174 65.6675 185.149 65.105 185.107C64.9613 185.096 64.8199 185.082 64.6802 185.071ZM86.98 171.834C87.408 171.89 87.835 171.99 88.3345 172.173C90.5899 173.002 91.9828 175.022 92.3921 177.294C92.8022 179.571 92.2093 182.025 90.5776 183.667C89.498 184.754 88.3575 185.304 86.9614 185.492C88.4146 185.253 89.7531 184.53 90.7505 183.427L90.7534 183.424C93.226 180.642 93.0716 175.813 90.1675 173.329C89.1108 172.426 88.0682 172.013 86.98 171.834ZM64.3364 171.959C63.121 172.107 61.9267 172.386 60.9409 172.85C59.0619 173.735 57.8277 176 57.6792 177.955C57.536 179.703 58.1077 181.434 59.2632 182.753V182.754C60.2467 183.894 61.5445 184.536 62.9214 184.844C61.7256 184.61 60.677 184.18 59.7026 183.262C58.567 182.192 57.7105 180.501 57.5884 178.95L57.5737 178.643C57.5993 176.877 58.2331 175.176 59.4282 173.899C60.3251 172.94 61.4544 172.448 62.7124 172.185C63.2407 172.074 63.7842 172.006 64.3364 171.959ZM68.6938 182.013C68.6997 182.694 68.7032 183.387 68.6968 184.046C68.6955 183.985 68.6925 183.92 68.6919 183.853C68.6894 183.562 68.6928 183.278 68.6929 183.102L68.6938 182.013ZM68.6851 171.909L68.2554 171.878C68.2285 171.876 68.2015 171.874 68.1743 171.872C68.1994 171.872 68.2244 171.874 68.2495 171.873L68.6851 171.863V171.909ZM76.0425 161.06C77.141 161.162 78.1742 161.516 79.1304 162.177C81.6273 163.903 82.1184 166.411 81.98 169.434C81.9658 169.743 81.9718 170.064 81.9751 170.365C81.9785 170.673 81.9796 170.965 81.9604 171.244L81.9292 171.696C81.927 171.347 81.9245 170.998 81.9243 170.65L81.9302 169.038V169.035C81.933 167.877 81.9295 166.81 81.6743 165.804C81.4132 164.775 80.8951 163.829 79.9106 162.874H79.9116C78.8567 161.847 77.4917 161.213 76.0425 161.06ZM74.9263 161.04C73.719 161.159 72.6977 161.413 71.6343 162.12C69.7699 163.36 68.7379 165.371 68.6968 167.575C68.6922 167.821 68.6926 168.069 68.6899 168.318C68.6855 166.66 68.7645 165.425 69.7407 163.933L69.7397 163.932C70.6178 162.608 72.1314 161.487 73.6626 161.196C74.0915 161.114 74.5131 161.062 74.9263 161.04Z" stroke="#EC6765"/>
  </svg>
);

const IconInicio = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill={active ? "white" : "#b0b8d0"}/>
  </svg>
);
const IconPublicar = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9.5" stroke={active ? "white" : "#b0b8d0"} strokeWidth="1.5"/>
    <path d="M12 8v8M8 12h8" stroke={active ? "white" : "#b0b8d0"} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const IconBuscar = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="11" cy="11" r="7.5" stroke={active ? "white" : "#b0b8d0"} strokeWidth="1.5"/>
    <path d="M16.5 16.5L21 21" stroke={active ? "white" : "#b0b8d0"} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const IconCanjes = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 9h13M4 9l3-3M4 9l3 3" stroke={active ? "white" : "#b0b8d0"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 15H7M20 15l-3-3M20 15l-3 3" stroke={active ? "white" : "#b0b8d0"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconPerfil = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="3.5" stroke={active ? "white" : "#b0b8d0"} strokeWidth="1.5"/>
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke={active ? "white" : "#b0b8d0"} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

function BottomNav({ activeTab, onTabChange }) {
  const tabs = [
    { id: "inicio", label: "Inicio", Icon: IconInicio },
    { id: "publicar", label: "Publicar", Icon: IconPublicar },
    { id: "buscar", label: "Buscar", Icon: IconBuscar },
    { id: "canjes", label: "Canjes", Icon: IconCanjes },
    { id: "perfil", label: "Perfil", Icon: IconPerfil },
  ];
  return (
    <nav style={{
      position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)",
      width: "100%", maxWidth: 430, background: "white",
      borderRadius: "20px 20px 0 0", boxShadow: "0 -2px 20px rgba(30,42,74,0.08)",
      display: "flex", alignItems: "center", height: 72, zIndex: 100,
    }}>
      {tabs.map(({ id, label, Icon }) => {
        const isActive = activeTab === id;
        return (
          <button key={id} onClick={() => onTabChange(id)} style={{
            flex: 1, display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            gap: 4, border: "none", background: "transparent",
            cursor: "pointer", padding: "6px 4px",
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: 14,
              background: isActive ? "#1e2a4a" : "transparent",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Icon active={isActive} />
            </div>
            <span style={{
              fontSize: 10, fontWeight: isActive ? 700 : 400,
              color: isActive ? "#1e2a4a" : "#b0b8d0",
              fontFamily: "Outfit, sans-serif",
            }}>{label}</span>
          </button>
        );
      })}
    </nav>
  );
}

// ─── PublicarScreen ────────────────────────────────────────────────────────
function PublicarMenu({ user, onSelectCompartir, onSelectAyudar }) {
  const nombre = user?.user_metadata?.nombre_completo || user?.user_metadata?.nombre || "Usuario";
  const dc = user?.user_metadata?.dc || 240;
  const firstName = nombre.split(" ")[0].toUpperCase();

  return (
    <div style={{ paddingBottom: 90 }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');`}</style>

      {/* Header con logo + saludo */}
      <div style={{ padding: "52px 24px 0", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <img src="/logo_rescat.png" alt="RESCAT+" style={{ height: 100, width: "auto", objectFit: "contain" }} />
        <div style={{ textAlign: "right" }}>
          <p style={{ margin: "0 0 4px", fontSize: 13, fontWeight: 600, color: "#1e2a4a", fontFamily: "Outfit, sans-serif" }}>
            HOLA, {firstName}
          </p>
          <div style={{
            background: "white", borderRadius: 50, padding: "6px 14px",
            display: "inline-flex", alignItems: "center", gap: 6,
            boxShadow: "0 1px 8px rgba(30,42,74,0.10)",
          }}>
            <IconoDC />
            <span style={{ fontWeight: 700, fontSize: 14, color: "#1e2a4a", fontFamily: "Outfit, sans-serif" }}>{dc} DC</span>
          </div>
        </div>
      </div>

      <div style={{ padding: "28px 24px 0" }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: "#1e2a4a", margin: "0 0 8px", fontFamily: "Outfit, sans-serif" }}>
          ¿Qué quieres hacer?
        </h2>
        <p style={{ fontSize: 15, fontWeight: 600, color: "#7890D0", margin: "0 0 32px", fontFamily: "Outfit, sans-serif", lineHeight: 1.4 }}>
          Elige la opción que mejor se adapte a lo que necesitas.
        </p>

        {/* Card Compartir */}
        <div onClick={onSelectCompartir} style={{
          background: "white", border: "1.5px solid #7890D0", borderRadius: 20,
          padding: "24px 20px", marginBottom: 16, cursor: "pointer",
          display: "flex", alignItems: "center", gap: 20,
        }}>
          <div style={{
            width: 90, height: 90, borderRadius: 20, background: "rgba(120,144,208,0.12)",
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>
            <IconoCaja />
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: "0 0 6px", fontSize: 18, fontWeight: 700, color: "#1e2a4a", fontFamily: "Outfit, sans-serif" }}>
              Compartir insumo
            </h3>
            <p style={{ margin: 0, fontSize: 13, color: "#7b80a0", lineHeight: 1.4, fontFamily: "Outfit, sans-serif" }}>
              Tengo insumos disponibles para ayudar a otro miembro.
            </p>
          </div>
          <div style={{ width: 32, height: 32, borderRadius: "50%", border: "1.5px solid #7890D0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="#7890D0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Card Solicitar */}
        <div onClick={onSelectAyudar} style={{
          background: "#fff4f4", border: "1.5px solid #EC6765", borderRadius: 20,
          padding: "24px 20px", marginBottom: 20, cursor: "pointer",
          display: "flex", alignItems: "center", gap: 20,
        }}>
          <div style={{
            width: 90, height: 90, borderRadius: 20, background: "rgba(236,103,101,0.12)",
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>
            <IconoApret />
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: "0 0 6px", fontSize: 18, fontWeight: 700, color: "#1e2a4a", fontFamily: "Outfit, sans-serif" }}>
              Solicitar ayuda
            </h3>
            <p style={{ margin: 0, fontSize: 13, color: "#7b80a0", lineHeight: 1.4, fontFamily: "Outfit, sans-serif" }}>
              Necesito conseguir un insumo con urgencia.
            </p>
          </div>
          <div style={{ width: 32, height: 32, borderRadius: "50%", border: "1.5px solid #EC6765", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="#EC6765" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Aviso revisión */}
        <div style={{
          background: "white", borderRadius: 16, padding: "14px 16px",
          display: "flex", alignItems: "center", gap: 12,
          boxShadow: "0 1px 6px rgba(30,42,74,0.06)",
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
            <circle cx="12" cy="12" r="9.5" stroke="#7890D0" strokeWidth="1.5"/>
            <path d="M12 8v4M12 16h.01" stroke="#7890D0" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <p style={{ margin: 0, fontSize: 12, color: "#7b80a0", fontFamily: "Outfit, sans-serif", lineHeight: 1.4 }}>
            Todas las publicaciones son revisadas para mantener nuestra comunidad segura.
          </p>
        </div>
      </div>
    </div>
  );
}

function FormCompartir({ user, onBack, onSuccess }) {
  const [nombreInsumo, setNombreInsumo] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [fechaVenc, setFechaVenc] = useState("");
  const [loading, setLoading] = useState(false);

  const inputStyle = { width: "100%", padding: "14px 16px", borderRadius: 14, border: "1.5px solid #e0e2ec", background: "white", fontSize: 14, color: "#1e2a4a", fontFamily: "Outfit, sans-serif", outline: "none", boxSizing: "border-box" };
  const labelStyle = { fontSize: 12, fontWeight: 600, color: "#7b80a0", marginBottom: 6, display: "block", fontFamily: "Outfit, sans-serif", textTransform: "uppercase", letterSpacing: "0.5px" };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    let lat = null, lng = null;
    try {
      const pos = await new Promise((res, rej) => navigator.geolocation.getCurrentPosition(res, rej));
      lat = pos.coords.latitude; lng = pos.coords.longitude;
    } catch {}
    await supabase.from("publicaciones").insert({ user_id: user.id, tipo: "compartir", nombre_insumo: nombreInsumo, cantidad: parseInt(cantidad) || null, fecha_vencimiento: fechaVenc || null, latitud: lat, longitud: lng, estado: "activa" });
    setLoading(false);
    onSuccess();
  }

  return (
    <div style={{ paddingBottom: 90 }}>
      <div style={{ padding: "52px 24px 24px", display: "flex", alignItems: "center", gap: 14 }}>
        <button onClick={onBack} style={{ background: "white", border: "none", borderRadius: 12, width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 1px 6px rgba(30,42,74,0.08)" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#1e2a4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "#1e2a4a", fontFamily: "Outfit, sans-serif" }}>Compartir insumo</h2>
      </div>
      <form onSubmit={handleSubmit} style={{ padding: "0 24px" }}>
        <div style={{ marginBottom: 16 }}><label style={labelStyle}>Nombre del insumo *</label><input style={inputStyle} value={nombreInsumo} onChange={e => setNombreInsumo(e.target.value)} placeholder="Ej: Insulina Glargina 100U" required /></div>
        <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
          <div style={{ flex: 1 }}><label style={labelStyle}>Cantidad</label><input style={inputStyle} type="number" value={cantidad} onChange={e => setCantidad(e.target.value)} placeholder="1" min="1" /></div>
          <div style={{ flex: 1 }}><label style={labelStyle}>Fecha venc.</label><input style={inputStyle} type="date" value={fechaVenc} onChange={e => setFechaVenc(e.target.value)} /></div>
        </div>
        <button type="submit" disabled={loading} style={{ width: "100%", padding: 16, background: "#1e2a4a", color: "white", border: "none", borderRadius: 50, fontWeight: 700, fontSize: 15, cursor: "pointer", fontFamily: "Outfit, sans-serif" }}>
          {loading ? "Publicando..." : "Publicar insumo"}
        </button>
      </form>
    </div>
  );
}

function FormAyudar({ user, onBack, onSuccess }) {
  const [nombreAyuda, setNombreAyuda] = useState("");
  const [urgente, setUrgente] = useState(false);
  const [anonimo, setAnonimo] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);

  const inputStyle = { width: "100%", padding: "14px 16px", borderRadius: 14, border: "1.5px solid #e0e2ec", background: "white", fontSize: 14, color: "#1e2a4a", fontFamily: "Outfit, sans-serif", outline: "none", boxSizing: "border-box" };
  const labelStyle = { fontSize: 12, fontWeight: 600, color: "#7b80a0", marginBottom: 6, display: "block", fontFamily: "Outfit, sans-serif", textTransform: "uppercase", letterSpacing: "0.5px" };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    let lat = null, lng = null;
    try {
      const pos = await new Promise((res, rej) => navigator.geolocation.getCurrentPosition(res, rej));
      lat = pos.coords.latitude; lng = pos.coords.longitude;
    } catch {}
    await supabase.from("publicaciones").insert({ user_id: user.id, tipo: "solicitar", nombre_insumo: nombreAyuda, urgente, anonimo, mensaje, latitud: lat, longitud: lng, estado: "activa" });
    setLoading(false);
    onSuccess();
  }

  return (
    <div style={{ paddingBottom: 90 }}>
      <div style={{ padding: "52px 24px 24px", display: "flex", alignItems: "center", gap: 14 }}>
        <button onClick={onBack} style={{ background: "white", border: "none", borderRadius: 12, width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 1px 6px rgba(30,42,74,0.08)" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#1e2a4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "#1e2a4a", fontFamily: "Outfit, sans-serif" }}>Solicitar ayuda</h2>
      </div>
      <form onSubmit={handleSubmit} style={{ padding: "0 24px" }}>
        <div style={{ marginBottom: 16 }}><label style={labelStyle}>¿Qué insumo necesitas? *</label><input style={inputStyle} value={nombreAyuda} onChange={e => setNombreAyuda(e.target.value)} placeholder="Ej: Sensor FreeStyle Libre" required /></div>
        <div style={{ marginBottom: 16 }}><label style={labelStyle}>Mensaje</label><textarea style={{ ...inputStyle, height: 90, resize: "none" }} value={mensaje} onChange={e => setMensaje(e.target.value)} placeholder="Cuéntanos tu situación..." /></div>
        <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
          <button type="button" onClick={() => setUrgente(!urgente)} style={{ flex: 1, padding: 14, borderRadius: 14, border: `1.5px solid ${urgente ? "#e05060" : "#e0e2ec"}`, background: urgente ? "#fff0f2" : "white", color: urgente ? "#e05060" : "#7b80a0", fontWeight: 600, fontSize: 13, cursor: "pointer", fontFamily: "Outfit, sans-serif" }}>
            {urgente ? "🚨 Urgente" : "⚡ Marcar urgente"}
          </button>
          <button type="button" onClick={() => setAnonimo(!anonimo)} style={{ flex: 1, padding: 14, borderRadius: 14, border: `1.5px solid ${anonimo ? "#7890D0" : "#e0e2ec"}`, background: anonimo ? "#f0f1f9" : "white", color: anonimo ? "#7890D0" : "#7b80a0", fontWeight: 600, fontSize: 13, cursor: "pointer", fontFamily: "Outfit, sans-serif" }}>
            {anonimo ? "🙈 Anónimo" : "👤 Con nombre"}
          </button>
        </div>
        <button type="submit" disabled={loading} style={{ width: "100%", padding: 16, background: "#e05060", color: "white", border: "none", borderRadius: 50, fontWeight: 700, fontSize: 15, cursor: "pointer", fontFamily: "Outfit, sans-serif" }}>
          {loading ? "Publicando..." : "Solicitar ayuda"}
        </button>
      </form>
    </div>
  );
}

function Confirmacion({ tipo, onNuevo, onInicio }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "70vh", padding: "0 24px", fontFamily: "Outfit, sans-serif" }}>
      <div style={{ fontSize: 64, marginBottom: 16 }}>{tipo === "compartir" ? "✅" : "🙏"}</div>
      <h3 style={{ fontSize: 22, fontWeight: 700, color: "#1e2a4a", margin: "0 0 8px" }}>¡Publicado!</h3>
      <p style={{ color: "#7b80a0", textAlign: "center", marginBottom: 32 }}>
        {tipo === "compartir" ? "Tu insumo ya está visible en el mapa." : "Tu comunidad verá tu pedido en el mapa."}
      </p>
      <button onClick={onNuevo} style={{ width: "100%", padding: 16, background: "#1e2a4a", color: "white", border: "none", borderRadius: 50, fontWeight: 700, fontSize: 15, cursor: "pointer", marginBottom: 12 }}>
        Publicar otro
      </button>
      <button onClick={onInicio} style={{ width: "100%", padding: 16, background: "transparent", border: "1.5px solid #dde0ea", borderRadius: 50, color: "#7b80a0", fontSize: 15, fontWeight: 500, cursor: "pointer" }}>
        Volver al inicio
      </button>
    </div>
  );
}

export default function PublicarScreen({ user, onBack }) {
  const [view, setView] = useState("menu"); // menu | compartir | ayudar | ok_compartir | ok_ayudar

  return (
    <div style={{ maxWidth: 430, margin: "0 auto", minHeight: "100vh", background: "#f0f0f5", fontFamily: "Outfit, sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');`}</style>

      {view === "menu" && <PublicarMenu user={user} onSelectCompartir={() => setView("compartir")} onSelectAyudar={() => setView("ayudar")} />}
      {view === "compartir" && <FormCompartir user={user} onBack={() => setView("menu")} onSuccess={() => setView("ok_compartir")} />}
      {view === "ayudar" && <FormAyudar user={user} onBack={() => setView("menu")} onSuccess={() => setView("ok_ayudar")} />}
      {view === "ok_compartir" && <Confirmacion tipo="compartir" onNuevo={() => setView("menu")} onInicio={onBack} />}
      {view === "ok_ayudar" && <Confirmacion tipo="ayudar" onNuevo={() => setView("menu")} onInicio={onBack} />}

      <nav style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 430, background: "white", borderRadius: "20px 20px 0 0", boxShadow: "0 -2px 20px rgba(30,42,74,0.08)", display: "flex", alignItems: "center", height: 72, zIndex: 100 }}>
        {[
          { id: "inicio", label: "Inicio", Icon: IconInicio },
          { id: "publicar", label: "Publicar", Icon: IconPublicar, active: true },
          { id: "buscar", label: "Buscar", Icon: IconBuscar },
          { id: "canjes", label: "Canjes", Icon: IconCanjes },
          { id: "perfil", label: "Perfil", Icon: IconPerfil },
        ].map(({ id, label, Icon, active }) => (
          <button key={id} onClick={() => { if (id === "inicio") onBack(); }} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4, border: "none", background: "transparent", cursor: "pointer", padding: "6px 4px" }}>
            <div style={{ width: 44, height: 44, borderRadius: 14, background: active ? "#1e2a4a" : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon active={!!active} />
            </div>
            <span style={{ fontSize: 10, fontWeight: active ? 700 : 400, color: active ? "#1e2a4a" : "#b0b8d0", fontFamily: "Outfit, sans-serif" }}>{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
