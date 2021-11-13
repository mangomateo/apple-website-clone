
import Logo from '../img/apple-logo.svg';
import ShoppingBag from '../img/shopping-bag.svg';

const Header = () => {
    return (
        <div>
            <nav>
                <ul className="navbar">
                    <li>
                        <img src={Logo} alt="Apple Logo" />
                    </li>
                    <li>
                        <p>Store</p>
                    </li>
                    <li>
                        <p>Mac</p>
                    </li>   
                    <li>
                        <p>iPad</p>
                    </li>   
                    <li>
                        <p>iPhone</p>
                    </li>   
                    <li>
                        <p>Watch</p>
                    </li>   
                    <li>
                        <p>Airpods</p>
                    </li>   
                    <li>
                        <p>TV & Home</p>
                    </li>   
                    <li>
                        <p>Only on Apple</p>
                    </li>   
                    <li>
                        <p>Accessories</p>
                    </li>   
                    <li>
                        <p>Support</p>
                    </li>   
                    <li>
                        <img src={ShoppingBag} alt="Shopping Bag" />
                    </li>         
                </ul>
            </nav>
            <div className="holiday-shop">
                <p>Shop early for the best selection of holiday favourites. Shop now</p>
            </div>            
        </div>
    )
}

export default Header;
