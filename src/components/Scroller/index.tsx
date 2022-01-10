import GoogleNearbyIcon from "@/icons/logo";
import { Link } from "react-router-dom";

export default function Scroller() {
  return (
    <>
      <nav className="flex flex-col min-h-[70px]">
        <section>
          <Link to="/proposal">
            <GoogleNearbyIcon />
          </Link>
        </section>
      </nav>
    </>
  );
}
