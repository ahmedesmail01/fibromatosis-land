import Image from "next/image";
import React from "react";
// import skeleton from "@/public/images/skeleton.svg";
// import circleSvg from "@/public/images/Ellipse 1909.svg";
import cardPhoto from "@/public/images/girl-card-1.svg";
import cardPhotoMob from "@/public/images/girl-card-1.svg";
import polygon from "@/public/images/Polygon.svg";

// import triangles from "@/public/images/triangles.svg";
const Technology = () => {
  return (
    <div className="relative z-40 flex max-w-full  flex-col px-6 md:px-8 lg:px-[166px] gap-4 justify-center  mb-[60px] md:mb-[96px] ">
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
          {/* <Image
            src={triangles}
            alt="triangles"
            className="absolute left-0 top-48 z-10"
          /> */}
          <h1 className="self-stretch text-[#e48673] text-center [font-family:--font-monadi] text-2xl lg:text-[40px]  leading-[160%] ">
            التقنيات المستخدمة في الجلسات{" "}
          </h1>
          <div dir="rtl">
            <h2 className=" text-[#353535c7] text-right [font-family:--font-monadi] text-xl font-bold leading-7">
              فهم جذر المرض{" "}
            </h2>
            <div className="flex items-center gap-4 justify-start">
              <Image src={polygon} alt="polygon-circle" />
              <p className=" text-[#353535] text-right [font-family:Cairo] text-sm font-normal leading-7 opacity-80">
                كل نسيج جسدي مرتبط بشعور محدد{" "}
              </p>
            </div>
            <div className="flex mb-6 items-center gap-4 justify-start">
              <Image src={polygon} alt="polygon-circle" />
              <p className="  text-[#353535] text-right [font-family:Cairo] text-sm font-normal leading-7 opacity-80">
                  المرض هو صوره الاضطراب الشعورى المقابل للنسيج{" "}
              </p>
            </div>
            <h2 className=" text-[#353535c7] text-right [font-family:--font-monadi] text-xl font-bold leading-7">
              تلقي رسالة المرض{" "}
            </h2>
            <div className="flex mb-6 items-center gap-4 justify-start">
              <Image src={polygon} alt="polygon-circle" />
              <p className="  text-[#353535] text-right [font-family:Cairo] text-sm font-normal leading-7 opacity-80">
                 المرض رسالة من مشاعرك المضطربة، وبمجرد فهمها تبدأ عملية الشفاء
                الذاتى{" "}
              </p>
            </div>
            <h2 className=" text-[#353535c7] text-right [font-family:--font-monadi] text-xl font-bold leading-7">
              التدريب على الاتزان الشعوري{" "}
            </h2>
            <div className="flex items-center gap-4 justify-start">
              <Image src={polygon} alt="polygon-circle" />
              <p className=" text-[#353535] text-right [font-family:Cairo] text-sm font-normal leading-7 opacity-80">
                تدريبات مكثفة  على على اختيار المشاعر المتزنة، مما يوثر ايجابا
                عى صحتك و حالتك الشعوريه{" "}
              </p>
            </div>
          </div>

          <a
            href="#subscribe"
            className="flex text-white cursor-pointer [font-family: --font-avenir] font-bold text-sm lg:text-lg w-[172px] h-[47px] justify-center items-center gap-2 bg-[#e48673] shadow-md px-4 py-2 rounded-lg"
          >
            اشترك الان
          </a>
        </div>
      </div>
    </div>
  );
};

export default Technology;
