import { getProfile } from "./actions"
import { ProfileForm } from "./ProfileForm"

const Profile = async () => {
  const data = await getProfile();
  return (
    <div>
      <ProfileForm data={ data } />
    </div>
  )
}

export default Profile