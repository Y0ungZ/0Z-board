const ContainedButton = ({ text, onClick }: ContainedButtonProps) => {
  return (
    <button
      className="text-white m-5 h-8 w-40 rounded-2xl border-2 border-blue bg-green
  font-accent"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

interface ContainedButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default ContainedButton;
