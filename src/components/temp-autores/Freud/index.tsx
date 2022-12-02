import sigmund from "objects/freud";
import "./style.css";

const Freud = () => {
  return (
    <div className="container-author">
      <div className="image-author">
        <img
          src={sigmund.imgUrl}
          alt={sigmund.name}
        />
      </div>
      <div className="details-author">
        <h1>{sigmund.name}</h1>
        <p>
            {sigmund.resume}
        </p>
        <p>
            {sigmund.details}
        </p>
      </div>
    </div>
  );
};

export default Freud;
