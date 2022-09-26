import Layout from "../../components/layout";
import Image from "next/image";
import Link from "next/link";

export default function Profile(){
  return (
    <div className="profile__screen"> 
      <Layout 
        title="Profile" 
        description="user profile"
        link = "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.2/css/fontawesome.min.css" integrity="sha384-X8QTME3FCg1DLb58++lPvsjbQoCT9bp3MsUU3grbIny/3ZwUJkRNO8NPW6zqzuW9" crossorigin="anonymous">
      </Layout>

      <section className="profile__id">
        <div className="user__picture"></div>

        <div className="badge__profile"></div>
        

        <div className="profile_nickname">
          <h3>Miguel Palacios</h3>
          <span>Kratosfame07 | Last online 2 days ago </span>
       </div>
      </section>    
    <div className="icon-language">
      <i className="bi bi-translate"></i> <span className="language">English (United States) </span>   
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
            <Link href={'Profile/games'}> 
            <a className="link"> Games </a> 
            </Link>
            </li>

            <li className="display">
            <Link href={'Profile/friends'}>
              <a className="link"> Friends </a>
            </Link>
            </li>
            
            <li className="display">
            <Link href={'Profile/shared'}>
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

        <section className="player-info">
          <div className="trophies">
            {

            }
            <div className="num-trophies">
              <Image
              src="/../public/images/trofeos-ps5.ico"
              alt="trophies icon"
              width={50}
              height={50}/>
              <span className="trophies__number">312</span>
            </div>

            <div className="trophie-type">

              <div className="platinum"><Image 
                src="/../public/images/platinum.ico"
                alt="platinum"
                width={30}
                height={30}/> 
              <span>24</span>
              </div>
              <div className="gold">
                <Image 
                src="/../public/images/gold.ico"
                alt="platinum"
                width={30}
                height={30}/> 
                <span>136</span>
              </div>

              <div className="silver"> 
              <Image 
                src="/../public/images/silver.ico"
                alt="platinum"
                width={30}
                height={30} /> 
              <span>561</span>
              </div>

              <div className="bronce">  
                <Image 
                src="/../public/images/bronce.ico"
                alt="platinum"
                width={30}
                height={30}/> 
                <span>2347</span>
              </div>
          </div>

          <div className="tropies-earned">
            <span className="summary">Trophies earned:</span>
            <span className="summary">3068</span>
          </div> 
        </div>

        <div className="accolades">
          
        <Image
              src="/../public/images/accolades.png"
              alt="trophies icon"
              className="acco-img"
              width={150}
              height={90}/>
          <span> No accolades earned yet</span>
        </div>

          <br />

        <div className="games">
          <span>games images</span>
          <br />
          <span>Games:</span>
          <br />
          <span>174</span>
        </div>

        <div className="friends">
        <Image
            src="/../public/images/friends.png"
            alt="trophies icon"
           
            width={150}
            height={90}/>
          
          <span>Friends:</span>
          
          <span>93</span>
        </div>

        </section>

      
      
    </div>
   
  );
}
