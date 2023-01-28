import aboutIcon from '../../../../assets/icons/about.png';
import PillarsIcon from '../../../../assets/icons/Pillars-omrah.png';
import importantTipsIcon from '../../../../assets/icons/important-tips.png';
import ziyarahIcon from '../../../../assets/icons/ziyarah.png';
import miqatIcon from '../../../../assets/icons/miqat.svg';
import arrvalIcon from '../../../../assets/icons/arrival.svg';
import accessibilityIcon from '../../../../assets/icons/accessibility.svg';

const umrahData = [
  {
    link: '/umarh/about',
    icon: aboutIcon,
    alt: 'About Umrah',
    text: 'About Umrah',
  },
  {
    link: '/pillars',
    icon: PillarsIcon,
    alt: 'Pillars Of Umrah',
    text: 'Pillars Of Umrah',
  },
  {
    link: 'miqat',
    icon: miqatIcon,
    alt: 'Miqat',
    text: 'Miqat',
  },
  {
    link: 'arrival',
    icon: arrvalIcon,
    alt: 'Arrival to Holly Mosque',
    text: 'Arrival to Holly Mosque',
  },
  {
    link: 'important',
    icon: importantTipsIcon,
    alt: 'Important Tips',
    text: 'Important Tips',
  },
  {
    link: 'accessibility',
    icon: accessibilityIcon,
    alt: 'Accessibility',
    text: 'Accessibility',
  },
  {
    link: 'ziyarah',
    icon: ziyarahIcon,
    alt: 'Ziyarah',
    text: 'Ziyarah',
  },
];

const holySiteData = [
  {
    h: 'h',
  },
];

export { umrahData, holySiteData };
