import { useQuery } from "@tanstack/react-query";
import MembarshipCardDesign from "./MembarshipCardDesign";
import hostelBg from "../../../../public/images/hostel-image.jpg"

const Membarship = () => {

    const { data: membarshipData = [] } = useQuery({
        queryKey: ["membarship"],
        queryFn: async () => {
            const res = await fetch("membarship.json");
            return res.json();
        }
    });

    return (
        <div style={{ backgroundImage: `url(${hostelBg})`, backgroundSize: "cover" }} className="bg-fixed">
            <div className=" flex md:flex-row flex-col justify-center gap-10  md:py-32 py-8 bg-primary bg-opacity-90 px-4 md:px-0">
                {
                    membarshipData.map(membarship => <MembarshipCardDesign key={membarship._id} membarshipData={membarship} />)
                }
            </div>
        </div>
    );
};

export default Membarship;