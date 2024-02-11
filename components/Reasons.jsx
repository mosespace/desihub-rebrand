import React from "react";

export default function Reasons({
  title,
  short_description,
  reason_one_title,
  reason_one_description,
  reason_two_title,
  reason_two_description,
  reason_three_title,
  reason_three_description,
  reason_four_title,
  reason_four_description,
}) {
  return (
    <div className=''>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-5xl lg:text-center flex flex-col justify-center items-center'>
          <h2 className='text-base font-semibold leading-7 text-blue-100 bg-primary px-3 rounded-lg uppercase mb-4 lg:mb-8'>
            Key Features
          </h2>
          <h1 className='lg:text-7xl text-4xl md:text-5xl font-bold tracking-tight text-white text-center'>
            Enhanced{" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-secondary via-slate-50 to-primary'>
              {title}
            </span>
          </h1>
          <p className='mt-6 text-md text-gray-600 max-w-lg text-center'>
            {short_description}
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
            <div className='relative pl-16 selection:text-white selection:bg-secondary'>
              <dt className='text-base font-semibold leading-7 text-white'>
                <div className='absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    aria-hidden='true'
                    className='h-6 w-6 text-white'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
                    ></path>
                  </svg>
                </div>

                {reason_one_title}
              </dt>
              <dd className='mt-2 text-base leading-7 text-gray-600'>
                {reason_one_description}
              </dd>
            </div>

            <div className='relative pl-16 selection:text-white selection:bg-secondary'>
              <dt className='text-base font-semibold leading-7 text-white'>
                <div className='absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    aria-hidden='true'
                    className='h-6 w-6 text-white'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5'
                    ></path>
                  </svg>
                </div>
                {reason_two_title}
              </dt>
              <dd className='mt-2 text-base leading-7 text-gray-600'>
                {reason_two_description}
              </dd>
            </div>

            <div className='relative pl-16 selection:text-white selection:bg-secondary'>
              <dt className='text-base font-semibold leading-7 text-white'>
                <div className='absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    aria-hidden='true'
                    className='h-6 w-6 text-white'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    ></path>
                  </svg>
                </div>
                {reason_three_title}
              </dt>
              <dd className='mt-2 text-base leading-7 text-gray-600'>
                {reason_three_description}
              </dd>
            </div>

            <div className='relative pl-16 selection:text-white selection:bg-secondary'>
              <dt className='text-base font-semibold leading-7 text-white'>
                <div className='absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    aria-hidden='true'
                    className='h-6 w-6 text-white'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z'
                    ></path>
                  </svg>
                </div>
                {reason_four_title}
              </dt>

              <dd className='mt-2 text-base leading-7 text-gray-600'>
                {reason_four_description}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
