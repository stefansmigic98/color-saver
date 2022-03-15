import styles from './Button.module.scss';
interface ButtonProps {
  children: string | HTMLElement;
  size?: string;
  type?: string;
}

const Button: React.FC<ButtonProps> = ({ children, size, type }) => {
  return <button className={styles.btn}>{children}</button>;
};

export default Button;
