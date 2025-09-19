const ERROR_CODE_MAP = {
  invalid_credentials: "The email or password you've entered is incorrect",

  // Generic Fallback
  default: "An unexpected error occurred. Please try again.",
};

export const getErrorMessage = (error: string | undefined): string => {
  return (
    ERROR_CODE_MAP[error as keyof typeof ERROR_CODE_MAP] ||
    ERROR_CODE_MAP.default
  );
};
