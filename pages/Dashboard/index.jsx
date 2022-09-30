import Layout from "../../components/layout";
import Link from "next/link";
import Game_nav from "../../components/game_nav";
import Time from "../../components/Time";


export default function Index(){
  
  
  return(
       
    <div className="screen">
      <Layout 
        title="Dashboard" 
        description="Playstation user interface">
      </Layout>

      <header>
        <section className='media-nav'>
          <a href="#" className="active">Games</a>
          <a href="#">Media</a> 
        </section>

        <section className="settings">          
          <span className="icon">
            <i className="bi bi-search"></i>
          </span>
          

          <a href='#' className='options'>
            <span className="icon">
              <i className="bi bi-gear-fill"></i>
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
          
          <Time />

        </section>
      </header>

      <div className='container'>

      <section className='game-nav'>
        <div className='game active'>
          <i className='bi bi-cursor-fill'></i>
        </div> 

        <div className='gamestore'>
          <a href='https://www.playstation.com/nl-be/about-playstation-store/'><div className='img-0'></div></a>
        </div>

        <Game_nav
        box='game'
        class='img-1'/>
        <Game_nav
        box='game'
        class='img-2'/>
        <Game_nav
        box='game'
        class='img-3'/>
        <Game_nav
        box='game'
        class='img-4'/>
        <Game_nav
        box='game'
        class='img-5'/>
        <Game_nav
        box='game'
        class='img-6'/>

      </section>

      <section className='info'>

        <span className='sub-title'>Official news from Playstation | 4 hours ago</span> 

        <h1>Ready for a PS5 Adventure? </h1>

        <p className="sub-txt">ASTRO's PLAYROOM is pre-loaded and waiting for you! Explore the new capabilities of PS5 and feel the world...</p>            
      </section>
    </div>
  </div>
  );
}