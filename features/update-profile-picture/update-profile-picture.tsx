'use client'

import { AvatarComponent } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { useRef } from 'react'
import { UploadProfilePictureProps } from './update-profile-picture.type'

export default function UpdateProfilePicture({
  currentImgLink,
  className,
}: UploadProfilePictureProps) {
  const inputFileRef = useRef<HTMLInputElement>(null)

  const upload = async () => {
    if (inputFileRef.current?.files) {
      //const file = inputFileRef.current.files[0]
      //mutate(file)
    }
  }

  return (
    <div className={`flex gap-2 ${className}`}>
      <AvatarComponent
        src={currentImgLink}
        fallback="MM"
        className="w-40 h-40 bg-black"
      />
      <div className="place-content-end">
        <Button
          size="sm"
          onClick={() => {
            inputFileRef.current?.click()
          }}
        >
          Modifier
        </Button>
        <input
          name="file"
          ref={inputFileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={upload}
        />
      </div>
    </div>
  )
}
