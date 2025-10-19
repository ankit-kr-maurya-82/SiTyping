import TypingPreview from "../pages/TypingPreview";
import Timer from "../components/Timer";

export default function Test() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-10">
      <Timer duration={60} />
      <TypingPreview />
    </div>
  );
}
