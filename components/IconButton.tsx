interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
}

const IconButton = ({ icon, onClick }: IconButtonProps) => {
  return (
    <div
      className="flex justify-center items-center size-[36px] hover:bg-[rgba(144,144,144,0.45)] rounded-full cursor-pointer"
      onClick={onClick}
    >
      {icon}
    </div>
  );
};

export default IconButton;
