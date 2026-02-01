import SectionTitle from "../section-title/SectionTitle";
import { useRef, useState } from "react";
import { reviewsContent } from "../../data/app";
import "./reviews.css";

function Reviews() {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef(null);

  function handlePlay() {
    videoRef.current.play();
    setIsPlaying(true);
  }

  function handleEnded() {
    setIsPlaying(false);
  }
  return (
    <section
      className="bg-[#f6f6f8] pt-12.5 pb-12.5 md:pt-35 md:pb-35"
      id="testimonials"
    >
      <div className="text-center md-7.5 md:mb-15">
        <SectionTitle text={reviewsContent.title} />
      </div>
      <div className="md:flex md:items-center md:justify-center md:gap-25">
        <div className="max-w-86.25 md:max-w-100 flex flex-col items-center justify-center text-center">
          <img
            className="w-32.5 h-32.5 rounded-[50%] object-cover mb-7.5 md:mb-5"
            src={reviewsContent.testimonial.image}
            alt={reviewsContent.testimonial.author}
          />
          <h3 className="text-[20px] md:text-2xl font-semibold text-[#2352de] mb-5">
            {reviewsContent.testimonial.author}
          </h3>
          <p className="text-[16px]  md:text-2xl font-light italic leading-[1.3]">
            {reviewsContent.testimonial.text}
          </p>
        </div>
        <div className="md:w-142.5 md:h-100 relative">
          <video
            onEnded={handleEnded}
            ref={videoRef}
            src={reviewsContent.testimonial.video}
            className="md:w-142.5 md:h-100 border-none"
          ></video>
          {!isPlaying && (
            <button
              onClick={handlePlay}
              className="md:w-21.25 md:h-25 bg-transparent border-none absolute top-[50%] left-[50%] cursor-pointer btn"
            >
              <img
                className="textimonials-play-img"
                src="/images/play.svg"
                alt="Play button"
              />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
