import React from "react";
import Link from "next/link";
import {
  Car,
  Banknote,
  RefreshCw,
  Wrench,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { GiSteeringWheel } from "react-icons/gi";

interface ServiceItem {
  id: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const OurServices: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: 1,
      title: "Car Sales",
      desc: "Wide range of luxury cars for sale",
      icon: <Car className="w-6 h-6 text-primary" />,
    },
    {
      id: 2,
      title: "Financing",
      desc: "Flexible financing options for you",
      icon: <Banknote className="w-6 h-6 text-primary" />,
    },
    {
      id: 3,
      title: "Trade-in",
      desc: "Get the best value for your car",
      icon: <RefreshCw className="w-6 h-6 text-primary" />,
    },
    {
      id: 4,
      title: "Car Detailing",
      desc: "Professional care for your car",
      icon: <Wrench className="w-6 h-6 text-primary" />,
    },
    {
      id: 5,
      title: "After Sales Support",
      desc: "24/7 support for your peace of mind",
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    },
    {
      id: 6,
      title: "Test Drive",
      desc: "Book a test drive experience today",
      icon: <GiSteeringWheel className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <section className="w-full bg-background py-12 px-6 ">
      <div className="max-w-384 mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-muted text-xs uppercase tracking-[4px] block mb-1">
              Our Services
            </span>
            <h2 className="text-text text-2xl md:text-4xl font-extrabold tracking-tight">
              How We Can <span className="text-primary">Help You</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="flex items-center gap-2 text-text hover:text-primary text-sm font-medium transition-colors group"
          >
            View All Services
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-card border border-border rounded-xl p-6 flex flex-col items-center text-center h-full hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-[#161f2f] border border-border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative after:absolute after:inset-0 after:rounded-full after:border after:border-primary/0 group-hover:after:border-primary/30">
                {service.icon}
              </div>
              <h3 className="text-text font-bold text-sm tracking-wide mb-2">
                {service.title}
              </h3>
              <p className="text-muted text-xs leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
