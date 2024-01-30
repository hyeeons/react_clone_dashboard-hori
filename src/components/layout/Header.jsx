const Header = () => {
  return (
    <header>
      <h1>
        <a href="/">Dashboard</a>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="/">Main Dashboard</a>
          </li>
          <li>
            <a href="/marketplace">NFT Marketplace</a>
          </li>
          <li>
            <a href="/datatables">Data Tables</a>
          </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li>
            <a href="/signin">Sigh In</a>
          </li>
          <li>
            <a href="/rtladmin">RTL Admin</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
