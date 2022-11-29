import Item from "../Item";
import { TableStyled } from "./Table.style";
import { FC, useState, useCallback } from "react";

const NUMBER_OF_ITEMS = 5000;

const Table: FC = () => {
  const defaultData = () => {
    const dynamicData = [];

    for (var i = 0; i < NUMBER_OF_ITEMS; i++) {
      dynamicData.push({ itemId: i, color: "#fff" });
    }

    return dynamicData;
  };

  const [data, setData] = useState(defaultData);

  const moveItemToTopHandler = useCallback((itemId, color) => {
    setData((current) => [
      { itemId, color },
      ...current.filter((item) => item.itemId !== itemId)
    ]);
  }, []);

  return (
    <TableStyled>
      {data.map((item) => (
        <Item key={item.itemId} {...item} onMoveItem={moveItemToTopHandler} />
      ))}
    </TableStyled>
  );
};

export default Table;
