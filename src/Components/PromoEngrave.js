import EngraveLogo from '../img/icon_engrave.png';

const PromoEngrave = () => {
    return (
        <div className="engrave">
            <img src={EngraveLogo} alt="Smiley Face" />
            <p>Engrave their gift in time for the holidays with a mix of emoji, names, initials and numbers. Only at Apple.</p>
            {/* eslint-disable-next-line */}
            <a href="#">Learn More</a>  
        </div>
    )
}

export default PromoEngrave;
