import { formOptions } from '@tanstack/react-form-start'
import * as z from 'zod'

export const searchFormSchema = z.object({
  position: z.string(),
  location: z.string(),
  contract: z
    .xor([
      z.string(),
      z.boolean().transform((value) => (value ? 'Full Time' : '')),
    ])
    .optional(),
})

export const defaultValues: z.input<typeof searchFormSchema> = {
  position: '',
  location: '',
  contract: false,
}

export const formOpts = formOptions({
  defaultValues,
})
