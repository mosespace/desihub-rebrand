import Link from "next/link";
import React from "react";

export default function CallToAction() {
  return (
    <div className='relative mx-auto max-w-5xl mt-20'>
      <div className='rounded-xl p-1 bg-gradient-to-br from-purple-500 via-secondary to-red-500'>
        <div className='rounded-lg bg-black/80 backdrop-blur'>
          <div className='flex w-full flex-wrap items-center justify-between gap-4 px-8 py-10 sm:px-16 lg:flex-nowrap'>
            <div className='lg:max-w-xl'>
              <h2 className='block w-full pb-2 bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl'>
                Other Services Include
              </h2>
              <p className='my-4 bg-transparent font-medium leading-relaxed tracking-wide text-gray-400'>
                Affordable Web Solutions tailored just for you! From sleek
                website templates to user-friendly portals and polished email
                campaigns, our team crafts custom solutions to match your needs
                and budget. Elevate your online presence with our expert
                development services!
              </p>
            </div>
            <div className='flex flex-wrap items-center justify-center gap-6'>
              <Link
                href='/contact-us'
                className='bg-violet-600 text-white button-text flex items-center justify-center whitespace-nowrap rounded-md transition-all duration-300 px-8 py-3 text-xs sm:text-sm'
              >
                Get Started
              </Link>
              <Link
                href='tel:+256755361951'
                className='flex items-center justify-center whitespace-nowrap rounded-md border border-zinc-700 bg-zinc-900 text-center text-white backdrop-blur transition-all hover:bg-zinc-800 px-8 py-3 text-xs sm:text-sm'
              >
                Call Us: +256 755 361 951
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
