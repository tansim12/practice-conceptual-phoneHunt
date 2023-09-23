import Phone from "../../components/Phone/Phone";

const FavouritePhone = ({ phone }) => {
  return (
    <section>
      <div>
        <Phone phone={phone}></Phone>
      </div>
    </section>
  );
};

export default FavouritePhone;
