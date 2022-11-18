interface PauseButtomProps {
  onClick: () => void
}

export function PauseButton({onClick} : PauseButtomProps) {
  return (
    <button onClick={onClick} className='p-1 m-6 w-8 h-8 bg-brand-500 rounded-md'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 5.25v13.5m-7.5-13.5v13.5"
        />
      </svg>
    </button>
  );
}
