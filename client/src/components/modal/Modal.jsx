import "./modal.css"
import { getPredict } from "../../utils/fetch";
const Modal = ({children,onClose}) =>{

    
    const handleStopPropagation = (e)=>{
        e.stopPropagation();
    }
    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-body" onClick={handleStopPropagation}>
                <div className="modal-header">
                {/* <h1>El precio aprox es: </h1>
                <p>1463.2255</p> */}
                 {children}
        
                    <button onClick={onClose} className="absolute_right_top">X</button>
                </div>
                
            </div>
        </div>
    )
}

export default Modal;