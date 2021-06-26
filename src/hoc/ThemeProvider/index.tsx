import React from "react";

interface Props {
  theme: {
    logo: File | String,
    buttons: {
      primaryColor: string,
      secondaryColor: string,
      iconColor: string
    },
    buttonsLabelColor: {
      primaryColor: string,
      secondaryColor: string,
    }
    typographyColor: {
      largeHeader: string,

    },
    paddings: {
      horizontal: string,
      vertical: string,
    }
  }
}

const ThemeProvider = ({ theme }: Props) => {  
  const {
    logo,
    buttons,
    buttonsLabelColor,
    typographyColor
  } = theme;

  const generatedTheme: Props["theme"] = {
    logo,
    buttons: {
      primaryColor: buttons.primaryColor || '#8C30F5',
      secondaryColor: buttons.secondaryColor || '#F1E4FF',
      iconColor: buttons.iconColor || 'rgba(255,255,255,.25)'
    },
    buttonsLabelColor: {
      primaryColor: buttonsLabelColor.primaryColor || '#fff',
      secondaryColor: buttonsLabelColor.secondaryColor || '#8C30F5',
    },
    typographyColor: {
      largeHeader: typographyColor.largeHeader || ''
    }
  }
}

export default ThemeProvider