import React from 'react'
import styles from './button.module.scss';
import classNames from 'classnames';
export default function Button({ text, white }) {
    return (
        <div className={classNames(styles.button, white ? styles.white : "")}>
            <button aria-label={text}>
                {text}
            </button>
        </div>
    )
}
