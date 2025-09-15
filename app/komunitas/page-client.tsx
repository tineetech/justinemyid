"use client";
/* eslint-disable */
import LayoutMain from "@/components/LayoutMain";
import SectionMain from "@/components/SectionMain";
import React, { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";
import clsx from "clsx";

interface ChatMessage {
  id: number;
  user: string;
  role: "admin" | "Member" | null;
  avatar: string;
  message: string;
  time: string;
  self?: boolean;
}

interface Me {
  id: number;
  name: string;
  email: string;
  role: string;
}

const PageClient = () => {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState<ChatMessage[]>([]);
  const [me, setMe] = useState<Me | null>(null);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  // auto scroll ke bawah setiap chats berubah
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage: ChatMessage = {
      id: chats.length + 1,
      user: me ? me.name : "Anonymus",
      role: me ? (me.role as "admin" | "Member") : null,
      avatar: "/images/anonymus-pp.png",
      message,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      self: !!me, // kalau ada me maka self true
    };

    try {
      await fetch("/api/community", {
        method: "POST",
        body: JSON.stringify({
          user_id: me?.id ?? null,
          message,
        }),
      });
    } catch {
      console.error("error while create message in community");
    }

    setChats([...chats, newMessage]);
    setMessage("");
  };

  const fetchComun = async (meUser: Me | null) => {
    setLoading(true)
    try {
      const res = await fetch("/api/community");
      const json = await res.json();

      // Sort ascending by createdAt biar yg terbaru di bawah
      const sorted = json.sort(
        (a: any, b: any) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );

      const mapped = sorted.filter((item: any) => item.status == 'active').map((item: any, index: number) => ({
        id: item.id ?? index,
        user: item.user === null ? "Anonymus" : item.user.name,
        role: item.user === null ? null : item.user.role,
        avatar:
          item.user === null ? "/images/anonymus-pp.png" : item.user.avatar,
        message: item.message,
        time: item.createdAt.slice(0, 16).replace("T", " "),
        self: meUser ? meUser.id === item.userId : false,
      }));
      setChats(mapped);
      setLoading(false)
    } catch {
      setLoading(false)
      console.error("error while fetch community");
    }
  };

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
      fetchComun(json);
      console.log(json)
    } catch {
      console.warn("gagal fetch me, set semua self=false");
      setMe(null);
      fetchComun(null);
      setLoading(false)
    }
  };

  useEffect(() => {
    setLoading(true)
    fetchMe();
  }, []);

  return (
    <LayoutMain>
      <SectionMain className="p-5 flex flex-col pt-[100px] md:pt-5">
        {/* Title */}
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-white">Komunitas</h2>
          <p className="text-gray-400 hidden md:flex">
            Ekspresikan penilaian mu terhadap website Justine disini.
          </p>
          <hr className="mt-4 border-gray-700" />
        </div>

        {/* Chat box */}
        <div className="flex-1 w-full pb-4 flex flex-col gap-4 overflow-y-auto pr-2">
          {loading ? (
            <div className="overflow-hidden bg-gray-200 bg-opacity-30 animate-pulse border-gray-700 hover:bg-gray-700 transition rounded-2xl w-[100%] h-[100%]"></div>
          ) : chats.length === 0 ? (
            <div className="overflow-hidden bg-gray-700 border-gray-700 hover:bg-gray-700 transition rounded-2xl w-[100%] h-[100%] flex justify-center items-center">
                Tidak Ada Data.
            </div>
          ) : chats.map((chat) => (
            <div
              key={chat.id}
              className={clsx(
                "w-auto max-w-[70%] flex items-start gap-3",
                chat.self && "self-end flex-row-reverse"
              )}
            >
              <img
                src={chat.avatar ?? '/images/anonymus-pp.png'}
                className="w-8 h-8 rounded-full"
                alt={chat.user}
              />
              <div>
                {/* Nama + Badge */}
                <div
                  className={clsx(
                    "flex items-center gap-2 mb-1 text-sm",
                    chat.self ? "justify-end" : "justify-start"
                  )}
                >
                  <span className="font-semibold text-white">{chat.user}</span>
                  <span
                    className={clsx(
                      "px-2 py-0.5 text-xs rounded-full",
                      chat.role === "admin"
                        ? "bg-blue-600 text-white"
                        : chat.role == null
                        ? "hidden"
                        : "bg-gray-600 text-gray-200"
                    )}
                  >
                    {chat.role}
                  </span>
                </div>

                {/* Bubble */}
                <div
                  className={clsx(
                    "px-2 md:px-5 py-2 text-white text-sm rounded-2xl",
                    chat.self
                      ? "bg-blue-600 rounded-tr-none text-right"
                      : "bg-gray-700 rounded-tl-none text-left"
                  )}
                >
                  {chat.message}
                </div>

                {/* Time */}
                <div
                  className={clsx(
                    "text-xs text-gray-400 mt-1",
                    chat.self ? "text-right" : "text-left"
                  )}
                >
                  {chat.time}
                </div>
              </div>
            </div>
          ))}
          {/* Ref buat auto scroll */}
          <div ref={bottomRef} />
        </div>

        {/* Input kirim pesan */}
        <form
          onSubmit={handleSend}
          className="flex items-center gap-2 mt-2 w-100 border-t border-gray-700 pt-3"
        >
          <img src="/images/anonymus-pp.png" className="w-8 rounded-full" alt="" />
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tulis pesan..."
            className="flex-1 px-4 py-2 rounded-full w-20 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white"
          >
            <Send size={20} />
          </button>
        </form>
        {loading ? '' : !me ? (
          <span className="text-sm mt-2 text-gray-500">
            Kamu sekarang mengirim sebagai Anonymus.{" "}
            <a href="/login" className="text-gray-50 underline">
              Login
            </a>{" "}
            untuk mengirim pesan dengan nama mu sendiri.
          </span>
        ) : ''}
      </SectionMain>
    </LayoutMain>
  );
};

export default PageClient;
