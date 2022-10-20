import { Line, RulerStyle, Title } from "./style";

interface IRulerProps {
  children?: string;
  textStyle?: string;
}

const Ruler = ({ children, textStyle }: IRulerProps) => {
  return (
    <RulerStyle>
      <Line />
      <Title className={textStyle}>{children}</Title>
      <Line />
    </RulerStyle>
  );
};

export default Ruler;
