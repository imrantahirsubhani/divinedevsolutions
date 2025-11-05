import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <>
    <Header/>
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              Divine Dev Solutions
            </Link>
            <Link to="/">
              <Button variant="ghost">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Terms & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Conditions</span>
        </h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using the services of Divine Dev Solutions, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              Divine Dev Solutions provides software development, design, and consulting services. The specific scope of services will be outlined in individual project agreements or statements of work.
            </p>
            <h3 className="text-xl font-semibold mt-4">Service Delivery</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>We will use reasonable efforts to meet agreed-upon deadlines</li>
              <li>Project timelines may be adjusted based on scope changes</li>
              <li>Client cooperation and timely feedback are essential for project success</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Payment Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              Payment terms will be specified in individual project agreements. Generally:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>An initial deposit may be required before work begins</li>
              <li>Invoices are due within 30 days unless otherwise agreed</li>
              <li>Late payments may incur additional fees</li>
              <li>We accept major credit cards, bank transfers, and other agreed-upon payment methods</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Intellectual Property Rights</h2>
            <h3 className="text-xl font-semibold mt-4">Client Content</h3>
            <p className="text-muted-foreground leading-relaxed">
              You retain all rights to content, data, and materials you provide to us. By providing such materials, you grant us a license to use them solely for the purpose of delivering our services.
            </p>
            <h3 className="text-xl font-semibold mt-4">Deliverables</h3>
            <p className="text-muted-foreground leading-relaxed">
              Upon full payment, you will own the rights to the final deliverables created specifically for your project. We retain the right to use general methodologies, techniques, and knowledge gained during the project.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Confidentiality</h2>
            <p className="text-muted-foreground leading-relaxed">
              Both parties agree to maintain the confidentiality of any proprietary information shared during the course of our engagement. This obligation continues even after the termination of services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Warranties and Disclaimers</h2>
            <p className="text-muted-foreground leading-relaxed">
              We warrant that services will be performed in a professional and workmanlike manner. However:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>We do not guarantee specific results or outcomes</li>
              <li>Services are provided "as is" without warranties of any kind</li>
              <li>We are not liable for delays caused by factors beyond our control</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the maximum extent permitted by law, Divine Dev Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or relating to our services. Our total liability shall not exceed the amount paid by you for the specific services giving rise to the claim.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              Either party may terminate services with written notice as specified in the project agreement. Upon termination:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>You must pay for all work completed up to the termination date</li>
              <li>We will deliver all completed work and materials</li>
              <li>Both parties remain bound by confidentiality obligations</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of the updated terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which Divine Dev Solutions operates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Dispute Resolution</h2>
            <p className="text-muted-foreground leading-relaxed">
              Any disputes arising from these terms or our services shall first be attempted to be resolved through good faith negotiations. If negotiations fail, disputes may be resolved through mediation or arbitration as mutually agreed.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms and Conditions, please contact us at:
            </p>
            <ul className="list-none space-y-2 text-muted-foreground">
              <li>Email: hello@divinedevsolutions.com</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
    <Footer/>
    </>
    
  );
};

export default TermsAndConditions;
