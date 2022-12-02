import bukowski from "objects/bukowski";
import "./style.css";

const Author = () => {
  return (
    <div className="container-author">
      <div className="image-author">
        <img
          src={bukowski.imgUrl}
          alt={bukowski.name}
        />
      </div>
      <div className="details-author">
        <h1>{bukowski.name}</h1>
        <p>
            {bukowski.resume}
        </p>
        <p>
            {bukowski.details}
        </p>
      </div>
    </div>
  );
};

export default Author;
