import HeroSection from "@/components/HeroSection";
import MeetingTypeList from "@/components/MeetingTypeList";

const Home = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <HeroSection />
      <MeetingTypeList />
    </section>
  );
};

export default Home;
