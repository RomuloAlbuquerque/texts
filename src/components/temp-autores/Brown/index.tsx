import brown from "objects/brown";
import "./style.css";

const Brown = () => {
  return (
    <div className="container-author">
      <div className="image-author">
        <img
          src={brown.imgUrl}
          alt={brown.name}
        />
      </div>
      <div className="details-author">
        <h1>{brown.name}</h1>
        <p>
            {brown.resume}
        </p>
        <p>
            {brown.details}
        </p>
      </div>
    </div>
  );
};

export default Brown;
