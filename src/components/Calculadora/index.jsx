import React from 'react'
import styles from './styles.module.css';

export default function Calculadora() {
  return (
    <div className={styles.container}>
      <h1>Calculadora Simples</h1>

      <input type="text" placeholder="Digite o primeiro número" className={styles.input} />
      <input type="text" placeholder="Digite o segundo número" className={styles.input} />

      <div className={styles.botoes}>
        <button className={styles.btn}>Somar</button>
        <button className={styles.btn}>Subtrair</button>
        <button className={styles.btn}>Multiplicar</button>
        <button className={styles.btn}>Dividir</button>
      </div>

      <p className={styles.resultado}>Resultado:</p>
    </div>
  );
}
