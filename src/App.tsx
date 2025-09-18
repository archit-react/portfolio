// App.tsx
import Home from "./pages/Home";
import ProjectsPage from "./projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200">
      <Home />
      <ProjectsPage />
      <Contact />
    </div>
  );
}
