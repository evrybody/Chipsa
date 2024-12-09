import "./Button.css";

export default function Button({ url, name }) {
  return (
    <button
      className="btn"
      onClick={() => (window.location.href = url)}
    >
      {name}
    </button>
  );
}