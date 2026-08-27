import type { Color, ProductIcon } from "@/lib/data";

type Props = {
  icon: ProductIcon;
  color: Color;
  className?: string;
};

function JacketIcon({ fill }: { fill: string }) {
  return (
    <g>
      <path
        d="M50 22 L38 28 L26 60 L36 64 L40 54 L40 100 L80 100 L80 54 L84 64 L94 60 L82 28 L70 22 L64 26 Q60 30 56 26 Z"
        fill={fill}
        stroke="#111"
        strokeWidth="1.5"
      />
      <path d="M50 22 L38 28 L40 42 L80 42 L82 28 L70 22 L64 26 Q60 30 56 26 Z" fill="#1a1a1a" />
      <line x1="60" y1="30" x2="60" y2="100" stroke="#111" strokeWidth="1.5" />
      <line x1="40" y1="56" x2="80" y2="56" stroke="#111" strokeWidth="0.8" opacity="0.5" />
      <line x1="40" y1="70" x2="80" y2="70" stroke="#111" strokeWidth="0.8" opacity="0.5" />
      <line x1="40" y1="84" x2="80" y2="84" stroke="#111" strokeWidth="0.8" opacity="0.5" />
    </g>
  );
}

function FleeceIcon({ fill }: { fill: string }) {
  return (
    <g>
      <path
        d="M50 24 L36 30 L26 58 L36 62 L40 54 L40 100 L80 100 L80 54 L84 62 L94 58 L84 30 L70 24 L64 28 Q60 32 56 28 Z"
        fill={fill}
        stroke="#111"
        strokeWidth="1.5"
      />
      <line x1="60" y1="30" x2="60" y2="100" stroke="#111" strokeWidth="1.5" />
      <circle cx="60" cy="27" r="4" fill="none" stroke="#111" strokeWidth="1.2" />
      <path d="M44 40 q4 3 8 0 M52 46 q4 3 8 0 M64 40 q4 3 8 0" stroke="#111" strokeWidth="0.7" fill="none" opacity="0.4" />
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
