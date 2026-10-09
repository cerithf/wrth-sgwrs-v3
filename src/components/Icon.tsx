const variants = {
  "chevron-up": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 15.75 7.5-7.5 7.5 7.5"
    />
  ),
  "chevron-double-right": (
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
    />
  ),
  "chevron-double-down": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
    />
  ),
  "chevron-double-up": (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 18.75 7.5-7.5 7.5 7.5"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 7.5-7.5 7.5 7.5"
      />
    </>
  ),
  user: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
    />
  ),
  "chevron-left": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5 8.25 12l7.5-7.5"
    />
  ),
};

export default function Icon({
  variant,
  size = "size-6",
  strokeWidth = 1.5,
}: {
  variant: keyof typeof variants;
  size?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke="currentColor"
      className={size}
    >
      {variants[variant]}
    </svg>
  );
}

// Topic Icons for profile page

export function TopicIcon({
  svgPath,
  colour = "var(--color-theme5)",
  className,
  style,
}: {
  svgPath: string;
  colour?: string;
  className?: string;
  style?: object;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={colour}
      className={"flex-2 p-1 " + className}
      style={style}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={svgPath} />
    </svg>
  );
}
