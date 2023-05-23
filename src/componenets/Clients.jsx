import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-3 p-3 h-[100px] rounded-lg feature-card`}
        >
          <img
            src={client.logo}
            alt="client_logo"
            className="sm:w-[192px] w-[100px] object-contain text-green"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
