interface propsTypes {
  size?: string
  color?: string
}

export const SearchIcon = (props: propsTypes) => {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 21L16.514 16.506M19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z"
        stroke={props.color ? props.color : 'black'}
        strokeOpacity="0.7"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export const SearchToggleIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.5554 9.77778C15.5554 10.5142 14.9585 11.1111 14.2221 11.1111C13.4857 11.1111 12.8888 10.5142 12.8888 9.77778C12.8888 9.0414 13.4857 8.44444 14.2221 8.44444C14.9585 8.44444 15.5554 9.0414 15.5554 9.77778Z"
        stroke="black"
        strokeOpacity="0.7"
        strokeWidth="0.888889"
      />
      <line x1="8" y1="9.77778" x2="13.3333" y2="9.77778" stroke="black" strokeOpacity="0.7" strokeWidth="0.888889" />
      <path
        d="M8.44455 14.2222C8.44455 13.4858 9.04151 12.8889 9.77789 12.8889C10.5143 12.8889 11.1112 13.4858 11.1112 14.2222C11.1112 14.9586 10.5143 15.5556 9.77789 15.5556C9.04151 15.5556 8.44455 14.9586 8.44455 14.2222Z"
        stroke="black"
        strokeOpacity="0.7"
        strokeWidth="0.888889"
      />
      <line x1="16" y1="14.2222" x2="10.6667" y2="14.2222" stroke="black" strokeOpacity="0.7" strokeWidth="0.888889" />
      <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#E3E3E3" />
    </svg>
  )
}

export const CalendarIcon = (props: propsTypes) => {
  return (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 20C1.45 20 0.979002 19.804 0.587002 19.412C0.195002 19.02 -0.000664969 18.5493 1.69779e-06 18V4C1.69779e-06 3.45 0.196002 2.979 0.588002 2.587C0.980002 2.195 1.45067 1.99933 2 2H3V0H5V2H13V0H15V2H16C16.55 2 17.021 2.196 17.413 2.588C17.805 2.98 18.0007 3.45067 18 4V10H16V8H2V18H9V20H2ZM19.125 15L17 12.875L17.725 12.15C17.9083 11.9667 18.1417 11.875 18.425 11.875C18.7083 11.875 18.9417 11.9667 19.125 12.15L19.85 12.875C20.0333 13.0583 20.125 13.2917 20.125 13.575C20.125 13.8583 20.0333 14.0917 19.85 14.275L19.125 15ZM11 21V18.875L16.3 13.575L18.425 15.7L13.125 21H11ZM2 6H16V4H2V6Z"
        fill={props.color}
      />
    </svg>
  )
}

export const BadmintonIcon = (props: propsTypes) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M17.9996 15C19.0604 15 20.0779 15.4214 20.828 16.1716C21.5781 16.9217 21.9996 17.9392 21.9996 19C21.9996 20.0609 21.5781 21.0783 20.828 21.8284C20.0779 22.5786 19.0604 23 17.9996 23C16.9387 23 15.9213 22.5786 15.1711 21.8284C14.421 21.0783 13.9996 20.0609 13.9996 19C13.9996 17.9392 14.421 16.9217 15.1711 16.1716C15.9213 15.4214 16.9387 15 17.9996 15ZM17.9996 17C17.4691 17 16.9604 17.2107 16.5854 17.5858C16.2103 17.9609 15.9996 18.4696 15.9996 19C15.9996 19.5305 16.2103 20.0392 16.5854 20.4142C16.9604 20.7893 17.4691 21 17.9996 21C18.53 21 19.0387 20.7893 19.4138 20.4142C19.7889 20.0392 19.9996 19.5305 19.9996 19C19.9996 18.4696 19.7889 17.9609 19.4138 17.5858C19.0387 17.2107 18.53 17 17.9996 17ZM6.04957 14.54C6.04957 14.54 7.45957 13.12 7.46957 10.3C7.10957 8.11002 7.96957 5.54002 9.93957 3.58002C12.8696 0.650021 17.1396 0.170021 19.4996 2.50002C21.8296 4.86002 21.3496 9.13002 18.4196 12.06C16.4596 14.03 13.8896 14.89 11.6996 14.53C8.87957 14.54 7.45957 15.95 7.45957 15.95L3.21957 20.19L1.80957 18.78L6.04957 14.54ZM18.0696 3.93002C16.4996 2.37002 13.4996 2.84002 11.3496 5.00002C9.20957 7.14002 8.72957 10.15 10.2896 11.71C11.8596 13.27 14.8596 12.79 16.9996 10.65C19.1596 8.50002 19.6296 5.50002 18.0696 3.93002Z"
        fill={props.color}
      />
    </svg>
  )
}

