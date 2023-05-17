    import React from "react";
    import Image from "next/image";

    const Hero = () => {
    return (
        <section className="flex md:flex-row flex-col py-6">
        <div className="flex-1 flex justify-center items-start flex-row xl:p-0 sm:px-16 px-6">
            <div className="flex flex-col   justify-start items-start ">
            <h1 className="font-lexend font-bold text-[40px] leading-[50px] text-darkblue py-[20px]">
                Find The Place To
                <br />
                Live Your <span className="font-outline-2 text-white">Dreams</span>
                <br />
                Easily Here
            </h1>

            <p className="font-lexend font-normal text-[16px] leading-[32px] text-gray py-[40px]">
                Everything you need about finding your place to live will be here,
                <br /> where it will be easier for you
            </p>
            <div className="bg-white shadow-md flex flex-row items-center justify-between w-full h-[50px] rounded-[32px]">
                <Image
                className=" relative left-[30px]"
                src="/../public/images/fluent_location-16-filled.png"
                width="25"
                height="25"
                />
                <input
                className=" text-[16px] font-lexend text-gray  w-full px-[40px]"
                type="text"
                placeholder=" search for the location you want!"
                ></input>
                <button className="bg-greenm rounded-[32px] w-[150px] mr-[2px] h-[40px] text-white">
                {" "}
                search{" "}
                </button>
            </div>
            <div className="flex flex-col w-full py-[30px]">
                <p className="text-grayl text-[16px] leading-[32px] font-lexend font-normal">
                Our Partnership
                </p>
                <div className="flex flex-row justify-between items-center ">
                <img
                    src="/../images/traveloka_logo 2.png"
                    width={100}
                    height={50}
                />
                <img
                    src="/../images/traveloka_logo 3.png"
                    width={100}
                    height={50}
                />
                <img
                    src="/../images/traveloka_logo 4.png"
                    width={100}
                    height={50}
                />
                <img
                    src="/../images/traveloka_logo 5.png"
                    width={100}
                    height={50}
                />
                </div>
                
            </div>
            </div>
            <div>
            <Image
                src="/../public/images/image 6.png"
                width={800}
                height={700}
                className=" relative top-[-120px] right-[-150px] z[-1] "
            />
            
            <div className="flex flex-row justify-end gap-x-[20px] items-center relative top-[-300px] left-[150px]">
                <div className="bg-white w-[355px] rounded-[32px] h-[100px] flex flex-row">
                    <div className="flex flex-row items-start">
                    <img className="relative left-[-10px]" src="../images/Ellipse 4.png" width={150} height={50}/>
                    <img  className="relative left-[-100px]" src="../images/Ellipse 5.png" width={150} height={50}/>
                    <img className="relative left-[-190px]" src="../images/Ellipse 6.png" width={150} height={50}/>
                    </div>
                    <div className="flex flex-col justify-start w-full py-[15px] px-[10px]  relative left-[-50px]">
                    <h1 className="font-lexend text-[16px] leading-[24px] font-semibold text-darkblue">1K+ People</h1>
                    <p className="font-lexend text-[12px] leading-[20px] font-bold text-grays">Successfully Getting Home</p>
                    </div>
                </div>
                <div className="bg-white w-[200px] rounded-[32px] h-[100px] flex flex-row justify-between">
                    <img  className="py-[25px] ml-[20px]" src="../images/Rectangle 12.png " width={50} height={50} />
                    <div className="flex flex-col relative left-[-30px] top-[25px]">
                    <h1 className="font-lexend text-[16px] leading-[24px] font-semibold text-darkblue">56 Houses</h1>
                    <p className="font-lexend text-[12px] leading-[20px] font-bold text-grays">Sold Monthly</p>
                    </div>
                </div>
                <div className="bg-white w-[150px] rounded-[32px] h-[100px] flex flex-row" >
                    <img className=" mt-3" src="../images/Ellipse 6(4).png" width={100} height={100}/>
                    <div className="flex flex-col py-[30px]">
                    <h1 className="font-lexend text-[16px] leading-[24px] font-semibold text-darkblue">4K+</h1>
                    <p className="font-lexend text-[12px] leading-[20px] font-bold text-grays w-full">P</p>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
        </section>
    );
    };

    export default Hero;
