export default function ActiveThreatsIcon({ className = "w-6 h-6 text-orange-600" }) {
    return (
        <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 3L4 6v6c0 5.25 3.75 9.75 8 10 4.25-.25 8-4.75 8-10V6l-8-3z" />
      <line x1="12" y1="10" x2="12" y2="14" />
      <circle cx="12" cy="17" r="1" />
    </svg>
    );
  }
  
