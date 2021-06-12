
import s from "./Help.module.css";
import Helmet from "react-helmet";

let Help = (props) => {
    // let TITLE = "Help for MADNOTBAD";
    console.log(props);

    return (<div>
            <Helmet>
                <title>{props.title}</title>
            </Helmet>
            <div className={s.modal}>
                      <div className={s.modal__content}>В качестве помощи группе, вы можете перевести любую сумму на счет<br/> <strong>0000 2222 7777 8888</strong></div>
                    </div>
        </div>
    )
}

export default Help;