import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  Coins,
  TrendingUp,
  Calendar,
  Download,
  Plus,
  Check,
  Zap,
  Crown,
  Star,
} from "lucide-react";

const currentPlan = {
  name: "Pro",
  price: "$29",
  period: "month",
  credits: 5000,
  usedCredits: 2550,
  renewsOn: "January 15, 2024",
};

const creditPacks = [
  { id: 1, credits: 1000, price: 9, popular: false },
  { id: 2, credits: 3000, price: 24, popular: true, savings: "20%" },
  { id: 3, credits: 5000, price: 35, popular: false, savings: "30%" },
  { id: 4, credits: 10000, price: 60, popular: false, savings: "40%" },
];

const plans = [
  {
    name: "Starter",
    price: "$9",
    period: "month",
    credits: 1000,
    features: ["1,000 credits/month", "Basic templates", "720p exports", "Email support"],
    current: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "month",
    credits: 5000,
    features: ["5,000 credits/month", "All templates", "1080p exports", "Priority support", "Series automation"],
    current: true,
    popular: true,
  },
  {
    name: "Business",
    price: "$79",
    period: "month",
    credits: 15000,
    features: ["15,000 credits/month", "Custom branding", "4K exports", "API access", "Dedicated manager", "Team collaboration"],
    current: false,
  },
];

const invoices = [
  { id: 1, date: "Dec 15, 2023", amount: "$29.00", status: "Paid", description: "Pro Plan - Monthly" },
  { id: 2, date: "Nov 15, 2023", amount: "$29.00", status: "Paid", description: "Pro Plan - Monthly" },
  { id: 3, date: "Nov 5, 2023", amount: "$24.00", status: "Paid", description: "3,000 Credits Pack" },
  { id: 4, date: "Oct 15, 2023", amount: "$29.00", status: "Paid", description: "Pro Plan - Monthly" },
];

const Billing = () => {
  const creditPercentage = (currentPlan.usedCredits / currentPlan.credits) * 100;

  return (
    <DashboardLayout>
      <div className="p-8 animate-fade-in">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <CreditCard className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">Billing</h1>
          </div>
          <p className="text-muted-foreground">
            Manage your subscription, credits, and payment methods
          </p>
        </div>

        {/* Current Plan & Credits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Crown className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-primary">Current Plan</span>
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">{currentPlan.name}</h2>
                  <p className="text-muted-foreground">
                    {currentPlan.price}/{currentPlan.period}
                  </p>
                </div>
                <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10">
                  Change Plan
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                Renews on {currentPlan.renewsOn}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Coins className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium text-muted-foreground">Available Credits</span>
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">
                    {(currentPlan.credits - currentPlan.usedCredits).toLocaleString()}
                  </h2>
                  <p className="text-muted-foreground">
                    of {currentPlan.credits.toLocaleString()} credits
                  </p>
                </div>
                <Button variant="hero" size="sm" className="gap-1">
                  <Plus className="h-4 w-4" />
                  Buy Credits
                </Button>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"
                    style={{ width: `${100 - creditPercentage}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  {currentPlan.usedCredits.toLocaleString()} credits used this billing period
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Credit Packs */}
        <Card className="bg-card border-border mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              Buy Credit Packs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {creditPacks.map((pack) => (
                <div
                  key={pack.id}
                  className={`relative p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 cursor-pointer ${
                    pack.popular
                      ? "border-primary bg-primary/5"
                      : "border-border bg-secondary/20 hover:border-primary/50"
                  }`}
                >
                  {pack.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center">
                    <Coins className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <p className="text-2xl font-bold text-foreground">{pack.credits.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground mb-3">credits</p>
                    <p className="text-xl font-bold text-foreground">${pack.price}</p>
                    {pack.savings && (
                      <p className="text-xs text-green-400 mt-1">Save {pack.savings}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Available Plans */}
        <Card className="bg-card border-border mb-8">
          <CardHeader>
            <CardTitle>Available Plans</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative p-6 rounded-xl border-2 transition-all duration-300 ${
                    plan.current
                      ? "border-primary bg-primary/5"
                      : "border-border bg-secondary/10 hover:border-primary/50"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 right-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.current ? "secondary" : "hero"}
                    className="w-full"
                    disabled={plan.current}
                  >
                    {plan.current ? "Current Plan" : "Upgrade"}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Invoices */}
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Billing History</CardTitle>
            <Button variant="ghost" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Export All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {invoices.map((invoice, index) => (
                <div
                  key={invoice.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{invoice.description}</p>
                      <p className="text-sm text-muted-foreground">{invoice.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-medium text-foreground">{invoice.amount}</span>
                    <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                      {invoice.status}
                    </span>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Billing;