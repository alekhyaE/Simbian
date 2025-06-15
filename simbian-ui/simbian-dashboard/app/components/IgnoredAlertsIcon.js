export default function CrossCircleIcon({ className = "w-6 h-6 text-red-600" }) {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
        <path strokeWidth="1.5" strokeLinecap="round" d="M15 9l-6 6M9 9l6 6" />
      </svg>
    );
  }
  
