import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  DetailName: string;
  DetailVal: number;
}

export default function Header(props: HeaderProps) {
  return (
    <>
      <img className={styles.UserHeroImg} src="./HeroImg.svg" />
      <div className={styles.UserTotal}>
        {props.DetailName}
        <span className={styles.UserTotalSpan}>{props.DetailVal}</span>
      </div>
    </>
  );
}