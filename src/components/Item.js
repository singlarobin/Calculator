import styled from "styled-components";

const Button = styled.button`
  padding 0.5rem;
  font-size:1rem;
  background: #ffcead;
  text-align: center;
  border:1px solid #ffcead;
  border-radius: 2rem;

  @media(max-width:500px){
    font-size:1rem;
  }
`;

const Item = props => {
const {output, value, handleClick } = props;

  const onHandleClick = () => {
    switch (value) {
      case "C":
        handleClick("0");
        break;
      case "DEL":
        let str = output.slice(0, output.length - 1);
        if (!str) {
          str = "0";
        }
        handleClick(str);
        break;
      case "=":
        handleClick(eval(output).toString());
        break;
      default:
        if (output === "0") {
          handleClick(value);
        } else {
          handleClick(output + value);
        }
        console.log('output', typeof(output));
        console.log('value', typeof(value));
    }
  };

  return <Button onClick={() => onHandleClick()}>{value}</Button>;
};

export default Item;
