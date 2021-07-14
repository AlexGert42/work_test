import {ButtonSlider} from '../button/ButtonSlider'
import style from './Slide_3.module.scss'
import iconBtn from '../../../img/slide_3/plus.png'
import decor_bottle from '../../../img/slide_3/bottle.png'
import decor_1 from '../../../img/slide_3/bubble_1.png'
import decor_2 from '../../../img/slide_3/bubble_2.png'
import decor_3 from '../../../img/slide_3/bubble_3.png'
import decor_4 from '../../../img/slide_3/bubble_4.png'
import decor_5 from '../../../img/slide_3/bubble_5.png'
import decor_6 from '../../../img/slide_3/bubble_6.png'
import decor_7 from '../../../img/slide_3/bubble_7.png'
import {useState} from "react";
import {ModalWindow} from "../modalWindow/ModalWindow";


export const Slide_3 = () => {
    const [modalWindow, setModalWindow] = useState(false)
    const collModalWindow = (value: boolean) => setModalWindow(value)


    return (
        <div className={style.slide}>
            <div className={style.slide__inner}>
                <img className={style.slide__decor_bottle} src={decor_bottle} alt=" "/>
                <img className={style.slide__decor_1} src={decor_1} alt=""/>
                <img className={style.slide__decor_2} src={decor_2} alt=""/>
                <img className={style.slide__decor_3} src={decor_3} alt=""/>
                <img className={style.slide__decor_4} src={decor_4} alt=""/>
                <img className={style.slide__decor_5} src={decor_5} alt=""/>
                <img className={style.slide__decor_6} src={decor_6} alt=""/>
                <img className={style.slide__decor_7} src={decor_7} alt=""/>
                <h1 className={style.slide__title}>
                    ключевое сообщение<br/>
                    <span className={style.slide__title_big}>brend<span
                        className={style.slide__title_big_bold}>xy</span></span>
                </h1>
                {modalWindow ?
                    <ModalWindow
                        collModalWindow={collModalWindow}
                        items={[
                            'Самое важное и ключевое преимущество нашего препарата',
                            'Второе по важности преимущество препарата',
                            'Еще одно важное преимущество препарата',
                            'Еще одно не менее важное преимущество препарата',
                            'Еще одно важное преимущество препарата',
                            'Еще одно важное преимущество препарата',
                        ]}
                        width={'1024px'}
                        height={'768px'}
                    />
                    :
                    <div className={style.slide__content}>
                        <div className={style.slide__box}>
                            <p className={style.slide__box_one}>
                                3 раза в день после
                                еды. После приема
                                препарата рекомен-
                                дуется воздержаться
                                от пищи и напитков
                                в течение 1 часа
                            </p>
                            <span className={style.slide__box_icon_one}/>
                        </div>
                        <div className={style.slide__box}>
                            <p className={style.slide__box_two}>
                                Курс лечения от 7 дней до 1 мес.
                            </p>
                            <span className={style.slide__box_icon_two}/>
                            <div className={style.slide__btn}>
                                <ButtonSlider
                                    clickHendler={() => collModalWindow(true)}
                                    text={'Подробнее'} icon={iconBtn}
                                    width={'260px'}
                                />
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

