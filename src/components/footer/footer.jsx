import { DivFooter, Span } from "./style";
import LogoFooter from "../../assets/Motors shop.svg";
import angleUp from "../../assets/angle-up.svg";
import Button from "../button/button";

function Footer () {
    return (
        <DivFooter>
            <img src={LogoFooter} alt="logo"/>

            <Span>© 2022 -  Todos os direitos reservados.</Span>

            <Button 
                onClick={() => {window.scrollTo(0, 0)}} 
                icon={angleUp} bg={"#212529"} 
                w={53} 
                h={50}/>
        </DivFooter>
    )
};

export default Footer;