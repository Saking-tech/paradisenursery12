import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-green-50 to-green-100">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-green-800 mb-6">
              Welcome to Paradise Nursery
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover our carefully curated collection of beautiful houseplants that
              bring life and tranquility to your space. From easy-care varieties to
              exotic specimens, find your perfect green companion.
            </p>
            <Link to="/products">
              <Button size="lg" className="text-lg">
                Shop Now
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Paradise Nursery?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Expert Care Guides",
                  description:
                    "Every plant comes with detailed care instructions to ensure it thrives in your home.",
                },
                {
                  title: "Premium Quality",
                  description:
                    "We source the healthiest plants from trusted growers around the world.",
                },
                {
                  title: "Satisfaction Guaranteed",
                  description:
                    "Your happiness is our priority. Not satisfied? Let us know and we'll make it right.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg bg-green-50"
                >
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;