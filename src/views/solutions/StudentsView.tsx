import HeroSection from "@/features/hero/hero-section";
import {
  StudentsCommunitySection,
  StudentsCTASection,
  StudentsFeaturesSection,
  StudentsWallOfLoveSection,
} from "@/features/students";

const StudentsView = () => {
  return (
    <div className="flex flex-col gap-20">
      <HeroSection
        tagline="Join 3,000+ students improving their GPA"
        heading="Join the Top 1% of Students."
        subHeading="This is what straight-A students are gatekeeping from you. Lock in. Level up."
        buttonOne="Start Here"
        buttonOneArrow
        buttonTwo="Join Community"
      />
      <StudentsFeaturesSection />
      <StudentsCommunitySection />
      <StudentsWallOfLoveSection />
      <StudentsCTASection />
    </div>
  );
};

export default StudentsView;