export const BasketballIcon = (props: propsTypes) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M14.2703 6.00002C13.7203 6.95002 14.0503 8.18002 15.0003 8.73002C15.9503 9.28001 17.1803 8.95002 17.7303 8.00002C18.2803 7.05002 17.9503 5.82002 17.0003 5.27002C16.0503 4.72002 14.8203 5.05002 14.2703 6.00002Z"
        fill={props.color}
      />
      <path
        d="M15.8402 10.41L13.2402 8.91001C12.2223 8.3149 11.4462 7.38072 11.0476 6.27101C10.6491 5.1613 10.6535 3.94676 11.0602 2.84001C11.1438 2.62011 11.1465 2.37763 11.0677 2.15594C10.9889 1.93426 10.8339 1.74783 10.6302 1.63001C10.1002 1.33001 9.41022 1.56001 9.20022 2.13001C8.25022 4.64001 8.85022 7.48001 10.6602 9.40001L6.01022 17.45C5.73022 17.93 5.90022 18.54 6.38022 18.82C6.86022 19.1 7.47022 18.93 7.75022 18.45L8.75022 16.72L10.4802 17.72L7.98022 22.05C7.70022 22.53 7.87022 23.14 8.35022 23.42C8.83022 23.7 9.44022 23.53 9.72022 23.05L15.5102 13.03C16.0019 13.7009 16.3195 14.4832 16.4347 15.3069C16.5499 16.1306 16.459 16.97 16.1702 17.75C16.0882 17.9954 16.1047 18.2631 16.2161 18.4967C16.3275 18.7302 16.5252 18.9114 16.7675 19.0022C17.0099 19.0929 17.278 19.086 17.5153 18.983C17.7527 18.88 17.9409 18.689 18.0402 18.45C19.0102 15.83 18.4502 12.61 15.8402 10.41ZM12.7502 3.80001C13.4702 4.21001 14.3802 3.97001 14.8002 3.25001C15.2102 2.53001 14.9702 1.62001 14.2502 1.20001C13.9059 1.00813 13.4998 0.959418 13.1199 1.06441C12.7399 1.16939 12.4165 1.41965 12.2195 1.76111C12.0225 2.10257 11.9677 2.50783 12.067 2.88933C12.1663 3.27083 12.4117 3.59794 12.7502 3.80001Z"
        fill={props.color}
      />
    </svg>
  )
}

export const FutsalIcon = (props: propsTypes) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C5 2 1 9 1 9L9.3 17.3C9.74 16.77 10.32 16.37 11 16.17L7.83 13L12 8.83L16.17 13L13 16.17C13.68 16.37 14.27 16.77 14.7 17.3L23 9C23 9 19 2 12 2ZM17.59 11.59L12 6L6.41 11.59L3.59 8.76C4.95 7 7.89 4 12 4C16.08 4 19.03 7 20.4 8.77L17.59 11.59ZM13 13C13 13.55 12.55 14 12 14C11.45 14 11 13.55 11 13C11 12.45 11.45 12 12 12C12.55 12 13 12.45 13 13ZM13.5 20L12 21L10.5 20V18H13.5V20Z"
        fill={props.color}
      />
    </svg>
  )
}

export const SoccerIcon = (props: propsTypes) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M1.07812 5.57812V18.4219H22.9219V5.57812H1.07812ZM1.92188 6.42188H11.5781V10.1258C10.7227 10.3196 10.0781 11.0884 10.0781 12C10.0781 12.9116 10.7227 13.6805 11.5781 13.8743V17.5781H1.92188V14.6719H4.92188V9.32812H1.92188V6.42188ZM12.4219 6.42188H22.0781V9.32812H19.0781V14.6719H22.0781V17.5781H12.4219V13.8743C13.2773 13.6804 13.9219 12.9116 13.9219 12C13.9219 11.0884 13.2773 10.3195 12.4219 10.1258V6.42188ZM1.92188 10.1719H4.07812V13.8281H1.92188V10.1719ZM19.9219 10.1719H22.0781V13.8281H19.9219V10.1719ZM11.5781 11.0059V12.9941C11.1905 12.8316 10.9219 12.4503 10.9219 12C10.9219 11.5497 11.1905 11.1684 11.5781 11.0059ZM12.4219 11.0059C12.8095 11.1684 13.0781 11.5497 13.0781 12C13.0781 12.4503 12.8095 12.8316 12.4219 12.9941V11.0059Z"
        fill={props.color}
      />
    </svg>
  )
}

