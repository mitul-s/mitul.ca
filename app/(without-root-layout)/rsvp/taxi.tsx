const Taxi = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 260 90" fill="none" className={className} aria-hidden>
    {/* Roof light / taxi sign */}
    <rect x="108" y="6" width="44" height="18" rx="2" fill="#171717" />
    <rect x="113" y="10" width="34" height="10" rx="1" fill="#f5c518" />
    {/* Body */}
    <path
      d="M16 68 L16 54 Q14 44 26 41 L86 35 L96 35 Q100 43 108 43 L116 43 Q122 43 124 37 L130 24 L137 24 L143 37 L222 41 Q238 43 240 53 L238 62 Q236 68 228 68 L202 68 A17 17 0 0 0 168 68 L87 68 A17 17 0 0 0 53 68 Z"
      fill="#f5c518"
    />
    {/* Checker stripe */}
    <rect x="24" y="49" width="208" height="8" fill="#171717" />
    <rect x="28" y="49" width="8" height="8" fill="#f7f8fa" />
    <rect x="44" y="49" width="8" height="8" fill="#f7f8fa" />
    <rect x="60" y="49" width="8" height="8" fill="#f7f8fa" />
    <rect x="76" y="49" width="8" height="8" fill="#f7f8fa" />
    <rect x="92" y="49" width="8" height="8" fill="#f7f8fa" />
    <rect x="108" y="49" width="8" height="8" fill="#f7f8fa" />
    <rect x="124" y="49" width="8" height="8" fill="#f7f8fa" />
    <rect x="140" y="49" width="8" height="8" fill="#f7f8fa" />
    <rect x="156" y="49" width="8" height="8" fill="#f7f8fa" />
    <rect x="172" y="49" width="8" height="8" fill="#f7f8fa" />
    <rect x="188" y="49" width="8" height="8" fill="#f7f8fa" />
    <rect x="204" y="49" width="8" height="8" fill="#f7f8fa" />
    <rect x="220" y="49" width="8" height="8" fill="#f7f8fa" />
    <circle cx="70" cy="68" r="12" fill="#171717" />
    <circle cx="70" cy="68" r="4" fill="#f7f8fa" />
    <circle cx="185" cy="68" r="12" fill="#171717" />
    <circle cx="185" cy="68" r="4" fill="#f7f8fa" />
  </svg>
);

export default Taxi;
