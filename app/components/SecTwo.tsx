import Image from "next/image";
import React from "react";
// import skeleton from "@/public/images/skeleton.svg";
// import circleSvg from "@/public/images/Ellipse 1909.svg";
import cardPhoto from "@/public/images/card-photo.svg";
import cardPhotoMob from "@/public/images/card-photo-mob.svg";
import triangles from "@/public/images/curv.svg";
import Marq from "./Marq";

const SecTwo = () => {
  return (
    <div className="relative z-40 flex max-w-full  flex-col px-6 md:px-8 lg:px-[166px] gap-4 justify-center  mb-[60px] md:mb-[96px] ">
      <Marq />
      <div
        dir="rtl"
        className=" w-full flex py-8  flex-col justify-center items-center  lg:flex lg:flex-row-reverse lg:items-center lg:justify-center gap-10 "
      >
        <Image src={cardPhoto} alt="photo" className="hidden lg:flex z-40" />
        <Image
          src={cardPhotoMob}
          alt="photo"
          className="block lg:hidden w-[300px] z-40"
        />
        <div className="  w-full flex flex-col  px-4    gap-4 lg:justify-center h-auto  lg:items-start">
          {/* triangles pattern */}
          <Image
            src={triangles}
            alt="triangles"
            className="absolute right-0 top-18 z-10"
          />
          <h1 className="  text-[#e48673]  lg:text-right mb-[20px] [font-family:--font-monadi] w-full  text-[18px]  lg:text-[28px] font-normal ">
            جلسات الاتزان شفاء (الأورام الليفية){" "}
          </h1>

          <bdi className=" text-[#353535] text-right [font-family:--font-cairo] self-stretch  text-[15px] lg:text-[15px] font-bold ">
            تعتمد المجموعات العلاجية &quot;جلسات الاتزان شفاء&quot; على تفعيل
            آلية التشافي الذاتي
          </bdi>

          <p className=" text-[#353434] text-right lg:mb-10 [font-family:--font-cairo]  text-[14px] lg:text-[14px] font-normal  opacity-80 leading-relaxed">
            لتشافي الذاتي يبدأ باستعادة الاتزان الشعوري، وهو حال السكون
            والطمأنينة تجاه الأحداث والأفكار، حيث إن الإنسان كيان متكامل من
            الجسد والمشاعر، وأي اضطراب شعوري ينعكس على الجسد في صورة مرض، وهذه
            الجلسات تمكن الفرد من فهم وإدارة مشاعره المضطربة التي تُعد السبب
            الجذري للاضطرابات الصحية، فالتشافي الذاتي هو نظام فطري أودعه الله في
            كل إنسان، وباستعادة التوازن الداخلي يساعد الجسد على استعادة عافيته
            ورفع جودة الحياة نفسيًا وجسديًا.{" "}
          </p>

          <a
            href="#subscribe"
            className="flex text-white cursor-pointer z-50 [font-family: --font-avenir] font-bold text-sm lg:text-lg w-[172px] h-[47px] justify-center items-center gap-2 bg-[#e48673] shadow-md px-4 py-2 rounded-lg"
          >
            اشترك الان
          </a>
        </div>
      </div>
    </div>
  );
};

export default SecTwo;
