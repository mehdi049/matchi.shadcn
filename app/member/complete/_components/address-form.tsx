import { StepProps } from './steps.types'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { MESSAGES } from '@/const/message'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'

const formSchema = z.object({
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

export default function AddressForm({ setStep }: StepProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      country: 'Tunisie',
    },
  })

  function onSubmit(formData: z.infer<typeof formSchema>) {
    console.log('formData', formData)
    setStep(3)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 items-end"
      >
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selectionnez une ville" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selectionnez une municipalité" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <div className="flex gap-4 justify-between mt-4">
          <Button variant="secondary" onClick={() => setStep(1)}>
            Retour
          </Button>
          <Button type="submit">Continuer</Button>
        </div>
      </form>
    </Form>
  )
}
