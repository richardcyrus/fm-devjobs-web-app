import { Button } from '@/components/Button/Button'
import { useFieldContext, useFormContext } from '@/context/form-context'

export function SearchButton({
  buttonRole,
  buttonIntent,
  block,
  isMobile,
  formId,
  onClick,
}: {
  buttonRole?: string
  buttonIntent?: 'primary' | 'secondary' | 'filter'
  block?: boolean
  isMobile?: boolean
  formId?: string
  onClick?: () => void
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
          form={formId}
          onClick={onClick}
        >
          {isMobile ? (
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Search</title>
              <path
                d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
                fill="#5964E0"
                fillRule="nonzero"
              />
            </svg>
          ) : (
            'Search'
          )}
        </Button>
      )}
    </form.Subscribe>
  )
}

export function TextField({
  placeholder,
  className,
  formId,
}: {
  placeholder?: string
  className?: string
  formId?: string
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
      form={formId}
    />
  )
}

export function CheckboxField({
  isMobile,
  formId,
}: {
  isMobile: boolean
  formId?: string
}) {
  const field = useFieldContext<boolean>()

  return (
    <label
      htmlFor="contract"
      className={`${isMobile ? '' : 'contract-label'} grid grid-cols-checkbox gap-x-4 font-bold text-blue-800 dark:text-white`}
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
          form={formId}
          value="Full Time"
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
        className={`${isMobile ? '' : 'radio__label justify-items-center'}`}
      >
        Full Time
        <span className={`${isMobile ? '' : 'sm:max-lg:hidden'}`}> Only</span>
      </span>
    </label>
  )
}
