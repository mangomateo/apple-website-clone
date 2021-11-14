import MixIcon from '../img/icon_mixandmatch.png';

const PromoMixMatch = () => {
    return (
        <div className="mix-match">
            <img src={MixIcon} alt="Mix and Match!" />
            <p>Mix and match cases and bands to their style. Only at Apple.</p>
            {/* eslint-disable-next-line */}
            <a href="#">Learn More</a>  
        </div>
    )
}

export default PromoMixMatch;
