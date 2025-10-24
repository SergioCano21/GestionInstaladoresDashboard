import { Loader } from '../Loader';

interface Props {
  text: string;
  type: 'submit' | 'reset' | 'button';
  variant: 'primary' | 'edit' | 'delete' | 'close';
  onClick?: () => void;
  loading?: boolean;
  extraClasses?: string;
}

const Button = ({ text, type, variant, onClick, loading = false, extraClasses = '' }: Props) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${extraClasses}`}
      onClick={onClick}
      disabled={loading}
      style={{ position: 'relative' }}
    >
      <span style={{ visibility: loading ? 'hidden' : 'visible' }}>{text}</span>
      {loading && (
        <span
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Loader />
        </span>
      )}
    </button>
  );
};

export default Button;
