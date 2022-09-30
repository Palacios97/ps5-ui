import Layout from "../../components/layout";
import Profile from "../../components/Profile";
import { exchangeNpssoForCode, exchangeCodeForAccessToken} from "psn-api";


export default function Games(){
  return (
    <div className="games_screen"> 
      <Layout 
        title="games" 
        description="games information">
      </Layout>
      <Profile />
      <div className="list">
        
        
      </div>
     
    </div> 
  );
}

// const myNpsso = 'aahvazbGqL6XFdYiCrUEgVOHR9wlmzFRUVf8Vfme06HmnvXAXuBvhR373a4PolDA'

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