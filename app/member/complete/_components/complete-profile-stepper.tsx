'use client'

import { Card, CardHeader, CardContent } from '@/components/ui/card'
import H2 from '@/components/ui/typography/h2'
import AddressForm from './address-form'
import BasicInfoForm from './basic-info-form'
import InterestsForm from './interests-form'
import { useState } from 'react'
import { Progress } from '@/components/ui/progress'

export default function CompletProfileStepper() {
  const [step, setStep] = useState(1)
  const currentProgress = (step - 1) * 33.33
  return (
    <Card>
      <CardHeader>
        <H2 className="mb-2">Compléter mon profile</H2>
        <Progress value={currentProgress} />
      </CardHeader>
      <CardContent>
        {step === 1 && <BasicInfoForm setStep={setStep} />}
        {step === 2 && <AddressForm setStep={setStep} />}
        {step > 2 && <InterestsForm setStep={setStep} />}
      </CardContent>
    </Card>
  )
}
