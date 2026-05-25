import React, { forwardRef } from 'react';

export interface CardItem {
  id: string;
  meta?: string;
  title: string;
  description: string;
  color: string;
  rotation?: string;
  owl?: string;
}

interface ScrollCardStackProps {
  cards: CardItem[];
  sideContent?: React.ReactNode;
}

const ScrollCardStack = forwardRef<HTMLDivElement, ScrollCardStackProps>(
  ({ cards, sideContent }, ref) => {
    return (
      <div ref={ref} className="w-full">
        <div className="flex justify-between px-4 md:px-10 lg:px-16">
          {/* Cards column */}
          <div className="flex-1 grid gap-0">
            {cards.map((card, i) => (
              <figure
                key={card.id}
                className="sticky top-[60px] min-h-screen grid place-content-center"
                style={{ zIndex: i + 1 }}
              >
                <article
                  className={`w-full max-w-sm md:max-w-md rounded-2xl p-7 md:p-9 grid gap-4 relative overflow-hidden${card.rotation ? ` ${card.rotation}` : ''}`}
                  style={{ backgroundColor: card.color }}
                >
                  {/* Ghost owl illustration */}
                  {card.owl && (
                    <div
                      className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none"
                      aria-hidden="true"
                    >
                      <img
                        src={card.owl}
                        alt=""
                        className="w-full h-full object-contain opacity-[0.15]"
                        loading="lazy"
                        draggable={false}
                      />
                    </div>
                  )}

                  {card.meta && (
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">
                      {card.meta}
                    </p>
                  )}

                  <h3
                    className="text-2xl md:text-3xl font-extrabold text-white leading-[1.1]"
                    style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
                  >
                    {card.title}
                  </h3>

                  <p className="text-white/75 text-sm md:text-[15px] leading-relaxed max-w-[36ch]">
                    {card.description}
                  </p>
                </article>
              </figure>
            ))}
          </div>

          {/* Sticky side content — desktop only */}
          {sideContent && (
            <div className="hidden lg:flex items-stretch w-64 xl:w-80 flex-shrink-0">
              <div className="sticky top-[60px] h-[calc(100vh-60px)] flex items-center justify-center">
                {sideContent}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  },
);

ScrollCardStack.displayName = 'ScrollCardStack';
export default ScrollCardStack;
