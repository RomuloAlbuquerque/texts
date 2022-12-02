import thompson from "objects/thompson";
import "./style.css";

const Thompson = () => {
  return (
    <div className="container-author">
      <div className="image-author">
        <img
          src={thompson.imgUrl}
          alt={thompson.name}
        />
      </div>
      <div className="details-author">
        <h1>{thompson.name}</h1>
        <p>
            {thompson.resume}
        </p>
        <p>
            {thompson.details}
        </p>
      </div>
    </div>
  );
};

export default Thompson;
