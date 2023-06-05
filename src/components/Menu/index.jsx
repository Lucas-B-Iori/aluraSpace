import React from 'react';
import home from 'assets/home-ativo.png';
import maisCurtidas from 'assets/mais-curtidas-inativo.png';
import maisVistas from 'assets/mais-vistas-inativo.png';
import novas from 'assets/novas-inativo.png';
import surpreendaMe from 'assets/surpreenda-me-inativo.png';
import styles from './Menu.module.scss';

export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            <li className={styles.menu__item}>
                <img className={styles.img} src={home} alt="" />
                <a className={styles.a} href="/">Inicio</a>
            </li>
            <li className={styles.menu__item}>
                <img className={styles.img} src={maisCurtidas} alt="" />
                <a className={styles.a} href="/">Mais curtidas</a>
            </li>
            <li className={styles.menu__item}>
                <img className={styles.img} src={maisVistas} alt="" />
                <a className={styles.a} href="/">Mais vistas</a>
            </li>
            <li className={styles.menu__item}>
                <img className={styles.img} src={novas} alt="" />
                <a className={styles.a} href="/">Novas</a>
            </li>
            <li className={styles.menu__item}>
                <img className={styles.img} src={surpreendaMe} alt="" />
                <a className={styles.a} href="/">Surpreenda-me</a>
            </li>
        </ul>
    </nav>
  )
}
