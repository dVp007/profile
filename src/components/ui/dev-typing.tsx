import { useSpring, animated } from "@react-spring/web";

export default function DevTyping() {
  const text = "// Building intelligent systems...";

  const springs = useSpring({
    from: { n: 0 },
    to: { n: text.length },
    config: { duration: 40 * text.length },
    reset: true,
  });

  return (
    <div className="font-['JetBrains_Mono'] text-sm">
      <animated.span
        children={springs.n.to((val) => text.slice(0, Math.floor(val)))}
        className="text-[hsl(174,100%,50%)]"
      />
      <span className="cursor-blink inline-block w-[10px] h-[18px] bg-[hsl(120,100%,50%)] ml-1 align-middle" />
    </div>
  );
}
