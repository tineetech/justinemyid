"use client";
import React, { useEffect, useState } from "react";
import { ChevronsRight, FileText, Github, Instagram, Mail, Phone, Send, ShoppingBag } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionMain from "@/components/SectionMain";
import LayoutMain from "@/components/LayoutMain";
import StarBorder from "@/components/StarBorder";

interface Cms {
  no: number;
  name: string;
  content: string;
  status: string;
}

const Home = () => {
  const [cmsMap, setCmsMap] = useState<Record<string, Cms>>({});
  const [loading, setLoading] = useState(false)
  useEffect(() => {
     const fetchCms = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/cms");
        const data: Cms[] = await res.json();

        // convert array ke object
        const mapped: Record<string, Cms> = {};
        data.forEach((item) => {
          mapped[item.name] = item;
        });
        setCmsMap(mapped);
      } catch (err) {
        console.error("Failed to fetch CMS:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCms()
    AOS.init({
        duration: 1000,
        once: true,
      })
  }, [])
  
  useEffect(() => {
    const preloader = document.querySelector("[data-preloader]");
    if (preloader) {
      document.body.classList.add("loaded");
      setTimeout(() => {
        preloader.classList.add("loaded");
      }, 100)
    }
  }, []);


  return (
    <>
    <LayoutMain>
      <SectionMain>
        <div className="preloader" data-preloader>
            <span className="line"></span>
        </div>
          <div className=" w-full h-[200px]" style={{background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 40%), url('images/bgheader.jpg')"}}>
            <div className="box-image absolute top-[125px] mx-5 bg-gray-800 p-2 rounded-2xl">
              <img src={
                loading
                  ? "images/justine.jpg"
                  : cmsMap["image_home"]?.content || "images/justine.jpg"
              } alt="" className="w-[120px] h-[120px] object-cover rounded-[20px]" />
            </div>
          </div>

          <div className="px-5">
          <div className="mt-[80px] md:px-3 pb-5">
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
            <div className="w-full text-[15px] flex flex-col md:flex-row gap-3 justify-between py-5 mt-4">
              <div onClick={() => window.open('mailto:justinebogor0609@gmail.com')} className="w-full flex px-5 md:px-0 justify-start md:justify-center items-center gap-3 py-4 hover:text-indigo-400 transition-all ease-in-out cursor-pointer bg-gray-700 rounded-[10px]">
                <Mail size={18} />
                <span>Email</span>
              </div>
              <div onClick={() => window.open('https://www.instagram.com/zerr.ace/')} className="w-full flex px-5 md:px-0 justify-start md:justify-center items-center gap-3 py-4 hover:text-indigo-400 transition-all ease-in-out cursor-pointer bg-gray-700 rounded-[10px]">
                <Instagram size={18} />
                <span>Instagram</span>
              </div>
              <div onClick={() => window.open('https://github.com/tineetech')} className="w-full flex px-5 md:px-0 justify-start md:justify-center items-center gap-3 py-4 hover:text-indigo-400 transition-all ease-in-out cursor-pointer bg-gray-700 rounded-[10px]">
                <Github size={18} />
                <span>Github</span>
              </div>
              <div onClick={() => window.open('https://t.me/zerrzy')} className="w-full flex px-5 md:px-0 justify-start md:justify-center items-center gap-3 py-4 hover:text-indigo-400 transition-all ease-in-out cursor-pointer bg-gray-700 rounded-[10px]">
                <Send size={18} />
                <span>Telegram</span>
              </div>
            </div>
            <hr className="mt-4 border-t border-gray-300 border-opacity-100" />
            <div className="w-full p-5 bg-gray-700 rounded-[10px] mt-8">
              <div className="flex items-center gap-3">
                {/* <FontAwesomeIcon icon={faRocket} className="text-indigo-400"/> */}
                <h1 className="text-[18px]">Mari Bekerja Sama !</h1>
              </div>
              <div className="mt-2">
                <p className="mb-4">Sebagai Freelancer, saya membuka kesempatan untuk proyek freelance website, aplikasi maupun design dan lainnya, jangan ragu untuk mengirim email kepada saya untuk melihat bagaimana kita bisa berkolaborasi.</p>
                
                <div className="w-full flex-col md:flex-row text-[15px] flex gap-3 justify-between">
                  <StarBorder
                    as="button"
                    className="custom-class  w-full flex justify-center items-center py-4 cursor-pointer"
                    color=""
                    speed="5s"
                  >
                    <div onClick={() => window.open('https://wa.me/6287774487198')} className=" w-full flex justify-center items-center gap-3">
                      <Phone size={18} />
                      <span>Hubungi Saya</span>
                    </div>
                  </StarBorder>
                  <StarBorder
                    as="button"
                    className="custom-class  w-full flex justify-center items-center py-4 cursor-pointer"
                    color=""
                    speed="5s"
                    >
                    <div onClick={() => window.open(loading ? '' : cmsMap["cv_home"]?.content || '/files/JUSTINE_CV_2025.pdf')} className="w-full flex justify-center items-center gap-3 ">
                      <FileText size={18} />
                      <span>Lihat CV</span>
                    </div>
                  </StarBorder>
                </div>
                  <StarBorder
                    as="button"
                    className="custom-class  w-full mt-3 flex justify-center items-center py-4 cursor-pointer"
                    color=""
                    speed="5s"
                    >
                    <div onClick={() => window.open('https://lynk.id/premiumdeals')} className="w-full  flex justify-center items-center gap-3 ">
                      <ShoppingBag size={18} />
                      <span>@premiumdeals</span>
                    </div>
                  </StarBorder>
              </div>
            </div>
          </div>
          </div>
      </SectionMain>
    </LayoutMain>
    </>
  );
};

export default Home;