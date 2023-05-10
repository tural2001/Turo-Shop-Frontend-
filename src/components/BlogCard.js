import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  CCardText,
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CImage,
} from '@coreui/react';

const BlogCard = (props) => {
  const { data } = props;

  const [showText, setShowText] = useState(Array(data.length).fill(false));

  const handleClick = (index) => {
    const newShowText = [...showText];
    newShowText[index] = !showText[index];
    setShowText(newShowText);
  };

  return (
    <div className="col-12 d-flex justify-content-center">
      <CCarousel controls indicators dark className="w-50">
        {Array.isArray(data) &&
          data.map((item, index) => {
            return (
              <CCarouselItem key={index}>
                <CImage
                  className="d-block"
                  src={
                    item?.images
                      ? item.images
                      : 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'
                  }
                  alt={{ key: { index } }}
                  width={200}
                  height={350}
                />
                <CCarouselCaption className="d-none d-md-block">
                  {/* <h5>{item?.title}</h5> */}
                  <CCardText>
                    {!showText[index]
                      ? item?.description.substring(0, 0) + '...'
                      : item?.description}
                  </CCardText>
                  <Button variant="primary" onClick={() => handleClick(index)}>
                    {showText[index] ? 'Hide' : 'Read More'}
                  </Button>
                </CCarouselCaption>
              </CCarouselItem>
            );
          })}
      </CCarousel>
    </div>
  );
};

export default BlogCard;
