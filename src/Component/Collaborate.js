import React from 'react'
import Body from './Body'
import { useEffect } from "react";

export default function Collaborate() {
  useEffect(() => {
    document.getElementById('heading').innerHTML = "CINNAMON - Lets Collaborate";
  }, []);
  return (
    <div>
       <Body
                      heading="Let’s build something beautiful together."
                      paragraph="If you’re looking for partners to help you create an exceptional digital experience, you’ve come to the right place."
                      imgUrl=""
                    />
    </div>
  )
}
