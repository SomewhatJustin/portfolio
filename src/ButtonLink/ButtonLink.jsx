import React from "react"
import './ButtonLink.css'

export default function ButtonLink(props) {
  return (
    <div className="fun-button">
      <a href={props.link}>{props.text} <i className={`fa-brands fa-${props.icon}`}></i></a>
    </div>
  )
}