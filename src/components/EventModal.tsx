import { EventData } from '@/data/events';

interface EventModalProps {
  event: EventData | null;
  isOpen: boolean;
  onClose: () => void;
}

const EventModal = ({ event, isOpen, onClose }: EventModalProps) => {
  if (!isOpen || !event) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center px-4 sm:px-6 py-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl z-0" onClick={onClose} />
      <div className="bg-datronix-blue/95 border border-datronix-light-blue w-[95%] max-w-[500px] rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-8 relative z-10 shadow-2xl animate-modal-in overflow-hidden backdrop-blur-xl flex flex-col max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-foreground/40 hover:text-foreground transition-colors text-xl p-3 sm:p-0 z-20"
        >
          ✕
        </button>

        <div className="mb-4 sm:mb-6 pr-4 sm:pr-6">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono uppercase mb-2 bg-primary/20 text-primary border border-primary/30">
            {event.category}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-orbitron leading-tight">
            {event.name}
          </h2>
        </div>

        <div className="flex-1 overflow-y-auto mb-4 sm:mb-6 no-scrollbar pr-2">
          <div className="mb-6">
            <h3 className="text-xs sm:text-sm font-bold text-primary uppercase tracking-wider mb-2 font-mono">
              Description
            </h3>
            <p className="text-foreground/90 leading-relaxed text-sm sm:text-base">
              {event.description}
            </p>
          </div>
          
          <div className="bg-white/5 p-4 sm:p-5 rounded-2xl border border-white/5">
            <h3 className="text-xs sm:text-sm font-bold text-gold uppercase tracking-wider mb-3 font-mono">
              <i className="fa-solid fa-list-check mr-2" />
              Rules
            </h3>
            <ul className="space-y-2">
              {event.rules.map((rule, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-foreground/70 flex items-start">
                  <span className="mr-2 text-primary">{idx + 1}.</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-auto">
          <button
            onClick={() => window.open(event.link, '_blank')}
            className="w-full py-3 sm:py-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground rounded-xl font-bold text-base sm:text-lg shadow-lg transition-all flex items-center justify-center gap-2 border border-white/10 group"
          >
            <i className="fa-brands fa-google text-lg" />
            Register Now
            <i className="fa-solid fa-arrow-up-right-from-square group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
