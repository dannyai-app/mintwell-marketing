"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function FAQ({ id, openByDefault=false, color, q, children }:{ id:number; openByDefault?:boolean; color:string; q:string; children:React.ReactNode; }){
  const [open, setOpen] = useState(openByDefault);
  const headingId = `faq-heading-${id}`;
  const panelId = `faq-panel-${id}`;
  return (
    <div className={`bg-mintwell-light rounded-2xl p-6 border-l-4 ${color}`}>
      <button
        type="button"
        className="w-full text-left flex items-center justify-between"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(!open)}
      >
        <h3 id={headingId} className="text-xl font-bold text-mintwell-navy">{q}</h3>
        <FontAwesomeIcon aria-hidden="true" icon={open ? faChevronUp : faChevronDown} className="text-mintwell-blue" />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={headingId}
        className={`mt-4 text-gray-600 ${open ? "" : "hidden"}`}
      >
        {children}
      </div>
    </div>
  );
}

