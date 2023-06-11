import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import FaqsImage from "../../assets/faqs.jpg";
const Faqs = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={index}>
        <div
          className="  font-family-1 d-flex-row  space-between cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.title}
          {icon}
        </div>
        {isExpanded && (
          <div className="lead font-family-1 medium">
            {item.content}
          </div>
        )}
        <hr />
      </div>
    );
  });

  return (
    <div className=" md-row-to-col start-row space-around ">
      <div className="innerbox ">{renderedItems}</div>
      <div className="innerbox-image align-center">
        <img className="about-image" src={FaqsImage} />
      </div>
    </div>
  );
};
export default Faqs;
