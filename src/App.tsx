import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ClosetPage from "./pages/ClosetPage";
import DresserPage from "./pages/DresserPage";
import CoordPage from "./pages/CoordPage";
import SimulatePage from "./pages/SimulatePage";
import AvatarPage from "./pages/AvatarPage";
import CalendarPage from "./pages/CalendarPage";
import SleepingPage from "./pages/SleepingPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/closet" component={ClosetPage} />
      <Route path="/dresser" component={DresserPage} />
      <Route path="/coords" component={CoordPage} />
      <Route path="/simulate" component={SimulatePage} />
      <Route path="/avatar" component={AvatarPage} />
      <Route path="/calendar" component={CalendarPage} />
      <Route path="/sleeping" component={SleepingPage} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster position="top-center" />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
