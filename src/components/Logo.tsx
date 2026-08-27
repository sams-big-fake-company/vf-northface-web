type LogoProps = {
  className?: string;
  color?: string;
};

/**
 * Stylized half-dome wordmark rendered as inline SVG: stacked "THE NORTH
 * FACE" text next to a quarter-dome with three contour lines.
 */
export default function Logo({ className, color = "currentColor" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 120 44"
      className={className}
      role="img"
      aria-label="The North Face demo logo"
      fill="none"
    >
      <text
        x="0"
        y="14"
        fill={color}
        fontSize="13"
        fontWeight="800"
        fontFamily="Helvetica, Arial, sans-serif"
        letterSpacing="0.5"
      >
        THE
      </text>
      <text
        x="0"
        y="28"
        fill={color}
        fontSize="13"
        fontWeight="800"
        fontFamily="Helvetica, Arial, sans-serif"
        letterSpacing="0.5"
      >
        NORTH
      </text>
      <text
        x="0"
        y="42"
        fill={color}
        fontSize="13"
        fontWeight="800"
        fontFamily="Helvetica, Arial, sans-serif"
        letterSpacing="0.5"
      >
        FACE
      </text>
      {/* Quarter-dome mark with contour lines */}
      <path
        d="M 118 42 L 118 2 A 42 42 0 0 0 76 42 Z"
        fill={color}
        transform="translate(-4 0)"
      />
      <path
        d="M 114 8 A 36 36 0 0 0 80 40"
        stroke="var(--logo-contrast, #ffffff)"
        strokeWidth="2.5"
        fill="none"
      />
      <path
        d="M 114 17 A 27 27 0 0 0 88 40"
        stroke="var(--logo-contrast, #ffffff)"
        strokeWidth="2.5"
        fill="none"
      />
      <path
        d="M 114 26 A 18 18 0 0 0 96 40"
        stroke="var(--logo-contrast, #ffffff)"
        strokeWidth="2.5"
        fill="none"
      />
    </svg>
  );
}
