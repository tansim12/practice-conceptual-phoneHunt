import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RanderphoneInfoDiv from "./RanderphoneInfoDiv";

const PhoneSingleDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [findSinglePhone, setFindSinglePhone] = useState({});
  useEffect(() => {
    {
      const findData = data.find((phoneDetails) => phoneDetails.id === id);
      if (findData) {
        setFindSinglePhone(findData);
      }
    }
  }, [data, id]);

  return (
    <div>
      <RanderphoneInfoDiv
        findSinglePhone={findSinglePhone}
      ></RanderphoneInfoDiv>
    </div>
  );
};

export default PhoneSingleDetails;
