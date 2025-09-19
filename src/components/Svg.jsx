export function BaseSvg({
  className = "h-9 hover:text-gray-900 dark:hover:text-white",
  viewBox = "0 0 24 24",
  fill = "currentColor",
  children,
  ...props
}) {
  return (
    <svg
      className={className}
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  );
}
