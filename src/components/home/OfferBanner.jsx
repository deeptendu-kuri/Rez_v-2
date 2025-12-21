import { offers } from '../../data/offers';

const OfferBanner = () => {
  const featuredOffers = offers.slice(0, 3);

  return (
    <section className="py-4">
      <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar pb-2">
        {featuredOffers.map((offer) => (
          <div
            key={offer.id}
            className="min-w-[280px] h-36 rounded-2xl overflow-hidden relative"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${offer.image})` }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-4">
              <span className="text-2xl font-bold text-amber-400">{offer.discount}</span>
              <h3 className="text-lg font-semibold text-white">{offer.title}</h3>
              <p className="text-sm text-gray-300">{offer.subtitle}</p>
            </div>

            {/* Badge */}
            <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-black/50 backdrop-blur">
              <span className="text-xs text-white">{offer.validTill}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferBanner;