export const TennisIcon = (props: propsTypes) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12.7176 20.713C11.0905 21.173 9.35671 21.0803 7.78794 20.4493C6.21917 19.8182 4.90407 18.6846 4.04868 17.226C3.1933 15.7674 2.84598 14.0662 3.06114 12.389C3.27629 10.7119 4.04178 9.15344 5.23764 7.95798L5.95764 7.23798C7.13052 6.06508 8.65314 5.30559 10.2956 5.07414C11.9381 4.8427 13.6113 5.15187 15.0626 5.95498L17.4496 3.60998C17.8298 3.23325 18.3405 3.01755 18.8756 3.00774C19.4107 2.99792 19.929 3.19475 20.3227 3.55729C20.7164 3.91983 20.9553 4.42017 20.9895 4.95427C21.0238 5.48837 20.8508 6.01512 20.5066 6.42498L20.3906 6.55098L18.0446 8.93798C18.82 10.3394 19.1356 11.949 18.9469 13.5395C18.7581 15.13 18.0745 16.621 16.9926 17.802"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.2998 5.29999L18.6998 14.7M10.9998 18C10.9998 18.394 11.0774 18.7841 11.2282 19.148C11.3789 19.512 11.5999 19.8427 11.8785 20.1213C12.1571 20.3999 12.4878 20.6209 12.8518 20.7716C13.2157 20.9224 13.6058 21 13.9998 21C14.3938 21 14.7839 20.9224 15.1479 20.7716C15.5118 20.6209 15.8425 20.3999 16.1211 20.1213C16.3997 19.8427 16.6207 19.512 16.7714 19.148C16.9222 18.7841 16.9998 18.394 16.9998 18C16.9998 17.606 16.9222 17.2159 16.7714 16.8519C16.6207 16.488 16.3997 16.1572 16.1211 15.8787C15.8425 15.6001 15.5118 15.3791 15.1479 15.2283C14.7839 15.0776 14.3938 15 13.9998 15C13.6058 15 13.2157 15.0776 12.8518 15.2283C12.4878 15.3791 12.1571 15.6001 11.8785 15.8787C11.5999 16.1572 11.3789 16.488 11.2282 16.8519C11.0774 17.2159 10.9998 17.606 10.9998 18Z"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const Harticon = (props: propsTypes) => {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.625 2.25C10.3694 2.25 9.255 2.74563 8.5 3.5975C7.745 2.74563 6.63062 2.25 5.375 2.25C4.28139 2.25132 3.23295 2.68635 2.45965 3.45965C1.68635 4.23295 1.25132 5.28139 1.25 6.375C1.25 10.8962 7.86312 14.5088 8.14437 14.6606C8.25367 14.7195 8.37586 14.7503 8.5 14.7503C8.62414 14.7503 8.74633 14.7195 8.85563 14.6606C9.13688 14.5088 15.75 10.8962 15.75 6.375C15.7487 5.28139 15.3137 4.23295 14.5404 3.45965C13.7671 2.68635 12.7186 2.25132 11.625 2.25ZM11.2819 11.1475C10.4114 11.8861 9.48091 12.5509 8.5 13.135C7.51909 12.5509 6.58858 11.8861 5.71812 11.1475C4.36375 9.98563 2.75 8.21375 2.75 6.375C2.75 5.67881 3.02656 5.01113 3.51884 4.51884C4.01113 4.02656 4.67881 3.75 5.375 3.75C6.4875 3.75 7.41875 4.3375 7.80562 5.28375C7.86193 5.42169 7.95805 5.53974 8.08172 5.62283C8.20539 5.70592 8.35101 5.7503 8.5 5.7503C8.64899 5.7503 8.79461 5.70592 8.91828 5.62283C9.04195 5.53974 9.13807 5.42169 9.19438 5.28375C9.58125 4.3375 10.5125 3.75 11.625 3.75C12.3212 3.75 12.9889 4.02656 13.4812 4.51884C13.9734 5.01113 14.25 5.67881 14.25 6.375C14.25 8.21375 12.6362 9.98563 11.2819 11.1475Z"
        fill="#AAAAAA"
      />
    </svg>
  )
}

