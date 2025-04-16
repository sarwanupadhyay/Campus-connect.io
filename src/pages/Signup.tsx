
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { School, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Signup = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<"student" | "campus">("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  // This would be connected to Flask backend in the final implementation
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    // Simulate successful registration and redirect to profile setup
    if (role === "student") {
      navigate("/student-profile-setup");
    } else {
      navigate("/campus-profile-setup");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary-light/10 p-4">
      <Link to="/" className="absolute top-8 left-8 flex items-center gap-2">
        <School className="h-6 w-6 text-primary-orange" />
        <span className="text-xl font-bold">Campus Connect</span>
      </Link>
      
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold tracking-tight">Create an account</CardTitle>
          <CardDescription>
            Choose your role and sign up to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="role">I am a:</Label>
              <RadioGroup 
                id="role" 
                value={role} 
                onValueChange={(value) => setRole(value as "student" | "campus")}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="student" id="student" />
                  <Label htmlFor="student" className="flex items-center gap-1.5 cursor-pointer">
                    <User className="h-4 w-4" />
                    Student
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="campus" id="campus" />
                  <Label htmlFor="campus" className="flex items-center gap-1.5 cursor-pointer">
                    <School className="h-4 w-4" />
                    Campus
                  </Label>
                </div>
              </RadioGroup>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input 
                id="confirmPassword" 
                type="password"
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)}
                required 
              />
            </div>
            
            <Button type="submit" className="w-full bg-primary-orange text-white hover:bg-primary-dark">
              Create Account
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-2">
          <div className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary-orange hover:underline">
              Sign in
            </Link>
          </div>
          
          <p className="text-xs text-muted-foreground text-center mt-2">
            By signing up, you agree to our{" "}
            <Link to="/terms" className="text-primary-orange hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-primary-orange hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Signup;
