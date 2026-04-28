import clsx from "clsx";

const variants = {
  primary:
    "bg-sky-500 text-white hover:bg-sky-600 border border-sky-500",
  secondary:
    "bg-white text-slate-900 hover:bg-slate-50 border border-slate-200",
  ghost:
    "bg-transparent text-slate-700 hover:bg-slate-100 border border-slate-200",
  green:
    "bg-green-500 text-white hover:bg-green-600 border border-green-500"
};

const sizes = {
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base"
};

export default function Button({
  as: Component = "button",
  className,
  variant = "primary",
  size = "md",
  ...props
}) {
  return (
    <Component
      className={clsx(
        "inline-flex items-center justify-center rounded-lg font-semibold transition duration-200 disabled:cursor-not-allowed disabled:opacity-60",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}
