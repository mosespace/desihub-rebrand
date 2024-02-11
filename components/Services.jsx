import Link from "next/link";
import React from "react";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const services = [
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-color-swatch'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2'></path>
          <path d='M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9'></path>
          <path d='M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12'></path>
          <line x1='17' y1='17' x2='17' y2='17.01'></line>
        </svg>
      ),
      title: "Website & App Development",
      description:
        "Our website development team specializes in creating custom websites that are tailored to the needs and goals of each of our clients.",
      path: "website-and-app-development",
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-bolt'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <polyline points='13 3 13 10 19 10 11 21 11 14 5 14 13 3'></polyline>
        </svg>
      ),
      title: "Brand Identity & Graphics Design",
      description:
        "Our brand identity and graphic design team helps you create a cohesive and professional brand image through the development of logos, branding materials, and other visual assets.",
      path: "/graphics-design-and-branding",
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-tools'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4'></path>
          <line x1='14.5' y1='5.5' x2='18.5' y2='9.5'></line>
          <polyline points='12 8 7 3 3 7 8 12'></polyline>
          <line x1='7' y1='8' x2='5.5' y2='9.5'></line>
          <polyline points='16 12 21 17 17 21 12 16'></polyline>
          <line x1='16' y1='17' x2='14.5' y2='18.5'></line>
        </svg>
      ),
      title: "SEO & Digital Marketing",
      description:
        "Our digital marketing team can help you reach your target audience through targeted marketing strategies.",
      path: "/search-engine-optimization",
    },
  ];
  return (
    <div className='bg-[#0D1224]'>
      <section
        id='services'
        className='relative block min-h-screen border-b border-t border-[#FF57C3] px-6 py-10 md:px-10 md:py-20 dark:border-[#0D1224] dark:bg-[#0D1224]/30'
      >
        <div className='relative mx-auto max-w-5xl text-center'>
          <span className='my-3 flex items-center justify-center font-medium uppercase tracking-wider text-gray-400'>
            Our Services
          </span>
          <h2 className='dark:to-gray-400 block w-full bg-gradient-to-b to-[#FF57C3] bg-clip-text text-3xl font-bold text-transparent sm:text-4xl from-white'>
            Elevate your digital presence with our comprehensive suite of
            services. Choose us for a seamless experience.
          </h2>
          <p className='mx-auto my-4 w-full max-w-4xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400'>
            We specialize in web and app development, delivering custom-tailored
            solutions to meet your specific needs. Our SEO experts will boost
            your online visibility, while our graphic designers bring your brand
            to life with captivating designs. And for those seeking to learn,
            our coding education programs provide the skills and knowledge
            necessary to succeed in today's tech-driven world.
          </p>
        </div>

        <div className='relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3'>
          {services.map((service, i) => (
            <ServiceCard
              key={i}
              icon={service.icon}
              title={service.title}
              description={service.description}
              path={service.path}
            />
          ))}
        </div>

        <div
          className='absolute bottom-0 left-0 z-0 h-1/3 w-full border-b'
          style={{
            backgroundImage:
              "linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)",
            borderColor: "rgba(92, 79, 240, 0.2)",
          }}
        ></div>

        <div
          className='absolute bottom-0 right-0 z-0 h-1/3 w-full'
          style={{
            backgroundImage:
              "linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)",
            borderColor: "rgba(92, 79, 240, 0.2)",
          }}
        ></div>
      </section>
    </div>
  );
}
