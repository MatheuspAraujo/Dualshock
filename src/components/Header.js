export default function Header() {
  return (
    <header>
      <div>
        <img src="/assets/logo.png" />
      </div>

      <nav>
        <div className="menu">
          <ul>
            <li>
              <a href="#">Consoles</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Controllers</a>
            </li>
            <li>
              <a href="#">Prices</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
        </div>
      </nav>

      <div>
        <button>Sign In</button>
      </div>
    </header>
  );
}
