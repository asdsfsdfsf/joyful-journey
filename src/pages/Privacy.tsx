import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Last updated: January 1, 2024
          </p>

          <div className="bg-card border border-border rounded-2xl p-8 md:p-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-10">
              <section>
                <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to StoryShort. We respect your privacy and are committed to protecting your personal data. 
                  This privacy policy will inform you about how we look after your personal data when you visit our 
                  website and tell you about your privacy rights and how the law protects you.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect, use, store and transfer different kinds of personal data about you:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1.5 ml-2">
                  <li>Identity Data: name, username, or similar identifier</li>
                  <li>Contact Data: email address and telephone numbers</li>
                  <li>Technical Data: IP address, browser type and version, device information</li>
                  <li>Usage Data: information about how you use our website and services</li>
                  <li>Content Data: videos, images, and other content you create using our service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use your personal data for the following purposes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1.5 ml-2">
                  <li>To provide and maintain our service</li>
                  <li>To notify you about changes to our service</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information to improve our service</li>
                  <li>To monitor the usage of our service</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We have implemented appropriate security measures to prevent your personal data from being 
                  accidentally lost, used or accessed in an unauthorized way, altered or disclosed. We limit 
                  access to your personal data to those employees, agents, contractors and other third parties 
                  who have a business need to know.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">5. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Under certain circumstances, you have rights under data protection laws in relation to your personal data:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1.5 ml-2">
                  <li>Request access to your personal data</li>
                  <li>Request correction of your personal data</li>
                  <li>Request erasure of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request restriction of processing your personal data</li>
                  <li>Request transfer of your personal data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">6. Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our service and hold 
                  certain information. Cookies are files with small amount of data which may include an anonymous 
                  unique identifier. You can instruct your browser to refuse all cookies or to indicate when a 
                  cookie is being sent.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">7. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:privacy@storyshort.ai" className="text-primary hover:underline">
                    privacy@storyshort.ai
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

export default Privacy;