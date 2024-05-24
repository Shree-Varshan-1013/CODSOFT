import { cn } from "../../lib/utils";

const ShinyText = ({ children, className, shimmerWidth = 200 }) => {
    return (
        <p
            style={{
                "--shimmer-width": `${shimmerWidth}px`,
            }}
            className={cn(
                "text-neutral-600/50 dark:text-neutral-400/50",

                // Shimmer effect
                "animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",

                // Shimmer gradient
                "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent dark:via-white/80",

                className
            )}
        >
            {children}
        </p>
    );
};

export default ShinyText;
