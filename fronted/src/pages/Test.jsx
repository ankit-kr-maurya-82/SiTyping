import Typing from "../pages/Typing";
import Timer from "../components/Timer";
import AdBanner from "../components/AdBanner";

export default function Test() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-6 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <Timer duration={60} />
      <Typing />
      <AdBanner />
    </div>
  );
}
