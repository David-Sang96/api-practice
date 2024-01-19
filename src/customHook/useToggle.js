import { useState } from "react";

const useToggle = () => {
  const [state, setState] = useState(false);

  const Toggle = () => {
    setState((prev) => !prev);
  };

  return [state, Toggle];
};

export default useToggle;
