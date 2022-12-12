import MainPhoto from "../assets/main-photo.png"
import GraphicGroup from "../assets/graphic-group.png"
import Graphic1 from "../assets/graphic1.svg"
import Graphic2 from "../assets/graphic2.svg"
import Graphic3 from "../assets/graphic3.svg"
import styles from "./MainPhotoCollage.module.css"

const MainPhotoCollage = () => {
  return (
    <div className={styles.mainPhotoCollage}>
      <img src={GraphicGroup} className={styles.graphicGroup} />
  {/*     <img src={MainPhoto} className={styles.mainPhoto} />
      <img src={Graphic1} className={styles.graphic1} />
      <img src={Graphic2} className={styles.graphic2} />
      <img src={Graphic3} className={styles.graphic3} /> */}
    </div>
  )
}

export default MainPhotoCollage
