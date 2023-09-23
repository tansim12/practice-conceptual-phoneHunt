import { useContext, useState } from "react";
import { DataContext } from "../../Pages/Home/Home";
import useInputState from "../../useInputHook";

const Banner = () => {
  const [searchPhonesData, setSearchPhonesData] = useState([]);
  const data = useContext(DataContext);
  const textState = useInputState("");
  console.log(textState);

  //   form submit handle
  const clickSubmit = (e) => {
    e.preventDefault();
    const textInputValue = textState.value;
    const searchPhones =
      data.filter((phone) => phone?.phone_name?.includes(textInputValue)) || [];
    setSearchPhonesData(searchPhones);
  };
  console.log(searchPhonesData);

  return (
    <div>
      <div
        className="hero min-h-[50vh]"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <form onSubmit={clickSubmit}>
              <input
                {...textState}
                type="text"
                name="text"
                id="textInput"
                className="h-10 text-black w-full rounded-md p-2 "
              />

              <input
                type="submit"
                value="submit"
                className="btn btn-primary "
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
