export type MarqueeType = {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "left-right" | "right-left" | "top-bottom" | "bottom-top";
};
