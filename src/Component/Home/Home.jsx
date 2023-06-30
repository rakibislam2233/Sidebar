
import { useOutletContext } from "react-router-dom";
import Banner from "./Banner/Banner";


const Home = () => {
    const [name,open,setOpen] = useOutletContext()
    return (
        <div className="overflow-hidden">
           <Banner open={open} setOpen={setOpen}></Banner>
        </div>
    );
};

export default Home;