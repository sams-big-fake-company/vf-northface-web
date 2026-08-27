import type { Color, ProductIcon } from "@/lib/data";

type Props = {
  icon: ProductIcon;
  color: Color;
  className?: string;
};

function JacketIcon({ fill }: { fill: string }) {
  return (
    <g>
      {/* sleeves */}
      <path d="M40 30 L28 38 L22 88 L36 90 L42 52 Z" fill={fill} stroke="#111" strokeWidth="1.5" />
      <path d="M80 30 L92 38 L98 88 L84 90 L78 52 Z" fill={fill} stroke="#111" strokeWidth="1.5" />
      {/* body */}
      <path
        d="M48 22 L40 30 L40 100 L80 100 L80 30 L72 22 L64 27 Q60 31 56 27 Z"
        fill={fill}
        stroke="#111"
        strokeWidth="1.5"
      />
      {/* yoke */}
      <path d="M48 22 L40 30 L40 46 L80 46 L80 30 L72 22 L64 27 Q60 31 56 27 Z" fill="#1a1a1a" />
      {/* collar */}
      <path d="M48 22 Q60 34 72 22 L72 16 Q60 26 48 16 Z" fill="#1a1a1a" stroke="#111" strokeWidth="1" />
      <line x1="60" y1="30" x2="60" y2="100" stroke="#111" strokeWidth="1.5" />
      {/* puffer baffles */}
      <path d="M40 58 Q60 64 80 58 M40 72 Q60 78 80 72 M40 86 Q60 92 80 86" stroke="#111" strokeWidth="0.9" fill="none" opacity="0.5" />
      <path d="M28 52 L40 56 M26 66 L38 70 M24 80 L36 82 M92 52 L80 56 M94 66 L82 70 M96 80 L84 82" stroke="#111" strokeWidth="0.7" opacity="0.4" />
    </g>
  );
}

function FleeceIcon({ fill }: { fill: string }) {
  return (
    <g>
      <path d="M40 32 L28 40 L24 90 L38 92 L42 54 Z" fill={fill} stroke="#111" strokeWidth="1.5" />
      <path d="M80 32 L92 40 L96 90 L82 92 L78 54 Z" fill={fill} stroke="#111" strokeWidth="1.5" />
      <path
        d="M48 24 L40 32 L40 100 L80 100 L80 32 L72 24 L64 29 Q60 33 56 29 Z"
        fill={fill}
        stroke="#111"
        strokeWidth="1.5"
      />
      <line x1="60" y1="32" x2="60" y2="100" stroke="#111" strokeWidth="1.5" />
      <path d="M48 24 Q60 36 72 24 L72 18 Q60 28 48 18 Z" fill="#1a1a1a" stroke="#111" strokeWidth="1" />
      <path d="M44 44 q4 3 8 0 M52 52 q4 3 8 0 M64 44 q4 3 8 0 M46 62 q4 3 8 0 M62 58 q4 3 8 0" stroke="#111" strokeWidth="0.7" fill="none" opacity="0.4" />
    </g>
  );
}

function BackpackIcon({ fill }: { fill: string }) {
  return (
    <g>
      <rect x="36" y="30" width="48" height="66" rx="14" fill={fill} stroke="#111" strokeWidth="1.5" />
      <path d="M46 30 Q60 16 74 30" fill="none" stroke="#111" strokeWidth="4" />
      <rect x="44" y="62" width="32" height="30" rx="8" fill="#1a1a1a" opacity="0.85" />
      <path d="M44 44 L76 56 M76 44 L44 56" stroke="#f4f4f4" strokeWidth="2" />
      <rect x="56" y="92" width="8" height="6" rx="2" fill="#111" />
    </g>
  );
}

function ShoeIcon({ fill }: { fill: string }) {
  return (
    <g>
      <path
        d="M24 78 Q24 60 40 56 L52 44 Q56 40 60 46 L70 60 Q86 64 94 74 L96 82 L24 82 Z"
        fill={fill}
        stroke="#111"
        strokeWidth="1.5"
      />
      <rect x="22" y="82" width="76" height="8" rx="4" fill="#1a1a1a" />
      <path d="M48 52 L58 62 M54 48 L64 58" stroke="#111" strokeWidth="1.2" opacity="0.6" />
    </g>
  );
}

function TentIcon({ fill }: { fill: string }) {
  return (
    <g>
      <path d="M60 28 L104 92 L16 92 Z" fill={fill} stroke="#111" strokeWidth="1.5" />
      <path d="M60 28 L60 92 M60 50 L46 92 M60 50 L74 92" stroke="#111" strokeWidth="1.2" opacity="0.7" />
      <path d="M52 92 L60 66 L68 92 Z" fill="#1a1a1a" opacity="0.85" />
    </g>
  );
}

function BeanieIcon({ fill }: { fill: string }) {
  return (
    <g>
      <path d="M32 74 Q32 36 60 36 Q88 36 88 74 Z" fill={fill} stroke="#111" strokeWidth="1.5" />
      <rect x="30" y="72" width="60" height="16" rx="6" fill={fill} stroke="#111" strokeWidth="1.5" />
      <path d="M40 74 V86 M50 74 V88 M60 74 V88 M70 74 V88 M80 74 V86" stroke="#111" strokeWidth="1" opacity="0.5" />
      <circle cx="60" cy="34" r="5" fill="#1a1a1a" />
    </g>
  );
}

function PantsIcon({ fill }: { fill: string }) {
  return (
    <g>
      <path
        d="M42 24 L78 24 L82 100 L66 100 L60 56 L54 100 L38 100 Z"
        fill={fill}
        stroke="#111"
        strokeWidth="1.5"
      />
      <rect x="42" y="24" width="36" height="8" fill="#1a1a1a" opacity="0.85" />
      <path d="M48 40 L52 48 M72 40 L68 48" stroke="#111" strokeWidth="1" opacity="0.5" />
    </g>
  );
}

function DuffelIcon({ fill }: { fill: string }) {
  return (
    <g>
      <rect x="20" y="44" width="80" height="44" rx="20" fill={fill} stroke="#111" strokeWidth="1.5" />
      <path d="M44 44 Q60 28 76 44" fill="none" stroke="#111" strokeWidth="4" />
      <line x1="60" y1="44" x2="60" y2="88" stroke="#111" strokeWidth="1.5" />
      <circle cx="60" cy="66" r="10" fill="#1a1a1a" opacity="0.85" />
      <path d="M56 66 A 5 5 0 0 0 60 61 M64 66 A 5 5 0 0 1 60 71" stroke="#f4f4f4" strokeWidth="1.2" fill="none" />
    </g>
  );
}

const icons: Record<ProductIcon, (props: { fill: string }) => React.ReactNode> = {
  jacket: JacketIcon,
  fleece: FleeceIcon,
  backpack: BackpackIcon,
  shoe: ShoeIcon,
  tent: TentIcon,
  beanie: BeanieIcon,
  pants: PantsIcon,
  duffel: DuffelIcon,
};

export default function ProductImage({ icon, color, className }: Props) {
  const Icon = icons[icon];
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label={icon}>
      <rect width="120" height="120" fill="#f4f4f5" />
      <Icon fill={color.hex} />
    </svg>
  );
}
