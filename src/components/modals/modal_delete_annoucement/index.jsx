import Button from "../../button";
import { Div, DivBottom, DivTop, H3, Section, P, H2 } from "./style";
import iconX from "../../../assets/x.svg";

function ModalDeleteAnnoucement() {
  return (
    <Section>
      <DivTop>
        <H2>Excluir anúncio</H2>
        <Button icon={iconX} c={"var(--grey4)"} h={24} w={24} p={0} />
      </DivTop>
      <DivBottom>
        <H3>Tem certeza que deseja remover este anúncio?</H3>
        <P>
          Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
          conta e removerá seus dados de nossos servidores.
        </P>
      </DivBottom>
      <Div>
        <Button
          text="Cancelar"
          h={48}
          w={126}
          bg="var(--grey6)"
          c="var(--grey2)"
          m="0 0 2px 0"
          mob_w={113}
        />
        <Button
          text="Sim, excluir anúncio"
          h={48}
          w={193}
          bg={"var(--alert2)"}
          c={"var(--alert1)"}
          mob_w={192}
          m={"0 0 0 10px"}
        />
      </Div>
    </Section>
  );
}

export default ModalDeleteAnnoucement;
