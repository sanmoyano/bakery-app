const formatEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const minPasswordLenght = 8;
export const UPDATE_FORM = "UPDATE_FORM";

const validateInput = ({ name, value }) => {
  let hasError = false;
  let error = "";
  const formatValue = value.trim();

  switch (name) {
    case "email":
      if (formatValue === "") {
        hasError = true;
        error = "Email is required";
      } else if (!formatEmail.test(formatValue)) {
        hasError = true;
        error = "Email is invalid";
      } else {
        hasError = false;
        error = "";
      }
      break;
    case "password":
      if (formatValue === "") {
        hasError = true;
        error = "Password is required";
      } else if (formatValue.length < minPasswordLenght) {
        hasError = true;
        error = `Password must be at least ${minPasswordLenght} characters`;
      } else {
        hasError = false;
        error = "";
      }
      break;
    default:
      break;
  }
  return {
    hasError,
    error,
  };
};

export const onInputChange = ({ name, value, dispatch, formState }) => {
  const { hasError, error } = validateInput({ name, value });
  let isFormValid = true;

  for (const key in formState) {
    const item = formState[key];
    if (key !== name && hasError) {
      isFormValid = false;
      break;
    } else if ((key !== name) & item.hasError) {
      isFormValid = false;
      break;
    }
  }

  dispatch({
    type: UPDATE_FORM,
    data: {
      name,
      value,
      hasError,
      error,
      touched: true,
      isFormValid,
    },
  });
};
