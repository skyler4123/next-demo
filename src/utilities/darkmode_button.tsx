'use client'

import { Button, SvgIcon, SvgIconProps } from "@mui/material";
import { pink } from "@mui/material/colors";
import { useState } from "react";



export const DarkmodeButton = () => {
  const [color, setColor] = useState('disabled')

  function HomeIcon(props: SvgIconProps) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
  const changeDarkmode = () => {
    document.querySelector('html')?.classList.toggle('dark')
    setColor('secondary')
  }

  return (
    <Button onClick={changeDarkmode}>
      <HomeIcon color='disabled' />
    </Button>
  );

}