import React from 'react';
import styles from "./Item.module.css"
import placeholder from "../assets/nft-placeholder.jpg"

const Item = () => {
    return (
        <div onClick={() => {alert("test")}} className={styles.card}>
            <img className={styles.thumbnail} src={placeholder} alt=""/>
            <p className={styles.title}>Name of the Asset</p>
            <p className={styles.price}>0 ETH</p>
        </div>
    )
};

export default Item;