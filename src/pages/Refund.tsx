import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, XCircle, Clock, Mail } from "lucide-react";

const Refund = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">Refund Policy</h1>
          <p className="text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Last updated: January 1, 2024
          </p>

          {/* Quick Summary */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-xl font-semibold mb-5">Quick Summary</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">7-Day Money Back</h3>
                  <p className="text-sm text-muted-foreground">Full refund within 7 days of purchase</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Processing Time</h3>
                  <p className="text-sm text-muted-foreground">Refunds processed within 5-10 business days</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 md:p-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="space-y-10">
              <section>
                <h2 className="text-xl font-semibold mb-3">1. Refund Eligibility</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We want you to be completely satisfied with your purchase. You are eligible for a full refund if:
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">You request a refund within 7 days of your initial purchase</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">You have not exceeded 50% of your allocated credits or usage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">This is your first refund request for our service</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">2. Non-Refundable Items</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The following are not eligible for refunds:
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Purchases made more than 7 days ago</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Accounts with excessive usage (over 50% of credits used)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Subscription renewals after the first billing cycle</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Add-on purchases or one-time credit packages</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">3. How to Request a Refund</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To request a refund, please follow these steps:
                </p>
                <ol className="list-decimal list-inside text-muted-foreground space-y-1.5 ml-2 text-sm">
                  <li>Log into your StoryShort account</li>
                  <li>Navigate to Settings → Billing</li>
                  <li>Click on "Request Refund" or contact our support team</li>
                  <li>Provide your order details and reason for the refund request</li>
                </ol>
                <p className="text-muted-foreground leading-relaxed mt-4 text-sm">
                  Alternatively, you can email us directly at{" "}
                  <a href="mailto:support@storyshort.ai" className="text-primary hover:underline">
                    support@storyshort.ai
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Refund Processing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Once your refund request is approved, the refund will be processed to your original payment 
                  method within 5-10 business days. Please note that depending on your bank or credit card 
                  company, it may take an additional 2-10 business days for the refund to appear on your statement.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">5. Subscription Cancellation</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You may cancel your subscription at any time. Upon cancellation, you will retain access to 
                  your paid features until the end of your current billing period. We do not provide prorated 
                  refunds for partial months. After cancellation, your account will be downgraded to a free plan.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">6. Chargebacks</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you file a chargeback or payment dispute without first contacting us for a refund, we 
                  reserve the right to terminate your account and contest the chargeback. We encourage you to 
                  reach out to our support team first, as we are committed to resolving any issues directly.
                </p>
              </section>

              <section className="pt-6 border-t border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold mb-1">Questions?</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      If you have any questions about our refund policy, please don't hesitate to contact us at{" "}
                      <a href="mailto:support@storyshort.ai" className="text-primary hover:underline">
                        support@storyshort.ai
                      </a>
                      . Our support team is available 24/7 to assist you.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Refund;