import Leftbox from "@/components/boxes/Leftbox";
import Mainbox from "@/components/boxes/Mainbox";
import Rightbox from "@/components/boxes/Rightbox";
import Weather from "@/components/contents/Weather";

export default function page() {
  return (
    <>
      <Mainbox>
        <Rightbox>
        </Rightbox>
        <Leftbox>
          <Weather/>
        </Leftbox>
      </Mainbox>
    </>
  );
}
