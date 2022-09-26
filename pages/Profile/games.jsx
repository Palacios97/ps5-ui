import Layout from "../../components/layout";
import Link from "next/link";
// import { exchangeNpssoForCode, exchangeCodeForAccessToken} from "psn-api";


export default function Profile(){
  return (
    <div className="profile__screen"> 
      <Layout 
        title="games" 
        description="games information">
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

      <section className="game_history">
      <div>

      </div>
      </section>
      
    </div>
  );
}

// const myNpsso = 'Dtr1Q8zi0ZF2uSckKyAUtLyGBbXuiSIrPxcCPs4Eo2yl1bM2vht4gpn2XSgErqE6'


// export async function getStaticProps(){
//   const accessCode = await exchangeNpssoForCode(myNpsso);
//   const authorization = await exchangeCodeForAccessToken(accessCode);
//   console.log(accessCode)
//   return {
//     props: {
//       npsso: accessCode,
//       code: authorization
//     }
//   };

// }