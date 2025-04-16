
import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import { 
  School, 
  Bell, 
  Edit, 
  User, 
  Mail, 
  Book, 
  Calendar, 
  MapPin, 
  Phone, 
  Globe,
  FileText,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const StudentProfile = () => {
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
          
          <div className="hidden sm:block">
            <h1 className="text-lg font-semibold">My Profile</h1>
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

        {/* Profile content */}
        <div className="p-4 lg:p-6">
          {/* Profile header */}
          <div className="relative mb-6">
            <div className="h-48 w-full bg-gradient-to-r from-primary-orange/30 to-primary-orange/70 rounded-lg"></div>
            <div className="absolute -bottom-16 left-8 w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-white">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <Button 
              size="icon" 
              variant="secondary"
              className="absolute top-4 right-4 bg-white/80 hover:bg-white"
            >
              <Edit className="h-4 w-4" />
            </Button>
          </div>

          {/* Profile info */}
          <div className="mt-16 md:ml-40 flex flex-col md:flex-row md:justify-between md:items-end">
            <div>
              <h1 className="text-2xl font-bold">John Doe</h1>
              <p className="text-muted-foreground">Computer Science Student</p>
            </div>
            <div className="mt-3 md:mt-0 flex gap-2">
              <Button variant="outline" className="border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
              <Link to="/student-dashboard/resume">
                <Button className="bg-primary-orange text-white hover:bg-primary-dark">
                  <FileText className="h-4 w-4 mr-2" />
                  Resume Builder
                </Button>
              </Link>
            </div>
          </div>
          
          <Separator className="my-6" />

          {/* Profile tabs */}
          <Tabs defaultValue="about" className="mt-6">
            <TabsList className="grid w-full md:w-auto grid-cols-3 mb-6">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="resume">Resume</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <h3 className="text-lg font-medium mb-3">About Me</h3>
                      <p className="text-muted-foreground mb-4">
                        I'm a Computer Science student passionate about web development and artificial intelligence. 
                        Currently pursuing my Bachelor's degree and looking for internship opportunities in software development.
                      </p>
                      
                      <h3 className="text-lg font-medium mb-3">Contact Information</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span>john.doe@email.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span>(123) 456-7890</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>New York, NY</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-medium mt-6 mb-3">Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-primary-light/30 px-3 py-1 text-sm rounded-full">JavaScript</span>
                        <span className="bg-primary-light/30 px-3 py-1 text-sm rounded-full">React</span>
                        <span className="bg-primary-light/30 px-3 py-1 text-sm rounded-full">Node.js</span>
                        <span className="bg-primary-light/30 px-3 py-1 text-sm rounded-full">Python</span>
                        <span className="bg-primary-light/30 px-3 py-1 text-sm rounded-full">SQL</span>
                        <span className="bg-primary-light/30 px-3 py-1 text-sm rounded-full">Git</span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Portfolio & Links</h3>
                      <div className="space-y-2">
                        <a href="#" className="flex items-center gap-2 text-primary-orange hover:underline">
                          <Globe className="h-4 w-4" />
                          <span>portfolio.johndoe.dev</span>
                        </a>
                        <a href="#" className="flex items-center gap-2 text-primary-orange hover:underline">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          <span>github.com/johndoe</span>
                        </a>
                        <a href="#" className="flex items-center gap-2 text-primary-orange hover:underline">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                          <span>linkedin.com/in/johndoe</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="education">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Education</h3>
                  
                  <div className="space-y-6">
                    <div className="border-l-2 border-primary-orange pl-4 pb-6">
                      <div className="flex justify-between">
                        <h4 className="font-medium">Bachelor of Science in Computer Science</h4>
                        <span className="text-sm text-muted-foreground">2022 - Present</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <School className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">State University</span>
                      </div>
                      <p className="mt-2 text-sm">
                        Currently maintaining a 3.8 GPA with a focus on Software Engineering and Data Science.
                      </p>
                    </div>
                    
                    <div className="border-l-2 border-gray-200 pl-4">
                      <div className="flex justify-between">
                        <h4 className="font-medium">High School Diploma</h4>
                        <span className="text-sm text-muted-foreground">2018 - 2022</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <School className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Central High School</span>
                      </div>
                      <p className="mt-2 text-sm">
                        Graduated with honors. Participated in Computer Science Club and Math Team.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-lg font-medium mt-8 mb-4">Certifications</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary-light/30 p-2 rounded">
                        <FileText className="h-5 w-5 text-primary-orange" />
                      </div>
                      <div>
                        <h4 className="font-medium">Web Development Bootcamp</h4>
                        <p className="text-sm text-muted-foreground">Completed 2023</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-primary-light/30 p-2 rounded">
                        <FileText className="h-5 w-5 text-primary-orange" />
                      </div>
                      <div>
                        <h4 className="font-medium">Python Data Science</h4>
                        <p className="text-sm text-muted-foreground">Completed 2023</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="resume">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium">My Resume</h3>
                    <div className="flex gap-2">
                      <Button variant="outline" className="border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      <Button className="bg-primary-orange text-white hover:bg-primary-dark">
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-6 bg-white shadow-sm">
                    {/* Resume preview - simplified version */}
                    <div className="space-y-6">
                      <div className="text-center border-b pb-4">
                        <h2 className="text-2xl font-bold mb-1">John Doe</h2>
                        <p className="text-muted-foreground">Computer Science Student</p>
                        <div className="flex justify-center gap-3 mt-2 text-sm">
                          <span>john.doe@email.com</span>
                          <span>•</span>
                          <span>(123) 456-7890</span>
                          <span>•</span>
                          <span>New York, NY</span>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-md font-bold mb-2 border-b">EDUCATION</h3>
                        <div className="mb-2">
                          <div className="flex justify-between">
                            <span className="font-medium">Bachelor of Science in Computer Science</span>
                            <span>2022 - Present</span>
                          </div>
                          <div className="text-sm text-muted-foreground">State University</div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-md font-bold mb-2 border-b">SKILLS</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
                          <div className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-primary-orange"></div>
                            <span>JavaScript, HTML, CSS</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-primary-orange"></div>
                            <span>React, Node.js, Express</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-primary-orange"></div>
                            <span>Python, Flask, Django</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-primary-orange"></div>
                            <span>SQL, MongoDB, PostgreSQL</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-md font-bold mb-2 border-b">EXPERIENCE</h3>
                        <div className="mb-3">
                          <div className="flex justify-between">
                            <span className="font-medium">Web Development Intern</span>
                            <span>Summer 2023</span>
                          </div>
                          <div className="text-sm text-muted-foreground">TechCorp Inc.</div>
                          <ul className="list-disc ml-5 mt-1 text-sm">
                            <li>Assisted in developing responsive web applications using React</li>
                            <li>Collaborated with senior developers on client projects</li>
                            <li>Implemented UI components based on designer specifications</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-md font-bold mb-2 border-b">PROJECTS</h3>
                        <div className="mb-2">
                          <span className="font-medium">Student Management System</span>
                          <ul className="list-disc ml-5 mt-1 text-sm">
                            <li>Developed a full-stack application using React and Flask</li>
                            <li>Implemented authentication system and role-based access control</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
