import { Button } from "@/components/ui/button";
import { ComposeButton } from "@/components/ComposeButton";
import { ComposeDialog } from "@/components/ComposeDialog";
import { useState } from "react";

const Index = () => {
  const [isComposeOpen, setIsComposeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              src="/lovable-uploads/bb960b57-c8a7-4522-883e-1ee302bf342e.png"
              alt="DissentLabs Logo"
              className="h-12"
            />
          </div>
          <div className="hidden md:flex space-x-4">
            <Button variant="ghost">Services</Button>
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Contact</Button>
            <ComposeButton onClick={() => setIsComposeOpen(true)} />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                All Your Development Needs Crafted Under One Roof
              </h1>
              <p className="text-lg text-gray-600">
                Transform your business with cutting-edge IT solutions. We deliver innovative consulting services tailored to your needs.
              </p>
              <div className="space-x-4">
                <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]">
                  Get Started
                </Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/lovable-uploads/b9b82a61-a96d-43bd-baf2-51c4397b95bc.png"
                alt="DissentLabs Advertisement"
                className="max-w-md rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md border border-purple-100 hover:shadow-lg transition-shadow"
              >
                <div className="text-[#9b87f5] mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-purple-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to discuss how we can help transform your business
          </p>
          <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]">
            Contact Us
          </Button>
        </div>
      </section>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <ComposeButton onClick={() => setIsComposeOpen(true)} />
      </div>

      <ComposeDialog
        open={isComposeOpen}
        onOpenChange={setIsComposeOpen}
      />
    </div>
  );
};

const services = [
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    title: "Custom Software Development",
    description:
      "Tailored solutions built to address your specific business challenges and requirements.",
  },
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: "IT Consulting",
    description:
      "Strategic guidance to help you make informed decisions about your technology investments.",
  },
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
        />
      </svg>
    ),
    title: "Cloud Solutions",
    description:
      "Secure and scalable cloud infrastructure to power your digital transformation.",
  },
];

export default Index;