import { useContext, useState } from "react";
import { DataContext } from "../../Pages/Home/Home";
import Phone from "../Phone/Phone";

const Phones = () => {
  const data = useContext(DataContext);
  const [isShowAll, setIsShowAll] = useState(true);

  return (
    <section>
      <h1 className="text-3xl text-center">All Phones</h1>
      <div className="grid grid-cols-3">
        {isShowAll
          ? data
              .slice(0, 6)
              .map((phone, index) => <Phone key={index} phone={phone}></Phone>)
          : data.map((phone, index) => (
              <Phone key={index} phone={phone}></Phone>
            ))}
      </div>

      <div className="text-center">
        <button
          onClick={() => setIsShowAll(!isShowAll)}
          className="btn btn-primary btn-md"
        >
          <div>{isShowAll ? "Show More" : "less"}</div>
        </button>
      </div>
    </section>
  );
};

export default Phones;
