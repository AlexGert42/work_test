import style from "./ButtonSlider.module.scss";

type propsType = {
    clickHendler: () => void
    text: string
    icon: string
    width: string
}

export const ButtonSlider = ({clickHendler, text, icon, width}: propsType) => {
    return (
        <button className={style.btn} style={{width}} onClick={clickHendler}>
            <span className={style.btn__icon}>
                <img className={style.btn__img} src={icon} alt=" "/>
            </span>
            <span className={style.btn__text}>{text}</span>
        </button>
    )
}
