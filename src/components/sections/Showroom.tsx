import locationIcon from "../../assets/imgVuesaxLinearLocation.svg";
import callIcon from "../../assets/imgVuesaxLinearCall.svg";
import calendarIcon from "../../assets/imgVuesaxLinearCalendar.svg";
import showroomImg from "../../assets/imgContainer4.jpg";
import Reveal from "../Reveal";
import TextLink from "../TextLink";
import Button from "../Button";

const hours = [
  { day: "Tue – Thu", time: "11:00 am – 7:00 pm" },
  { day: "Friday", time: "11:00 am – 6:00 pm" },
  { day: "Saturday", time: "11:00 am – 4:00 pm" },
  { day: "Sun & Mon", time: "Closed" },
];

export default function Showroom() {
  return (
    <section
      className="container-x w-full flex flex-col items-start pt-16 lg:pt-[120px] pb-16 lg:pb-20"
      style={{
        backgroundImage:
          "linear-gradient(176.89deg, rgb(247, 244, 242) 72.883%, rgb(255, 255, 255) 97.069%)",
      }}
    >
      {/* Image drops below the details on phones (column-reverse would hide the
          copy behind a tall photo). */}
      <div className="bg-white w-full flex flex-col lg:flex-row gap-10 lg:gap-[86px] items-stretch lg:items-center overflow-hidden px-5 sm:px-6 lg:pl-8 lg:pr-0">
        <Reveal className="flex flex-col gap-[30px] h-full items-start pt-10 lg:py-20 w-full lg:w-[510px] shrink-0">
          <div className="flex flex-col gap-8 items-start w-full">
            <div className="flex flex-col gap-3 items-start w-full">
              <p className="font-body text-sm lg:text-base text-core-06 tracking-[2.4px] lg:tracking-[3.2px]">
                VISIT OUR SHOWROOM
              </p>
              <h2 className="font-title font-bold text-2xl sm:text-[28px] lg:text-[32px] leading-tight lg:leading-10 text-core-05 max-w-[302px]">
                Experience the Difference In Person
              </h2>
              <p className="font-body text-sm text-core-06">
                Our Roseville showroom is where unforgettable moments begin. Discover one of
                Minnesota's largest selections of engagement rings, wedding bands, and fine
                jewelry while enjoying personalized guidance in a relaxed, no-pressure
                environment. Whether you're celebrating today or planning for tomorrow, we're
                here to help you find a piece you'll treasure for a lifetime.
              </p>
            </div>

            <div className="flex flex-col gap-6 items-start w-full">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
                <div className="flex gap-[18px] items-center w-full sm:w-[300px]">
                  <img src={locationIcon} alt="" className="size-6 shrink-0" />
                  <p className="font-body text-base text-core-06">
                    1717 Lexington Ave N, Roseville, MN 55113
                  </p>
                </div>
                <TextLink color="navy">GET DIRECTIONS</TextLink>
              </div>
              <div className="flex gap-[18px] items-start w-full">
                <img src={callIcon} alt="" className="size-6 shrink-0" />
                <p className="font-body text-base text-core-06">651-488-0365</p>
              </div>
            </div>

            <div className="flex flex-col gap-8 items-start w-full">
              <div className="flex flex-col gap-4 items-start w-full">
                <div className="flex gap-[18px] items-start">
                  <img src={calendarIcon} alt="" className="size-6 shrink-0" />
                  <p className="font-body text-base text-core-06">Store Hours</p>
                </div>
                <div className="h-px w-full bg-[#d6d6d6]" />
                <div className="flex flex-col gap-[21px] items-start w-full">
                  {hours.map((h, i) => (
                    <div key={h.day} className="w-full">
                      <div className="flex items-center justify-between w-full font-body text-base">
                        <p className="text-core-06">{h.day}</p>
                        <p className="text-main-01">{h.time}</p>
                      </div>
                      {i < hours.length - 1 && <div className="h-px w-full bg-[#d6d6d6] mt-[21px]" />}
                    </div>
                  ))}
                </div>
              </div>
              <Button className="w-full" showIcon={false}>
                SCHEDULE A CONSULTATION
              </Button>
            </div>
          </div>

          <div className="flex gap-2.5 items-start w-full pb-2 lg:pb-0">
            <div className="size-2 bg-black/30 mt-2.5 shrink-0" />
            <div className="flex flex-col gap-1 items-start text-core-06">
              <p className="font-title text-2xl lg:text-[27px] leading-8">Walk-ins Welcome</p>
              <p className="font-body text-base">
                Appointments recommended for the best experience.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Fixed aspect on phones so the photo can't collapse to zero height
            once it's no longer a stretched flex sibling. */}
        <Reveal delay={0.15} className="lg:flex-1 min-w-0 w-full self-stretch -mx-5 sm:-mx-6 lg:mx-0">
          <img
            src={showroomImg}
            alt="Showroom"
            className="w-full h-[320px] sm:h-[420px] lg:h-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
