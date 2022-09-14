import GameNav from "../../components/game_nav";
import Link from "next/link";

export default function Index(){
    return(
       
        <div className="screen">
            <GameNav 
              title="Dashboard|next.js" 
              description="Playstation user interface">
            </GameNav>

     <header>
         <section className='media-nav'>
           <a href="#" className="active">Games</a>
           <a href="#">Media</a> 
        </section>

         <section className="settings">
           
             <span className="icon">
            <i className="fa fa-search"></i>
            </span>
          

           <a href='#' className='options'>
             <span className="icon">
               <i className="fa fa-cog"></i>
             </span>
           </a>

           <span className="icon">
            <Link href='/Profile'>
              <picture>           
                <img
                src="https://iconarchive.com/download/i65800/hopstarter/bioman/Bioman-Avatar-3-Blue.ico"
                alt="profile-picture"
                className='user' />
                <div className='badge'></div>              
              </picture>
            </Link>
          </span>

          <span className="time"> 9:11 AM </span>
        </section>
    </header>

      <div className='container'>
       <section className='game-nav'>
         <div className='game active'>
             <i className='fa fa-location-arrow'></i>
           </div> 

 <div className='game'>
             <a href='https://www.playstation.com/nl-be/about-playstation-store/'><div className='img-0'></div></a>
           </div>

           <div className='game'>
             <div className='img-1'></div>
           </div>

           <div className='game'>
             <div className='img-2'></div>
           </div>

           <div className='game'>
             <div className='img-3'></div>
           </div>

           <div className='game'>
             <div className='img-4'></div>
           </div>

           <div className='game'>
             <div className='img-5'></div>
           </div>

           <div className='game'>
             <div className='img-6'></div>
           </div>
         </section>

        <section className='info'>

           <span className='sub-title'>
             Official news from Playstation | 4 hours ago
           </span>

           <h1>Ready for a PS5 Adventure? </h1>
             <p>
               ASTRO`S PLAYROOM is pre-loaded and waiting for you! Explore the new capabilities of PS5 and feel the world...
             </p>

             <div className='videos'></div>
                
        </section>
      </div>
</div>
);
}