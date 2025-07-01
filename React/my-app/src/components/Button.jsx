export function Button({type="button", text, onClick, }) {
  return (
    <button className="auth-button" onClick={onClick} type={type}>
      {text}
    </button>
  );
}