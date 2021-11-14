import IPhone from './Photocards/iphone13';
import Airpods from './Photocards/Airpods';
import Watch from './Photocards/Watch';
import Homepod from './Photocards/Homepod';
import IPadMini from './Photocards/iPadMini';
import IPhone13Pro from './Photocards/iPhone13Pro';
import Macbook from './Photocards/Macbook';
import IMac from './Photocards/iMac';
import IPadPro from './Photocards/iPadPro';


const ProductGallery = () => {
    return (
        <div id="product-gallery">
            <IPhone />
            <Airpods />
            <Watch />
            <Homepod />
            <IPadMini />
            <IPhone13Pro />
            <Macbook />
            <IMac />
            <IPadPro />
        </div>
    )
}

export default ProductGallery;
