export const metadata = { title: "Contact | KURO COFFEE" };

export default function Contact() {
  return (
    <article className="pt-32 pb-24">
      <header className="max-w-5xl mx-auto px-6 mb-12">
        <p className="font-serif italic tracking-widest text-muted mb-3">— Contact</p>
        <h1 className="font-serif text-5xl md:text-6xl">お問い合わせ</h1>
        <p className="mt-6 text-sm text-foreground/70 leading-relaxed max-w-xl">
          貸切のご相談、取材依頼、その他ご質問はこちらのフォームよりお気軽にどうぞ。<br />
          2〜3営業日以内にご返信いたします。
        </p>
      </header>

      <form className="max-w-2xl mx-auto px-6 space-y-8">
        <Field label="お名前" name="name" />
        <Field label="メールアドレス" name="email" type="email" />
        <Field label="件名" name="subject" />
        <div>
          <label className="block font-serif italic text-muted text-sm mb-2">お問い合わせ内容</label>
          <textarea
            rows={6}
            className="w-full bg-transparent border-b border-line focus:border-foreground outline-none py-2 resize-none transition"
          />
        </div>
        <button
          type="button"
          className="border border-foreground px-10 py-4 text-sm tracking-[0.3em] hover:bg-foreground hover:text-background transition"
        >
          SEND
        </button>
      </form>
    </article>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block font-serif italic text-muted text-sm mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full bg-transparent border-b border-line focus:border-foreground outline-none py-2 transition"
      />
    </div>
  );
}
