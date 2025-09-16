"use client";
/* eslint-disable */
import React, { useEffect, useState } from "react";
import { ChevronsRight, FileText, Github, Heart, Instagram, Loader2, Mail, Phone, Send, ShoppingBag } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionMain from "@/components/SectionMain";
import LayoutMain from "@/components/LayoutMain";
import StarBorder from "@/components/StarBorder";
import ShinyText from "@/components/ShinyText";
import CountUp from "@/components/CountUp";

interface Cms {
  no: number;
  name: string;
  content: string;
  status: string;
}
interface Me {
  id: number;
  name: string;
  email: string;
  role: string;
}
interface LikesResponse {
  id: number;
  userId: number;
  device_name: string;
  user_argent: string;
  ip_address: string;
}

const Home = () => {
  const [cmsMap, setCmsMap] = useState<Record<string, Cms>>({});
  const [me, setMe] = useState<Me | null>(null);
  const [likes, setLikes] = useState([]);
  const [loadingLikes, setLoadingLikes] = useState(false)
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [likeing, setLikeing] = useState(false)
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

  
  const fetchLikes = async () => {
    setLoadingLikes(true)
    try {
      const res = await fetch('/api/likes')

      const json = await res.json()
      
      setLikes(json)
      setLikeCount(json.length)
      setLoadingLikes(false)
    } catch {
      console.error('Error while fetching portofolio')
      setLoadingLikes(false)
    }
  }

  async function getClientIp(): Promise<string | null> {
    try {
      const res = await fetch("/api/get-ip");
      if (!res.ok) return null;
      const json = await res.json();
      return json.ip ?? null;
    } catch (err) {
      console.warn("failed get ip", err);
      return null;
    }
  }

  function getDeviceDescriptor() {
    // browser tidak beri "device name" nyata; kita bangun descriptor dari apa yg tersedia
    const ua = typeof navigator !== "undefined" ? navigator.userAgent : "unknown";
    const platform = typeof navigator !== "undefined" ? (navigator as any).platform || "unknown" : "unknown";
    const vendor = typeof navigator !== "undefined" ? (navigator as any).vendor || "unknown" : "unknown";
    const width = typeof window !== "undefined" ? window.screen.width : 0;
    const height = typeof window !== "undefined" ? window.screen.height : 0;

    return `${platform} | ${vendor} | ${width}x${height} | ${ua}`;
  }

  async function handleLike() {
    setLikeing(true);

    try {
      const device_name = getDeviceDescriptor();
      const user_agent = typeof navigator !== "undefined" ? navigator.userAgent : "unknown";
      const ip_address = await getClientIp(); // minta server

      const body = {
        user_id: me !== null ? me.id : null,
        device_name,
        user_agent,
        ip_address,
      };

      await fetch("/api/likes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(body),
      });
    setLiked(true)
    setLikeing(false);
    setLikeCount(likeCount + 1)
    setTimeout(() => {
      setLiked(false)
    }, 3000)
    } catch (err) {
      console.error("like failed", err);
    } finally {
      setLikeing(false);
    }
  }

  
  const fetchMe = async () => {
    try {
      const res = await fetch("/api/me", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      if (!res.ok) throw new Error("Unauthorized");

      const json = await res.json();
      setMe(json);
    } catch {
      console.warn("gagal fetch me, set semua self=false");
      setMe(null);
    }
  };

  useEffect(() => {
    fetchMe();
    fetchLikes()
  }, []);

  return (
    <>
    <LayoutMain>
      <SectionMain>
        <div className="preloader" data-preloader>
            <span className="line"></span>
        </div>
          <div className=" w-full h-[200px]" style={{background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 40%), url('images/bgheader.jpg')"}}>
            <div className="box-image cursor-target absolute top-[125px] mx-5 bg-gray-800 p-2 rounded-2xl">
              {
                loading ? (
                  <div className="overflow-hidden bg-gray-200 bg-opacity-30 animate-pulse border-gray-700 hover:bg-gray-700 transition rounded-2xl w-[120px] h-[120px]"></div>
                ) : (
                  <img src={
                    loading
                      ? "images/justine.jpg"
                      : cmsMap["image_home"]?.content || "images/justine.jpg"
                  } alt="" className="w-[120px] h-[120px] object-cover rounded-[20px]" />
                )
              }
            </div>
          </div>

          <div className="px-5">
          <div className="mt-[80px] md:px-3 pb-5">
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-bold flex cursor-target">Jus <div className="text-indigo-400">tine</div></h1>
              <i className="fa fa-check-circle text-green-400 text-md" />
            </div>
            <div className="mt-3 flex flex-col">
              {/* <b>- Fullstack Developer Berpengalaman - </b> */}
              
              <ShinyText
                text="- Fullstack Developer Berpengalaman -" 
                disabled={false} 
                speed={3} 
                className='custom-class !text-[17px] ' 
              />
              <span className="mt-4 text-justify">Saya berpengalaman dalam dunia pemograman sejak usia 11 tahun. Dengan pengalaman yang saya miliki saat ini, saya Antusias menciptakan berbagai solusi digital yang fungsional, termasuk <span className="bg-indigo-600 cursor-target px-1">website</span>,<span className="bg-indigo-600 px-1 cursor-target">aplikasi</span>, dan <span className="bg-indigo-600 px-1 cursor-target">design</span>.</span>
              <div className="relative mt-4 flex flex-col gap-2">
                <button
                  disabled={likeing}
                  onClick={() => handleLike()}
                  className="btn-77 flex-col mt-3 rounded-xl bg-indigo-600 text-white w-[55px] h-[55px] flex justify-center items-center absolute right-0 cursor-target"
                >
                  {likeing ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : liked ? (
                    <Heart size={20} className="text-red-500 fill-red-500" />
                  ) : (
                    <Heart size={20} />
                  )}
                  <span className="text-[9px] mt-1">{likeCount ?? ""}</span>
                  <div className="relative">
                    <div className="text-[12px] cursor-target fade-out-like w-auto flex button-reminder-like p-2 bg-indigo-600 text-white">
                      <span>Like Website Ini !</span>
                    </div>
                  </div>
                </button>
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
            <div className="w-full grid-cols-3 grid gap-3 py-5 mt-4">
              <div className="bg-gray-700 cursor-target flex flex-col justify-center items-center font-bold w-full rounded-md h-[100px]">
                <div className="flex">
                  <CountUp
                    from={0}
                    to={30}
                    separator=","
                    direction="up"
                    duration={5}
                    className="count-up-text text-xl"
                  />+
                </div>
                <span className="text-[10px] md:text-sm text-gray-400">Client</span>
              </div>
              <div className="bg-gray-700 cursor-target flex flex-col justify-center items-center font-bold w-full rounded-md h-[100px]">
                <div className="flex">
                  <CountUp
                    from={0}
                    to={100}
                    separator=","
                    direction="up"
                    duration={5}
                    className="count-up-text text-xl"
                  />+
                </div>
                <span className="text-[10px] md:text-sm text-gray-400">Projects</span>
              </div>
              <div className="bg-gray-700 cursor-target text-center flex flex-col justify-center items-center font-bold w-full rounded-md h-[100px]">
                <div className="flex">
                  <CountUp
                    from={0}
                    to={4}
                    separator=","
                    direction="up"
                    duration={5}
                    className="count-up-text text-xl"
                  />+
                </div>
                <span className="text-[10px] md:text-sm text-gray-400">Years Experience</span>
              </div>
            </div>
            <div className="w-full text-[15px] flex flex-col md:flex-row gap-3 justify-between pb-5">
              <div onClick={() => window.open('mailto:justinebogor0609@gmail.com')} className="w-full cursor-target flex px-5 md:px-0 justify-start md:justify-center items-center gap-3 py-4 hover:text-indigo-400 transition-all ease-in-out cursor-pointer bg-gray-700 rounded-[10px]">
                <Mail size={18} />
                <span>Email</span>
              </div>
              <div onClick={() => window.open('https://www.instagram.com/zerr.ace/')} className="w-full cursor-target flex px-5 md:px-0 justify-start md:justify-center items-center gap-3 py-4 hover:text-indigo-400 transition-all ease-in-out cursor-pointer bg-gray-700 rounded-[10px]">
                <Instagram size={18} />
                <span>Instagram</span>
              </div>
              <div onClick={() => window.open('https://github.com/tineetech')} className="w-full cursor-target flex px-5 md:px-0 justify-start md:justify-center items-center gap-3 py-4 hover:text-indigo-400 transition-all ease-in-out cursor-pointer bg-gray-700 rounded-[10px]">
                <Github size={18} />
                <span>Github</span>
              </div>
              <div onClick={() => window.open('https://t.me/zerrzy')} className="w-full cursor-target flex px-5 md:px-0 justify-start md:justify-center items-center gap-3 py-4 hover:text-indigo-400 transition-all ease-in-out cursor-pointer bg-gray-700 rounded-[10px]">
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
                    className="custom-class  w-full flex justify-center items-center py-4 cursor-pointer cursor-target"
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
                    className="custom-class  w-full flex justify-center items-center py-4 cursor-pointer cursor-target"
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
                    className="custom-class  w-full mt-3 flex justify-center items-center py-4 cursor-pointer cursor-target"
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