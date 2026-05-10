import { useEffect, useRef, useState } from "react";

export default function Slideshow({ images, alt = "Photo", interval = 4500, positions = [] }) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    if (paused || images.length < 2) return;
    timer.current = setTimeout(
      () => setIdx((i) => (i + 1) % images.length),
      interval
    );
    return () => clearTimeout(timer.current);
  }, [idx, paused, images.length, interval]);

  if (!images?.length) return null;

  const go = (delta) =>
    setIdx((i) => (i + delta + images.length) % images.length);

  return (
    <div
      className="slideshow"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label={alt}
    >
      <div className="slideshow__viewport">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${alt} ${i + 1} of ${images.length}`}
            className={`slideshow__slide ${i === idx ? "is-active" : ""}`}
            loading={i === 0 ? "eager" : "lazy"}
            style={positions[i] ? { objectPosition: positions[i] } : undefined}
          />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            className="slideshow__btn slideshow__btn--prev"
            onClick={() => go(-1)}
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            type="button"
            className="slideshow__btn slideshow__btn--next"
            onClick={() => go(1)}
            aria-label="Next slide"
          >
            ›
          </button>

          <div className="slideshow__dots" role="tablist">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`slideshow__dot ${i === idx ? "is-active" : ""}`}
                onClick={() => setIdx(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-selected={i === idx}
                role="tab"
              />
            ))}
          </div>

          <span className="slideshow__count">
            {idx + 1} / {images.length}
          </span>
        </>
      )}
    </div>
  );
}
