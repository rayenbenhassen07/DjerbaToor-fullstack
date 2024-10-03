import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Image from "next/image";
import ModernFooter from "@/Components/ModernFooter";
const page = () => {
  return (
    <div className="min-h-screen bg-neutral-800 text-white">
      <main className="container mx-auto py-12 px-4 md:px-6 ">
        <h2 className="text-2xl font-bold mb-8 text-center">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Company Information
              </h3>
              <p className="text-xs text-neutral-400">
                Acme Inc. is a leading provider of innovative solutions for
                businesses worldwide.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Address</h4>
              <p className="flex items-center text-xs lg:text-base text-neutral-400">
                <FaMapMarkerAlt className="mr-2 h-4 w-4 " />
                123 Business Street, Tech City, 12345
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Contact Details</h4>
              <p className="flex items-center text-xs lg:text-base text-neutral-400">
                <FaPhone className="mr-2 h-4 w-4" />
                +1 (555) 123-4567
              </p>
              <p className="flex items-center text-xs lg:text-base text-neutral-400">
                <IoIosMail className="mr-2 h-4 w-4" />
                contact@acmeinc.com
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Business Hours</h4>
              <p className="text-xs lg:text-base text-neutral-400">
                Monday - Friday: 9:00 AM - 5:00 PM
              </p>
              <p className="text-xs lg:text-base text-neutral-400">
                Saturday - Sunday: Closed
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-xs lg:text-base text-neutral-400 hover:text-primary"
                >
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <FaFacebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-2">Our Location</h4>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <Image
                  src="/map.png"
                  width={600}
                  height={600}
                  alt="Map of Acme Inc. location"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="from-neutral-700 text-white w-full">
        <ModernFooter />
      </footer>
    </div>
  );
};

export default page;
