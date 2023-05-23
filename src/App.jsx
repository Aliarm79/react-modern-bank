import styles from "./style";
import Navbar from "./componenets/Navbar";
import Hero from "./componenets/Hero";
import Stats from "./componenets/Stats";
import Business from "./componenets/Business";
import Billing from "./componenets/Billing";
import CardDeal from "./componenets/CardDeal";
import Testimonials from "./componenets/Testimonials";
import Clients from "./componenets/Clients";
import CTA from "./componenets/CTA";
import Footer from "./componenets/Footer";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
