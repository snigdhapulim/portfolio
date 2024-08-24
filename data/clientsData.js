import { v4 as uuidv4 } from 'uuid';

// Import images
import XelpImage from "../public/images/brands/xelpmoc.jpeg";
import JanaImage from "../public/images/brands/janaspandana.jpg"
import DreamImage from "../public/images/brands/dream.png"
import GenderImage from "../public/images/brands/gfs.jpg"

export const clientsHeading = 'Some of the companies I have worked with';

export const clientsData = [
	{
		id: uuidv4(),
		title: 'Gender Freedom Society',
		img: GenderImage,
		link:'https://www.facebook.com/GenderFreedomSociety/'
	},
	{
		id: uuidv4(),
		title: 'DREAM Venture Labs',
		img: DreamImage,
		link:'https://www.dreamventurelabs.org/'
	},
	{
		id: uuidv4(),
		title: 'Janaspandana',
		img: JanaImage,
		link:'https://janaspandana.in/'
	},
	{
		id: uuidv4(),
		title: 'Zelpmoc',
		img: XelpImage,
		link:'https://www.xelpmoc.in/'
	}
];
