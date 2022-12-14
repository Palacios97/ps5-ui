import Layout from "../components/layout";
import Particle from "../components/Particles";
import Users from "../components/Users";
import Logo from "../components/Logo";
import Time from "../components/Time";


export default function UserSpace() {
  return (
    
  <div>
    <Layout
    title='Users'
    description='Users page'>
    </Layout>  
    <Particle />
   
    <div className="users_header">
    <Logo/>
    <Time />
    </div>

      <span className="intro"> Welcome Back to PlayStation </span> <br />
      <span className="who"> Who is using this controller?</span>

    <div className="users-container">
    
      <Users onClick=""
      name = 'Add User'
      class = 'add_user'
      style= "bi bi-plus-lg"
      />

      <Users
      name = 'Kratosfame07'
      class='player' />
  

    
      <Users 
      name = 'Guest'
      class ='guest_1'
      style = 'bi bi-people-fill' /> 
  

    </div>
    
  </div>
  )
}






