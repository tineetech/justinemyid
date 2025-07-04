"use client";
import React, { useEffect } from "react";
import { ChevronsRight, FileText, Github, Instagram, Mail, Phone, Send } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionMain from "@/components/SectionMain";
// import Sidebar from "@/components/Sidebar";

const Home = () => {
  // const handleAnimationComplete = () => {
  //   console.log("Animation completed!");
  // };
  useEffect(() => {
    AOS.init({
        duration: 1000,
        once: true,
      })
  }, [])

  return (
    <>
      <SectionMain>
          <div className=" w-full h-[200px]" style={{background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 40%), url('images/bgheader.jpg')"}}>
            <div className="box-image absolute top-[125px] mx-5 bg-gray-800 p-2 rounded-2xl">
              <img src="images/justine.jpg" alt="" className="w-[120px] h-[120px] object-cover rounded-[20px]" />
            </div>
          </div>

          <div className="px-5">
          <div className="mt-[80px] px-3 pb-5">
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-bold flex">Jus <div className="text-indigo-400">tine</div></h1>
              <i className="fa fa-check-circle text-green-400 text-md" />
            </div>
            <div className="mt-3 flex flex-col">
              <b>- Fullstack Developer Berpengalaman - </b>
              <span className="mt-4 text-justify">Saya berpengalaman dalam dunia pemograman sejak usia 11 tahun. Dengan pengalaman yang saya miliki saat ini, saya Antusias menciptakan berbagai solusi digital yang fungsional, termasuk <span className="bg-indigo-600 px-1">website</span>,<span className="bg-indigo-600 px-1">aplikasi</span>, dan <span className="bg-indigo-600 px-1">design</span>.</span>
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <ChevronsRight className="text-indigo-400" /> 
                  <span>Terbuka untuk kesempatan kerjasama projek yang menarik</span>
                  {/* <FontAwesomeIcon icon={faBriefcase} className="text-indigo-400"/> */}
                </div>
                <div className="flex gap-2 items-center">
                  <ChevronsRight className="text-indigo-400" /> 
                  <span>Selalu update dengan teknolgi terbaru</span>
                  {/* <FontAwesomeIcon icon={faRocket} className="text-indigo-400"/> */}
                </div>
                <div className="flex gap-2 items-center">
                  <ChevronsRight className="text-indigo-400" /> 
                  <span>Berdomisili di Bogor, Jawa Barat, Indonesia.</span>
                  {/* <FontAwesomeIcon icon={faMapMarkerAlt} className="text-indigo-400"/> */}
                </div>
              </div>
            </div>
            <div className="w-full text-[15px] flex gap-3 justify-between py-5 mt-4">
              <div onClick={() => window.open('mailto:justinebogor0609@gmail.com')} className="w-full flex justify-center items-center gap-3 py-4 hover:text-indigo-400 transition-all ease-in-out cursor-pointer bg-gray-700 rounded-[10px]">
                <Mail size={18} />
                <span>Email</span>
              </div>
              <div onClick={() => window.open('https://www.instagram.com/zerr.ace/')} className="w-full flex justify-center items-center gap-3 py-4 hover:text-indigo-400 transition-all ease-in-out cursor-pointer bg-gray-700 rounded-[10px]">
                <Instagram size={18} />
                <span>Instagram</span>
              </div>
              <div onClick={() => window.open('https://github.com/tineetech')} className="w-full flex justify-center items-center gap-3 py-4 hover:text-indigo-400 transition-all ease-in-out cursor-pointer bg-gray-700 rounded-[10px]">
                <Github size={18} />
                <span>Github</span>
              </div>
              <div onClick={() => window.open('https://t.me/zerrzy')} className="w-full flex justify-center items-center gap-3 py-4 hover:text-indigo-400 transition-all ease-in-out cursor-pointer bg-gray-700 rounded-[10px]">
                <Send size={18} />
                <span>Telegram</span>
              </div>
            </div>
            <hr className="mt-4 text-gray-900" />
            <div className="w-full p-5 bg-gray-700 rounded-[10px] mt-8">
              <div className="flex items-center gap-3">
                {/* <FontAwesomeIcon icon={faRocket} className="text-indigo-400"/> */}
                <h1 className="text-[18px]">Mari Bekerja Sama !</h1>
              </div>
              <div className="mt-2">
                <p className="mb-4">Sebagai Freelancer, saya membuka kesempatan untuk proyek freelance website, aplikasi maupun design dan lainnya, jangan ragu untuk mengirim email kepada saya untuk melihat bagaimana kita bisa berkolaborasi.</p>
                
                <div className="w-full text-[15px] flex gap-3 justify-between">
                  <div onClick={() => window.open('https://wa.me/6287774487198')} className="w-full flex justify-center items-center gap-3 py-4 hover:bg-indigo-600 transition-all ease-in-out cursor-pointer bg-indigo-600 rounded-[10px]">
                    <Phone size={18} />
                    <span>Hubungi Saya</span>
                  </div>
                  <div onClick={() => window.open('/files/JUSTINE_CV_2025.pdf')} className="w-full flex justify-center items-center gap-3 py-4 hover:bg-indigo-600 transition-all ease-in-out cursor-pointer bg-indigo-600 rounded-[10px]">
                    <FileText size={18} />
                    <span>Lihat CV</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
      </SectionMain>
    </>
  );
};

export default Home;