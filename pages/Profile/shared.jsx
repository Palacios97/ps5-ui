import Layout from "../../components/layout"
import Profile from "../../components/Profile"
export default function Shared() {
  return (
    <div className="share_screen"> 
      <Layout 
        title="shared" 
        description="shared information">
      </Layout>
      <Profile />
      <div className="share_container">
        <span>Nothing Shared Yet.</span>
      </div>
    </div>
  )
}
