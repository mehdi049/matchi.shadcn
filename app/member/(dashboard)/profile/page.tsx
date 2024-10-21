import PageContentWrapper from '../_components/page-content-wrapper'
import UpdateProfilePicture from '@/features/update-profile-picture/update-profile-picture'
import UpdateProfileForm from './_components/update-profile-form'

export default function Profile() {
  return (
    <PageContentWrapper pageName="Mon profile">
      <UpdateProfilePicture
        currentImgLink="https://github.com/shadcn.png"
        className="mb-4"
      />

      <UpdateProfileForm />
    </PageContentWrapper>
  )
}
