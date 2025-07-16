import { useState } from "react";
import { Send, Linkedin, Mail, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:pranjalshah56@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Email client opened!",
      description: "Your default email application should now open with the message pre-filled.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-base min-h-screen flex items-center relative">
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Connect
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Contact Info */}
            <div className="slide-in-view">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Get In Touch</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-cyan-300" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Email</p>
                    <a 
                      href="mailto:pranjalshah56@gmail.com"
                      className="text-cyan-300 hover:text-cyan-200 transition-colors"
                    >
                      pranjalshah56@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-cyan-300" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Location</p>
                    <p className="text-white">Pune, India</p>
                  </div>
                </div>

              </div>

              <Button
                asChild
                className="bg-cyan-400/20 border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/30 hover:text-white border"
              >
                <a href="https://www.linkedin.com/in/i-pranjal/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>

            {/* Contact Form */}
            <div className="slide-in-view" style={{ animationDelay: "0.2s" }}>
              <div className="card-depth">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Send Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-cyan-400 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-cyan-400/20 border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/30 hover:text-white border"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <p className="text-white/60 text-sm flex items-center space-x-1">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-red-400 fill-current" />
          <span>by Pranjal</span>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;