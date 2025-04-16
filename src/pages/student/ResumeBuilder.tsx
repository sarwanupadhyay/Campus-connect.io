
import React, { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import { 
  School, 
  Bell, 
  User, 
  FileText, 
  Plus, 
  Trash2, 
  Download, 
  Save
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const ResumeBuilder = () => {
  // State for resume data (simplified for demo)
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "John Doe",
    email: "john.doe@email.com",
    phone: "(123) 456-7890",
    location: "New York, NY",
    objective: "Computer Science student seeking internship opportunities in software development.",
  });

  // Education section
  const [educations, setEducations] = useState([
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "State University",
      startDate: "2022",
      endDate: "Present",
      description: "Currently maintaining a 3.8 GPA with a focus on Software Engineering and Data Science.",
    }
  ]);

  // Experience section
  const [experiences, setExperiences] = useState([
    {
      title: "Web Development Intern",
      company: "TechCorp Inc.",
      startDate: "May 2023",
      endDate: "August 2023",
      description: "• Assisted in developing responsive web applications using React\n• Collaborated with senior developers on client projects\n• Implemented UI components based on designer specifications",
    }
  ]);

  // Skills section
  const [skills, setSkills] = useState("JavaScript, HTML, CSS, React, Node.js, Python, SQL, Git");

  // Add new education
  const addEducation = () => {
    setEducations([
      ...educations,
      {
        degree: "",
        institution: "",
        startDate: "",
        endDate: "",
        description: "",
      }
    ]);
  };

  // Add new experience
  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        title: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
      }
    ]);
  };

  // Remove education
  const removeEducation = (index: number) => {
    const newEducations = [...educations];
    newEducations.splice(index, 1);
    setEducations(newEducations);
  };

  // Remove experience
  const removeExperience = (index: number) => {
    const newExperiences = [...experiences];
    newExperiences.splice(index, 1);
    setExperiences(newExperiences);
  };

  // Update education
  const updateEducation = (index: number, field: string, value: string) => {
    const newEducations = [...educations];
    newEducations[index] = { ...newEducations[index], [field]: value };
    setEducations(newEducations);
  };

  // Update experience
  const updateExperience = (index: number, field: string, value: string) => {
    const newExperiences = [...experiences];
    newExperiences[index] = { ...newExperiences[index], [field]: value };
    setExperiences(newExperiences);
  };

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
            <h1 className="text-lg font-semibold">Resume Builder</h1>
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

        {/* Resume builder content */}
        <div className="p-4 lg:p-6">
          <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
            <div>
              <h1 className="text-2xl font-bold">Resume Builder</h1>
              <p className="text-muted-foreground">Create and customize your professional resume</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white">
                <Save className="h-4 w-4 mr-2" />
                Save Draft
              </Button>
              <Button className="bg-primary-orange text-white hover:bg-primary-dark">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Resume form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Personal Information */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <User className="h-5 w-5 text-primary-orange" />
                    Personal Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input 
                        id="fullName" 
                        value={personalInfo.fullName}
                        onChange={(e) => setPersonalInfo({...personalInfo, fullName: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email"
                        value={personalInfo.email}
                        onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input 
                        id="phone"
                        value={personalInfo.phone}
                        onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="location">Location</Label>
                      <Input 
                        id="location"
                        value={personalInfo.location}
                        onChange={(e) => setPersonalInfo({...personalInfo, location: e.target.value})}
                        placeholder="City, State"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="objective">Professional Summary</Label>
                      <Textarea 
                        id="objective" 
                        value={personalInfo.objective}
                        onChange={(e) => setPersonalInfo({...personalInfo, objective: e.target.value})}
                        placeholder="Brief summary of your professional goals and qualifications"
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Education */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                      <School className="h-5 w-5 text-primary-orange" />
                      Education
                    </h2>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={addEducation}
                      className="border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Add Education
                    </Button>
                  </div>
                  
                  {educations.map((education, index) => (
                    <div key={index} className="mb-6">
                      {index > 0 && <Separator className="my-6" />}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                          <Label htmlFor={`degree-${index}`}>Degree/Certificate</Label>
                          <Input 
                            id={`degree-${index}`}
                            value={education.degree}
                            onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor={`institution-${index}`}>Institution</Label>
                          <Input 
                            id={`institution-${index}`}
                            value={education.institution}
                            onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor={`edu-start-${index}`}>Start Date</Label>
                          <Input 
                            id={`edu-start-${index}`}
                            value={education.startDate}
                            onChange={(e) => updateEducation(index, 'startDate', e.target.value)}
                            placeholder="e.g., 2020"
                          />
                        </div>
                        <div>
                          <Label htmlFor={`edu-end-${index}`}>End Date</Label>
                          <Input 
                            id={`edu-end-${index}`}
                            value={education.endDate}
                            onChange={(e) => updateEducation(index, 'endDate', e.target.value)}
                            placeholder="e.g., Present"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor={`edu-description-${index}`}>Description</Label>
                          <Textarea 
                            id={`edu-description-${index}`}
                            value={education.description}
                            onChange={(e) => updateEducation(index, 'description', e.target.value)}
                            className="min-h-[80px]"
                          />
                        </div>
                        
                        {educations.length > 1 && (
                          <div className="md:col-span-2 flex justify-end">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => removeEducation(index)}
                              className="text-destructive hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              Remove
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Experience */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary-orange" />
                      Experience
                    </h2>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={addExperience}
                      className="border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Add Experience
                    </Button>
                  </div>
                  
                  {experiences.map((experience, index) => (
                    <div key={index} className="mb-6">
                      {index > 0 && <Separator className="my-6" />}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                          <Label htmlFor={`title-${index}`}>Job Title</Label>
                          <Input 
                            id={`title-${index}`}
                            value={experience.title}
                            onChange={(e) => updateExperience(index, 'title', e.target.value)}
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor={`company-${index}`}>Company</Label>
                          <Input 
                            id={`company-${index}`}
                            value={experience.company}
                            onChange={(e) => updateExperience(index, 'company', e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor={`exp-start-${index}`}>Start Date</Label>
                          <Input 
                            id={`exp-start-${index}`}
                            value={experience.startDate}
                            onChange={(e) => updateExperience(index, 'startDate', e.target.value)}
                            placeholder="e.g., May 2020"
                          />
                        </div>
                        <div>
                          <Label htmlFor={`exp-end-${index}`}>End Date</Label>
                          <Input 
                            id={`exp-end-${index}`}
                            value={experience.endDate}
                            onChange={(e) => updateExperience(index, 'endDate', e.target.value)}
                            placeholder="e.g., Present"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor={`exp-description-${index}`}>Description</Label>
                          <Textarea 
                            id={`exp-description-${index}`}
                            value={experience.description}
                            onChange={(e) => updateExperience(index, 'description', e.target.value)}
                            className="min-h-[120px]"
                            placeholder="Use bullet points (•) to list your responsibilities and achievements"
                          />
                        </div>
                        
                        {experiences.length > 1 && (
                          <div className="md:col-span-2 flex justify-end">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => removeExperience(index)}
                              className="text-destructive hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              Remove
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Skills */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Skills</h2>
                  <div>
                    <Label htmlFor="skills">List your skills (separated by commas)</Label>
                    <Textarea 
                      id="skills"
                      value={skills}
                      onChange={(e) => setSkills(e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Preview */}
            <div className="hidden lg:block">
              <div className="sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Preview</h2>
                <Card className="overflow-hidden max-h-[800px] overflow-y-auto">
                  <CardContent className="p-6">
                    {/* Resume preview - simplified */}
                    <div className="space-y-4 text-sm">
                      <div className="text-center">
                        <h2 className="text-xl font-bold">{personalInfo.fullName}</h2>
                        <div className="flex flex-wrap justify-center gap-2 mt-1 text-xs">
                          {personalInfo.email && <span>{personalInfo.email}</span>}
                          {personalInfo.phone && (
                            <>
                              <span className="hidden sm:block">•</span>
                              <span>{personalInfo.phone}</span>
                            </>
                          )}
                          {personalInfo.location && (
                            <>
                              <span className="hidden sm:block">•</span>
                              <span>{personalInfo.location}</span>
                            </>
                          )}
                        </div>
                      </div>
                      
                      {personalInfo.objective && (
                        <div>
                          <h3 className="text-xs font-bold uppercase border-b mb-1">Summary</h3>
                          <p className="text-xs">{personalInfo.objective}</p>
                        </div>
                      )}
                      
                      {educations.length > 0 && (
                        <div>
                          <h3 className="text-xs font-bold uppercase border-b mb-1">Education</h3>
                          {educations.map((education, index) => (
                            <div key={index} className="mb-2">
                              <div className="flex justify-between">
                                <span className="font-medium text-xs">{education.degree}</span>
                                <span className="text-xs">{education.startDate} - {education.endDate}</span>
                              </div>
                              <div className="text-xs">{education.institution}</div>
                              {education.description && <p className="text-xs mt-1">{education.description}</p>}
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {experiences.length > 0 && (
                        <div>
                          <h3 className="text-xs font-bold uppercase border-b mb-1">Experience</h3>
                          {experiences.map((experience, index) => (
                            <div key={index} className="mb-3">
                              <div className="flex justify-between">
                                <span className="font-medium text-xs">{experience.title}</span>
                                <span className="text-xs">{experience.startDate} - {experience.endDate}</span>
                              </div>
                              <div className="text-xs">{experience.company}</div>
                              {experience.description && (
                                <p className="text-xs mt-1 whitespace-pre-line">{experience.description}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {skills && (
                        <div>
                          <h3 className="text-xs font-bold uppercase border-b mb-1">Skills</h3>
                          <p className="text-xs">{skills}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
