import Slider from "react-slick";

export default function ImageCarousel() {
  const images = [
    {
      src: "https://hips.hearstapps.com/hmg-prod/images/wedding-wishes-bride-and-groom-surrounded-by-their-friends-66abb2eac5cde.jpg",
      alt: "Bride and Groom Surrounded by Friends",
    },
    {
      src: "https://kamatharjun.com/wp-content/uploads/2018/07/35.jpg",
      alt: "Bride and Groom wedding ceremony",
    },
    {
      src: "https://media.istockphoto.com/id/1186306039/photo/this-day-is-the-first-of-many-beautiful-days-together.jpg?s=612x612&w=0&k=20&c=KDa0M29YQJD1uvLTTcE_iepQv1ivh9q-h797f3P8Vbw=",
      alt: "Bride and Groom on Their First Day Together",
    },
    {
      src: "https://assets.vogue.com/photos/6457fe35c943a2672e3e6c65/16:9/w_3697,h_2079,c_limit/vg-125.jpg  ",
      alt: "Happy Bride and Groom",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-image">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
