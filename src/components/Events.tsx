import { useState } from 'react';
import { EVENTS_DATA, PASSES_DATA, EventData, PassData } from '@/data/events';
import EventModal from './EventModal';
import PassModal from './PassModal';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [selectedPass, setSelectedPass] = useState<PassData | null>(null);

  return (
    <section id="events" className="py-16 sm:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="flex justify-between items-end mb-8 sm:mb-12 flex-wrap gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 font-orbitron">
              Featured <span className="text-primary">Events</span>
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Compete with best minds in the country.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {EVENTS_DATA.map((event) => (
            <div
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              className="group glass-panel-event cursor-pointer hover:bg-white/10 min-h-[140px] sm:min-h-[180px] rounded-2xl sm:rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20 relative overflow-hidden flex flex-col justify-center items-center text-center p-4 sm:p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 mb-3 sm:mb-4 text-primary/70 group-hover:text-primary transition-colors">
                <i className="fa-solid fa-bolt text-2xl sm:text-3xl transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              
              <h3 className="relative z-10 text-base sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary/90 transition-colors leading-tight">
                {event.name}
              </h3>
              
              <span className="relative z-10 text-[10px] text-primary font-mono uppercase tracking-wider opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                Click for details
              </span>
            </div>
          ))}
        </div>

        {/* Passes Section */}
        <div className="mt-16 sm:mt-24 border-t border-white/10 pt-8 sm:pt-12">
          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 font-orbitron text-gold">
              Official <span className="text-foreground">Passes</span>
            </h3>
          </div>
          
          <div className="flex justify-center mb-6 sm:mb-8">
            <div
              onClick={() => setSelectedPass(PASSES_DATA[0])}
              className="group glass-panel-pass cursor-pointer hover:bg-white/10 min-w-[280px] sm:min-w-[300px] max-w-sm rounded-2xl sm:rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] relative overflow-hidden flex flex-col justify-center items-center text-center p-6 sm:p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 mb-3 sm:mb-4 text-gold/70 group-hover:text-gold transition-colors">
                <i className="fa-solid fa-ticket text-3xl sm:text-4xl transform group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <h3 className="relative z-10 text-xl sm:text-2xl font-bold text-foreground mb-2 group-hover:text-gold-light transition-colors leading-tight">
                {PASSES_DATA[0].name}
              </h3>
              
              <p className="relative z-10 text-base sm:text-lg font-mono text-gold/80 font-bold mb-3 sm:mb-4">
                {PASSES_DATA[0].price}
              </p>

              <span className="relative z-10 text-[10px] text-gold font-mono uppercase tracking-wider opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                Click for details
              </span>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto px-4">
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <span className="font-bold text-primary">Disclaimer:</span> Only a maximum of 3 events will be allowed to participate, and food will be provided.
            </p>
          </div>
        </div>
      </div>

      <EventModal event={selectedEvent} isOpen={!!selectedEvent} onClose={() => setSelectedEvent(null)} />
      <PassModal pass={selectedPass} isOpen={!!selectedPass} onClose={() => setSelectedPass(null)} />
    </section>
  );
};

export default Events;
