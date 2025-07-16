import { useEffect, useState, useRef } from "react";
import { Camera, Upload } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <section id="hero" className="section-base min-h-screen flex items-center justify-center relative">
      {/* Sun glow effect */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl"></div>
      
      {/* Main content */}
      <div className={`text-center z-10 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}>
        {/* Profile Image Section */}
        <div className="mb-8 relative">
          <div className="relative w-48 h-48 mx-auto group cursor-pointer" onClick={triggerFileInput}>
            {/* Dynamic circular frame with rotating glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-1 animate-spin" style={{ animationDuration: '3s' }}>
              <div className="w-full h-full rounded-full bg-gradient-to-b from-slate-900 to-slate-800 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-700 flex items-center justify-center relative">
                  {profileImage ? (
                    <img 
                      src={profileImage} 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-white/60 flex flex-col items-center">
                      <Camera size={48} className="mb-2" />
                      <span className="text-sm">Add Photo</span>
                    </div>
                  )}
                  
                  {/* Upload overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-full">
                    <Upload size={32} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pulsing outer glow */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 blur-xl animate-pulse"></div>
          </div>
          
          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight px-4">
          Pranjal Shah
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light max-w-4xl mx-auto px-6">
          Maritime Operations Engineer • PMP® Certified • Data & AI Enthusiast
        </p>
      </div>
      
      {/* Scroll indicator repositioned to bottom */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
          <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;