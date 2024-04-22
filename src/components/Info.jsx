export default function Info({ children }) {
  return (
    <div className="info">
      <p className="info-text">
        Do you want to get insulted? Because this is how you get insulted.
      </p>
      {children}
    </div>
  );
}
