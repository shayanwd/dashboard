import React, { Suspense, lazy, useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import SideLogo from './assets/side-logo.svg';

import 'react-day-picker/dist/style.css';
import DateRangePicker from './components/DateRangePicker';
import CampaignDropdown from './components/CampaignDropdown';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';

const Leads = lazy(() => import('./pages/Leads'));
const PreSetting = lazy(() => import('./pages/PreSetting'));
const Aktivitaet = lazy(() => import('./pages/Aktivitaet'));
const Setting = lazy(() => import('./pages/Setting'));
const Closing = lazy(() => import('./pages/Closing'));
const Umsatz = lazy(() => import('./pages/Umsatz'));



// const Header = () => {
//   const [range, setRange] = useState({ from: undefined, to: undefined });
//   const [campaign, setCampaign] = useState('');
//   const campaignOptions = [
//     'Kampagne Name',
//     'Kampagne Name 2',
//     'Kampagne Name 3',
//     'Kampagne Name 4',
//     'Kampagne Name 5',
//   ];
//   return (
//     <header className="flex items-center justify-between px-5 py-5 bg-dark border-b border-[#151515]">
//       <div className="flex gap-2 relative">
//         <DateRangePicker value={range} onChange={setRange} />
//         <CampaignDropdown
//           options={campaignOptions}
//           value={campaign}
//           onChange={setCampaign}
//         />
//       </div>
//       <div className="bg-[rgba(255,255,255,0.09)] border flex items-center justify-between w-full sm:w-[200px] pl-2.5 pr-1 py-1 rounded-[10px] border-[rgba(255,255,255,0.06)] border-solid cursor-pointer">
//         <div className="text-white text-sm font-normal leading-none">
//           Filters
//         </div>
//         <div className="bg-[rgba(230,243,255,0.14)] flex items-center justify-center w-7 h-7 px-1.5 rounded-[7px]">
//           <img
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/7afa7f224bb8f246cefb6d992cb23d64c11e39b5?placeholderIfAbsent=true"
//             alt="Filter"
//             className="aspect-[1] object-contain w-4"
//           />
//         </div>
//       </div>
//     </header>
//   );
// };

function App() {
  return (
    <div className="flex min-h-screen bg-dark w-full main-wrapper">
      <Sidebar />
      <div className="flex flex-col flex-1 w-full">
        <Header />
        <main className="flex-1 min-h-screen w-full">
          <Suspense fallback={<div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>}>
            <Routes>
              <Route path="/" element={<Leads />} />
              <Route path="/pre-setting" element={<PreSetting />} />
              <Route path="/aktivitaet" element={<Aktivitaet />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/closing" element={<Closing />} />
              <Route path="/umsatz" element={<Umsatz />} />
              <Route path="*" element={<Leads />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </div>
  );
}

export default App;
