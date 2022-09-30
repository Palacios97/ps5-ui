// import {exchangeNpssoForCode, exchangeCodeForAccessToken, getUserTitles} from 'psn-api'
// // import { exchangeNpssoForCode,
// //   exchangeCodeForAccessToken,
// //    makeUniversalSearch, getUserTitles,
// //     getTitleTrophies,
// //      getUserTrophiesEarnedForTitle,
// //       Trophy, TrophyRarity} from "psn-api";


// // // This is my NPSSO 

// const myNpsso = 'aahvazbGqL6XFdYiCrUEgVOHR9wlmzFRUVf8Vfme06HmnvXAXuBvhR373a4PolDA'
 

// // //  this is a function to have a token and authorization 

// export default async function GameList(){
//   const accessCode = await exchangeNpssoForCode(myNpsso);
//   const authorization = await exchangeCodeForAccessToken(accessCode)

//   const trophyTitlesResponse = await getUserTitles(
//     { accessToken: authorization.accessToken },
//     "me"
//   );
  
//   const games = [trophyTitlesResponse];
//   JSON.stringify(games)
// }