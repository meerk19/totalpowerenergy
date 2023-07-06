import React, { useState, useLayoutEffect, useRef, useCallback } from "react";

const Carousel = ({ content = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  let interval = useRef(null);

  const showSlide = (index) => {
    return activeIndex === index;
  };
  const nextSlide = useCallback(() => {
    const nextIndex = activeIndex === content.length - 1 ? 0 : activeIndex + 1;
    setIndex(nextIndex);
  }, [activeIndex, content]);

  const setIndex = (index) => {
    setActiveIndex(index);
  };

  const clearInt = useCallback(() => {
    if (interval.current) {
      clearInterval(interval.current);
    }
  }, []);
  const createInt = useCallback(() => {
    clearInt();
    interval.current = setInterval(() => {
      nextSlide();
    }, 5000);
  }, [clearInt, nextSlide]);

  useLayoutEffect(() => {
    createInt();
    () => {
      clearInt();
    };
  }, [activeIndex, createInt, clearInt]);

  const Slides = () => {
    return content.map((cont, i) => {
      let left;
      let transform;
      let zIndex;
      if (i < activeIndex) {
        left = `${(i - activeIndex) * 100}%`;
        transform = "";
        zIndex = -1;
      } else if (i > activeIndex) {
        left = `${(i - activeIndex) * 100}%`;
        transform = "";
        zIndex = -1;
      } else {
        left = `${i - activeIndex + 50}%`;
        transform = "translate(-50%, 0%)";
        zIndex = 1;
      }
      return (
        <div
          className="slide"
          style={{
            // backgroundImage: `url(${cont.image}), linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(254,254,255,0) 100%)`,
            left,
            transform,
            zIndex,
          }}
          key={`${cont.title}-${i}`}
        >
          <img className="slide-background" src={cont.image} />

          <h4
            className="display1 font-family-2 t-cyan shadow-cyan"
            style={{ textAlign: "center" }}
          >
            {cont.title}
          </h4>
        </div>
      );
    });
  };

  const Pagination = () => {
    return content.map((cont, i) => {
      return (
        <div className="pg_item " key={i} onClick={() => setActiveIndex(i)}>
          {showSlide(i) && <div className="progress" />}
        </div>
      );
    });
  };
  return (
    <div className="carousel d-flex-column">
      <div className="carousel" key="carousel" id="home">
        {Slides()}

        <div className="slider_pagination_container flex-wrap">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
