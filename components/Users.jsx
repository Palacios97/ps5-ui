import Link from "next/link"
export default function Users(props) {
  return (
    <div>
      <div className="glow">  
        <Link href={'/Dashboard'}>
        <div className={props.class}></div>  
        </Link> 
          <span className="user_description"> {props.name} </span>
      </div>
  </div>
  )
}
