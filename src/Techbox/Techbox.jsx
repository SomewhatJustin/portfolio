import './Techbox.css'

export default function Techbox(props) {
  const gradient = { background: props.gradient }
  return (
    <div className="techbox" style={gradient}>
      <i className={`fa-brands fa-${props.icon}`}></i>
      <span>{props.name}</span>
    </div>
  )
}