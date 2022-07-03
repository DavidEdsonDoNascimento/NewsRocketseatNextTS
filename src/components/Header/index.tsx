import Image from 'next/image';
import logo from '@imgs/logo.svg';
import styles from './styles.module.scss';
import { SignInButton } from '@components/SignInButton';

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logo} alt="logo" />
        <nav>
          <a href="#" className={styles.active}>Home</a>
          <a href="#">Posts</a>
        </nav>/
        <SignInButton />
      </div>
    </header>
  );
}