export const PlusIcon = (props: propsTypes) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 1V13M1 7H13" stroke={props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const CloseIcon = (props: propsTypes) => {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 1L1 15M1 1L15 15"
        stroke={props.color ? props.color : '#3A3A3A'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const DownwardArrowIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <g clipPath="url(#clip0_578_6254)">
        <path
          d="M3.33398 6.00002L8.00065 10.6667L12.6673 6.00002"
          stroke="#5FCA7B"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_578_6254">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const BigHart = (prop: propsTypes) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.25647 11.8875L2.2565 11.8875L2.25996 11.8927C3.28949 13.4436 4.52437 14.7869 5.79696 15.9692L5.80517 15.9768L5.81304 15.9848C6.39624 16.5775 7.34679 17.4662 8.23643 18.2129C8.68172 18.5866 9.10368 18.9179 9.45197 19.1572C9.62654 19.2772 9.77435 19.3683 9.89184 19.4293C9.94053 19.4547 9.97767 19.4714 10.0045 19.4823C10.1743 19.4195 10.3903 19.2788 10.6504 19.0655C10.7978 18.9445 10.9431 18.8144 11.0892 18.6834L11.0964 18.677C11.2348 18.553 11.3785 18.4242 11.512 18.3171C14.2862 16.0146 17.1973 13.272 18.6648 10.3135C19.8862 7.47642 19.8401 4.07794 18.0493 2.02093C15.7069 -0.269806 12.1988 0.180365 10.4119 2.58276L10.0002 3.13627L9.60225 2.57275C9.1213 1.89164 8.53548 1.35986 7.84312 0.97086C5.00328 -0.253543 2.06972 0.988854 0.860886 3.80739C0.0143318 6.6964 0.729832 9.64887 2.25647 11.8875Z"
        fill={prop.color}
        stroke="#5FCA7B"
      />
    </svg>
  )
}

export const MoreIcon = (props: propsTypes) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.83333 9.99992C5.83333 10.4419 5.65774 10.8659 5.34518 11.1784C5.03262 11.491 4.60869 11.6666 4.16667 11.6666C3.72464 11.6666 3.30072 11.491 2.98816 11.1784C2.67559 10.8659 2.5 10.4419 2.5 9.99992C2.5 9.55789 2.67559 9.13397 2.98816 8.82141C3.30072 8.50885 3.72464 8.33325 4.16667 8.33325C4.60869 8.33325 5.03262 8.50885 5.34518 8.82141C5.65774 9.13397 5.83333 9.55789 5.83333 9.99992ZM11.6667 9.99992C11.6667 10.4419 11.4911 10.8659 11.1785 11.1784C10.866 11.491 10.442 11.6666 10 11.6666C9.55797 11.6666 9.13405 11.491 8.82149 11.1784C8.50893 10.8659 8.33333 10.4419 8.33333 9.99992C8.33333 9.55789 8.50893 9.13397 8.82149 8.82141C9.13405 8.50885 9.55797 8.33325 10 8.33325C10.442 8.33325 10.866 8.50885 11.1785 8.82141C11.4911 9.13397 11.6667 9.55789 11.6667 9.99992ZM17.5 9.99992C17.5 10.4419 17.3244 10.8659 17.0118 11.1784C16.6993 11.491 16.2754 11.6666 15.8333 11.6666C15.3913 11.6666 14.9674 11.491 14.6548 11.1784C14.3423 10.8659 14.1667 10.4419 14.1667 9.99992C14.1667 9.55789 14.3423 9.13397 14.6548 8.82141C14.9674 8.50885 15.3913 8.33325 15.8333 8.33325C16.2754 8.33325 16.6993 8.50885 17.0118 8.82141C17.3244 9.13397 17.5 9.55789 17.5 9.99992Z"
        fill={props.color ? props.color : '#3A3A3A'}
      />
    </svg>
  )
}

