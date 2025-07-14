import React from "react";
import { reviews } from "../data/reviewData";

const GradientMask = () => (
  <>
    <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-black/80 to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black via-black/80 to-transparent" />
  </>
);

const ReviewCard = ({ review }) => (
  <article className="relative z-10 shrink-0 w-80 sm:w-96 mx-4 bg-white backdrop-blur-md rounded-2xl shadow-lg p-6 cursor-pointer">
    <header className="flex items-center space-x-4 mb-4">
      <img
        src={review.avatar}
        alt={`Avatar of ${review.name}`}
        className="h-12 w-12 rounded-full object-cover"
      />
      <div>
        <h3 className="font-semibold text-lg text-gray-900">{review.name}</h3>
        <p className="text-sm text-gray-600">{review.position}</p>
      </div>
    </header>
    <p className="text-gray-800 leading-relaxed mb-6">“{review.text}”</p>
    <footer className="text-xs text-gray-500 flex justify-between">
      <span>{review.date}</span>
      <a
        href={review.link}
        target="_blank"
        rel="noreferrer"
        className="hover:underline flex items-center space-x-1"
      >
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden>
          <path d="M22.46 6c-.77.35-1.5.57-2.24.67a4 4 0 0 0 1.72-2.23 8.41 8.41 0 0 1-2.64 1 4.2 4.2 0 0 0-7.4 2.88c0 .33 0 .65.05.95A11.78 11.78 0 0 1 3 4.6a4.18 4.18 0 0 0 1.3 5.57A4 4 0 0 1 2.8 9v.05a4.27 4.27 0 0 0 3.38 4.15 4 4 0 0 1-1.88.07 4.25 4.25 0 0 0 4 3A8.42 8.42 0 0 1 2 19.54a11.86 11.86 0 0 0 6.29 1.84c7.55 0 11.68-6.43 11.68-12 0-.18 0-.35 0-.53A8.46 8.46 0 0 0 22.46 6Z" />
        </svg>
        <span>X/Twitter</span>
      </a>
    </footer>
  </article>
);

function Review() {
  const extended = [...reviews, ...reviews];

  return (
    <div className="bg-black overflow-x-hidden ">
      <section className="relative isolate min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col justify-center space-y-16 py-16">
        <h1 className="text-3xl mb-4 text-orange-600 text-center font-extrabold">REVIEWS</h1>
        <div className="relative">
          <GradientMask />
          <div className="flex w-max animate-marquee">
            {extended.map((r, idx) => (
              <ReviewCard key={`top-${idx}`} review={r} />
            ))}
          </div>
        </div>
        <div className="relative">
          <GradientMask />
          <div className="flex w-max animate-marquee-reverse">
            {extended.map((r, idx) => (
              <ReviewCard key={`bottom-${idx}`} review={r} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Review;
