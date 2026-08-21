const Ferrari = ({
  className,
  fill = "#ed1717",
}: {
  className?: string;
  fill?: string;
}) => (
  <svg viewBox="0 0 260 90" fill="none" className={className} aria-hidden>
    <path
      d="M16 68 L16 54 Q14 44 26 41 L86 35 L96 35 Q100 43 108 43 L116 43 Q122 43 124 37 L130 24 L137 24 L143 37 L222 41 Q238 43 240 53 L238 62 Q236 68 228 68 L202 68 A17 17 0 0 0 168 68 L87 68 A17 17 0 0 0 53 68 Z"
      fill={fill}
    />
    <circle cx="70" cy="68" r="12" fill="#171717" />
    <circle cx="70" cy="68" r="4" fill="#f7f8fa" />
    <circle cx="185" cy="68" r="12" fill="#171717" />
    <circle cx="185" cy="68" r="4" fill="#f7f8fa" />
  </svg>
);

export default Ferrari;
