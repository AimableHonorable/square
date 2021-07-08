import Slider from "react-slick";

const Slideshow = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings} className="col-md-11 mx-auto px-0">
      <div>
        <img src="https://images.ctfassets.net/2d5q1td6cyxq/3bXHwX64ZqpIFuEpOdD7WO/80144be8c62787b467dcb8a647c5649f/LastFrame_WithScreen_00059_JN_02.png?w=1680&h=945&fm=webp&q=85&fit=scale" className="fit" alt="" />
      </div>
      <div>
        <img src="https://images.ctfassets.net/2d5q1td6cyxq/6gGtfiDMsQPRg5yjLbfIDA/04cded68679fcf09b0db81f440992236/FirstFrame_00000.png?w=1680&h=945&fm=webp&q=85&fit=scale" className="fit" alt="" />
      </div>
    </Slider>
  )
}

export default Slideshow
