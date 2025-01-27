import styles from "./Container.module.scss";

interface ContainerProps {
  children: React.ReactNode
}

export const Container = ({children}: ContainerProps) => (
  <div className={styles.Container} >
    {children}
  </div>
);
