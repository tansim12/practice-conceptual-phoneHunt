import { useEffect, useState } from "react";
import { getStroedProduct } from "../../localStorage";
import FavouritePhone from "./FavouritePhone";

const Favourite = () => {
  const [getLocalStorageProduct, setGetLocalStorageProduct] = useState([]);
  const [notFound, setNotFound] = useState(null);
  const [isShowAll, setIsShowAll] = useState(true);
  const [hideButton, setHideButton] = useState(null);
  //   remove all button handler
  const handleRemoveAll = () => {
    localStorage.clear();
    setGetLocalStorageProduct([]);
  };
  useEffect(() => {
    const getLocalArrayOfObject = getStroedProduct();
    if (getLocalArrayOfObject.length === 0) {
      setNotFound("NO Favourite Product Added here");
      setHideButton(true);
    } else {
      setGetLocalStorageProduct(getLocalArrayOfObject);
    }
  }, []);
  return (
    <div>
      <h1 className="text-5xl text-center">{notFound}</h1>

      {/* remove all button  */}
      <div className="text-center">
        {hideButton ? null : (
          <button onClick={handleRemoveAll} className="btn btn-warning">
            Remove All
          </button>
        )}
      </div>
      <div className="grid grid-cols-2">
        {isShowAll
          ? getLocalStorageProduct
              .slice(0, 2)
              .map((phones, index) => (
                <FavouritePhone key={index} phone={phones}></FavouritePhone>
              ))
          : getLocalStorageProduct.map((phones, index) => (
              <FavouritePhone key={index} phone={phones}></FavouritePhone>
            ))}
      </div>
      {/* sea more button  */}
      <div className="text-center my-10">
        {hideButton ? null : (
          <button
            onClick={() => setIsShowAll(!isShowAll)}
            className="btn btn-accent "
          >
            {isShowAll ? "Sea All" : "Less"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Favourite;
