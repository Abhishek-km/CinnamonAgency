import React from 'react'
import Body from './Body'
import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    document.getElementById('heading').innerHTML = "CINNAMON - Services";
  }, []);
  return (
    <div>
      <Body
                heading="Digital solutions for the AI age"
                paragraph="At the forefront of the AI revolution, we know what’s real and what’s hype. Leverage our experience to build practical   solutions that will overdeliver, not overpromise.."
                imgUrl="https://www.cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstrategy-design.a6becde8.jpg&w=1920&q=75"
              />
    </div>
  )
}
