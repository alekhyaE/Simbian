
export default function WarningCircleIcon({ className = "w-6 h-6 text-white" }) {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" className="fill-red-500" />
        <path
          fill="white"
          d="M12 7c.4 0 .75.3.75.75v4.5a.75.75 0 01-1.5 0v-4.5c0-.45.35-.75.75-.75zm0 8a1 1 0 100-2 1 1 0 000 2z"
        />
      </svg>
    );
  }
  
