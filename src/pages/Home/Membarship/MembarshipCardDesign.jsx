import { FaRegCircleCheck } from "react-icons/fa6";
const MembarshipCardDesign = ({ membarshipData }) => {
    const { _id, title, category, price, facilities } = membarshipData;

    let backgroundClass;
    switch (category) {
        case "Silver":
            backgroundClass = "bg-[#DAE1E8]";
            break;
        case "Gold":
            backgroundClass = "bg-[#F3DBCB]";
            break;
        case "Platinum":
            backgroundClass = "bg-[#DAE1E8]";
            break;
        default:
            backgroundClass = "bg-[#DAE1E8]"
    }
    return (
        <div>
            <div className={`${backgroundClass} max-w-[400px] md:w-[350px] shadow-md py-8 pl-8 rounded-lg border-t border-l border-l-[#005eb6] border-t-[#005eb6] border-b-2 border-r-2 border-b-[#0084ff] border-r-[#0084ff] space-y-6`}>
                <div className="flex justify-between items-center">
                    <h1 className="w-[35%] text-2xl md:text-4xl font-bold tracking-wider text-sky-900"><sup className="text-2xl font-black">$</sup>{price}<sub className="text-sm tracking-tight">/mo</sub></h1>
                    <div className=" px-4 md:px-10 py-4 md:py-5  w-[50%] bg-gradient-to-r from-[#52b7ff] to-[#0084ff] rounded-tl-full rounded-bl-full">
                        <h3 className="text-white font-semibold md:text-xl tracking-wider">{category}</h3>
                    </div>
                </div>
                <p className="text-sky-900 font-semibold">{title}</p>
                <ul className="space-y-3">
                    {
                        Array.isArray(facilities) && facilities.map((fasility, index) => <li key={index} className="flex items-center gap-2 text-sm text-sky-900 font-semibold"><FaRegCircleCheck />{fasility}</li>)
                    }

                </ul>
                <div className="mr-8">
                    <button className="py-4 w-full bg-gradient-to-r from-[#52b7ff] to-[#0084ff] rounded-full uppercase text-white font-semibold text-lg tracking-wider">Purchases</button>
                </div>
            </div>
        </div>
    );
};

export default MembarshipCardDesign;