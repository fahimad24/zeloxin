import { Award, DollarSign, ShieldCheck, Headphones, Key } from "lucide-react";
const features = [
  {
    id: 1,
    title: "Premium Quality",
    desc: "Top-tier luxury cars",
    icon: <Award className="w-5 h-5 text-primary" />,
  },
  {
    id: 2,
    title: "Best Price Guarantee",
    desc: "Unbeatable market prices",
    icon: <DollarSign className="w-5 h-5 text-primary" />,
  },
  {
    id: 3,
    title: "Flexible Financing",
    desc: "Easy & fast approvals",
    icon: <ShieldCheck className="w-5 h-5 text-primary" />,
  },
  {
    id: 4,
    title: "Trusted Support",
    desc: "24/7 customer support",
    icon: <Headphones className="w-5 h-5 text-primary" />,
  },
  {
    id: 5,
    title: "Test Drive",
    desc: "Book a test drive today",
    icon: <Key className="w-5 h-5 text-primary" />,
  },
];

const FeaturesBar = () => {
  return (
    <div className="w-full max-w-384 mx-auto px-6">
      <div className="bg-surface border border-border rounded-xl p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center divide-y lg:divide-y-0 lg:divide-x divide-border">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`flex items-center gap-4 pt-4 md:pt-0 ${
              index !== 0 ? "lg:pl-6" : ""
            }`}
          >
            {/* Icon Wrapper */}
            <div className="w-10 h-10 rounded-full bg-[#161f2f] border border-border flex items-center justify-center shrink-0 shadow-inner">
              {feature.icon}
            </div>

            {/* Content */}
            <div className="flex flex-col">
              <h4 className="text-[#f8fafc] text-sm font-semibold tracking-wide">
                {feature.title}
              </h4>
              <p className="text-[#94a3b8] text-xs mt-0.5">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesBar;
