import GameNav from "../../components/game_nav";
import Image from "next/image";
import Link from "next/link";
// import { exchangeNpssoForAccessCode, exchangeAccessCodeForAuthTokens, getUserTitles} from "psn-api";



export default function Profile(){
  return (
    <div className="profile">
      <GameNav 
      title="Profile" 
      description="user profile"
      link = "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.2/css/fontawesome.min.css" integrity="sha384-X8QTME3FCg1DLb58++lPvsjbQoCT9bp3MsUU3grbIny/3ZwUJkRNO8NPW6zqzuW9" crossorigin="anonymous">
      </GameNav>
      <section className="main">
        <header className="userpage">
            <Image
            src="/../public/images/me.jpg"
            alt="user picture profile"
            className="user__picture"
            width={115}
            height={90}
          />
        
          <div className="Badge__profile"></div>
          <div>
            <h3>Miguel Palacios</h3>
            <Image 
            src="/../public/images/avatar.ico"
            alt="avatar"
            className="avatar__profile"
            width={50}
            height={50} />
            <span>Kratosfame07</span> | <span> Last online 2 days ago </span>
            <span>English (United States) </span>
          </div>
         
        </header>
      </section>
        

      <section className="profile-nav">
        <nav className="nav-left">
          <Link href="/">
            Overview
          </Link>
          <Link href="/">
            Games
          </Link>
          <Link href="/">
            Friends
          </Link>
          <Link href="/">
            Shared
          </Link>
        </nav>

        <div className="icons">
          <i className="bi bi-person-fill"></i>
          <i className="bi bi-pencil fill"></i>
          <i className="bi bi-sliders "></i>
        </div>
      </section>

      <main>
        <section className="player-info">
          <div className="trofeos">
            <div className="numero-trofeos">
              <Image
              src="/../public/images/trofeos-ps5.png"
              alt="trophies icon"
              width={50}
              height={50}/>
              <span className="trophies__number">270</span>
            </div>

            <div className="clasificacion-trofeos">
              <Image 
                src="/../public/images/trofeos1.png"
                alt="platinum"
                width={30}
                height={30}
              /> 
              
              <br />

              <span>24</span>

              <br />

              <Image 
                src="/../public/images/trofeo-oro.jpg"
                alt="platinum"
                width={30}
                height={30}
              /> 
                
              <br />

              <span>24</span>

            <br />

              <Image 
                src="/../public/images/trofeo-plata.jpg"
                alt="platinum"
                width={30}
                height={30}
              /> 
            <br />

              <span>24</span>

            <br />

              <Image 
                src="/../public/images/trofeo-bronce.png"
                alt="platinum"
                width={30}
                height={30}
              /> 
            <br />

              <span>24</span>

            <br />

              <span>Trophies earned:</span>
            <br />

              <span>2468</span>
            </div>
          </div>

        <br />

        <div className="accolades">
          <span></span>
         <br />

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

        <br />

        <div className="friends">
          <span className="friend-images"></span>
          <br />
          <span>Friends:</span>
          <br />
          <span>93</span>
        </div>

        </section>

      </main>
      
    </div>
  );
}

// // This is my NPSSO token
// const myNpsso = 'n2yy846WL1WhncZksSk9D7Vh5odhAtwxj6oTnmrstojx5CzqNIqzp8ON013yXhic'

// // this a function to have an access token and authorization 
// export async function getStaticProps(){
//   try{ 
//   const accessCode = await exchangeNpssoForAccessCode(myNpsso);
//   authorization = await exchangeAccessCodeForAuthTokens(accessCode);
//   console.log(accessCode);
//   return {
//     props: {accessCode, authorization}
//       }
//   }catch(error){
//     console.log(error)
//   }
//  }




