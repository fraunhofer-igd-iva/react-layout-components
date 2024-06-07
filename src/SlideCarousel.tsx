import * as React from "react";
import {
    Carousel,
    CarouselItem,
    CarouselIndicators,
} from "reactstrap";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

require("./SlideCarousel.css");

export type CarouselConfiguration = {
    slides : Array<{view: React.ReactNode, icon: IconProp}>;
    activeIndex : number;
    theme?: "light" | "dark";
};

const SlideCarousel : React.FunctionComponent<CarouselConfiguration> = props => {
    const [activeIndex, setActiveIndex] = React.useState(props.activeIndex);

    const slides = props.slides.map((slide : any, idx : number) => {
        return (
            <CarouselItem
                tag="div"
                key={idx}>
                {slide.view}
            </CarouselItem>
        );
    });

    const indicatorIcons = props.slides.length > 1 ? props.slides.map((slide: {view: React.ReactNode, icon: IconProp}, idx: number) => {
        return (
            <div key={idx} className="icon-item" onClick={() => {return goToIndex(idx);}}>
                <FontAwesomeIcon icon={slide.icon} className="icon"/>
            </div>
        );
    }) : [];
    const indicators = props.slides.length > 1 ? <CarouselIndicators items={props.slides.map((obj: any, idx : number) => {return {src: idx};})} activeIndex={activeIndex} onClickHandler={goToIndex} /> : null;

    return (
        <Carousel
            className={props.theme ? props.theme : "light"}
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            interval={false}>
            <div className="indicators-container" onMouseEnter={indicatorsEnter} onMouseLeave={indicatorsLeave}>
                <div className="carousel-icons">
                    {indicatorIcons}
                </div>
                {indicators}
            </div>
            {slides}
        </Carousel>
    );

    function next() {
        const nextIndex = activeIndex === props.slides.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    function previous() {
        const nextIndex = activeIndex === 0 ? props.slides.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    function goToIndex(newIndex : number) {
        setActiveIndex(newIndex);
    }

    function indicatorsEnter() {
        let iconItems = Array.from(document.getElementsByClassName("icon-item"));
        iconItems.forEach((item: any) => {
            item.classList.add("animate");
        })
    }

    function indicatorsLeave() {
        let iconItems = Array.from(document.getElementsByClassName("icon-item"));
        iconItems.forEach((item: any) => {
            item.classList.remove("animate");
        })
    }
};

export default SlideCarousel;