export const UpLoadIcon = () => {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12.25" r="12" fill="#5FCA7B" />
      <path
        d="M12 18V6M12 6L9 9.56757M12 6L15 9.56757"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const ClackIcon = () => {
  return (
    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 13.375C3.6225 13.375 0.875 10.6275 0.875 7.25C0.875 3.8725 3.6225 1.125 7 1.125C10.3775 1.125 13.125 3.8725 13.125 7.25C13.125 10.6275 10.3775 13.375 7 13.375ZM7 2C4.10375 2 1.75 4.35375 1.75 7.25C1.75 10.1462 4.10375 12.5 7 12.5C9.89625 12.5 12.25 10.1462 12.25 7.25C12.25 4.35375 9.89625 2 7 2Z"
        fill="#AAAAAA"
      />
      <path
        d="M8.75003 9.4375C8.67128 9.4375 8.59253 9.42 8.52253 9.37625L6.33503 8.06375C6.27024 8.02481 6.21676 7.9696 6.17992 7.90359C6.14308 7.83759 6.12416 7.76309 6.12503 7.6875V4.1875C6.12503 3.9425 6.31753 3.75 6.56253 3.75C6.80753 3.75 7.00003 3.9425 7.00003 4.1875V7.4425L8.97753 8.62375C9.05898 8.67367 9.12194 8.74879 9.15685 8.83771C9.19177 8.92663 9.19674 9.02452 9.17102 9.11652C9.1453 9.20853 9.09028 9.28964 9.01431 9.34756C8.93834 9.40548 8.84556 9.43706 8.75003 9.4375Z"
        fill="#AAAAAA"
      />
    </svg>
  )
}

export const BalloonIcon = () => {
  return (
    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.6387 1.41675H2.52756C1.83242 1.41675 1.26367 1.94175 1.26367 2.58341V13.0834L3.79145 10.7501H12.6387C13.3338 10.7501 13.9026 10.2251 13.9026 9.58342V2.58341C13.9026 1.94175 13.3338 1.41675 12.6387 1.41675ZM12.6387 9.58342H3.28589L2.52756 10.2834V2.58341H12.6387V9.58342Z"
        fill="#AAAAAA"
      />
    </svg>
  )
}

export const CloseButton = () => {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L19 19" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 1L1 19" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const ClockIcon = (props: propsTypes) => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 0C3.13359 0 0 3.13359 0 7C0 10.8664 3.13359 14 7 14C10.8664 14 14 10.8664 14 7C14 3.13359 10.8664 0 7 0ZM7 12.8324C3.77891 12.8324 1.16758 10.2211 1.16758 7C1.16758 3.77891 3.77891 1.16758 7 1.16758C10.2211 1.16758 12.8324 3.77891 12.8324 7C12.8324 10.2211 10.2211 12.8324 7 12.8324ZM7.58242 2.33242H6.41484V7L9.03984 9.625L9.91484 8.75L7.58242 6.41758V2.33242Z"
        fill={props.color}
      />
    </svg>
  )
}

export const ImageUploadIcon = (props: propsTypes) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 54 53" fill="none">
      <path
        d="M48.8161 26.5013C48.8161 25.9226 48.5862 25.3677 48.177 24.9585C47.7678 24.5493 47.2129 24.3195 46.6342 24.3195C46.0556 24.3195 45.5006 24.5493 45.0915 24.9585C44.6823 25.3677 44.4524 25.9226 44.4524 26.5013H48.8161ZM26.9979 9.04674C27.5765 9.04674 28.1315 8.81687 28.5406 8.4077C28.9498 7.99853 29.1797 7.44358 29.1797 6.86492C29.1797 6.28627 28.9498 5.73132 28.5406 5.32215C28.1315 4.91297 27.5765 4.68311 26.9979 4.68311V9.04674ZM43.3615 43.9558H10.6342V48.3195H43.3615V43.9558ZM9.54332 42.8649V10.1377H5.17969V42.8649H9.54332ZM44.4524 26.5013V42.8649H48.8161V26.5013H44.4524ZM10.6342 9.04674H26.9979V4.68311H10.6342V9.04674ZM10.6342 43.9558C10.3449 43.9558 10.0674 43.8409 9.86284 43.6363C9.65826 43.4317 9.54332 43.1543 9.54332 42.8649H5.17969C5.17969 44.3116 5.75436 45.6989 6.77729 46.7219C7.80021 47.7448 9.1876 48.3195 10.6342 48.3195V43.9558ZM43.3615 48.3195C44.8081 48.3195 46.1955 47.7448 47.2185 46.7219C48.2414 45.6989 48.8161 44.3116 48.8161 42.8649H44.4524C44.4524 43.1543 44.3375 43.4317 44.1329 43.6363C43.9283 43.8409 43.6508 43.9558 43.3615 43.9558V48.3195ZM9.54332 10.1377C9.54332 9.84832 9.65826 9.57085 9.86284 9.36626C10.0674 9.16168 10.3449 9.04674 10.6342 9.04674V4.68311C9.1876 4.68311 7.80021 5.25778 6.77729 6.2807C5.75436 7.30363 5.17969 8.69102 5.17969 10.1377H9.54332Z"
        fill="#CCCCCC"
      />
      <path
        d="M7.36084 38.5016L19.0259 27.8085C19.4191 27.4482 19.9307 27.2443 20.4639 27.2355C20.9972 27.2266 21.5152 27.4134 21.9201 27.7605L35.7245 39.5925M31.3608 34.138L36.5678 28.9311C36.9391 28.5594 37.4322 28.3343 37.9562 28.297C38.4803 28.2597 39.0002 28.4128 39.4205 28.7281L46.6336 34.138M35.7245 14.5016L41.179 19.9561M41.179 19.9561L46.6336 14.5016M41.179 19.9561V6.86523"
        stroke="#CCCCCC"
        strokeWidth="4.58182"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const SocialLoginNaverIcon = (props: propsTypes) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 512 512" version="1.1">
      <path fill="#ffffff" d="M9 32V480H181.366V255.862L331.358 480H504V32H331.358V255.862L181.366 32H9Z" />
    </svg>
  )
}

