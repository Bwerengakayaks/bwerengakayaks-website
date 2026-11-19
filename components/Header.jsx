"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const LINKS = [["Activities", "/activities"], ["About Us", "/about"], ["Guest Experiences", "/guest-experiences"], ["Contact", "/contact"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => setOpen(false), [path]);
  return (
    <nav aria-label="Main">
      <Link className="logo" href="/" aria-label="BwerengaKayaks home">
        <Image src="/logo.webp" width={78} height={78} priority alt="BwerengaKayaks – guided kayaking on Lake Victoria, Uganda. Live Free." />
      </Link>
      <ul id="menu" className={open ? "open" : ""}>
        {LINKS.map(([t, h]) => (
          <li key={h}><Link href={h} className={path.startsWith(h) ? "on" : ""}>{t}</Link></li>
        ))}
      </ul>
      <div className="nr">
        <Link href="/book" className="btn">Book Your Trip</Link>
        <button className="mb" aria-label="Menu" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
