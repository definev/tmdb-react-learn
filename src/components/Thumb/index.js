import { Image } from './Thumb.styles';

const Thumb = ({ image, movieID, clickable }) => (
    <div>
        <Image src={image} alt="image-thumb" />
    </div>
);

export default Thumb;