export const SocialLoginGoogleIcon = (props: propsTypes) => {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.64 9.20425C17.64 8.56607 17.5827 7.95243 17.4764 7.36334H9V10.8447H13.8436C13.635 11.9697 13.0009 12.9229 12.0477 13.5611V15.8193H14.9564C16.6582 14.2524 17.64 11.9452 17.64 9.20425Z"
        fill="#4285F4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.99976 17.9998C11.4298 17.9998 13.467 17.1938 14.9561 15.8193L12.0475 13.5611C11.2416 14.1011 10.2107 14.4202 8.99976 14.4202C6.65567 14.4202 4.67158 12.837 3.96385 10.7097H0.957031V13.0416C2.43794 15.9829 5.48158 17.9998 8.99976 17.9998Z"
        fill="#34A853"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.96409 10.7101C3.78409 10.1701 3.68182 9.59325 3.68182 9.00007C3.68182 8.40689 3.78409 7.83007 3.96409 7.29007V4.95825H0.957273C0.347727 6.17325 0 7.5478 0 9.00007C0 10.4523 0.347727 11.8269 0.957273 13.0419L3.96409 10.7101Z"
        fill="#FBBC05"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.99976 3.57909C10.3211 3.57909 11.5075 4.03318 12.4402 4.925L15.0216 2.34363C13.4629 0.891361 11.4257 -0.000457764 8.99976 -0.000457764C5.48158 -0.000457764 2.43794 2.01636 0.957031 4.95773L3.96385 7.28955C4.67158 5.16227 6.65567 3.57909 8.99976 3.57909Z"
        fill="#EA4335"
      />
    </svg>
  )
}

export const NoticeIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="195" height="173" viewBox="0 0 414 368" fill="none">
      <path
        d="M408.515 315.621C421.755 338.571 405.135 367.258 378.692 367.258H34.4693C7.97443 367.258 -8.56794 338.526 4.64616 315.621L176.759 17.2044C190.006 -5.75561 223.183 -5.71401 236.406 17.2044L408.515 315.621ZM206.583 253.924C188.36 253.924 173.587 268.697 173.587 286.92C173.587 305.143 188.36 319.916 206.583 319.916C224.806 319.916 239.578 305.143 239.578 286.92C239.578 268.697 224.806 253.924 206.583 253.924ZM175.256 135.321L180.577 232.874C180.826 237.439 184.6 241.013 189.172 241.013H223.994C228.565 241.013 232.339 237.439 232.588 232.874L237.909 135.321C238.178 130.391 234.252 126.245 229.315 126.245H183.85C178.912 126.245 174.987 130.391 175.256 135.321Z"
        fill="#F8D521"
      />
    </svg>
  )
}

export const GithubIcon = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
    </svg>
  )
}

export const HamburgerIcon = () => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  )
}

export const InfoIcon = () => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="info"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" x2="12" y1="16" y2="12"></line>
      <line x1="12" x2="12.01" y1="8" y2="8"></line>
    </svg>
  )
}

export const LoadingIcon = () => {
  return (
    <svg viewBox="22.857142857142858 22.857142857142858 45.714285714285715 45.714285714285715">
      <circle
        cx="45.714285714285715"
        cy="45.714285714285715"
        r="20"
        strokeWidth="5.714285714285714"
        strokeDasharray="125.664"
        strokeDashoffset="125.66370614359172px"
      ></circle>
    </svg>
  )
}
