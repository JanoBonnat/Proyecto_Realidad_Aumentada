import React, { forwardRef } from "react";

const Input = forwardRef(({ type, value, onChange, placeholder, inputClassName, onClick }, ref) => (
  <div>
    <input 
      type={type} 
      value={value} 
      onChange={onChange} 
      placeholder={placeholder} 
      className={inputClassName} 
      ref={ref}
      onClick={onClick}
      />
  </div>
));

export { Input };



