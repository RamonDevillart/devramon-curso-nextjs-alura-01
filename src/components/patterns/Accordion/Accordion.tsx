import React, { useState, useRef } from "react";
import styles from "./Accordion.module.css";

type AccordionProps = {
  title: any
  children: any
  styleChildren: any,
  startClosed?: boolean
}
const Accordion = ({ title, children, styleChildren, startClosed = false }: AccordionProps) => {
  const [isOpened, setOpened] = useState<boolean>(!startClosed)
  const [height, setHeight] = useState<string>(!startClosed ? "block" : "none")
  const contentElement = useRef(null)

  const HandleOpening = () => {
    setOpened(!isOpened)
    setHeight(!isOpened ? "block" : "none")
  }
  
  return (
    <div className={styles.accordion}>
      <div  onClick={HandleOpening} style={styleChildren} className={styles.question}>
        {title}
      </div>
      <div
        ref={contentElement}
        style={{ display: height }}
        className={`${styles.answer} overflow-hidden transition-all duration-200`}
      >
        {children}
      </div>
    </div>
  )
}

export default Accordion
