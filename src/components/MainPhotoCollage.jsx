import GraphicGroup from '../assets/graphic-group-2.png'
import styles from './MainPhotoCollage.module.css'

const MainPhotoCollage = () => {
    return (
        <div className={styles.mainPhotoCollage}>
            <img
                src={GraphicGroup}
                className={styles.graphicGroup}
                alt="photo collage"
                draggable={false}
            />
            {/*     <img src={MainPhoto} className={styles.mainPhoto} />
      <img src={Graphic1} className={styles.graphic1} />
      <img src={Graphic2} className={styles.graphic2} />
      <img src={Graphic3} className={styles.graphic3} /> */}
        </div>
    )
}

export default MainPhotoCollage
