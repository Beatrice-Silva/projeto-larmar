import styles from "./Campo.module.css";

export default function Campo({ rotulo, id, type = "text", erro, ...props }) {
  return (
    <div className={styles.campo}>
      <label htmlFor={id}>{rotulo}</label>
      <input
        {...props}
        id={id}
        type={type}
        aria-invalid={erro ? true : undefined}
        aria-describedby={erro ? `${id}-erro` : undefined}
      />
      {erro && <small id={`${id}-erro`}>{erro}</small>}
    </div>
  );
}
