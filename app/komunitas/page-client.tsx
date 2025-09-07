"use client";

import LayoutMain from "@/components/LayoutMain";
import SectionMain from "@/components/SectionMain";
import React, { useEffect, useState } from "react";
import { Send } from "lucide-react";
import clsx from "clsx";

interface ChatMessage {
  id: number;
  user: string;
  role: "admin" | "Member";
  avatar: string;
  message: string;
  time: string;
  self?: boolean; // true kalau pesan dari diri sendiri
}

const PageClient = () => {
  const [message, setMessage] = useState("");

  // Dummy chat data
  const [chats, setChats] = useState<ChatMessage[]>([
    {
      id: 1,
      user: "Budi",
      role: "Member",
      avatar: "/images/anonymus-pp.png",
      message: "Halo, websitenya keren banget 👍",
      time: "10/05/2025 10:30 AM",
    },
    {
      id: 2,
      user: "Justine",
      role: "admin",
      avatar: "/images/anonymus-pp.png",
      message: "Makasih banyak ya 🙏",
      time: "10/05/2025 10:31 AM",
      self: true,
    },
  ]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage: ChatMessage = {
      id: chats.length + 1,
      user: "Justine", // nanti bisa dinamis dari auth user
      role: "admin",
      avatar: "/images/anonymus-pp.png",
      message,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      self: true,
    };

    try {
      const res = await fetch('/api/community', {
        method: "POST",
        body: JSON.stringify({
          user_id: null,
          message
        })
      })

      const json = await res.json()

      console.log(json)
    } catch {
      console.error('error while create message in comunity')
    }

    setChats([...chats, newMessage]);
    setMessage(""); // reset input
  };

  const fetchComun = async () => {
    try {
      const res = await fetch('/api/community')

      const json = await res.json()
      
      const mapped = json.map((item, index) => ({
        id: index++,
        user: item.user === null ? 'Anonymus' : item.user.name,
        role: item.user === null ? null : item.user.role,
        avatar: item.user === null ? '/images/anonymus-pp.png' : item.user.avatar,
        message: item.message,
        time: item.createdAt.slice(0, 16).replace('T', ' '),
        self: false
      }))
      setChats(mapped)
    } catch {
      console.error('error while fetch comunity')
    }
  }

  const fetchMe = async () => {
    try {
      const res = await fetch('/api/me', {
        headers: {
          "Authorization": "Bearer " + localStorage.getItem('token')
        }
      })

      const json = await res.json()
      
      console.log(json)
    } catch {
      console.error('error while fetch auth me')
    }
  }

  useEffect(() => {
    fetchComun()
    fetchMe()
  }, [])
  return (
    <LayoutMain>
      <SectionMain className="p-5 flex flex-col h-[80vh]">
        {/* Title */}
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-white">Komunitas</h2>
          <p className="text-gray-400">
            Ekspresikan penilaian mu terhadap website Justine disini.
          </p>
          <hr className="mt-4 border-gray-700" />
        </div>

        {/* Chat box */}
        <div className="flex-1 w-full pb-4 flex flex-col gap-4 overflow-y-auto pr-2">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={clsx(
                "w-auto max-w-[70%] flex items-start gap-3",
                chat.self && "self-end flex-row-reverse"
              )}
            >
              {/* Avatar */}
              <img
                src={chat.avatar}
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
                        : chat.role == null ? 'hidden'
                        : "bg-gray-600 text-gray-200"
                    )}
                  >
                    {chat.role}
                  </span>
                </div>

                {/* Bubble */}
                <div
                  className={clsx(
                    "px-5 py-2 text-white rounded-2xl",
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
        </div>

        {/* Input kirim pesan */}
        <form
          onSubmit={handleSend}
          className="flex items-center gap-2 mt-2 border-t border-gray-700 pt-3"
        >
          <img src="/images/anonymus-pp.png" className="w-8 rounded-full" alt="" />
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tulis pesan..."
            className="flex-1 px-4 py-2 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white"
          >
            <Send size={20} />
          </button>
        </form>
        <span className="text-sm mt-2 text-gray-500">Kamu sekarang mengirim sebagai Anonymus. <a href="/login" className="text-gray-50 underline">Login</a> untuk mengirim pesan dengan nama mu sendiri.</span>
      </SectionMain>
    </LayoutMain>
  );
};

export default PageClient;
