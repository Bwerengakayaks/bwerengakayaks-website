import Link from "next/link";
import { SITE } from "@/data/site";
import { CookieSettingsButton } from "./CookieBanner";

export default function Footer() {
  return (
    <footer>
      <div><b>{SITE.name}</b>Bwerenga · Lake Victoria · Uganda<br />WhatsApp {SITE.phone} · <a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
      <div>© {new Date().getFullYear()} {SITE.name} · <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link> · <CookieSettingsButton /></div>
    </footer>
  );
}
