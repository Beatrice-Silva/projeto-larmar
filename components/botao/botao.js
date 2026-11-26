import styles from "./Botao.module.css";

export default function Botao({
  children,
  type = "button",
  variante = "primario",
  ...props
}) {
  return (
    <button
      {...props}
      type={type}
      className={`${styles.botao} ${styles[variante] ?? ""}`}
    >
      {children}
    </button>
  );
}
