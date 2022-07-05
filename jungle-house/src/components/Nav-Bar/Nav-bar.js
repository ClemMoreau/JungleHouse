import './Nav-bar.css'

function NavBar() {
    return (
        <nav className="nav-bar">
            <ul className="nav-link">
                <li><a href="/">Home</a></li>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/cart">Cart</a></li>
            </ul>
            <ul className="nav-link">
                <li><a href="http://facebook.com">Facebook</a></li>
                <li><a href="http://twitter.com">Twitter</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;