import style from './ModalWindow.module.scss';
import {useState} from "react";


type modalPropsType = {
    collModalWindow: (value: boolean) => void
    items: string[]
    width: string
    height: string
}

export const ModalWindow = ({collModalWindow, items, width, height}: modalPropsType) => {
    const closeModal = () => collModalWindow(false)
    const pages = Math.ceil(items.length / 3)
    const totalPage = new Array(pages).fill(0)
    const [countPage, setCountPage] = useState(0)

    const chengePage = (page: number) => {
        setCountPage(page)
    }

    const paginationBack = () => {
        setCountPage(countPage === 0 ? 0 : countPage - 1)
    }
    const paginationNext = () => {
        setCountPage(countPage === (pages - 1) ? (pages - 1) : countPage + 1)
    }

    return (
        <div className={style.modal__overlay} style={{width, height}}>
            <div className={style.modal}>
                <div className={style.modal__inner}>
                    <button className={style.modal__btn} onClick={closeModal}/>
                    <ul className={style.modal__list}>
                        {items.map((el: string, i: number) => {
                            if (Math.ceil((i + 1) / 3) === countPage + 1) {
                                return (
                                    <li className={style.modal__item} key={i}>
                                        <span className={style.modal__item_count}>{'0' + (i + 1)}</span>
                                        <span className={style.modal__item_text}>{el}</span>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                    <div className={style.modal__pagination}>
                        <div className={style.modal__pagination_back} onClick={paginationBack}/>
                        {totalPage.map((el: number, i: number) => {
                            return <div
                                className={`${style.modal__pagination_item} ${countPage === i && style.active}`}
                                key={i}
                                onClick={() => chengePage(i)}
                            />
                        })}
                        <div className={style.modal__pagination_next} onClick={paginationNext}/>
                    </div>
                </div>
            </div>
        </div>
    )
}