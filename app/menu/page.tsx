export const metadata = { title: "Menu | KURO COFFEE" };

const coffee = [
  { name: "Drip Coffee", sub: "本日のシングルオリジン", price: "¥680" },
  { name: "Siphon Coffee", sub: "サイフォン抽出 / 2種より選択", price: "¥880" },
  { name: "Espresso", sub: "深煎り / ダブル", price: "¥520" },
  { name: "Café Latte", sub: "オーツミルク変更可 +¥80", price: "¥620" },
  { name: "Cold Brew", sub: "12時間水出し", price: "¥720" },
  { name: "Affogato", sub: "バニラジェラート × エスプレッソ", price: "¥880" },
];

const food = [
  { name: "Cheesecake", sub: "自家製 / バスク風", price: "¥620" },
  { name: "Gateau Chocolat", sub: "ブラックカカオ72%", price: "¥680" },
  { name: "Cinnamon Toast", sub: "厚切りブリオッシュ", price: "¥580" },
  { name: "Cold Sandwich", sub: "生ハム & ルッコラ", price: "¥980" },
];

const other = [
  { name: "Glass of Wine", sub: "赤 / 白", price: "¥780〜" },
  { name: "Whisky Highball", sub: "夜限定 19:00以降", price: "¥820" },
];

function Block({ title, items }: { title: string; items: typeof coffee }) {
  return (
    <div className="mb-20">
      <p className="font-serif italic text-muted tracking-widest mb-4">— {title}</p>
      <ul className="divide-y divide-line">
        {items.map((i) => (
          <li key={i.name} className="flex items-baseline justify-between py-5">
            <div>
              <p className="font-serif text-xl">{i.name}</p>
              <p className="text-xs text-muted mt-1">{i.sub}</p>
            </div>
            <p className="font-serif text-lg tracking-wider">{i.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Menu() {
  return (
    <article className="pt-32 pb-24">
      <header className="max-w-5xl mx-auto px-6 mb-20">
        <p className="font-serif italic tracking-widest text-muted mb-3">— Menu</p>
        <h1 className="font-serif text-5xl md:text-6xl">お品書き</h1>
        <p className="mt-6 text-sm text-foreground/70 leading-relaxed max-w-xl">
          季節により内容は変動いたします。<br />
          表示価格はすべて税込です。
        </p>
      </header>

      <div className="max-w-3xl mx-auto px-6">
        <Block title="Coffee" items={coffee} />
        <Block title="Sweets & Food" items={food} />
        <Block title="Evening" items={other} />
      </div>
    </article>
  );
}
