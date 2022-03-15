import { FocusEvent, useState } from "react";
import style from "./style/TextInput.module.scss";

interface TextInputProps {
  label: string;
  onChangeHandler: (name: string) => void;
  className?: string;
}
const TextInput: React.FC<TextInputProps> = ({ label, className = "",onChangeHandler }) => {
  const [focused, setIsFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const handleInputChange = (e: FocusEvent<HTMLInputElement>) => {
    onChangeHandler(e.target.value);
    setValue(e.target.value);
  };
  const handleOnBlur = (e: FocusEvent) => {};
  return (
    <div className={`${style.input_group}`}>
      <input
        className={`${style.input}`}
        type="text"
        onChange={handleInputChange}
        value={value}
        onBlur={handleOnBlur}
      />
      <label
        className={`${style.label} ${
          value != "" && style.label_up
        }  ${className}`}
      >
        {label}
      </label>
    </div>
  );
};

export default TextInput;
