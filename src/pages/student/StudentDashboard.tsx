
import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import { School, Search, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-primary-light/10 flex">
      <Sidebar role="student" />

      {/* Main content */}
      <div className="flex-1 ml-0 lg:ml-64 min-h-screen">
        {/* Header */}
        <header className="sticky top-0 bg-white border-b px-4 py-3 flex items-center justify-between gap-4 z-10">
          <div className="flex gap-3 items-center lg:hidden">
            <School className="h-5 w-5 text-primary-orange" />
            <span className="font-semibold">Campus Connect</span>
          </div>
          
          <div className="flex-1 max-w-md hidden sm:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search students, campuses, events..." 
                className="pl-10 bg-gray-50"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary-orange rounded-full"></span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full overflow-hidden">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </Button>
          </div>
        </header>

        {/* Dashboard content */}
        <div className="p-4 lg:p-6">
          <h1 className="text-2xl font-semibold mb-6">Student Dashboard</h1>

          {/* Quick actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="border-l-4 border-l-primary-orange">
              <CardContent className="p-4 flex gap-4 items-center">
                <div className="bg-primary-light/50 p-3 rounded-full">
                  <Search className="h-6 w-6 text-primary-orange" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Quick Action</p>
                  <p className="font-medium">Search Campus Events</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary-orange">
              <CardContent className="p-4 flex gap-4 items-center">
                <div className="bg-primary-light/50 p-3 rounded-full">
                  <School className="h-6 w-6 text-primary-orange" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Quick Action</p>
                  <p className="font-medium">Browse Campuses</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary-orange">
              <CardContent className="p-4 flex gap-4 items-center">
                <div className="bg-primary-light/50 p-3 rounded-full">
                  <Bell className="h-6 w-6 text-primary-orange" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Quick Action</p>
                  <p className="font-medium">Check Notifications</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary-orange">
              <CardContent className="p-4 flex gap-4 items-center">
                <div className="bg-primary-light/50 p-3 rounded-full">
                  <Search className="h-6 w-6 text-primary-orange" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Quick Action</p>
                  <p className="font-medium">Find Other Students</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming events section */}
          <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="overflow-hidden">
                <div className="aspect-video w-full bg-gray-100 relative">
                  <img 
                    src={`https://source.unsplash.com/random/400x225?event&sig=${item}`}
                    alt="Event"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-primary-orange text-white text-xs font-medium px-2 py-1 rounded">
                    {["Workshop", "Conference", "Hackathon"][item - 1]}
                  </div>
                </div>
                <CardHeader className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">Tech Innovation {item}</CardTitle>
                    <span className="text-xs bg-muted px-2 py-1 rounded">May {10 + item}, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <School className="h-4 w-4" />
                    <span>State University {item}</span>
                  </div>
                  <p className="text-sm">Join us for an exciting day of innovation, creativity, and networking opportunities.</p>
                  <div className="mt-3">
                    <Button variant="outline" size="sm" className="w-full border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white">
                      View Details
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Featured campuses section */}
          <h2 className="text-xl font-semibold mb-4">Featured Campuses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="overflow-hidden">
                <div className="aspect-video w-full bg-gray-100">
                  <img 
                    src={`https://source.unsplash.com/random/400x225?university&sig=${item}`}
                    alt="Campus"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium">University {item}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {["Engineering & Technology", "Arts & Sciences", "Business School", "Medical College"][item - 1]}
                  </p>
                  <Button variant="outline" size="sm" className="w-full border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white">
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
