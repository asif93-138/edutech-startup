
export default function Option({ text }) {
  return (
    <div>
      <div>
        <label>
          <input
           
            type="radio"
            name="answer"
            value="paris"
          />
          {text}
        </label>
      </div>
    </div>
  );
}
