import { CheckCircle2 } from "lucide-react";

const features = [
  "Agile development methodology",
  "Dedicated project managers",
  "Scalable architecture design",
  "24/7 support and maintenance",
  "Transparent communication",
  "On-time delivery guarantee",
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Building Digital Excellence{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Since Day One
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              At Divine Dev Solutions, we're passionate about transforming ideas into powerful digital products. 
              Our team of experienced developers, designers, and strategists work together to deliver solutions 
              that exceed expectations.
            </p>
            <p className="text-lg text-muted-foreground">
              We believe in the power of technology to solve real-world problems and create meaningful impact. 
              Every project we undertake is an opportunity to push boundaries and deliver excellence.
            </p>
          </div>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                <span className="text-lg font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
