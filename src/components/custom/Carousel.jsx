import React, { useState, useLayoutEffect, useRef, useCallback } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
    <div className="carousel" key="carousel" id="home">
      <TransitionGroup>
        <CSSTransition
          key={content[activeIndex].title}
          classNames="right-to-left"
          timeout={1000}
        >
          <div
            className="slide"
            style={{
              backgroundImage: `url(${content[activeIndex].image}), linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(254,254,255,0) 100%)`,
            }}
          >
            <h4 className="display1 font-family-2 t-cyan shadow-cyan">
              {content[activeIndex].title}
            </h4>
          </div>
        </CSSTransition>
      </TransitionGroup>

      <div className="slider_pagination_container flex-wrap">
        <Pagination />
      </div>
    </div>
  );
};

export default Carousel;
