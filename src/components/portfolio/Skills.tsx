import {
  Code2,
  FileCode,
  Globe,
  Palette,
  Server,
  Database,
  Share2,
  GitBranch,
  Cloud,
  Figma,
  Code,
  Box,
} from "lucide-react";
import { skills } from "@/data/portfolioData";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  FileCode,
  Globe,
  Palette,
  Server,
  Database,
  Share2,
  GitBranch,
  Container: Box,
  Cloud,
  Figma,
  Code,
};

const categoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools & DevOps",
  other: "Other",
};

const Skills = () => {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono mb-2">What I Work With</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              My <span className="text-gradient">Skills</span>
            </h2>
          </div>

          {/* Skills Grid by Category */}
          <div className="space-y-12">
            {(Object.keys(groupedSkills) as Array<keyof typeof categoryLabels>).map(
              (category) => (
                <div key={category}>
                  <h3 className="text-xl font-semibold mb-6 text-muted-foreground">
                    {categoryLabels[category]}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {groupedSkills[category].map((skill) => {
                      const Icon = iconMap[skill.icon] || Code;
                      return (
                        <div
                          key={skill.name}
                          className="group p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:glow-primary transition-all duration-300 text-center"
                        >
                          <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon
                              size={24}
                              className="text-primary"
                            />
                          </div>
                          <p className="font-medium text-sm">{skill.name}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
