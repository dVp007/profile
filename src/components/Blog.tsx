import { ArrowUpRight, BookOpenText, Rss } from "lucide-react";

const MEDIUM_PROFILE = "https://medium.com/@dharmilp03";
const MEDIUM_FEED = "https://medium.com/feed/@dharmilp03";
const FEATURED_ARTICLE =
  "https://medium.com/@dharmilp03/zero-cost-gmail-junk-killer-using-laya-18f67bbbbcb4";

const Blog = () => (
  <section id="blog" className="py-24 relative overflow-hidden">
    <div className="container mx-auto px-4 relative z-10">
      <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[hsl(var(--neon-green))]/30 bg-[hsl(var(--neon-green))]/5 mb-6">
            <BookOpenText className="h-4 w-4 text-[hsl(var(--neon-green))]" />
            <span className="text-sm text-[hsl(var(--neon-green))] font-medium tracking-wider uppercase">
              Writing
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-['Orbitron'] mb-4">
            Notes from
            <br />
            <span className="text-[hsl(var(--neon-green))]">the build</span>
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] max-w-md">
            Practical notes on applied AI, software engineering, and the systems
            I build.
          </p>
          <div className="mt-8 flex flex-wrap gap-5">
            <a
              href={MEDIUM_PROFILE}
              target="_blank"
              rel="me noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[hsl(var(--neon-cyan))] hover:text-[hsl(var(--foreground))] transition-colors"
            >
              All articles on Medium <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={MEDIUM_FEED}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
              aria-label="Subscribe to Dharmil Parekh's Medium RSS feed"
            >
              <Rss className="h-4 w-4" /> RSS feed
            </a>
          </div>
        </div>

        <article className="border-y border-[hsl(var(--neon-cyan))]/25 py-7 md:py-9">
          <p className="text-xs uppercase tracking-wider text-[hsl(var(--neon-green))] mb-4">
            Featured article · Applied AI
          </p>
          <h3 className="text-2xl md:text-3xl font-bold font-['Orbitron'] leading-snug mb-4">
            <a
              href={FEATURED_ARTICLE}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[hsl(var(--neon-cyan))] transition-colors"
            >
              Zero-Cost Gmail Junk Killer using LAYA
            </a>
          </h3>
          <p className="text-[hsl(var(--muted-foreground))] leading-relaxed max-w-2xl">
            An open-weight decision model, a free Hugging Face Space, and Google
            Apps Script work together to sort inbox mail automatically, without
            a paid LLM API.
          </p>
          <a
            href={FEATURED_ARTICLE}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--neon-cyan))] hover:gap-3 transition-all"
          >
            Read on Medium <ArrowUpRight className="h-4 w-4" />
          </a>
        </article>
      </div>
    </div>
  </section>
);

export default Blog;
