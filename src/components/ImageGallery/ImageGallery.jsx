import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <ul className={s.imgGalList}>
      {images.map((img) => (
        <li className={s.imgGalItem} key={img.id}>
          <ImageCard name={img} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
