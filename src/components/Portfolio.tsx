import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A scalable e-commerce solution with real-time inventory management and payment integration.",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    title: "Healthcare Management System",
    description: "Comprehensive patient management system with appointment scheduling and medical records.",
    tags: ["Next.js", "TypeScript", "AWS"],
    image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    title: "FinTech Mobile App",
    description: "Secure mobile banking application with biometric authentication and real-time transactions.",
    tags: ["React Native", "Firebase", "Stripe"],
    image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    title: "AI-Powered Analytics",
    description: "Business intelligence dashboard with machine learning insights and predictive analytics.",
    tags: ["Python", "TensorFlow", "React"],
    image: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },
  {
    title: "Social Media Platform",
    description: "Feature-rich social networking platform with real-time messaging and content sharing.",
    tags: ["Vue.js", "MongoDB", "Socket.io"],
    image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  },
  {
    title: "IoT Dashboard",
    description: "Real-time monitoring dashboard for IoT devices with data visualization and alerts.",
    tags: ["Angular", "Node.js", "MQTT"],
    image: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing our best work and successful project deliveries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 hover:-translate-y-1"
            >
              <div 
                className="h-48 w-full relative overflow-hidden"
                style={{ background: project.image }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
