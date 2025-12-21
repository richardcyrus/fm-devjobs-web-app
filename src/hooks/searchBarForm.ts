import { createFormHook } from '@tanstack/react-form-start'
import {
  CheckboxField,
  SearchButton,
  TextField,
} from '@/components/SearchBar/SearchBarFormComponents'
import { fieldContext, formContext } from '@/context/form-context'

export const { useAppForm, withForm } = createFormHook({
  fieldComponents: {
    TextField,
    CheckboxField,
  },
  formComponents: {
    SearchButton,
  },
  fieldContext,
  formContext,
})
