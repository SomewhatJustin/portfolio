import './FunContainer.css'

export default function FunContainer(props) {
  return (
    <div className='fun-container'>
      {props.children}
    </div >
  )
}