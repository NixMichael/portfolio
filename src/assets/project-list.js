import GreenOil from '../assets/site-examples/green-oil-shop.png'
import MACA from '../assets/site-examples/maca-home-page.png'
import RecordKeeper from '../assets/site-examples/recordkeeper/record-keeper-01.png'

export const projects = [
    {
        fade: false,
        title: 'MACA',
        description: 'A new website for Manchester Animal Climate Action.',
        image: MACA,
        liveLink: 'https://pedantic-booth-dbf87d.netlify.app/',
        codeLink: 'https://github.com/c0llid3r/maca-website'
    },
    {
        fade: true,
        title: 'RECORD KEEPER',
        description: 'A database system for a Clinical Photography department.',
        image: RecordKeeper,
        liveLink: 'https://distracted-liskov-55fae3.netlify.app/',
        codeLink: 'https://github.com/c0llid3r/recordkeeper'
    },
    {
        fade: true,
        title: 'GREEN OIL',
        description: 'New e-commerce website for an eco focused bicycle oil company.',
        image: GreenOil,
        liveLink: 'https://elastic-lovelace-14cb3f.netlify.app/',
        codeLink: 'https://github.com/c0llid3r/green-oil'
    }
]