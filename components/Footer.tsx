import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-accent text-background mt-32">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <p className="font-serif text-2xl tracking-widest">KURO COFFEE</p>
          <p className="mt-4 text-sm text-background/70 leading-relaxed">
            日常から少し離れる、<br />静かな一杯を。
          </p>
        </div>
        <div className="text-sm space-y-2 text-background/80">
          <p>〒162-0825</p>
          <p>東京都新宿区神楽坂 3-X-X</p>
          <p>飯田橋駅 徒歩6分 / 神楽坂駅 徒歩4分</p>
          <p className="pt-2">Open 11:00 – 23:00 / Closed Tue</p>
        </div>
        <div className="text-sm flex flex-col gap-2">
          <Link href="/about" className="hover:text-background/60">About</Link>
          <Link href="/menu" className="hover:text-background/60">Menu</Link>
          <Link href="/access" className="hover:text-background/60">Access</Link>
          <Link href="/contact" className="hover:text-background/60">Contact</Link>
        </div>
      </div>
      <div className="border-t border-background/15">
        <div className="max-w-6xl mx-auto px-6 py-5 text-xs text-background/50 flex justify-between">
          <span>© {new Date().getFullYear()} KURO COFFEE</span>
          <span className="font-serif tracking-wider">Kagurazaka, Tokyo</span>
        </div>
      </div>
    </footer>
  );
}
