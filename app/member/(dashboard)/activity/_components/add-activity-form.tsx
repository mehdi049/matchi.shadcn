'use client'

import H3 from '@/components/ui/typography/h3'
import { MESSAGES } from '@/const/message'
import { useForm } from 'react-hook-form'
import { literal, string, union, z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, CnButton } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'
import { CalendarDays } from 'lucide-react'
import { Calendar } from '@/components/ui/calendar'
import H5 from '@/components/ui/typography/h5'
import { Checkbox } from '@/components/ui/checkbox'

const formSchema = z.object({
  activity: z.string({
    required_error: MESSAGES.ERROR.FORM.REQUIRED,
  }),
  title: z.string({
    required_error: MESSAGES.ERROR.FORM.REQUIRED,
  }),
  description: z.string(),
  city: z.string({
    required_error: MESSAGES.ERROR.FORM.REQUIRED,
  }),
  municipality: z.string({
    required_error: MESSAGES.ERROR.FORM.REQUIRED,
  }),
  place: z.string({
    required_error: MESSAGES.ERROR.FORM.REQUIRED,
  }),
  gmap: union([
    string().startsWith('https://maps.app.goo.gl/', {
      message: MESSAGES.ERROR.FORM.INVALID_GOOGLE_LINK,
    }),
    literal(''),
  ])
    .nullable()
    .optional(),
  date: z.date({ required_error: MESSAGES.ERROR.FORM.REQUIRED }),
  startHour: z.string({
    required_error: MESSAGES.ERROR.FORM.REQUIRED,
  }),
  startMinute: z.string({
    required_error: MESSAGES.ERROR.FORM.REQUIRED,
  }),
  endHour: z.string({
    required_error: MESSAGES.ERROR.FORM.REQUIRED,
  }),
  endMinute: z.string({
    required_error: MESSAGES.ERROR.FORM.REQUIRED,
  }),
  maxAttendees: z
    .number()
    .min(2, { message: 'Le nombre de participants doit être supérieur à 1' })
    .optional(),
  price: z.number(),
  type: z.string({
    required_error: MESSAGES.ERROR.FORM.REQUIRED,
  }),
})
/*.refine((data) => data.start < data.end, {
    message: MESSAGES.ERROR.FORM.INVALID_END_DATE,
    path: ['start_end'],
  })*/

export default function AddActivityForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(formData: z.infer<typeof formSchema>) {
    console.log('formData', formData)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <H3>Information de base</H3>
        <FormField
          control={form.control}
          name="activity"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Activité *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selectionnez une activité" />
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
          name="title"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Titre *</FormLabel>

              <FormControl>
                <Input defaultValue={field.value} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Description</FormLabel>

              <FormControl>
                <Textarea defaultValue={field.value} />
              </FormControl>
            </FormItem>
          )}
        />

        <H3>Adresse</H3>

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

        <FormField
          control={form.control}
          name="place"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Lieu de l&apos;activité *</FormLabel>

              <FormControl>
                <Input defaultValue={field.value} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="gmap"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Attachez un lien vers Google Maps</FormLabel>

              <FormControl>
                <Input defaultValue={field.value ?? ''} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <H3>Date</H3>

        <div className="flex flex-wrap gap-2 items-end">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col grow">
                <FormLabel>Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <CnButton
                        variant={'outline'}
                        className={cn(
                          'pl-3 font-normal justify-between',
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
                      disabled={(date) =>
                        date < new Date() || date < new Date('1900-01-01')
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />
          <div className="flex gap-2">
            <div>
              <H5 className="mb-2">Commence à</H5>
              <div className="flex items-center">
                <FormField
                  control={form.control}
                  name="startHour"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="border-r-0 rounded-e-none shadow-none">
                          <SelectTrigger>
                            <SelectValue placeholder="Heure" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {[...Array(24).keys()].map((x) => (
                            <SelectItem key={x} value={x.toString()}>
                              {x.toString().length > 1 ? x : '0' + x}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="startMinute"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="pl-0 border-l-0 rounded-s-none shadow-none">
                          <SelectTrigger>
                            <SelectValue placeholder="Minute" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="00">00</SelectItem>
                          <SelectItem value="15">15</SelectItem>
                          <SelectItem value="30">30</SelectItem>
                          <SelectItem value="45">45</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div>
              <H5 className="mb-2">Se termine à</H5>
              <div className="flex items-center">
                <FormField
                  control={form.control}
                  name="endHour"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="border-r-0 rounded-e-none shadow-none">
                          <SelectTrigger>
                            <SelectValue placeholder="Heure" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {[...Array(24).keys()].map((x) => (
                            <SelectItem key={x} value={x.toString()}>
                              {x.toString().length > 1 ? x : '0' + x}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="endMinute"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="pl-0 border-l-0 rounded-s-none shadow-none">
                          <SelectTrigger>
                            <SelectValue placeholder="Minute" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="00">00</SelectItem>
                          <SelectItem value="15">15</SelectItem>
                          <SelectItem value="30">30</SelectItem>
                          <SelectItem value="45">45</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        </div>

        <H3>Participants</H3>
        <FormField
          control={form.control}
          name="maxAttendees"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Nombre maximum des participants</FormLabel>

              <FormControl>
                <Input type="number" defaultValue={field.value} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <div className="flex items-center space-x-2">
          <Checkbox id="no-limit" defaultChecked />
          <label
            htmlFor="no-limit"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Illimité
          </label>
        </div>

        <H3>Prix</H3>
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Prix par participant</FormLabel>

              <FormControl>
                <Input type="number" defaultValue={field.value} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <div className="flex items-center space-x-2">
          <Checkbox id="free" defaultChecked />
          <label
            htmlFor="free"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Gratuit
          </label>
        </div>

        <H3>Type</H3>

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Type de l'activité" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Public">
                    Public (Ouvert à tout le monde)
                  </SelectItem>
                  <SelectItem value="Private">
                    Privée (Seulement par invitation)
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                <p>
                  <span className="font-bold">Public:</span> Tout le monde peut
                  rejoindre votre activité.
                </p>

                <p>
                  <span className="font-bold">Privée:</span> Les participants ne
                  peuvent rejoindre votre activité que par invitation.
                </p>
              </FormDescription>
            </FormItem>
          )}
        />

        <div>
          <Button type="submit">Créer</Button>
        </div>
      </form>
    </Form>
  )
}
