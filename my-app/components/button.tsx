interface ButtonProps {
    text: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonFromProps: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
      <button 
      onClick={onClick} 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <p>{text}</p>
      </button>
    );
};

export default ButtonFromProps;