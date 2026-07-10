const Logo = () => {
  return (
    <div className="flex items-center">
      <h1
        className={` font-microgramma text-4xl uppercase flex items-end font-black gap-1 tracking-wider`}
      >
        <span className="text-white mb-4">ZELONI</span>

        <span className="ml-0.5 text-[#DC2626] text-6xl scale-110 -skew-x-12 drop-shadow-[0_0_14px_rgba(220,38,38,.6)] mb-3">
          𒉽
        </span>
      </h1>
    </div>
  );
};

export default Logo;
