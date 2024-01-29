import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div className="wrap">
      <Header />
      <main id="main">
        <h2>{props.title}</h2>
        {props.children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
