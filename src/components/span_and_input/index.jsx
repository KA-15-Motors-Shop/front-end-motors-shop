import Input from "../input";
import { Span } from "./style";

function SpanAndInput({ index }) {
  return (
    <>
      <Span>{index}º Imagem da galeria</Span>
      <Input
        text="https://image.com"
        c={"var(--grey7)"}
        h={48}
        w={466}
        bd_color="var(--grey7)"
        p={"0 16px"}
        mob_w={314}
      />
    </>
  );
}

export default SpanAndInput;
