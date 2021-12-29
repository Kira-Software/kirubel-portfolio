import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "../styles/layout.module.css";

function Layout({ children }) {
  return (
    <>
      <Navbar />
    <div className={styles.layout}>
        <div>{children}</div>
      </div>
        <Footer />
    </>
  );
}

export default Layout;
