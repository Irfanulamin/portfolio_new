import Aboutme from "@/components/ui/Aboutme";
import AllProjects from "@/components/ui/AllProjects";
import Banner from "@/components/ui/Banner";
import Blog from "@/components/ui/Blog";
import Contactme from "@/components/ui/Contactme";
import Expertise from "@/components/ui/Expertise";

export default function Home() {
  return (
    <div className="min-h-screen h-full">
      <Banner />
      <Expertise />
      <Aboutme />
      <AllProjects />
      <Contactme />
      <Blog />
    </div>
  );
}
