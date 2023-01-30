import accomodationIcon from '../../Images/makkah/accomodation.png';
import sitesIcon from '../../Images/makkah/holy_sites.png';
import landmarksIcon from '../../Images/makkah/landmarks.png';
import foodIcon from '../../Images/makkah/food.png';
import shoppingIcon from '../../Images/makkah/shopping.png';
import pathIcon from '../../Images/makkah/path.png';

const tabs = [
  { name: 'Accomodation', icon: accomodationIcon, target: 'accomodation' },
  { name: 'Holy sites', icon: sitesIcon, target: 'sites' },
  { name: 'Landmarks', icon: landmarksIcon, target: 'landmarks' },
  { name: 'Shopping', icon: shoppingIcon, target: 'Shopping' },
  { name: 'Food & drinks', icon: foodIcon, target: 'food' },
  { name: 'Getting to Makkah', icon: pathIcon, target: 'to-makkah' },
];

export default tabs;
