import Image from "next/image";
import Link from "next/link";
import React from "react";
import TripsGrid from "./TripsGrid";

import { IoMdStar } from "react-icons/io";
import ModernFooter from "./ModernFooter";

const HomePage = () => {
  return (
    <div className="w-full bg-neutral-800 text-white flex flex-col ">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 w-full mx-auto md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_650px] lg:gap-12 xl:grid-cols-[1fr_750px]">
            <Image
              src="/djerbaa.jpeg"
              width="750"
              height="500"
              alt="Hero"
              className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-5xl/none">
                  Discover the Thrill of Adventure in Djerba
                </h1>
                <p className="max-w-[600px] text-neutral-400 md:text-base">
                  Experience our handpicked selection of thrilling quad trips,
                  Sahara excursions, and jet ski adventures that will elevate
                  your journey!
                </p>
              </div>
              <Link
                href="/product-category/excursions"
                className="inline-flex h-10 items-center justify-center rounded-md bg-blue-500 text-white px-8 text-sm font-bold"
                prefetch={false}
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 ">
        <div>
          <Link href="/product-category/excursions">
            <h2 className="w-full flex justify-center items-center font-bold text-2xl mb-10">
              EXCURSIONS
            </h2>
          </Link>
          <TripsGrid />
          <div className="w-full flex justify-center items-center my-10 text-blue-500 text-sm ">
            <Link href={"/product-category/excursions"}>
              <p>See more..</p>
            </Link>
          </div>
        </div>
      </section>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="w-full px-4 md:px-6">
            <div className="w-full flex flex-col lg:flex-row justify-around gap-4 items-center ">
              <div className="space-y-4 lg:w-1/3">
                <h2 className="text-2xl lg:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Mission
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </div>

              <Image
                src="/djerba.png"
                width={600}
                height={400}
                alt="Placeholder image"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="w-full px-4 md:px-6">
            <div className="w-full flex flex-col lg:flex-row justify-around gap-4 items-center ">
              <Image
                src="/sahara.jpeg"
                width={600}
                height={400}
                alt="Placeholder image"
                className="hidden lg:flex rounded-lg object-cover"
              />
              <div className="space-y-4 lg:w-1/3">
                <h2 className="text-2xl lg:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Mission
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </div>

              <Image
                src="/sahara.jpeg"
                width={600}
                height={400}
                alt="Placeholder image"
                className="lg:hidden rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Testimonials */}
      <section className="py-16 bg-blue-500 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">
            What Our Travelers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "John D.",
                text: "Amazing experience! TravelEase made planning my trip so simple.",
              },
              {
                name: "Sarah M.",
                text: "The best travel website I've ever used. Highly recommended!",
              },
              {
                name: "Mike R.",
                text: "Found great deals and had an unforgettable vacation. Thank you!",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 p-6 rounded-lg"
              >
                <p className="mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <IoMdStar
                          key={i}
                          className="w-4 h-4 fill-current text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="from-neutral-700 text-white ">
        <ModernFooter />
      </footer>
    </div>
  );
};

export default HomePage;
