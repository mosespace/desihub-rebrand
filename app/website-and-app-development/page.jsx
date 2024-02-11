import React from 'react'
import Reasons from '@/components/Reasons'
import Pricing from '@/components/services/Pricing'
import CallToAction from '@/components/CallToAction'
import Timeline from '@/components/services/Timeline'

export default function page() {
  return (
    <div className="relative h-screen w-full bg-[#0D1224]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div className="bg-[#0D1224]">
        <section className="relative block min-h-screen border-b border-t border-[#0D1224]  bg-[#0D1224]/30 px-6 py-10 md:px-10 md:py-20">
          <div
            className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
            style={{
              backgroundImage:
                'linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)',
              borderColor: 'rgba(92, 79, 240, 0.2)'
            }}
          ></div>
          <Reasons
            title="Website Development"
            short_description="Discover the exceptional features of our website design package
            designed to streamline processes and provide comprehensive coverage
            for your needs."
            reason_one_title="Empower Your Brand"
            reason_one_description="A website can help to increase brand
            awareness and recognition, providing a platform to showcase your
            products or services, and build trust with potential customers."
            reason_two_title="Boost Sales"
            reason_two_description="The above website sevice can help you to generate leads and
            increase sales, allowing customers to easily find and purchase
            your products or services."
            reason_three_title="Empower Your Business"
            reason_three_description="Websites help to build customer relationships and loyalty by
            giving customers a platform to learn about your business, ask
            questions, and provide feedback."
            reason_four_title="24/7 Customer Support"
            reason_four_description="Experience unparalleled customer service with our 24/7 support!
            Our dedicated team is here around the clock to assist you,
            ensuring a seamless and stress-free experience."
          />

          <div
            className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
            style={{
              backgroundImage:
                'linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)',
              borderColor: 'rgba(92, 79, 240, 0.2)'
            }}
          ></div>
          <CallToAction />
        </section>
        <Pricing />
        <div className="">
          <Timeline />
        </div>
      </div>
    </div>
  )
}
