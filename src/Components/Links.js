import About from './Linkgroups/AboutApple';
import Account from './Linkgroups/Account';
import Store from './Linkgroups/AppleStore';
import Values from './Linkgroups/AppleValues';
import Business from './Linkgroups/ForBusiness';
import Education from './Linkgroups/ForEducation';
import HealthCare from './Linkgroups/ForHealthcare';
import Services from './Linkgroups/Services';
import Shop from './Linkgroups/ShopAndLearn';

const Links = () => {
    return (
        <div id="link-container">
            <Shop />
            <Services />
            <Account />
            <Store />
            <Business />
            <Education />
            <HealthCare />
            <Values />
            <About />
        </div>
    )
}

export default Links;