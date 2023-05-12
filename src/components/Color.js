import React from 'react';

const Color = (props) => {
  const { colorData } = props;
  return (
    <ul className="colors ps-0">
      {colorData &&
        colorData.map((item, index) => {
          return <li style={{ backgroundColor: item?.title }} key={index}></li>;
        })}
    </ul>
  );
};

export default Color;
