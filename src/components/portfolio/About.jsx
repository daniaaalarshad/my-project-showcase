import { MapPin, Mail, Calendar } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono mb-2">Get To Know Me</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="text-gradient">Me</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-border bg-card">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-2xl -z-10" />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
                {personalInfo.bio}
              </p>

              {/* Info Cards */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">{personalInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">{personalInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Calendar className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Experience</p>
                    <p className="font-medium">5+ Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
