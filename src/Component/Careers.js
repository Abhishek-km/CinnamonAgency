import React from 'react'
import Body from './Body'
import { useEffect } from "react";


export default function Careers() {
  useEffect(() => {
    document.getElementById('heading').innerHTML = "CINNAMON - Careers";
  }, []);
  return (
    <div>
      <Body
                heading="Never settle for anything less."
                paragraph="Imagine a working environment that values innovation, collaboration, and integrity. Do you share the same vision?"
                imgUrl="https://www.cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial.021a829d.png&w=1920&q=75"
              />
    </div>
  )
}
