import Profile from '../../components/Profile';
import Layout from '../../components/layout';

export default function friends() {
  return (
  <div className='friends_screen'>
    <Layout 
    title="games" 
    description="games information">
    </Layout>
    <Profile />
    <div className='friends_container'>
      <span>This feature is not available at the moment</span>
    </div>
  </div>
  )
}
