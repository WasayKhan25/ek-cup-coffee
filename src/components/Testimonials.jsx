import React, { useRef, useState, useEffect } from "react";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import sharumPic from "../assets/testimonials/sharumImg.jpg";
import natashaPic from "../assets/testimonials/natashaImg.jpg";
import kohistaniPic from "../assets/testimonials/kohistaniImg.jpg";
import broCodePic from "../assets/testimonials/BroCodeImg.jpg";
import mariaPic from "../assets/testimonials/mariaImg.jpg";
import huzaifaPic from "../assets/testimonials/huzaifaImg.png"; 

const testimonials = [
  {
    name: "Sharum",
    title: "Digital Artist",
    quote: "This platform is a digital canvas that truly understands artists. It turns audience appreciation into fuel for my next masterpiece, allowing me to focus entirely on creating.",
    avatar: sharumPic,
  },
  {
    name: "Natasha Noorani",
    title: "Musician",
    quote: "Music is about connection, and this place amplifies that bond. It allows my listeners to be part of the creative process and supports my journey from the studio to the stage.",
    avatar: natashaPic,
  },
  {
    name: "Kohistani",
    title: "Storyteller & Podcaster",
    quote: "Every podcast episode starts with a story, and now, it starts with support. This is the perfect space for storytellers to find an audience that truly listens and contributes.",
    avatar: kohistaniPic,
  },
  {
    name: "Bro Code",
    title: "Developer & Blogger",
    quote: "I teach coding to millions, but this platform taught me how easy community support can be. Zero bugs, seamless integration, and 100% efficient. Highly recommended.",
    avatar: broCodePic,
  },
  {
    name: "Maria B",
    title: "Fashion Designer",
    quote: "Fashion is fast-paced, but this platform brings stability to the creative chaos. It helps me focus on the next collection while my community supports the brand effortlessly.",
    avatar: mariaPic,
  },
  {
    name: "Huzaifa",
    title: "Filmmaker",
    quote: "Every frame matters in filmmaking. This platform ensures I have the resources to capture the perfect shot without compromising my vision. It's a game-changer for indie cinema.",
    avatar: huzaifaPic,
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth;
      const newIndex = direction === "left" ? activeIndex - 1 : activeIndex + 1;
      if (newIndex >= 0 && newIndex < testimonials.length) {
        container.scrollTo({
          left: scrollAmount * newIndex,
          behavior: "smooth",
        });
        setActiveIndex(newIndex);
      }
    }
  };

  // Adjust active index on manual scroll (in case user swipes)
  useEffect(() => {
    const container = scrollRef.current;
    const handleScroll = () => {
      if (container) {
        const scrollLeft = container.scrollLeft;
        const containerWidth = container.offsetWidth;
        const newIndex = Math.round(scrollLeft / containerWidth);
        setActiveIndex(newIndex);
      }
    };
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-[#f5f1ee] py-16 px-6 sm:px-12 text-center relative">
      {/* Subheading */}
      <p className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-semibold">
        Love from the creators
      </p>

      <h2 className="text-3xl sm:text-5xl font-extrabold text-chaiBrown mb-4">
        What Our Users Say
      </h2>

      {/* Description */}
      <p className="max-w-2xl mx-auto text-gray-600 text-sm sm:text-lg mb-8 px-8">
        Thousands of creators use Ek Cup Coffee to share stories, connect with fans, and build meaningful support.
      </p>

      {/* Navigation Icons */}
      <div className="flex justify-end sm:hidden gap-4 mb-4 px-2 z-10 relative">
        <button
          onClick={() => scroll("left")}
          disabled={activeIndex === 0}
          className={`p-2 rounded-full border transition ${
            activeIndex === 0
              ? "text-chaiBrown border border-gray-200 opacity-30 cursor-not-allowed"
              : "hover:bg-[#ffeadd] text-chaiBrown border border-gray-200"
          }`}
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={activeIndex === testimonials.length - 1}
          className={`p-2 rounded-full border transition ${
            activeIndex === testimonials.length - 1
              ? "text-chaiBrown border border-gray-400 opacity-30 cursor-not-allowed"
              : "hover:bg-[#ffeadd] text-chaiBrown border border-gray-200"
          }`}
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Faded Edges */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#f5f1ee] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#f5f1ee] to-transparent z-10 pointer-events-none" />

        {/* Testimonials */}
        <div
          ref={scrollRef}
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-y-14 sm:gap-x-6 max-w-6xl mx-auto overflow-x-auto sm:overflow-visible no-scrollbar px-2 sm:px-0 scroll-smooth snap-x snap-mandatory"
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`min-w-full sm:min-w-0 snap-center group bg-[#fffaf6] rounded-xl p-6 text-left border border-gray-200 transition-all duration-300 hover:scale-[1.02] ${
                activeIndex === index ? "shadow-lg" : ""
              } hover:shadow-[rgba(187,89,28,0.25)_0px_50px_100px_-20px,rgba(187,89,28,0.3)_0px_30px_60px_-30px,rgba(187,89,28,0.35)_0px_-2px_6px_0px_inset]`}
              style={{
                boxShadow:
                  "rgba(187, 89, 28, 0.08) 0px 20px 40px -10px, rgba(187, 89, 28, 0.12) 0px 15px 30px -15px, rgba(187, 89, 28, 0.18) 0px -1px 3px 0px inset",
              }}
            >
              <HiOutlineChatBubbleLeftRight className="text-7xl text-chaiBrown opacity-40 group-hover:opacity-100 transition-opacity duration-300 mb-4" />
              <p className="text-sm text-gray-700 italic mb-6">"{item.quote}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center sm:hidden mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              activeIndex === index ? "bg-[#3e2723]" : "bg-[#efe2db]"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
