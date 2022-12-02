import rodrigues from "objects/rodrigues";
import "./style.css";

const Rodrigues = () => {
  return (
    <div className="container-author">
      <div className="image-author">
        <img
          src={rodrigues.imgUrl}
          alt={rodrigues.name}
        />
      </div>
      <div className="details-author">
        <h1>{rodrigues.name}</h1>
        <p>
            {rodrigues.resume}
        </p>
        <p>
            {rodrigues.details}
        </p>
      </div>
    </div>
  );
};

export default Rodrigues;
