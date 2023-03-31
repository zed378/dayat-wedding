import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Qutoes1, Qutoes2, Qutoes3, Qutoes4, Qutoes5 } from "../atoms/quotes";
import { Zoom } from "react-awesome-reveal";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function Quotes() {
  return (
    <Zoom>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="relative z-10"
      >
        <Qutoes1 />
        <Qutoes2 />
        <Qutoes3 />
        <Qutoes4 />
        <Qutoes5 />
      </Carousel>
    </Zoom>
  );
}
