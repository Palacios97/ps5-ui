import Layout from "../../components/layout";
import Particle from "../../components/Particles";
import Users from "../../components/Users";
import Logo from "../../components/Logo";


export default function Index() {
  return (
    
    <div>
    <Layout
    title='Users'
    description='Users page'>
    </Layout>  
    <Particle />

    <Logo/>

      <span className="intro"> Welcome Back to PlayStation </span> <br />
      <span className="who"> Who is using this controller?</span>

      <div className="users-container" id="root">
    
      <Users onClick=""
      name = 'Add User'
      class = 'add_user'
      />

      <Users
      name = 'Kratosfame07'
      class='player' />
  

    
      <Users 
      name = 'Guest'
      class ='guest_1' /> 
  

      </div>
    
    </div>
  )
}






