"use client";

import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faRobot, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const hoverTimer = useRef<number | null>(null);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        className="relative bg-mintwell-blue text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
        aria-label="Open support chat"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => {
          hoverTimer.current = window.setTimeout(() => setOpen(false), 100);
        }}
        onClick={() => setOpen(v => !v)}
      >
        <FontAwesomeIcon icon={faComments} className="text-2xl" />
        <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold">
          1
        </span>
      </button>

      {open && (
        <div
          className="absolute bottom-20 right-0 bg-white rounded-xl shadow-2xl border border-gray-200 p-4 max-w-xs"
          onMouseEnter={() => hoverTimer.current && window.clearTimeout(hoverTimer.current)}
          onMouseLeave={() => setOpen(false)}
        >
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-mintwell-blue rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faRobot} className="text-white text-sm" />
            </div>
            <div className="ml-3">
              <h4 className="font-semibold text-gray-800 text-sm">Support Bot</h4>
              <p className="text-xs text-green-600">Online</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-3">Hi! I&apos;m here to help. Need fast answers? Chat with us now.</p>
          <a href="#live-chat-integration" className="w-full bg-mintwell-blue text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" /> Start Chat
          </a>
        </div>
      )}
    </div>
  );
}

