import Button from "../../button"
import { Div, Img, Modal } from "./style";
import iconX from "../../../assets/x.svg"


function ModalImageVehicle ({ title, image }) {
    return (
        <Modal>
            <Div>
                <span>{title}</span>
                <Button icon={iconX} w={24} h={24} />
            </Div>
            <Img src={image} alt={title}/>
        </Modal>
    )
};

export default ModalImageVehicle;
