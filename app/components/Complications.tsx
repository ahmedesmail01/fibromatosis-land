import Image from "next/image";
import React from "react";
import syring from "@/public/images/syring.svg";
import drop from "@/public/images/drop.svg";
import miscarriage from "@/public/images/miscarriage.svg";
// import ragol from "@/public/images/ragol-kaseep.svg";
// import estro from "@/public/images/estro.svg";
// import kyam from "@/public/images/kyam.svg";

const Complications = () => {
  return (
    <div className="text-center px-4 md:pb-[96px]  pb-[60px] flex flex-col items-center  w-full">
      <h1 className="self-stretch text-[#e48673] text-center [font-family:--font-monadi] text-2xl lg:mb-10 lg:text-[40px]  leading-[160%] ">
        المضاعفات الصحية للاورام الليفية{" "}
      </h1>

      <div
        dir="rtl"
        className="flex-col items-center lg:flex lg:flex-row lg:items-start gap-4 justify-center   [font-family:Tajawal] "
      >
        <div className="flex flex-col gap-4 p-[20px] mb-4 justify-start items-start    w-[300px]  lg:w-[350px] h-[300px] text-center  rounded-[10px]">
          <Image src={syring} alt="estro gym logo" />
          <h2 className=" text-center [font-family:--font-monadi] text-xl text-[#353535] leading-6">
            تأثير على الخصوبة{" "}
          </h2>
          <p className="w-[248px] text-start [font-family:--font-monadi] opacity-50">
            قد تؤدي الأورام إلى تعقيدات صحية قد تعيق الحمل أو تؤثر على فرص
            الإنجاب، حيث يمكن أن تزيد من خطر الإجهاض{" "}
          </p>
        </div>
        <div className="flex flex-col gap-4 p-[20px] mb-4 justify-start items-start   w-[300px]  lg:w-[350px] h-[300px] text-center  rounded-[10px]">
          <Image src={drop} alt="ragol kasseep logo" />
          <h2 className=" text-center [font-family:--font-monadi] text-xl text-[#353535] leading-6">
            فقر الدم{" "}
          </h2>

          <p className="w-[248px] text-start [font-family:--font-monadi] opacity-50">
            نتيجة النزيف الغزير، قد يعاني المريض من الشعور بالإرهاق الشديد
            والتعب المستمر، بالإضافة إلى الدوخة التي قد تؤثر على قدرته على
            القيام بالأنشطة اليومية{" "}
          </p>
        </div>

        <div className="flex flex-col gap-4 p-[20px] mb-4 justify-start items-start   w-[300px]  lg:w-[350px] h-[300px] text-center  rounded-[10px]">
          <Image src={miscarriage} alt="kyam logo" />
          <h2 className=" text-center [font-family:--font-monadi] text-xl text-[#353535] leading-6">
            الإجهاض المتكرر أو الولادة المبكرة{" "}
          </h2>
          <p className="w-[248px]     text-start [font-family:--font-monadi] opacity-50">
            إذا كانت الأورام كبيرة الحجم وموجودة خلال فترة الحمل، فقد تؤدي إلى
            تعقيدات صحية لكل من الأم والجنين، مثل الضغط على الرحم أو المشيمة{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Complications;
