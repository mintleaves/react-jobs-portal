import ClockLoader from "react-spinners/ClockLoader";

const override = {
    display: "block",
    margin: "100px auto",
};

const Spinners = ({ loading }) => {
  return (
    <ClockLoader
      color="#03C474"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinners;
