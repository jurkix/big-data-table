import { ItemStyled, ButtonStyled } from "./Item.style";
import { FC, useState } from "react";

type ItemProps = {
  itemId: number;
  color: string;
  onMoveItem: (itemId: any, color: any) => void;
};

const Item: FC<ItemProps> = ({ itemId, color, onMoveItem }) => {
  const data = {
    white: "#fff",
    blue: "#2b4f8f",
    red: "#8f0000",
    green: "#57ab81",
    yellow: "#ffd966"
  };

  const [inputColor, setInputColor] = useState(color);
  const [inputValue, setInputValue] = useState("");

  const changeColorHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setInputColor(event.target.value);
  };

  const changeInputValueHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputValue(event.target.value);
  };

  const onClickButtonHandler = () => {
    onMoveItem(itemId, color);
  };

  return (
    <ItemStyled itemColor={inputColor}>
      <input
        onChange={changeInputValueHandler}
        type="text"
        value={inputValue}
      />
      <select onChange={changeColorHandler} value={inputColor}>
        {Object.entries(data).map(([key, val]) => (
          <option key={key} value={val}>
            {key}
          </option>
        ))}
      </select>
      <ButtonStyled onClick={onClickButtonHandler}>Move up</ButtonStyled>
    </ItemStyled>
  );
};

export default Item;
