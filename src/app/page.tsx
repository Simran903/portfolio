import Certifications from "@/components/certifications";
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import ProfileCard from "@/components/profile";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import WorkExperience from "@/components/workExperience";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <ProfileCard />
      <Projects />
      <Skills />
      <WorkExperience />
      <Certifications />
      <Footer />
    </div>
  );
}
