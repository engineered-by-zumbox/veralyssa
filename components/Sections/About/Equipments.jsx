import AnimatedTitle from "@/components/AnimatedTtitle";
import Image from "next/image";

const EquipContainer = ({ type = 1, bgColor, text, textColor, imageUrl }) => (
  <div
    style={{ backgroundColor: `${bgColor}` }}
    className={`h-[204px] ${type === 1 && `p-[10px]`}`}
  >
    {type === 1 ? (
      <div className="border h-full border-white myFlex justify-center">
        <h3
          style={{ color: `${textColor}` }}
          className={`text-[28px] font-bold uppercase`}
        >
          {text}
        </h3>
      </div>
    ) : (
      <Image
        width={400}
        height={250}
        src={imageUrl}
        alt="image"
        className="w-full h-full object-cover"
      />
    )}
  </div>
);

const Equipments = () => {
  return (
    <section className="myContainer grid gap-6 lg:gap-10 lg:grid-cols-2">
      <div className="flex flex-col justify-end gap-10 lg:gap-3">
        <AnimatedTitle
          title="SOME OF OUR EQUIPMENTS"
          tag="h1"
          className="text-[#B1B1B1]"
        />
        <div className="grid md:grid-cols-2 gap-6">
          <EquipContainer
            text="EXCAVATORS"
            textColor="#DFBA4E"
            bgColor="#787776"
          />
          <EquipContainer type={2} imageUrl="/images/excavator.png" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <EquipContainer
          text="ROAD ROLLER"
          textColor="#DFBA4E"
          bgColor="#787776"
        />
        <EquipContainer type={2} imageUrl="/images/roller.png" />

        <EquipContainer
          text="CONCRETE MIXER"
          bgColor="#DFBA4E"
          textColor="#ffffff"
        />
        <EquipContainer type={2} imageUrl="/images/tractor.png" />
      </div>
    </section>
  );
};

export default Equipments;
