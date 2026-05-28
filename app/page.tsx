import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.55) 60%, rgba(245,241,232,0.1) 100%), url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="max-w-6xl mx-auto px-6 pt-32 pb-20 text-background fade-in">
          <p className="font-serif italic text-sm md:text-base tracking-[0.3em] mb-6 text-background/70">
            est. 2026 — Kagurazaka, Tokyo
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-8">
            日常から少し離れる、<br />
            <span className="italic">静かな一杯。</span>
          </h1>
          <p className="text-sm md:text-base text-background/80 leading-loose max-w-md mb-10">
            神楽坂の路地裏、灯りを落とした小さな珈琲店。<br />
            自家焙煎の豆と、サイフォンで丁寧に淹れる一杯を。
          </p>
          <div className="flex gap-4">
            <Link
              href="/menu"
              className="inline-block border border-background/80 px-8 py-3 text-sm tracking-widest hover:bg-background hover:text-foreground transition"
            >
              MENU
            </Link>
            <Link
              href="/access"
              className="inline-block px-8 py-3 text-sm tracking-widest text-background/80 hover:text-background transition"
            >
              ACCESS →
            </Link>
          </div>
        </div>
      </section>

      {/* Concept */}
      <section className="max-w-5xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <p className="font-serif italic text-muted tracking-widest mb-4">— Concept</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              黒く、<br />静かに、<br />ゆっくりと。
            </h2>
          </div>
          <div className="md:col-span-7 text-sm leading-loose text-foreground/80 space-y-5">
            <p>
              一日のはじまりにも、終わりにも。<br />
              KURO COFFEE は、神楽坂の細い路地の奥で、
              訪れた人がしばし時間を忘れられる場所を目指しています。
            </p>
            <p>
              店内にはジャズが低く流れ、<br />
              窓の外に都会の喧騒は届きません。<br />
              照明を落としたカウンターで、ひとり静かに、
              あるいは大切な誰かと、深く濃い一杯を。
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-accent text-background">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-12">
          {[
            {
              n: "01",
              t: "Roasted in-house",
              d: "店内焙煎機で、毎週少量ずつ仕上げる新鮮な豆。シングルオリジン中心。",
            },
            {
              n: "02",
              t: "Siphon brewed",
              d: "サイフォン抽出にこだわった、香り高く澄んだ一杯をお届けします。",
            },
            {
              n: "03",
              t: "Open until 23:00",
              d: "夜の静けさにこそ似合う場所。深い時間まで、灯をともしてお待ちします。",
            },
          ].map((f) => (
            <div key={f.n}>
              <p className="font-serif italic text-background/40 text-2xl mb-4">{f.n}</p>
              <h3 className="font-serif text-2xl mb-3">{f.t}</h3>
              <p className="text-sm text-background/70 leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-32 text-center">
        <p className="font-serif italic text-muted tracking-widest mb-6">— Visit us</p>
        <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
          神楽坂の、<br />路地のいちばん奥で。
        </h2>
        <Link
          href="/access"
          className="inline-block border border-foreground px-10 py-4 text-sm tracking-[0.3em] hover:bg-foreground hover:text-background transition"
        >
          ACCESS
        </Link>
      </section>
    </>
  );
}
