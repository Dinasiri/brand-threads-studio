import hoodieMockup from "@/assets/hoodie-mockup.png";
import tshirtMockup from "@/assets/tshirt-mockup.png";
import crewneckMockup from "@/assets/crewneck-mockup.png";

const MockupShowcase = () => {
  return (
    <div className="relative w-full max-w-2xl lg:max-w-none">
      {/* Glow effect behind mockups */}
      <div className="absolute inset-0 bg-gradient-glow opacity-60 blur-3xl animate-glow-pulse" />
      
      {/* Main mockup grid */}
      <div className="relative grid grid-cols-3 gap-4 lg:gap-6">
        {/* Left mockup - floating up */}
        <div className="animate-float" style={{ animationDelay: "0s" }}>
          <div className="group overflow-hidden rounded-2xl bg-card shadow-card transition-all duration-500 hover:shadow-glow hover:scale-105">
            <img
              src={crewneckMockup}
              alt="Crewneck graphic design mockup"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Center mockup - main focus, slightly larger */}
        <div className="animate-float -mt-8 lg:-mt-12" style={{ animationDelay: "0.5s" }}>
          <div className="group overflow-hidden rounded-2xl bg-card shadow-card transition-all duration-500 hover:shadow-glow hover:scale-105">
            <img
              src={hoodieMockup}
              alt="Hoodie graphic design mockup"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Right mockup - floating with offset */}
        <div className="animate-float" style={{ animationDelay: "1s" }}>
          <div className="group overflow-hidden rounded-2xl bg-card shadow-card transition-all duration-500 hover:shadow-glow hover:scale-105">
            <img
              src={tshirtMockup}
              alt="T-shirt graphic design mockup"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockupShowcase;
