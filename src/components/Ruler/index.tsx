import { Line, Title } from "./style";

interface IRulerProps {
  children: string;
  textStyle: string;
}

const Ruler = ({ children, textStyle }: IRulerProps) => {
  return (
    <>
      <Line />
      <Title className={textStyle}>{children}</Title>
      <Line />
    </>
  );
};

export default Ruler;
