import { useState } from "react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolioData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  
  const featuredProjects = projects.filter((p) => p.featured);
  const displayedProjects = showAll ? projects : featuredProjects;

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono mb-2">My Recent Work</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Here are some of my recent projects. Each one was built with care,
              focusing on user experience, performance, and clean code.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {displayedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Show More/Less Button */}
          {projects.length > featuredProjects.length && (
            <div className="text-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowAll(!showAll)}
                className="border-primary text-primary hover:bg-primary/10"
              >
                {showAll ? "Show Less" : `Show All Projects (${projects.length})`}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
