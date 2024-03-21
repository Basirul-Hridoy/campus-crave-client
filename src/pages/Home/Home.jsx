import Banner from "./Banner";
import EventsSection from "./Events/EventsSection";
import FeadbackSection from "./FeadbackSection";
import MealsCategory from "./MealsCategory/MialsCategory";
import Membarship from "./Membarship/Membarship";

const Home = () => {
    return (
        <div>
            <Banner />
            <MealsCategory />
            <Membarship />
            <EventsSection />
            <FeadbackSection />
        </div>
    );
};

export default Home;