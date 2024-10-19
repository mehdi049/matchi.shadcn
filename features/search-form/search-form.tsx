'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'

import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { cn } from '@/lib/utils'
import { Button, CalendarButton } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from '@/components/ui/select'
import { MESSAGES } from '@/const/message'
import { useRouter } from 'next/navigation'
import FontAwesome from '@/components/ui/font-awesome/font-awesome'
import { slugifyString } from '@/lib/string'
import { ROUTES } from '@/routes'

const formSchema = z.object({
  activity: z.string({
    required_error: MESSAGES.ERROR.FORM.REQUIRED,
  }),
  city: z.string({
    required_error: MESSAGES.ERROR.FORM.REQUIRED,
  }),
  date: z.date().optional(),
})

type cardWrapperProps = {
  children: React.ReactNode
  className?: string
}

export type searchFormProps = {
  design?: 'card' | 'simple'
  className?: string
}
export function SearchForm({ design = 'card', className }: searchFormProps) {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(formData: z.infer<typeof formSchema>) {
    /*return router.push(
      ROUTES.ACTIVITIES_SEARCH(
        formData.city ? (slugifyString(formData.city) as string) : 'all',
        formData.activity
          ? data?.body?.find(
              (activity) => activity.id === parseInt(formData.activity)
            )?.slug
          : 'all',
        slugifyString(formData.date?.toString())
      )
    )*/
    return router.push(
      ROUTES.ACTIVITIES_SEARCH(
        formData.city ? (slugifyString(formData.city) as string) : 'all',
        'Padel',
        slugifyString(formData.date?.toString())
      )
    )
  }

  const CardWrapper = ({ children }: cardWrapperProps) => {
    return (
      <Card className={className}>
        <CardHeader></CardHeader>
        <CardContent className="-mt-6 border-none">{children}</CardContent>
      </Card>
    )
  }

  const SearchFormContent = () => {
    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`flex flex-col md:flex-row gap-4 items-end relative ${className}`}
        >
          <FormField
            control={form.control}
            name="activity"
            render={({ field }) => (
              <FormItem className="w-full md:w-auto">
                <FormLabel>
                  Activité * <FormMessage className="text-xs" />
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir une activité" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="w-full md:w-auto">
                <FormLabel>
                  Cité * <FormMessage className="text-xs" />
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir une ville" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full md:w-auto">
                <FormLabel>Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <CalendarButton
                        variant={'outline'}
                        className={cn(
                          'pl-3 text-left font-normal',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Choisir une date</span>
                        )}
                        <FontAwesome
                          icon={faCalendar}
                          className="ml-2 h-4 w-4 opacity-50"
                        />
                      </CalendarButton>
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
          <Button type="submit" className="w-full md:w-auto">
            Rechercher
          </Button>
        </form>
      </Form>
    )
  }

  return (
    <>
      {design === 'card' ? (
        <CardWrapper>
          <SearchFormContent />
        </CardWrapper>
      ) : (
        <SearchFormContent />
      )}
    </>
  )
}
