import styles from './maker.module.css';

const Maker = () => {
    
    return (
        <div className={styles.maker}>
            <h1>maker</h1>
            <div className={styles.editor}>
                <h2>editor</h2>
                <div className={styles.editor_ctrg}>
                    <ul className={styles.ctrg__essential}>
                        <h2>ctrg__essential</h2>
                        <li>
                            <form className={styles.editor_form}>
                                <div className={styles.checkbox__container}>
                                    <input type="checkbox" id="checkbox"  />    
                                    <label htmlFor="checkbox">Pick</label>
                                </div>
                                <input className={styles.producer} type="text" placeholder="producer"/>
                                <input className={styles.name} type="text" placeholder="name"/>
                                <input className={styles.weight} type="number" placeholder="g"/>
                                <input className={styles.price} type="text" placeholder="₩"/>
                                <input className={styles.comment} type="text" placeholder="comment"/>
                            </form></li>
                        <li><form className={styles.editor_form}>
                                <div className={styles.checkbox__container}>
                                    <input type="checkbox" id="checkbox"  />    
                                    <label htmlFor="checkbox">Pick</label>
                                </div>
                                <input className={styles.producer} type="text" placeholder="producer"/>
                                <input className={styles.name} type="text" placeholder="name"/>
                                <input className={styles.weight} type="number" placeholder="g"/>
                                <input className={styles.price} type="text" placeholder="₩"/>
                                <input className={styles.comment} type="text" placeholder="comment"/>
                            </form></li>
                        <li><form className={styles.editor_form}>
                                <div className={styles.checkbox__container}>
                                    <input type="checkbox" id="checkbox"  />    
                                    <label htmlFor="checkbox">Pick</label>
                                </div>
                                <input className={styles.producer} type="text" placeholder="producer"/>
                                <input className={styles.name} type="text" placeholder="name"/>
                                <input className={styles.weight} type="number" placeholder="g"/>
                                <input className={styles.price} type="text" placeholder="₩"/>
                                <input className={styles.comment} type="text" placeholder="comment"/>
                            </form></li>
                        </ul>
                    <ul className={styles.ctrg__cookware}>
                        <h2>ctrg__cookware</h2>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        </ul>
                    <ul className={styles.ctrg__equiment}>
                        <h2>ctrg__equiment</h2>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        </ul>
                    <ul className={styles.ctrg__clothes}>
                        <h2>ctrg__clothes</h2>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        </ul>
                    <ul className={styles.ctrg__etc}>
                        <h2>ctrg__etc</h2>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        </ul>
                </div>
            </div>
            <div className={styles.addForm}>
                <h2>addForm</h2>
            </div>
        </div>
    )
}


export default Maker;