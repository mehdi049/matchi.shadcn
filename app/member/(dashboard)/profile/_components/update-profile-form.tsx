'use client'

import { Button, CnButton } from '@/components/ui/button'
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from '@/components/ui/form'
import { cn } from '@/lib/utils'
import { CalendarDays, CircleCheck } from 'lucide-react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { MESSAGES } from '@/const/message'
import { Input } from '@/components/ui/input'
import { Calendar } from '@/components/ui/calendar'
import { format } from 'date-fns'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useForm } from 'react-hook-form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import H3 from '@/components/ui/typography/h3'
import { useState } from 'react'
import { UserInterestResponse } from '@/types/user-interest-response.type'
import { toast } from 'sonner'

const formSchema = z.object({
  name: z.string({
    required_error: MESSAGES.ERROR.FORM.REQUIRED,
  }),
  email: z
    .string({
      required_error: MESSAGES.ERROR.FORM.REQUIRED,
    })
    .email({ message: MESSAGES.ERROR.FORM.INVALID_EMAIL }),
  birthday: z.date({ required_error: MESSAGES.ERROR.FORM.REQUIRED }),
  gender: z.enum(['M', 'F'], {
    required_error: MESSAGES.ERROR.FORM.REQUIRED,
  }),
  country: z.string({
    required_error: MESSAGES.ERROR.FORM.REQUIRED,
  }),
  city: z.string({
    required_error: MESSAGES.ERROR.FORM.REQUIRED,
  }),
  municipality: z.string({
    required_error: MESSAGES.ERROR.FORM.REQUIRED,
  }),
})

export default function UpdateProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: 'Mehdi Marouani',
      email: 'mehdi.marouani@gmail.com',
      gender: 'M',
      country: 'Tunisie',
    },
  })

  const [selectedActivities, setSelectedActivities] = useState<number[]>([])

  const handleAddRemoveActivity = (activityId: number) => {
    if (activityId) {
      let _selectedActivities = [...selectedActivities]

      //if selected
      if (_selectedActivities.includes(activityId))
        _selectedActivities = _selectedActivities.filter(
          (x) => x !== activityId
        )
      //if not selected
      else _selectedActivities.push(activityId)

      setSelectedActivities(_selectedActivities)
    }
  }

  const handleValidateActivities = () => {
    if (selectedActivities.length > 0) {
      const userInterests: UserInterestResponse[] = []
      selectedActivities.map((activity) => {
        userInterests.push({
          activityId: activity,
        })
      })

      /*mutate({
        id: user.id,
        user: {
          ...user,
          interests: userInterests,
        },
        updateInterests: true,
      })*/
    } else toast.error('Veuillez sélectionner au moins une activité.')
  }

  function onSubmit(formData: z.infer<typeof formSchema>) {
    console.log('formData', formData)
    handleValidateActivities()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-wrap gap-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-col gap-4">
            <H3>Information de base</H3>

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Nom et prénom *</FormLabel>

                  <FormControl>
                    <Input disabled defaultValue={field.value} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email *</FormLabel>

                  <FormControl>
                    <Input disabled defaultValue={field.value} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="birthday"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormLabel>Date de naissance *</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <CnButton
                          variant={'outline'}
                          className={cn(
                            'pl-3 text-left font-normal flex justify-between',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span>Choisir une date</span>
                          )}
                          <CalendarDays className="ml-2 opacity-50" />
                        </CnButton>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date >= new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="space-y-3 w-full">
                  <FormLabel>Sexe *</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="M" />
                        </FormControl>
                        <FormLabel className="font-normal">Homme</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="F" />
                        </FormControl>
                        <FormLabel className="font-normal">Femme</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col gap-4">
            <H3>Adresse</H3>

            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Pays *</FormLabel>

                  <FormControl>
                    <Input disabled defaultValue={field.value} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Ville *</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selectionnez une ville" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">
                        m@example.com
                      </SelectItem>
                      <SelectItem value="m@google.com">m@google.com</SelectItem>
                      <SelectItem value="m@support.com">
                        m@support.com
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="municipality"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Municipalité *</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selectionnez une municipalité" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">
                        m@example.com
                      </SelectItem>
                      <SelectItem value="m@google.com">m@google.com</SelectItem>
                      <SelectItem value="m@support.com">
                        m@support.com
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col gap-4">
            <H3>Mes centres d&apos;intérêt</H3>

            <p className="text-sm">
              Veuillez sélectionnez{' '}
              <span className="underline">au moin une activité.</span>
            </p>
            <div className="flex gap-2 flex-wrap mt-4">
              {[...Array(13).keys()].map((activity, i) => {
                return (
                  <div
                    className="inline-block cursor-pointer"
                    key={i}
                    onClick={() =>
                      handleAddRemoveActivity(/*activity.id*/ activity)
                    }
                  >
                    {selectedActivities.includes(/*activity.id*/ activity) ? (
                      <Badge
                        onClick={() =>
                          handleAddRemoveActivity(/*activity.id*/ activity)
                        }
                        className="p-2"
                      >
                        <CircleCheck className="mr-1 w-3 h-3" /> Padel
                      </Badge>
                    ) : (
                      <Badge
                        variant={'outline'}
                        onClick={() =>
                          handleAddRemoveActivity(/*activity.id*/ activity)
                        }
                        className="p-2"
                      >
                        Padel
                      </Badge>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div>
          <Button type="submit">Valider</Button>
        </div>
      </form>
    </Form>
  )
}
