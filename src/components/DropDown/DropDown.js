import React from "react";
import { DDBox, DDItem, DropDownContainer } from "./styled";

export const DropDown = ({ style, listItem, handleClick }) => {
  const { containerStyle, itemStyle } = style || {};
  return (
    <DropDownContainer overrideStyle={containerStyle}>
      <DDBox overrideStyle={itemStyle}>
        {listItem.map(({ name, ...others }, idx) => (
          <DDItem
            name={name}
            key={idx}
            onClick={(e) => handleClick(e, name, others)}
          >
            {name}
          </DDItem>
        ))}
      </DDBox>
    </DropDownContainer>
  );
};
