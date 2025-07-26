import { ShoppingCart, ArrowRight, Sparkles } from "lucide-react";

const PRIMARY = "#2F3F50"; // -- use across styles

const NeoMartHero = () => {
  return (
    <div className="relative w-full bg-slate-50 overflow-hidden min-h-screen flex items-center justify-center ">
     
      <div
        className="absolute top-20 left-20 w-32 h-32 rounded-full opacity-10"
        style={{ background: PRIMARY }}
      />
      <div
        className="absolute  right-16 w-24 h-24 rounded-lg opacity-15 rotate-45"
        style={{ background: PRIMARY }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full opacity-5"
        style={{ background: PRIMARY }}
      />

      <div className="z-10 max-w-7xl w-full text-center px-6">
        {/* Brand */}
        <div className="mb-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-8 h-8" style={{ color: PRIMARY }} />
            <h1 className="text-5xl font-bold" style={{ color: PRIMARY }}>
              NeoMart
            </h1>
          </div>
          <p className="text-slate-600 text-xl font-medium">
            Your Modern Shopping Destination
          </p>
        </div>

        {/* Main Heading */}
        <h2 className="text-6xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
          Shop <span style={{ color: PRIMARY }}>Smart</span>,
          Live <span style={{ color: PRIMARY }}>Better</span>
        </h2>

        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
          Discover quality products at unbeatable prices. Fast shipping, secure checkout, and exceptional service that puts you first.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            className="group flex items-center justify-center gap-3 px-10 py-5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            style={{
              background: PRIMARY,
              color: "white",
              border: "none",
            }}
          >
            <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Start Shopping
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            className="border-2 px-10 py-5 rounded-xl font-semibold transition-all duration-300 bg-white hover:shadow-md"
            style={{
              borderColor: "#ccd6e0",
              color: PRIMARY,
            }}
            onMouseOver={(e) => (e.currentTarget.style.borderColor = PRIMARY)}
            onMouseOut={(e) => (e.currentTarget.style.borderColor = "#ccd6e0")}
          >
            Browse Categories
          </button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-slate-500 text-sm font-medium">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ background: "#0FCA6A" }} />
            Free Shipping
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ background: PRIMARY }} />
            Secure Payments
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ background: "#8850FF" }} />
            24/7 Support
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeoMartHero;
