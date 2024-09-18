import s from "./ImageCard.module.css";

const ImageCard = ({ name: { urls, description } }) => {
  return (
    <div>
      <img className={s.imgCard} src={urls.small} alt={description} />
    </div>
  );
};

export default ImageCard;
