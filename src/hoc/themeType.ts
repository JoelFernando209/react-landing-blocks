type ThemeObj = {
  logo: File | String;
  buttons?: {
    primaryColor?: string;
    secondaryColor?: string;
    iconColor?: string;
  };
  buttonsLabelColor?: {
    primaryColor?: string;
    secondaryColor?: string;
  };
  typographyColor?: {
    bigLabel?: string;
    label?: string;
  };
  typographySize?: {
    navSize: string;
  };
  paddings?: {
    horizontal?: string;
    vertical?: string;
    verticalL?: string;
  };
};

export default ThemeObj;
