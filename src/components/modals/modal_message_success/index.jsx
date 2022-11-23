import Button from "../../button"
import { DivBottom, DivTop, H3, Section, SpanBottom, SpanTop } from "./style"
import iconX from "../../../assets/x.svg";
import { useNavigate } from "react-router-dom";

function ModalMessageSuccess () {

    const navigate = useNavigate()
    return (
        <Section>
            <DivTop>
                <SpanTop>Sucesso!</SpanTop>
                <Button icon={iconX} c={"var(--grey4)"} h={24} w={24} p={0}/>
            </DivTop>
            <DivBottom>
                <H3>Seu anúncio foi criado com sucesso!</H3>
                <SpanBottom>
                    Agora Você poderá ver seus
                    negócios crescendo em grande escala
                </SpanBottom>
            </DivBottom>
        </Section>
    )
};

export default ModalMessageSuccess