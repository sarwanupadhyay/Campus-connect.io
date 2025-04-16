
import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import { School, Calendar, Bell, Users, Plus, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const CampusDashboard = () => {
  return (
    <div className="min-h-screen bg-primary-light/10 flex">
      <Sidebar role="campus" />

      {/* Main content */}
      <div className="flex-1 ml-0 lg:ml-64 min-h-screen">
        {/* Header */}
        <header className="sticky top-0 bg-white border-b px-4 py-3 flex items-center justify-between gap-4 z-10">
          <div className="flex gap-3 items-center lg:hidden">
            <School className="h-5 w-5 text-primary-orange" />
            <span className="font-semibold">Campus Connect</span>
          </div>
          
          <div className="hidden sm:block">
            <h1 className="text-lg font-semibold">State University Dashboard</h1>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary-orange rounded-full"></span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full overflow-hidden">
              <div className="w-full h-full bg-primary-orange/20 flex items-center justify-center">
                <School className="h-5 w-5 text-primary-orange" />
              </div>
            </Button>
          </div>
        </header>

        {/* Dashboard content */}
        <div className="p-4 lg:p-6">
          <h1 className="text-2xl font-semibold mb-6">Campus Dashboard</h1>

          {/* Stats cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 flex gap-4 items-center">
                <div className="bg-primary-light/50 p-3 rounded-full">
                  <Users className="h-6 w-6 text-primary-orange" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Registered Students</p>
                  <p className="font-medium text-2xl">245</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex gap-4 items-center">
                <div className="bg-primary-light/50 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-primary-orange" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Active Events</p>
                  <p className="font-medium text-2xl">6</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex gap-4 items-center">
                <div className="bg-primary-light/50 p-3 rounded-full">
                  <Users className="h-6 w-6 text-primary-orange" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Profile Views</p>
                  <p className="font-medium text-2xl">1,248</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex gap-4 items-center">
                <div className="bg-primary-light/50 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-primary-orange" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Event Registrations</p>
                  <p className="font-medium text-2xl">358</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Campus profile section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-1">
              <Card>
                <div className="aspect-video w-full bg-gray-100 relative">
                  <img 
                    src="https://source.unsplash.com/random/800x400?university"
                    alt="Campus"
                    className="w-full h-full object-cover"
                  />
                  <Button 
                    size="icon" 
                    variant="secondary"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
                <CardContent className="p-4 text-center">
                  <h2 className="text-xl font-semibold">State University</h2>
                  <p className="text-sm text-muted-foreground my-1">Est. 1965</p>
                  <div className="flex justify-center gap-2 mt-3">
                    <Button size="sm" variant="outline">Edit Profile</Button>
                    <Button size="sm" className="bg-primary-orange text-white hover:bg-primary-dark">
                      View Public Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Campus Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">About</h3>
                      <p className="mt-1">State University is a premier educational institution offering a wide range of courses across multiple disciplines.</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Courses Offered</h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="bg-primary-light/30 px-3 py-1 text-sm rounded-full">Computer Science</span>
                        <span className="bg-primary-light/30 px-3 py-1 text-sm rounded-full">Business Administration</span>
                        <span className="bg-primary-light/30 px-3 py-1 text-sm rounded-full">Electrical Engineering</span>
                        <span className="bg-primary-light/30 px-3 py-1 text-sm rounded-full">Psychology</span>
                        <span className="bg-primary-light/30 px-3 py-1 text-sm rounded-full">Medicine</span>
                        <span className="bg-primary-light/30 px-3 py-1 text-sm rounded-full">Fine Arts</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Website</h3>
                      <a href="#" className="text-primary-orange hover:underline">www.stateuniversity.edu</a>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Location</h3>
                      <p>123 University Avenue, College Town, ST 12345</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Events section */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Your Events</h2>
            <Button className="bg-primary-orange text-white hover:bg-primary-dark">
              <Plus className="h-4 w-4 mr-2" />
              Create New Event
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <Card key={item} className="overflow-hidden">
                <div className="aspect-video w-full bg-gray-100 relative">
                  <img 
                    src={`https://source.unsplash.com/random/400x225?event&sig=${item + 10}`}
                    alt="Event"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                    <div className="text-white">
                      <span className="text-xs font-medium">
                        {["Active", "Upcoming", "Completed", "Active", "Upcoming"][item - 1]}
                      </span>
                    </div>
                  </div>
                  <Button 
                    size="icon" 
                    variant="secondary"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium">
                    {[
                      "Annual Technology Summit", 
                      "Career Fair 2025", 
                      "Research Symposium", 
                      "Cultural Festival", 
                      "Orientation Day"
                    ][item - 1]}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground my-1">
                    <Calendar className="h-3 w-3" />
                    <span>May {5 + item * 2}, 2025</span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1 mb-3 line-clamp-2">
                    <p>
                      {[
                        "Join us for the latest trends in technology with speakers from leading tech companies.",
                        "Meet recruiters from over 50 companies hiring for various roles.",
                        "Presenting the latest research findings from our graduate students.",
                        "Celebrate diversity through performances, food, and exhibitions.",
                        "Welcome session for new students joining our campus."
                      ][item - 1]}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">Edit</Button>
                    <Button size="sm" className="bg-primary-orange text-white hover:bg-primary-dark">
                      Manage
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusDashboard;
