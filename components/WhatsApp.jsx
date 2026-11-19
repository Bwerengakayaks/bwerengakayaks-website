import { wa } from "@/data/site";

export default function WhatsApp() {
  return (
    <a className="wa" href={wa()} target="_blank" rel="noopener" aria-label="Chat with BwerengaKayaks on WhatsApp">
      <span aria-hidden="true">💬</span>
      WhatsApp
    </a>
  );
}
