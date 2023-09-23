import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate()
    const handleHome=()=> navigate("/")
    return (
        <div>
            <h1 className="text-7xl  text-center ">Oppppssss</h1>
            <div className="text-center">
            <button onClick={handleHome} className="btn btn-lg btn-error">Home</button>
            </div>
        </div>
        
    );
};

export default ErrorPage;