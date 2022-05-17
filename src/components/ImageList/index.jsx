import { ImageCard } from '../ImageCard';
import './style.css';

export function ImageList(props) {
  return (
    <ul className="image-list">
      {props.images.map(image => (
        <ImageCard key={image.id} image={image} />
      ))}
    </ul>
  );
}
