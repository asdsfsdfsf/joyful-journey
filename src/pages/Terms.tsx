import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">Terms of Service</h1>
          <p className="text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Last updated: January 1, 2024
          </p>

          <div className="bg-card border border-border rounded-2xl p-8 md:p-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-10">
              <section>
                <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using StoryShort, you accept and agree to be bound by the terms and provision 
                  of this agreement. If you do not agree to abide by these terms, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">2. Description of Service</h2>
                <p className="text-muted-foreground leading-relaxed">
                  StoryShort provides an AI-powered video creation platform that allows users to generate, edit, 
                  and share short-form video content. We reserve the right to modify, suspend, or discontinue 
                  any aspect of the service at any time.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">3. User Accounts</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you create an account with us, you must provide accurate and complete information. You are 
                  responsible for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1.5 ml-2">
                  <li>Maintaining the confidentiality of your account and password</li>
                  <li>Restricting access to your computer or device</li>
                  <li>All activities that occur under your account</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Acceptable Use</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree not to use the service to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1.5 ml-2">
                  <li>Upload or transmit viruses or malicious code</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Create content that is harmful, offensive, or inappropriate</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Use the service for any illegal or unauthorized purpose</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">5. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The service and its original content, features, and functionality are and will remain the 
                  exclusive property of StoryShort. Our service is protected by copyright, trademark, and other 
                  laws. You retain ownership of content you create using our tools, subject to our license to 
                  use, display, and distribute such content.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">6. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Certain features of the service may require payment. All fees are non-refundable unless 
                  otherwise stated or required by law. We reserve the right to change our prices at any time. 
                  Continued use of the service after price changes constitutes acceptance of the new prices.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">7. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall StoryShort, nor its directors, employees, partners, agents, suppliers, or 
                  affiliates, be liable for any indirect, incidental, special, consequential, or punitive 
                  damages, including without limitation, loss of profits, data, use, goodwill, or other 
                  intangible losses.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">8. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may terminate or suspend your account immediately, without prior notice or liability, for 
                  any reason whatsoever, including without limitation if you breach the Terms. Upon termination, 
                  your right to use the service will immediately cease.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">9. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms, please contact us at{" "}
                  <a href="mailto:legal@storyshort.ai" className="text-primary hover:underline">
                    legal@storyshort.ai
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;