import React from 'react';
import { DataProvider } from '../../contexts/DataContext';
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';
import MultiClamp from 'react-multi-clamp';

export default function Categories() {
  const { categories } = React.useContext(DataProvider);
  const isTabletOrAbove = useMediaQuery({ query: '(min-width: 768px)' });
  const isMobile = useMediaQuery({ query: '(min-width: 360px)' });
  const settings = {
    className: '',
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="mb-6">
      <div className="flex items-center mb-4">
        <h1 className="text-xl font-semibold flex-grow">Categories</h1>
        <button className="p-1">See all</button>
      </div>
      <Slider className="" {...settings}>
        {categories.map((item, i) => {
          return (
            <div key={i} className="px-1 overflow-hidden ">
              <div className="  overflow-hidden  relative  rounded-lg  ">
                <img
                  src={item.main}
                  alt="something"
                  className=" h-auto w-full rounded mb-0  "
                />
                <span
                  style={{
                    maxWidth: '50%',
                    top: isTabletOrAbove ? '16%' : '10%',
                  }}
                  className="absolute  font-semibold left-10 text-xl sm:text-xl md:text-2xl "
                >
                  {item.title}
                </span>
                <div
                  className=""
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit,minmax(50px,1fr)',
                    gap: isMobile ? '6px' : '8px',
                  }}
                >
                  {item.sub.map((photo, j) => {
                    return (
                      <div
                        key={j + i}
                        className=" mt-2  rounded "
                        style={{
                          backgroundColor: item.color,
                          height: '120px',
                        }}
                      >
                        <div
                          style={{ height: '70px' }}
                          className="pt-2 p-1 flex justify-center items-center"
                        >
                          <img
                            src={photo.src}
                            alt="ima"
                            className="max-w-full max-h-full"
                          />
                        </div>
                        <MultiClamp
                          className="text-center text-sm font-semibold sm:text-sm md:text-sm lg:text-base"
                          clamp={2}
                          ellipsis="..."
                        >
                          {photo.title}
                        </MultiClamp>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
