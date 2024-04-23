import headerImg from "../assets/header.svg";

export default function Header() {
  return (
    <div className="header">
      <a className="header" href="/">
        <img src={headerImg}></img>
      </a>
    </div>
  );
}
