
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, School, FileText, Search, Calendar } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <School className="h-6 w-6 text-primary-orange" />
            <span className="text-xl font-bold">Campus Connect</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-primary-orange transition-colors">
              Home
            </Link>
            <Link to="#features" className="text-sm font-medium hover:text-primary-orange transition-colors">
              Features
            </Link>
            <Link to="#about" className="text-sm font-medium hover:text-primary-orange transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="outline" className="border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-primary-orange text-white hover:bg-primary-dark">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-primary-light/20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Connect with Students & Campuses
              </h1>
              <p className="text-gray-600 md:text-xl">
                Campus Connect brings together students from different colleges creating opportunities for collaboration, 
                networking, and discovering campus events across institutions.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/signup">
                  <Button className="bg-primary-orange text-white hover:bg-primary-dark">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="#features">
                  <Button variant="outline" className="border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 rounded-lg overflow-hidden border shadow-xl border-border">
              <img
                alt="Campus Connect"
                className="aspect-video w-full object-cover"
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white" id="features">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Key Features</h2>
            <p className="text-gray-600 md:text-lg mt-2">
              Discover what makes Campus Connect the perfect platform for students and institutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border">
              <Users className="h-12 w-12 text-primary-orange mb-4" />
              <h3 className="text-xl font-medium mb-2">Student Profiles</h3>
              <p className="text-center text-gray-600">
                Create your student profile, showcase your experiences, and connect with peers from different colleges.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border">
              <School className="h-12 w-12 text-primary-orange mb-4" />
              <h3 className="text-xl font-medium mb-2">Campus Management</h3>
              <p className="text-center text-gray-600">
                Institutions can share their profile, manage events, and connect with registered students.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border">
              <FileText className="h-12 w-12 text-primary-orange mb-4" />
              <h3 className="text-xl font-medium mb-2">Resume Builder</h3>
              <p className="text-center text-gray-600">
                Create professional resumes showcasing your skills and experiences with our built-in tools.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border">
              <Search className="h-12 w-12 text-primary-orange mb-4" />
              <h3 className="text-xl font-medium mb-2">Search & Discover</h3>
              <p className="text-center text-gray-600">
                Find other students, campuses, and events easily with our powerful search functionality.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border">
              <Calendar className="h-12 w-12 text-primary-orange mb-4" />
              <h3 className="text-xl font-medium mb-2">Campus Events</h3>
              <p className="text-center text-gray-600">
                Discover and participate in events hosted by various institutions across the platform.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border">
              <div className="bg-primary-light rounded-full p-2 mb-4">
                <School className="h-10 w-10 text-primary-orange" />
              </div>
              <h3 className="text-xl font-medium mb-2">Dual Accounts</h3>
              <p className="text-center text-gray-600">
                Choose your identity - register as a student or as a campus representative with specialized features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-primary-light/30" id="about">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mx-auto lg:mx-0 rounded-lg overflow-hidden">
              <img
                alt="About Campus Connect"
                className="aspect-video object-cover rounded-lg"
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2000&auto=format&fit=crop"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">About Campus Connect</h2>
              <p className="text-gray-700">
                Campus Connect was founded with a simple yet powerful vision: to break down the walls between educational institutions 
                and create a unified network where students can connect, collaborate, and grow together.
              </p>
              <p className="text-gray-700">
                Our platform helps students discover opportunities across campuses, while giving institutions a modern way to 
                showcase their unique culture, events, and student community to a wider audience.
              </p>
              <p className="text-gray-700">
                Join us in reimagining how students and institutions connect in the digital age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Connect?</h2>
              <p className="text-gray-600 max-w-[600px] mx-auto">
                Join thousands of students and institutions already on Campus Connect and start building your network today.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/signup">
                <Button className="bg-primary-orange text-white hover:bg-primary-dark">
                  Sign Up Now
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" className="border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-secondary-black text-white">
        <div className="container px-4 md:px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2">
                <School className="h-6 w-6 text-primary-orange" />
                <span className="text-xl font-bold text-white">Campus Connect</span>
              </div>
              <p className="mt-2 text-gray-400">
                Connecting students across campuses for a better educational ecosystem.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-primary-orange">Platform</h4>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li><Link to="#" className="hover:text-white">Features</Link></li>
                  <li><Link to="#" className="hover:text-white">Security</Link></li>
                  <li><Link to="#" className="hover:text-white">Privacy</Link></li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-primary-orange">Support</h4>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li><Link to="#" className="hover:text-white">Help</Link></li>
                  <li><Link to="#" className="hover:text-white">FAQ</Link></li>
                  <li><Link to="#" className="hover:text-white">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-primary-orange">Stay Connected</h4>
              <p className="text-sm text-gray-400">Subscribe to our newsletter for updates</p>
              <form className="flex space-x-2">
                <input
                  className="flex-1 px-3 py-2 bg-secondary-light text-white rounded-md"
                  placeholder="Email address"
                  type="email"
                />
                <Button className="bg-primary-orange text-white hover:bg-primary-dark">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400">© 2025 Campus Connect. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-400 hover:text-white">
                Terms
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white">
                Privacy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
