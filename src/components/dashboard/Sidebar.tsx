
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  School, 
  User, 
  Home, 
  Search, 
  FileText, 
  Calendar, 
  Settings, 
  LogOut,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  role: "student" | "campus";
}

const Sidebar = ({ role }: SidebarProps) => {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const studentNavItems = [
    { label: "Dashboard", path: "/student-dashboard", icon: Home },
    { label: "Search", path: "/student-dashboard/search", icon: Search },
    { label: "My Profile", path: "/student-dashboard/profile", icon: User },
    { label: "Resume Builder", path: "/student-dashboard/resume", icon: FileText },
    { label: "Events", path: "/student-dashboard/events", icon: Calendar },
    { label: "Settings", path: "/student-dashboard/settings", icon: Settings }
  ];
  
  const campusNavItems = [
    { label: "Dashboard", path: "/campus-dashboard", icon: Home },
    { label: "Campus Profile", path: "/campus-dashboard/profile", icon: School },
    { label: "Events", path: "/campus-dashboard/events", icon: Calendar },
    { label: "Student List", path: "/campus-dashboard/students", icon: User },
    { label: "Settings", path: "/campus-dashboard/settings", icon: Settings }
  ];
  
  const navItems = role === "student" ? studentNavItems : campusNavItems;
  
  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      {/* Mobile toggle button */}
      <div className="fixed top-4 left-4 z-50 lg:hidden">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={toggleMobileSidebar}
          className="bg-white shadow"
        >
          {isMobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>
      
      {/* Backdrop for mobile */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-sidebar flex flex-col border-r transform transition-transform duration-300 ease-in-out",
        isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        {/* Logo area */}
        <div className="p-4 border-b flex items-center gap-2">
          <School className="h-6 w-6 text-primary-orange" />
          <span className="text-lg font-bold">Campus Connect</span>
        </div>
        
        {/* User info */}
        <div className="p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-orange/20 flex items-center justify-center">
              {role === "student" ? (
                <User className="h-5 w-5 text-primary-orange" />
              ) : (
                <School className="h-5 w-5 text-primary-orange" />
              )}
            </div>
            <div>
              <p className="font-medium">
                {role === "student" ? "Student" : "Campus"} Account
              </p>
              <p className="text-sm text-muted-foreground">
                {role === "student" ? "John Doe" : "State University"}
              </p>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <Link 
                key={item.path} 
                to={item.path}
                onClick={() => setIsMobileOpen(false)}
              >
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-3",
                    isActive && "bg-sidebar-accent text-primary-orange font-medium"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </nav>
        
        {/* Logout */}
        <div className="p-4 border-t">
          <Link to="/login">
            <Button variant="ghost" className="w-full justify-start gap-3 text-destructive hover:text-destructive">
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
