"use client";
import { useState } from "react";
import { GoPlus, GoDash } from "react-icons/go";

const faqData = [
  {
    id: 1,
    question: "What services does Desishub provide?",
    answer:
      "Desishub specializes in web and app development, brand identity and graphic design, SEO and digital marketing, and coding education programs.",
  },
  {
    id: 2,
    question: "How does Desishub approach website development?",
    answer:
      "Our website development team creates custom websites tailored to each client's unique needs and goals, ensuring a seamless and personalized digital presence.",
  },
  {
    id: 3,
    question:
      "What does the brand identity and graphic design service include?",
    answer:
      "Desishub's brand identity and graphic design team assists in creating a professional brand image through the development of logos, branding materials, and other visually compelling assets.",
  },
  {
    id: 4,
    question: "Can Desishub help improve our online visibility through SEO?",
    answer:
      "Absolutely! Our SEO experts employ proven strategies to boost your online visibility, ensuring that your brand stands out in search engine results.",
  },
  {
    id: 5,
    question: "How can Desishub's digital marketing team benefit my business?",
    answer:
      "Our digital marketing team devises targeted strategies to help you reach your specific target audience, maximizing the impact of your online presence.",
  },
  {
    id: 6,
    question: " What coding education programs does Desishub offer?",
    answer:
      "Desishub provides coding education programs designed to equip individuals with the skills and knowledge needed to thrive in today's tech-driven world.",
  },
  {
    id: 8,
    question: "Can Desishub handle both small and large-scale projects?",
    answer:
      "Certainly! Whether you're a small business or a large enterprise, Desishub is equipped to handle projects of various scales with a commitment to delivering quality solutions.",
  },
  {
    id: 9,
    question: "How can I get started with Desishub's services?",
    answer:
      "Getting started with Desishub is easy. Simply contact us through our website, and our team will be happy to discuss your specific needs and guide you through the next steps.",
  },
];

export default function Faq() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className='bg-primary absolute inset-x-0'>
      <div className='h-full px-4 py-24 mx-auto md:px-12 max-w-7xl'>
        <div className='grid grid-cols-1 gap-6 lg:gap-12 lg:grid-cols-3'>
          <div className='text-center lg:text-left'>
            <div>
              <p className='text-4xl font-semibold tracking-tighter text-white'>
                Frequently asked questions and answers
              </p>
              <p className='text-base tmt-4 text-zinc-500'>
                Answers to commonly asked questions about our services and
                packages
              </p>
            </div>
          </div>
          <div className='relative w-full mx-auto font-normal lg:col-span-2'>
            {faqData.map((faqItem) => (
              <div
                key={faqItem.id}
                className='cursor-pointer group text-slate-50 hover:text-secondaryColor'
              >
                <button
                  className='flex items-center justify-between w-full p-4 pb-1 text-sm text-left select-none lg:text-base'
                  onClick={() => handleAccordionClick(faqItem.id)}
                >
                  <span className='font-semibold'>{faqItem.question}</span>
                  {activeAccordion === faqItem.id ? (
                    <GoDash className='w-5 h-5 duration-300 ease-out' />
                  ) : (
                    <GoPlus className='w-5 h-5 duration-300 ease-out' />
                  )}
                </button>
                {activeAccordion === faqItem.id && (
                  <div className='p-4 pt-2 text-lg text-gray-500'>
                    {faqItem.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
