import React, { memo } from "react";
import { ThemeProvider } from "styled-components";

import { checkIfFalsy } from "helpers/validators";

import ThemeObj from "../themeType";

interface ThemeProps {
  theme: ThemeObj;
  children: React.ReactNode;
}

const ThemeProviderComp = ({ theme, children }: ThemeProps) => {
  const {
    logo,
    buttons,
    buttonsLabelColor,
    typographyColor,
    typographySize,
    paddings,
  } = theme;

  checkIfFalsy([
    [theme, "Theme"],
    [logo, "Logo Image"],
  ]);

  const generatedTheme = {
    blocks__buttons: {
      primaryColor: buttons?.primaryColor || "#8C30F5",
      secondaryColor: buttons?.secondaryColor || "#F1E4FF",
      iconColor: buttons?.iconColor || "rgba(255,255,255,.25)",
    },
    blocks__buttonsLabelColor: {
      primaryColor: buttonsLabelColor?.primaryColor || "#fff",
      secondaryColor: buttonsLabelColor?.secondaryColor || "#8C30F5",
    },
    blocks__typographyColor: {
      bigLabel: typographyColor?.bigLabel || "#D6B1FF",
      label: typographyColor?.label || "#F4F5F7",
    },
    blocks__paddings: {
      horizontal: paddings?.horizontal || "50px",
      vertical: paddings?.vertical || "10px",
      verticalL: paddings?.verticalL || "50px",
    },
    blocks__typographySize: {
      navSize: typographySize?.navSize || "14px",
    },
  };

  return (
    <ThemeProvider theme={{ ...generatedTheme, blocks__logo: logo }}>
      {children}
    </ThemeProvider>
  );
};

export default memo(ThemeProviderComp);
