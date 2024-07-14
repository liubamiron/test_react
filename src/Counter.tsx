import React, { ChangeEvent, FocusEvent } from 'react';
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { styled } from "@mui/material";

const StyledInput = styled("input")`
  background-color: #fff;
  color: rosybrown;
  border: 1px solid rgba(194, 85, 93, 0.5);
  border-left: 0;
  border-right: 0;
  padding: 0 10px;
  max-width: 42px;
  text-align: center;
  color: black;
  :focus-visible {
    outline: none;
  }
`;

const StyledButton = styled(Button)`
  background-color: #fff;
  color: red !important;
  pointer-events: none;
`;

interface CounterProps {
  value?: number;
  onChange: (value: number) => void;
  disabledDecrement?: boolean;
  editable?: boolean;
}

const Counter: React.FC<CounterProps> = ({
  value = 1,
  onChange,
  disabledDecrement = false,
  editable = true,
}) => {
  const handleIncrement = () => {
    onChange(value + 1);
  };

  const handleDecrement = () => {
    if (value > 1) {
      onChange(value - 1);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(parseInt(e.target.value) || 1);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    onChange(newValue ? newValue : 1);
  };

  return (
    <ButtonGroup size="small" aria-label="small outlined button group">
      <Button
        onClick={handleDecrement}
        disabled={disabledDecrement}
        sx={{ borderRightColor: "rgba(194, 85, 93, 0.5) !important" }}
      >
        –
      </Button>
      {editable ? (
        <StyledInput
          value={value}
          type="number"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      ) : (
        <StyledButton>{value}</StyledButton>
      )}
      <Button
        sx={{ width: 20, zIndex: 9 }}
        onClick={handleIncrement}
      >
        +
      </Button>
    </ButtonGroup>
  );
};

export default Counter;
