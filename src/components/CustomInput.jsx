import { useState } from "react";

function CustomInput({ icon, isValid, errorMessage, value, ...rest }) {
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <>
      <div className="inputWrapper">
        <input
          {...rest}
          onBlur={handleFocus}
          onFocus={() => rest.name === "confirmPassword" && setFocused(true)}
          focused={focused.toString()}
        />
        {icon && <div className="icon">| {icon}</div>}
        <span className="errorMessage">{errorMessage}</span>
      </div>
    </>
  );
}

export default CustomInput;
