import "../Collapse/collapse.css"
import { useState } from "react"
import arrow from "../../Assets/arrow.png"

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)
    const [animation, setAnimation] = useState(0)

    function close() {
        setAnimation(0);
        setTimeout(() => {setIsOpen(false)}, 300);
    }

    function open() {
        setIsOpen(true);
        setAnimation(1);
    }
 
    return isOpen ? (
        <div className="collapse" animation={animation} >
            <button  className="collapse_bar" >
                <div className="title">{title}</div>
                <img src={arrow} alt="" className="arrow" animation={animation} onClick={() => close()} />
            </button>
            <div className="collapse_content" >{content}</div>
        </div>
    ) : (
        <div className="collapse" >
            <button  className="collapse_bar" >
                <div className="title">{title}</div>
                <img src={arrow} alt="" className="arrow" animation={animation} onClick={() => open()} />
                </button>
        </div>
    )
}

export default Collapse