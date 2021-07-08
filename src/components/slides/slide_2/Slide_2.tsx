import style from './Slide_2.module.scss'
import {useEffect, useState} from "react";
import decor_1 from "../../../img/slide_2/img_1.png";
import decor_2 from "../../../img/slide_2/img_2.png";
import decor_3 from "../../../img/slide_2/img_3.png";
import decor_4 from "../../../img/slide_2/img_4.png";
import decor_5 from "../../../img/slide_2/img_5.png";

type propsType = {
    numberSlide: number
}
export const Slide_2 = ({numberSlide}: propsType) => {
    const [range, setRange] = useState(0)
    const [show, setShow] = useState(false)
    const chengeRange = (e: any) => setRange(e.target.value)
    useEffect(() => {
        if (numberSlide === 1) {
            setShow(true)
        } else if (numberSlide === 2) {
            setShow(true)
        } else {
            setTimeout(() => {
                setShow(false)
            }, 500)
        }
    }, [numberSlide])

    return (
        <div className={style.slide}>
            <div className={style.slide__inner}>
                {show &&
                <>
                    <img className={style.slide__decor_1} src={decor_1} alt=""/>
                    <img className={style.slide__decor_2} src={decor_2} alt=""/>
                    <img className={style.slide__decor_3} src={decor_3} alt=""/>
                    <img className={style.slide__decor_4} src={decor_4} alt=""/>
                    <img className={style.slide__decor_5} src={decor_5} alt=""/>
                </>
                }
                <h1 className={style.slide__title}>текст<br/> сообщения</h1>
                <div className={style.slide__content}>
                    <div className={style.slide__range}>
                        <input
                            type={'range'}
                            min={0}
                            max={100}
                            value={range}
                            step={1}
                            onChange={e => chengeRange(e)}
                            className={style.slide__scroll}
                        />
                    </div>

                    <div className={style.slide__block}>
                        <div className={style.slide__block_inner}>
                            <div className={style.slide__text} style={{bottom: `${range}%`}}>
                                <span className={style.slide__text_bold}>Сперматозоид</span> (от др.-греч. σπέρμα род.
                                п. σπέρματος здесь «сперма»
                                + ζωή «жизнь» + εδος «вид, облик», лат. spermatozoon, spermium) —
                                мужская половая клетка (гамета) размножающихся посредством
                                оогамии организмов.
                                Сперматозоиды обычно обладают способностью к активному дви-
                                жению и служат для оплодотворения женской гаметы — яйцеклетки.
                                Обычно они значительно меньше яйцеклеток, поскольку не содержат
                                столь значительного количества цитоплазмы и производятся орга-
                                низмом одновременно в значительном количестве.
                                Типичное строение сперматозоида отражает форму общего предка
                                животных и грибов: одноклеточный ядерный организм, передвига-
                                ющийся за счёт жгутика в задней части, используя его подобно
                                хвосту. Обширная группа происходящих от него организмов вклю-
                                чает в себя животных, большинство грибов и некоторые группы
                                протистов и называется кланом заднежгутиковых. Большинство
                                других эукариот со жгутиками имеют их в передней части.
                                В широком смысле слова по традиции сперматозоидами иногда на-
                                зывают мужские половые клетки также у растений, к ним применя-
                                ют также термины спермии или антерозоиды (их применяют также
                                к традиционно сближавшимся с растениями грибам).
                                <span
                                    className={style.slide__text_link}>https://ru.wikipedia.org/wiki/сперматозоид</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}