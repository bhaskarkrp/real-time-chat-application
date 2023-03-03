export const formValidation = (values, setMessageCallback) => {
  const emailPattern = /(.+)@(.+){2,}\.(.+){2,}/;

  if (typeof values === "object" && !Array.isArray(values)) {
    let shouldSkip = true;
    Object.keys(values).every((key) => {
      if (key == "email") {
        if (!emailPattern.test(values[key])) {
          if (typeof setMessageCallback === "function")
            setMessageCallback("Please enter a valid email");
          shouldSkip = false;
          return false;
        }
      } else {
        if (!values[key]) {
          if (typeof setMessageCallback == "function")
            setMessageCallback(`Please enter a ${key}`);
          shouldSkip = false;
          return false;
        }
      }

      return true;
    });

    return shouldSkip ? true : false;
  }
};
