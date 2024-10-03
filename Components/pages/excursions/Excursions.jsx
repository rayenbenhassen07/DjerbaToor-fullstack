"use client";
import ModernFooter from "@/Components/ModernFooter";
import TripsGrid from "@/Components/TripsGrid";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Excursions = () => {
  const router = useRouter();
  return (
    <div className="w-full flex flex-col justify-center items-center text-white lg:pt-20 min-h-screen bg-neutral-800">
      <header className="bg-gradient-to-r from-neutral-700 to-neutral-800 py-12 md:py-20 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold tracking-tighter text-primary-foreground sm:text-5xl">
                Discover the beauty of Djerba with thrilling excursions
              </h1>
              <p className="max-w-[600px] text-neutral-400 text-sm md:text-xl">
                where adventure meets nature. Ride through stunning scenic
                landscapes on a quad bike, feel the rush of adrenaline as you
                explore hidden trails, and venture deep into the heart of the
                majestic Sahara desert. Whether you're seeking excitement or
                serenity, our excursions offer an unforgettable journey through
                the island's breathtaking wonders.
              </p>
            </div>
            <img
              src="/jetski.jpeg"
              width="800"
              height="600"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </header>

      <section className="w-full py-12 md:py-24 lg:py-32 ">
        <div>
          <Link href="/product-category/excursions">
            <h2 className="w-full flex justify-center items-center font-bold text-2xl mb-10">
              EXCURSIONS
            </h2>
          </Link>
          <TripsGrid />
        </div>
      </section>

      <footer className="from-neutral-700 text-white w-full">
        <ModernFooter />
      </footer>
    </div>
  );
};

export default Excursions;
