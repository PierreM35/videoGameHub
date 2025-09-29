import bullseye from '../assets/bulls-eye.webp';
import meh from '../assets/meh.webp';
import thumbsUp from '../assets/thumbs-up.webp';

interface Props {
    rating: number;
}

const Emoji = ({ rating }: Props) => {

    if (rating < 3) 
        return null;

    const emojiMap = {
        3: { src:meh, alt: 'meh', boxSizing: '25px' },
        4: { src:thumbsUp, alt: 'recommended', boxSizing: '25px' },
        5: { src:bullseye, alt: 'exceptional', boxSizing: '35px' }
    }
    
    return (
        <img 
            src={emojiMap[rating as 3 | 4 | 5].src} 
            alt={emojiMap[rating as 3 | 4 | 5].alt} 
            style={{ 
                width: emojiMap[rating as 3 | 4 | 5].boxSizing, 
                height: emojiMap[rating as 3 | 4 | 5].boxSizing, 
                alignContent: 'left',
                marginTop: 4
             }} 
        />
    )
}

export default Emoji;