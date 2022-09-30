import Link from "next/link"
export default function Users(props) {
  return (
    
    <div className="glow">  
      <Link href={'/Dashboard'}>
        <a><div className={props.class}><i className={props.style}></i></div></a>
      </Link> 
      <span className="user_description"> {props.name} </span>

    </div>
    
  )
}

// export function Any_User(){
//   <div>
//   <div className="glow">  
//     <Link href={'/Dashboard'}>
//     <div className={props.class}><i className="bi bi-plus-lg"></i></div>  
//     </Link> 
//       <span className="user_description"> {props.name} </span>
//   </div>
// </div>
// }
