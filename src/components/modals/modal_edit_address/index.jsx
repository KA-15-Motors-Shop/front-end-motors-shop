import Button from "../../button";
import {
  DivTop,
  H4,
  HorizontalDiv,
  Section,
  Span,
  Titulo,
  VerticalDiv,
  Div
} from "./style";
import iconX from "../../../assets/x.svg";
import Input from "../../input";

function ModalEditAddress() {
  return (
    <Section>
      <DivTop>
        <Titulo>Editar endereço</Titulo>
        <Button icon={iconX} h={24} w={24} p={0} />
      </DivTop>
      <Titulo>Informações pessoais</Titulo>
      <Span>CEP</Span>
      <Input
        w={466}
        h={48}
        text="898888-888"
        c="var(--grey3)"
        bd_color={"var(--grey7)"}
        p={"0 16px"}
        mob_w={314}
      />
      <HorizontalDiv>
        <VerticalDiv>
          <H4>Estado</H4>
          <Input
            w={228}
            h={48}
            text="Paraná"
            c="var(--grey3)"
            bd_color={"var(--grey7)"}
            p={"0 16px"}
            mob_w={152}
          />
        </VerticalDiv>
        <VerticalDiv>
          <H4>Cidade</H4>
          <Input
            w={228}
            h={48}
            text="Curitiba"
            c="var(--grey3)"
            bd_color={"var(--grey7)"}
            p={"0 16px"}
            mob_w={152}
          />
        </VerticalDiv>
      </HorizontalDiv>
      <Span>Rua</Span>
      <Input
        w={466}
        h={48}
        text="Rua do Paraná"
        c="var(--grey3)"
        bd_color={"var(--grey7)"}
        p={"0 16px"}
        mob_w={314}
      />
      <HorizontalDiv>
        <VerticalDiv>
          <H4>Número</H4>
          <Input
            w={228}
            h={48}
            text="1029"
            type={"number"}
            c="var(--grey3)"
            bd_color={"var(--grey7)"}
            p={"0 16px"}
            mob_w={152}
          />
        </VerticalDiv>
        <VerticalDiv>
          <H4>Complemento</H4>
          <Input
            w={228}
            h={48}
            text="Apart 12"
            c="var(--grey3)"
            bd_color={"var(--grey7)"}
            p={"0 16px"}
            mob_w={152}
          />
        </VerticalDiv>
      </HorizontalDiv>
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
          text="Salvar alterações"
          h={48}
          w={193}
          bg={"var(--brand-1)"}
          c={"var(--whitefixed)"}
          mob_w={192}
          m={"0 0 0 10px"}
        />
      </Div>
    </Section>
  );
}

export default ModalEditAddress;
