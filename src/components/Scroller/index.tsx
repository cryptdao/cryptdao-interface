import GoogleNearbyIcon from "@/icons/logo";
import QuestionCircleIcon from "@/icons/question";
import TimelineIcon from "@/icons/timeline";
export default function Scroller() {
  return (
    <>
      <nav className="flex flex-col">
        <section className="min-h-[70px]">
          <GoogleNearbyIcon />
        </section>
        <section>
          <TimelineIcon />
          <QuestionCircleIcon />
        </section>
      </nav>
    </>
  );
}
