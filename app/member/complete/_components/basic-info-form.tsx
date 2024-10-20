import { Button, CnButton } from '@/components/ui/button'
import { StepProps } from './steps.types'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import UpdateProfilePicture from '@/features/update-profile-picture/update-profile-picture'
import { MESSAGES } from '@/const/message'
import { CalendarDays } from 'lucide-react'

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
})

export default function BasicInfoForm({ setStep }: StepProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: 'Mehdi Marouani',
      email: 'mehdi.marouani@gmail.com',
      gender: 'M',
    },
  })

  function onSubmit(formData: z.infer<typeof formSchema>) {
    console.log('formData', formData)
    setStep(2)
  }

  return (
    <>
      <UpdateProfilePicture
        currentImgLink="https://github.com/shadcn.png"
        className="mb-4"
      />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 items-end"
        >
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
          <div className="flex gap-4 justify-end">
            <Button type="submit">Continuer</Button>
          </div>
        </form>
      </Form>
    </>
  )
}
