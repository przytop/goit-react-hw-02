import { MdOutlineLocalCafe } from "react-icons/md";
import css from "./Description.module.css";

export default function Description() {
  return (
    <div className={css.description}>
      <div className={css.title}>
        <MdOutlineLocalCafe className={css.logo} size="77" />
        <h1>Sip Happens Café</h1>
      </div>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}
