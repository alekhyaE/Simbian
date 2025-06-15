
export default function RedMonitorIcon({ className = "w-6 h-6 text-red-600" }) {
    return (
      <svg
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3"
          y="4"
          width="18"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M8 20h8M12 18v2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  
