import Button from "../../button";
import { DivTop, Section, Span, TextArea, Titulo, Div } from "./style";
import iconX from "../../../assets/x.svg";
import Input from "../../input";

function ModalEditProfile() {
  return (
    <Section>
      <DivTop>
        <Titulo>Editar perfil</Titulo>
        <Button icon={iconX} c={"gray"} h={24} w={24} p={0} />
      </DivTop>
      <Titulo>Informações pessoais</Titulo>
      <Span>Nome</Span>
      <Input
        w={466}
        h={48}
        text="Nome completo"
        c="var(--grey3)"
        bd_color={"var(--grey7)"}
        p={"0 16px"}
        mob_w={314}
      />
      <Span>Email</Span>
      <Input
        w={466}
        h={48}
        text="example@email.com"
        type="email"
        c="var(--grey3)"
        bd_color={"var(--grey7)"}
        p={"0 16px"}
        mob_w={314}
      />
      <Span>CPF</Span>
      <Input
        w={466}
        h={48}
        text="900.880.090-00"
        c="var(--grey3)"
        bd_color={"var(--grey7)"}
        p={"0 16px"}
        mob_w={314}
      />
      <Span>Celular</Span>
      <Input
        w={466}
        h={48}
        text="(084) 99191-9292"
        type="tel"
        c="var(--grey3)"
        bd_color={"var(--grey7)"}
        p={"0 16px"}
        mob_w={314}
      />
      <Span>Data de nascimento</Span>
      <Input
        w={466}
        h={48}
        type={"date"}
        c="var(--grey3)"
        bd_color={"var(--grey7)"}
        p={"0 16px"}
        mob_w={314}
      />
      <Span>Descrição</Span>
      <TextArea> lorem ipsolum dsjklaj klaslkd fklashkjha jkhd jhjka dhjkahkjdhklahdkash
        hyfdskj skdjhfjhsad hjsdhfkj h hkjsdhjkfh hsadfjk
      </TextArea>
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

export default ModalEditProfile;
