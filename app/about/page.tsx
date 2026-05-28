export const metadata = { title: "About | KURO COFFEE" };

export default function About() {
  return (
    <article className="pt-32">
      <section
        className="h-[55vh] flex items-end"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(10,10,10,0.3), rgba(10,10,10,0.85)), url('https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 pb-16 text-background">
          <p className="font-serif italic tracking-widest text-background/70 mb-3">— About</p>
          <h1 className="font-serif text-5xl md:text-6xl">私たちのこと</h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-24 space-y-12 text-foreground/85 leading-loose">
        <div>
          <h2 className="font-serif text-3xl mb-6">店主のこと</h2>
          <p>
            焙煎士として10年。<br />
            都内のロースタリーで修行を重ねたのち、
            自分の理想とする「静けさのある場所」をつくりたいと、
            この神楽坂の小さな路地に店を構えました。
          </p>
          <p className="mt-5">
            派手さはありませんが、一杯にかける時間と気持ちは、
            どこにも負けないつもりでいます。
          </p>
        </div>

        <div className="border-t border-line pt-12">
          <h2 className="font-serif text-3xl mb-6">豆について</h2>
          <p>
            エチオピア、ケニア、グアテマラを中心としたシングルオリジン。<br />
            季節ごとに3〜4種類を入れ替えながら、
            その時いちばん美味しい状態でお出ししています。
          </p>
        </div>

        <div className="border-t border-line pt-12">
          <h2 className="font-serif text-3xl mb-6">店内のこと</h2>
          <p>
            カウンター6席、テーブル2席のみの小さなお店です。<br />
            落ち着いた時間を大切にしたいため、店内での通話・大声でのご会話は
            ご遠慮いただいております。
          </p>
        </div>
      </section>
    </article>
  );
}
