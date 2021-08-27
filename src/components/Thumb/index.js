import { Link } from 'react-router-dom';

import { Image } from './Thumb.styles';


const Thumb = ({ image, movieID, clickable }) => (
    <>
        {clickable === true
            ? (<Link to={`/${movieID}`}>
                <Image src={image} alt="image-thumb" />
            </Link>)
            : (<Image src={image} alt="image-thumb" />)}
    </>
);

export default Thumb;