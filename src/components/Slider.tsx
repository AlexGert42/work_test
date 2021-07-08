import style from './Slider.module.scss'
import homeBtn from '../img/home_icon.png'
import backgroundSlider from '../img/bg.jpg'
import logo from '../img/slide_1/onpoint.png'

import {useEffect, useState} from "react";
import {Slide_1} from "./slides/slide_1/Slide_1";
import {Slide_2} from './slides/slide_2/Slide_2';
import {Slide_3} from './slides/slide_3/Slide_3';


export const Slider = () => {
    const [home, setHome] = useState(false)
    const getHome = (value: boolean) => setHome(value)

    return (
        <div className={style.slider}>
            <div className={style.slider__inner}>
                <nav className={`${style.slider__home} ${style.home}`}>
                    <button className={style.home__btn} onClick={() => getHome(true)}>
                        <img className={style.home__img} src={homeBtn} alt="Home"/>
                    </button>
                    <span className={style.home__border}/>
                    <p className={style.home__lable}>project</p>
                </nav>
                <ContentSlider
                    home={home}
                    setHome={setHome}
                />
                <img className={style.slider__logo} src={logo} alt="onpoint"/>
            </div>
        </div>
    )
}

type ContentSliderPropsType = {
    home: boolean
    setHome: (value: boolean) => void
}


const ContentSlider = ({home, setHome}: ContentSliderPropsType) => {
    const [count, setCount] = useState(0)
    const [down, setDown] = useState(false)
    const [startX, setStartX] = useState(0)
    const [animation, setAnimation] = useState('')

    const sliderStylesContent = {
        width: '300%',
        height: '768px',
        marginLeft: `-${100 * count}%`,
        transition: animation,
        backgroundImage: `url(${backgroundSlider})`,
        backgroundSize: 'cover',
        display: 'flex',
        cursor: 'pointer',

    }

    useEffect(() => {
        if (home) setCount(0)
        setHome(false)
    }, [home])


    const mouseDown = (e: any) => {
        setDown(true)
        if (e.type === 'touchstart') {
            setStartX(e.changedTouches[0].screenX)
        } else if (e.type === 'mousedown') {
            setStartX(e.screenX)
        }
    }

    const mouseUp = (e: any) => {
        if (down) {
            if (e.type === 'mouseup') {
                if (startX - e.screenX < -100) {
                    let i = count - 1 <= 0 ? 0 : count - 1
                    setCount(i)
                }
                if (startX - e.screenX > 100) {
                    let i = count + 1 >= 3 ? 2 : count + 1
                    setCount(i)
                }
            } else if (e.type === 'touchend') {
                if (startX - e.changedTouches[0].screenX < -100) {
                    let i = count - 1 <= 0 ? 0 : count - 1
                    setCount(i)
                }
                if (startX - e.changedTouches[0].screenX > 100) {
                    let i = count + 1 >= 3 ? 2 : count + 1
                    setCount(i)
                }
            }
            setAnimation('margin-left 1s')
        }
        setDown(false)
    }

    const getForward = (value: number) => setCount(value)

    return (
        <div
            style={sliderStylesContent}
            onMouseDown={e => mouseDown(e)}
            onMouseUp={e => mouseUp(e)}
            onTouchStart={e => mouseDown(e)}
            onTouchEnd={e => mouseUp(e)}
        >
            <Slide_1 getForward={getForward}/>
            <Slide_2 numberSlide={count}/>
            <Slide_3/>
        </div>
    )
}






