import style from './Slide_1.module.scss'
import iconBtn from '../../../img/arrow.png'
import decor_1 from '../../../img/slide_1/bacillus_1.png'
import decor_2 from '../../../img/slide_1/bacillus_2.png'
import decor_3 from '../../../img/slide_1/bacillus_3.png'
import decor_4 from '../../../img/slide_1/bacillus_4.png'
import decor_5 from '../../../img/slide_1/bacillus_5.png'
import decor_6 from '../../../img/slide_1/bacillus_6.png'
import decor_7 from '../../../img/slide_1/bacillus_7.png'
import decor_8 from '../../../img/slide_1/bacillus_8.png'
import decor_9 from '../../../img/slide_1/bacillus_9.png'
import {ButtonSlider} from "../button/ButtonSlider";

type propType = {
    getForward: (value: number) => void
}

export const Slide_1 = ({getForward}: propType) => {
    const forward = () => getForward(1)
    return (
        <div className={style.slide}>
            <div className={style.slide__inner}>
                <img className={style.slide__decor_1} src={decor_1} alt=" "/>
                <img className={style.slide__decor_2} src={decor_2} alt=" "/>
                <img className={style.slide__decor_3} src={decor_3} alt=" "/>
                <img className={style.slide__decor_4} src={decor_4} alt=" "/>
                <img className={style.slide__decor_5} src={decor_5} alt=" "/>
                <img className={style.slide__decor_6} src={decor_6} alt=" "/>
                <img className={style.slide__decor_7} src={decor_7} alt=" "/>
                <img className={style.slide__decor_8} src={decor_8} alt=" "/>
                <img className={style.slide__decor_9} src={decor_9} alt=" "/>
                <h1 className={style.slide__title}>
                    привет,<br/>
                    <span className={style.slide__title_big}>
                        это
                        <span className={style.slide__title_big_bold}>
                            не <br/>
                        </span>
                        коммерческое задание
                    </span>
                    <span className={style.slide__btn}>
                        <ButtonSlider clickHendler={forward} text={'Что дальше ?'} icon={iconBtn} width={'300px'}/>
                    </span>
                </h1>
            </div>
        </div>
    )
}



