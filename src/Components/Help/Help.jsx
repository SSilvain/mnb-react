
import s from "./Help.module.css";
import Helmet from "react-helmet";
import { NavLink } from "react-router-dom";


let Help = (props) => {
    // let TITLE = "Help for MADNOTBAD";
    console.log(props);

    return (<div>
        <Helmet>
            <title>{props.title}</title>
        </Helmet>

        <div className={s.modal}>
            <NavLink to="/" className={s.closeBack}></NavLink>
            <div className={s.modal__content}>В якості допомоги групі, ви можете перевести будь-яку суму на:<br />номер клієнта Payoneer - <strong>41954500</strong><br /> рахунок Monobank - <strong>4441 1144 2982 6660</strong>
                <NavLink to="/" className={s.close}>x</NavLink>
            </div>
        </div>
    </div>
    )
}

export default Help;