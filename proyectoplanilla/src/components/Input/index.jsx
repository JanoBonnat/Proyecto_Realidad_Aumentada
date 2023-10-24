import React, { forwardRef } from "react";

const Input = forwardRef(({ type, value, onChange, placeholder }, ref) => (
  <div>
    <input type={type} value={value} onChange={onChange} placeholder={placeholder} ref={ref} />
  </div>
));

export { Input };



