import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import { WalletProvider } from './contexts/WalletContext';
import { UserProvider } from './contexts/UserContext';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Explore from './pages/Explore';
import StorePage from './pages/StorePage';
import Wallet from './pages/Wallet';
import Offers from './pages/Offers';
import CashStore from './pages/CashStore';
import Profile from './pages/Profile';
import DealStore from './pages/DealStore';
import DealDetail from './pages/DealDetail';
import FleaMarket from './pages/FleaMarket';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import Travel from './pages/Travel';
import FoodDining from './pages/FoodDining';
import RestaurantDetail from './pages/RestaurantDetail';
import Electronics from './pages/Electronics';
import ElectronicsCategory from './pages/ElectronicsCategory';
import ElectronicsProduct from './pages/ElectronicsProduct';
import Fashion from './pages/Fashion';
import FashionCategory from './pages/FashionCategory';
import FashionProduct from './pages/FashionProduct';
import Beauty from './pages/Beauty';
import BeautyCategory from './pages/BeautyCategory';
import BeautyService from './pages/BeautyService';
import Grocery from './pages/Grocery';
import Healthcare from './pages/Healthcare';
import Fitness from './pages/Fitness';
import HomeServices from './pages/HomeServices';
import Financial from './pages/Financial';

// Specialized Stores
import LuxuryStore from './pages/stores/LuxuryStore';
import OrganicStore from './pages/stores/OrganicStore';
import MenStore from './pages/stores/MenStore';
import WomenStore from './pages/stores/WomenStore';
import ChildrenStore from './pages/stores/ChildrenStore';
import RentalStore from './pages/stores/RentalStore';
import GiftingStore from './pages/stores/GiftingStore';

// Exclusive pages
import StudentZone from './pages/exclusive/StudentZone';
import CorporatePerks from './pages/exclusive/CorporatePerks';
import WomenExclusive from './pages/exclusive/WomenExclusive';
import BirthdaySpecials from './pages/exclusive/BirthdaySpecials';
import SpecialProfiles from './pages/exclusive/SpecialProfiles';
import LoyaltyRewards from './pages/exclusive/LoyaltyRewards';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <WalletProvider>
          <AppProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="explore" element={<Explore />} />
                <Route path="store/:id" element={<StorePage />} />
                <Route path="wallet" element={<Wallet />} />
                <Route path="offers" element={<Offers />} />
                <Route path="deal-store" element={<DealStore />} />
                <Route path="deal/:id" element={<DealDetail />} />
                <Route path="cash-store" element={<CashStore />} />
                <Route path="profile" element={<Profile />} />
                <Route path="flea-market" element={<FleaMarket />} />
                <Route path="events" element={<Events />} />
                <Route path="event/:type/:id" element={<EventDetail />} />
                <Route path="event/:id" element={<EventDetail />} />
                <Route path="travel" element={<Travel />} />
                <Route path="food" element={<FoodDining />} />
                <Route path="food/restaurant/:id" element={<RestaurantDetail />} />
                <Route path="electronics" element={<Electronics />} />
                <Route path="electronics/:category" element={<ElectronicsCategory />} />
                <Route path="electronics/product/:id" element={<ElectronicsProduct />} />
                <Route path="fashion" element={<Fashion />} />
                <Route path="fashion/:category" element={<FashionCategory />} />
                <Route path="fashion/product/:id" element={<FashionProduct />} />
                <Route path="beauty" element={<Beauty />} />
                <Route path="beauty/:type/:category" element={<BeautyCategory />} />
                <Route path="beauty/service/:id" element={<BeautyService />} />
                <Route path="grocery" element={<Grocery />} />
                <Route path="healthcare" element={<Healthcare />} />
                <Route path="fitness" element={<Fitness />} />
                <Route path="home-services" element={<HomeServices />} />
                <Route path="financial" element={<Financial />} />

                {/* Specialized Stores */}
                <Route path="store/luxury" element={<LuxuryStore />} />
                <Route path="store/organic" element={<OrganicStore />} />
                <Route path="store/men" element={<MenStore />} />
                <Route path="store/women" element={<WomenStore />} />
                <Route path="store/children" element={<ChildrenStore />} />
                <Route path="store/rental" element={<RentalStore />} />
                <Route path="store/gifting" element={<GiftingStore />} />

                {/* Exclusive pages */}
                <Route path="exclusive/student" element={<StudentZone />} />
                <Route path="exclusive/corporate" element={<CorporatePerks />} />
                <Route path="exclusive/women" element={<WomenExclusive />} />
                <Route path="exclusive/birthday" element={<BirthdaySpecials />} />
                <Route path="exclusive/loyalty" element={<LoyaltyRewards />} />
                <Route path="exclusive/special-profiles" element={<SpecialProfiles />} />
              </Route>
            </Routes>
          </AppProvider>
        </WalletProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
