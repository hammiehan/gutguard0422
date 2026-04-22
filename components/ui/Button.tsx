import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = (ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>) & {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-black text-white hover:bg-neutral-800",
  secondary: "border border-neutral-300 bg-white text-black hover:bg-neutral-50",
};

export default function Button({
  children,
  className,
  href,
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = [baseClasses, variantClasses[variant], className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
}
