import { Button } from '@/components/Button/Button'
import { useFieldContext, useFormContext } from '@/hooks/form-context'

export function SearchButton({
  buttonRole,
  buttonIntent,
  block,
}: {
  buttonRole?: string
  buttonIntent?: 'primary' | 'secondary' | 'filter'
  block?: boolean
}) {
  const form = useFormContext()

  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <Button
          type="submit"
          intent={buttonIntent || 'primary'}
          data-button-role={buttonRole}
          disabled={isSubmitting}
          block={block}
        >
          Search
        </Button>
      )}
    </form.Subscribe>
  )
}

export function TextField({
  placeholder,
  className,
}: {
  placeholder?: string
  className?: string
}) {
  const field = useFieldContext<string>()

  return (
    <input
      type="text"
      id={field.name}
      name={field.name}
      placeholder={placeholder}
      onBlur={field.handleBlur}
      onChange={(e) => field.handleChange(e.target.value)}
      value={field.state.value}
      className={className}
    />
  )
}

export function CheckboxField({ isMobile }: { isMobile: boolean }) {
  const field = useFieldContext<boolean>()

  return (
    <label
      htmlFor="contract"
      className={`"${isMobile ? '' : 'contract-label'} grid grid-cols-checkbox gap-x-4 font-bold text-blue-800 dark:text-white"`}
    >
      <span className="checkbox__input grid [grid-template-areas:'checkbox']">
        <input
          type="checkbox"
          id={field.name}
          name={field.name}
          onBlur={field.handleBlur}
          onChange={(e) => field.handleChange(e.target.checked)}
          checked={field.state.value}
          className="h-6 w-6 opacity-0 [grid-area:checkbox]"
        />
        <span className="checkbox__control inline-grid h-6 w-6 place-items-center rounded-[0.1875rem] bg-blue-800/10 [grid-area:checkbox] dark:bg-white/10">
          <svg
            viewBox="0 0 15 12"
            width="15"
            height="12"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M1 6.57l3.572 3.572L13.714 1"
              stroke="#FFF"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </span>
      </span>
      <span
        className={`"${isMobile ? '' : 'radio__label justify-items-center'}"`}
      >
        Full Time
        <span className={`"${isMobile ? '' : 'sm:max-lg:hidden'}"`}> Only</span>
      </span>
    </label>
  )
}
