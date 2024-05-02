import styles from './Category.module.scss'

function Category(props) {
    const { title, cta, key, imageUrl } = props;
    return (
        <div className={styles.category_container} key={key}>
            <div className={styles.background_image} style={{
                backgroundImage: `url(${imageUrl})`
            }}></div>
            <div className={styles.category_body_container}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.cta}>{cta}</p>
            </div>
        </div>
    )
}

export default Category