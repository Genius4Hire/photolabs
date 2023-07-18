import React from 'react';

////////////// Styling /////////////////
import '../styles/PhotoFavButton.scss';

// props from favbadge:
// width={20}
// height={17}
// fill="#C80000"
// searchForFavs={props.searchForFavs}



const FavIcon = (props) => {
  return (
    <svg
      width={props.width || 20}
      height={props.height || 17}
      viewBox="0 0 24 19"
      stroke="#C80000"
      fill={props.isLiked ? '#ff0000' : '#ffffff'}
      xmlns="http://www.w3.org/2000/svg">

      <path d="M11 18C11 18 1 12.5909 1 6.02273C1 4.8616 1.41649 3.73633 2.17862 2.83838C2.94075 1.94043 4.00143 1.32526 5.1802 1.09755C6.35897 0.869829 7.58301 1.04363 8.64406 1.58938C9.70512 2.13512 10.5376 3.0191 11 4.09092C11.4624 3.0191 12.2949 2.13512 13.3559 1.58938C14.417 1.04363 15.641 0.869829 16.8198 1.09755C17.9986 1.32526 19.0593 1.94043 19.8214 2.83838C20.5835 3.73633 21 4.8616 21 6.02273C21 12.5909 11 18 11 18Z"
        fill={props.fill}
        stroke={props.stroke}
        strokeWidth={props.outlineWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {
        !!props.displayAlert &&
        <circle cx="21" cy="4" r="2.75" fill="#FFFF00" stroke="#C80000" strokeWidth="0.5"/>
      }
    </svg>
  );
};

// FavIcon.defaultProps = {
//   width: 20,
//   height: 17,
//   fill: '#EEEEEE',
//   outlineWidth: 2,
//   stroke: '#C80000',
// };

export default FavIcon;
