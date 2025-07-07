interface Props {
  text: string;
  type: 'submit' | 'reset' | 'button';
  variant: 'primary' | 'edit' | 'delete' | 'close';
  onClick?: () => void;
}

const Button = ({ text, type, variant, onClick }: Props) => {
  return (
    <button type={type} className={`btn btn-${variant}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
