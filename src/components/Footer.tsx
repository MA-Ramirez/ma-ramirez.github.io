import { Mail, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SiBluesky } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <a href="mailto:alejandra_ramirez@eva.mpg.de" className="hover:text-primary-foreground transition-colors">
                  alejandra_ramirez [at] eva [dot] mpg [dot] de
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5" />
                <div>
                  <p>Max Planck Institute for Evolutionary Anthropology</p>
                  <p>Deutscher Platz 6</p>
                  <p>04103 Leipzig, Germany</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {["Publications", "Research Group", "Teaching", "Office Hours"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://bsky.app/profile/ma-ramirez.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bluesky"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
              <SiBluesky className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/MA-Ramirez"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
              <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
              <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-6 text-sm text-primary-foreground/60">
              Open to collaborations and speaking opportunities.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Dr. Alejandra Ramirez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
