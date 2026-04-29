import type { MarkType } from "../../types/MarkType";
import "./index.scss";

export default function Mark({ logo, alt }: MarkType) {
  return (
    <div className="mark">
      <img src={logo} alt={alt} />
    </div>
  );
}