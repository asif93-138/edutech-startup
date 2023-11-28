import "../styles/input.module.css";
export default function Input({ ...rest }) {
  return (
    <div>
      <input {...rest} />
    </div>
  );
}
