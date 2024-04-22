import Category from "../category/Category"
import styles from './Display.module.scss'


function Display(props) {
    const { list } = props


    return (

        <div className={styles.display_container}>
            {list.map((category) => (
                <Category
                    key={category.key}
                    title={category.title}
                    cta="Shop Now!"
                    imageUrl={category.imageUrl}
                />
            ))}
        </div>

    )
}

export default Display