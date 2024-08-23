import { v4 as uuidv4 } from 'uuid';

// Import images
import AmazonImage from '../public/images/brands/amazon_gray.png';
import SonyImage from '../public/images/brands/sony_gray.png';
import AdidasImage from '../public/images/brands/adidas_gray.png';
import FilaImage from '../public/images/brands/fila_gray.png';
import NBImage from '../public/images/brands/nb_gray.png';
import SamsungImage from '../public/images/brands/samsung_gray.png';
import CanonImage from '../public/images/brands/canon_gray.png';
import PumaImage from '../public/images/brands/puma_gray.png';

export const clientsHeading = 'Some of the companies I have worked with';

export const clientsData = [
	{
		id: uuidv4(),
		title: 'Zelpmoc',
		img: AmazonImage,
		link:'https://www.xelpmoc.in/'
	},
	{
		id: uuidv4(),
		title: 'Janaspandana',
		img: AmazonImage,
		link:'https://janaspandana.in/'
	},
	{
		id: uuidv4(),
		title: 'DREAM Venture Labs',
		img: AmazonImage,
		link:'https://www.dreamventurelabs.org/'

	}
];
