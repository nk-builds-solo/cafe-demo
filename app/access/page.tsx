export const metadata = { title: "Access | KURO COFFEE" };

export default function Access() {
  return (
    <article className="pt-32 pb-24">
      <header className="max-w-5xl mx-auto px-6 mb-16">
        <p className="font-serif italic tracking-widest text-muted mb-3">— Access</p>
        <h1 className="font-serif text-5xl md:text-6xl">店舗情報</h1>
      </header>

      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <Row label="店名" value="KURO COFFEE / クロ コーヒー" />
          <Row label="住所" value={`〒162-0825\n東京都新宿区神楽坂 3-X-X 路地ビル 1F`} />
          <Row label="アクセス" value={`東京メトロ東西線 神楽坂駅 徒歩4分\nJR・各線 飯田橋駅 徒歩6分`} />
          <Row label="営業時間" value={`11:00 – 23:00\n(L.O. Food 22:00 / Drink 22:30)`} />
          <Row label="定休日" value="火曜日" />
          <Row label="席数" value="カウンター6席 / テーブル2席" />
          <Row label="支払い" value="現金 / 各種クレジット / 交通系IC / QR決済" />
        </div>

        <div>
          <div className="aspect-[4/5] w-full overflow-hidden rounded-sm">
            <iframe
              title="map"
              className="w-full h-full grayscale"
              src="https://www.google.com/maps?q=%E7%A5%9E%E6%A5%BD%E5%9D%82&output=embed"
              loading="lazy"
            />
          </div>
          <p className="text-xs text-muted mt-3 leading-relaxed">
            * 路地の奥のため、Google マップでは正確に表示されないことがあります。
            お電話いただければご案内いたします。
          </p>
        </div>
      </div>
    </article>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[6rem_1fr] gap-6 border-b border-line pb-6">
      <p className="font-serif italic text-muted text-sm pt-1">{label}</p>
      <p className="whitespace-pre-line leading-relaxed text-sm">{value}</p>
    </div>
  );
}
