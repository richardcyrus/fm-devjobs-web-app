import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import type * as React from 'react'
import { twMerge } from 'tailwind-merge'

const button = cva('button', {
  variants: {
    intent: {
      primary: ['text-white', 'bg-violet-300', 'hover:bg-violet-100'],
      secondary: ['text-violet-300', 'bg-violet-100/10', 'hover:bg-violet-300'],
      filter: ['bg-transparent'],
    },
    block: {
      false: null,
      true: ['w-full'],
    },
    disabled: {
      false: null,
      true: ['opacity-[0.2]'],
    },
  },
  defaultVariants: {
    intent: 'primary',
    block: false,
    disabled: false,
  },
})

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  block,
  disabled,
  children,
  ...props
}) => {
  return (
    <button
      className={twMerge(
        button({ intent, block, disabled }),
        className,
        'button inline-flex cursor-pointer items-center justify-center self-start rounded-[5px] border-none p-0 font-sans font-bold',
        'min-h-12 min-w-[141px] text-center focus:outline-solid focus:outline-transparent',
        'focus:shadow-button-focus',
      )}
      disabled={disabled || undefined}
      {...props}
    >
      {children}
    </button>
  )
}
