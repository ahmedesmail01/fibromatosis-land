import Image from "next/image";
import React from "react";
import pregnant from "@/public/images/pregnant-img.svg";
import polygon from "@/public/images/Polygon.svg";

const Suffer = () => {
  return (
    <div className=" relative w-full flex flex-col gap-4 overflow-hidden justify-center items-center px-4 mb-[60px] lg:mt-[60px] lg:mb-[96px]">
      <h1 className="self-stretch text-[#e48673] text-center [font-family:--font-monadi] text-2xl lg:text-[40px]  leading-[160%] ">
        معاناة الأورام الليفية{" "}
      </h1>
      <p className="text-[#353535c8] text-center lg:w-[1080px] font-semibold mb-[50px] px-4 w-full [font-family:--font-cairo] ">
        الأورام الليفية (Fibroids) هي نموات غير سرطانية تتكون في جدار الرحم أو
        داخله، وغالباً ما تظهر لدى النساء في سنوات الإنجاب. تُعرف أيضًا باسم
        الأورام العضلية الرحمية، وتتكون من ألياف عضلية ونسيج ضام. تختلف هذه
        الأورام في الحجم؛ فقد تكون صغيرة جدًا أو تنمو لتصبح كبيرة بما يكفي لتشوه
        شكل الرحم.
      </p>

      <div className="flex  justify-between flex-col lg:flex-row-reverse gap-12 items-center lg:items-start">
        {/* Right box */}
        <div dir="rtl">
          <h2 className=" text-[#353535] text-right [font-family:Cairo] text-xl font-bold leading-7">
            نزيف رحمي غزير:
          </h2>
          <div className="flex items-center gap-4 justify-start">
            <Image src={polygon} alt="polygon-circle" />
            <p className=" text-[#353535] text-right [font-family:Cairo] text-sm font-normal leading-7 opacity-80">
              قد تعاني النساء من دورات شهرية غزيرة وغير منتظمة.
            </p>
          </div>
          <div className="flex mb-6 items-center gap-4 justify-start">
            <Image src={polygon} alt="polygon-circle" />
            <p className="  text-[#353535] text-right [font-family:Cairo] text-sm font-normal leading-7 opacity-80">
              نزول دم بين الدورات الشهرية.
            </p>
          </div>
          <h2 className=" text-[#353535] text-right [font-family:Cairo] text-xl font-bold leading-7">
            آلام الحوض والظهر
          </h2>
          <div className="flex mb-6 items-center gap-4 justify-start">
            <Image src={polygon} alt="polygon-circle" />
            <p className="  text-[#353535] text-right [font-family:Cairo] text-sm font-normal leading-7 opacity-80">
              شعور بثقل وضغط مستمر في منطقة الحوض.
            </p>
          </div>
          <h2 className=" text-[#353535] text-right [font-family:Cairo] text-xl font-bold leading-7">
            انتفاخ البطن
          </h2>
          <div className="flex items-center gap-4 justify-start">
            <Image src={polygon} alt="polygon-circle" />
            <p className=" text-[#353535] text-right [font-family:Cairo] text-sm font-normal leading-7 opacity-80">
              ممكن أن تسبب الأورام الكبيرة انتفاخاً مشابهاً للحمل.
            </p>
          </div>
        </div>
        {/* Centered image */}
        <Image src={pregnant} alt="pregnant-shape" />
        {/* Left box */}
        <div dir="rtl">
          <h2 className=" text-[#353535] text-right [font-family:Cairo] text-xl font-bold leading-7">
            مشاكل في التبول والإخراج:
          </h2>
          <div className="flex items-center gap-4 justify-start">
            <Image src={polygon} alt="polygon-circle" />
            <p className=" text-[#353535] text-right [font-family:Cairo] text-sm font-normal leading-7 opacity-80">
              ضغط على المثانة يؤدي إلى التبول المتكرر أو صعوبة في التفريغ الكامل{" "}
            </p>
          </div>
          <div className="flex mb-6 items-center gap-4 justify-start">
            <Image src={polygon} alt="polygon-circle" />
            <p className="  text-[#353535] text-right [font-family:Cairo] text-sm font-normal leading-7 opacity-80">
              الإمساك نتيجة الضغط على الأمعاء{" "}
            </p>
          </div>
          <h2 className=" text-[#353535] text-right [font-family:Cairo] text-xl font-bold leading-7">
            ألم أثناء العلاقة الزوجية{" "}
          </h2>
          <div className="flex mb-6 items-center gap-4 justify-start">
            <Image src={polygon} alt="polygon-circle" />
            <p className="  text-[#353535] text-right [font-family:Cairo] text-sm font-normal leading-7 opacity-80">
              قد تشعر النساء بألم أو انزعاج أثناء الجماع{" "}
            </p>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Suffer;
