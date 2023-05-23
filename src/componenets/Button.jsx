// eslint-disable-next-line react/prop-types
const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`font-poppins py-4 px-6 bg-blue-gradient rounded-[10px] font-medium text-primary  outline-none  text-[18px] ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
