
import Link from "next/link"

export default function Profile() {
  return (
    <div> 
    <section className="profile__id">
    <Link href={'/Dashboard'}>
      <a><div className="user__picture"></div></a>
    </Link>
      <div className="badge__profile"></div>
      
      <div className="profile_nickname">
        <h3>Miguel Palacios</h3>
        <span>Kratosfame07 | Last online 2 days ago </span>
     </div>

    </section>    

    <div className="icon-language">
      <i className="bi bi-translate"></i> <span className="language"> English (United States) </span>   
    </div>

    <section className="profile-nav">
      <nav className="nav-left">
        <ul className="left">
          <li className="display">
            <Link href={'/Profile'}> 
            <a className="link"> Overview </a>
            </Link>
          </li>

            <li className="display">
            <Link href={'./games'}> 
            <a className="link"> Games </a> 
            </Link>
            </li>

            <li className="display">
            <Link href={'./friends'}>
              <a className="link"> Friends </a>
            </Link>
            </li>
            
            <li className="display">
            <Link href={'./shared'}>
              <a className="link"> Shared </a>
            </Link>
            </li>

        </ul>
      </nav>  

      <nav className="nav-right">        
        <ul className="right"> 
          <li className="display">
            <i className="bi bi-person-check-fill"></i>
          </li>

          <li className="display">
            <i className="bi bi-pencil-fill"></i>
          </li>
  
          <li className="display">
            <i className="bi bi-sliders "></i>
          </li> 
        </ul>
      </nav>
       
    </section>

  </div>
  )
}
