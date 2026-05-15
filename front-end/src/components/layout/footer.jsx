import { Reveal } from '../motion/reveal';

const footerLinks = ['Về chúng tôi', 'Liên hệ', 'Điều khoản', 'Bảo mật'];

export function Footer() {
  return (
    <Reveal as="footer" className="border-t border-amber-200/10 bg-[#090907]" direction="up">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 md:grid-cols-[1.3fr_0.8fr_0.9fr]">
        <div>
          <h2 className="font-display text-2xl text-parchment">Việt Sử Kí Số</h2>
          <p className="mt-3 max-w-sm text-sm leading-7 text-stone-400">
            Hành trình số hóa di sản, kết nối thế hệ trẻ với dòng chảy hào hùng của lịch sử dân tộc.
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.32em] text-brass">Điều hướng</h3>
          <ul className="mt-4 space-y-3 text-sm text-stone-300">
            {footerLinks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.32em] text-brass">Kết nối tri thức</h3>
          <p className="mt-4 text-sm leading-7 text-stone-400">
            © 2026 Việt Sử Kí Số. Chạm để hiểu Việt Nam.
          </p>
        </div>
      </div>
    </Reveal>
  );
}
