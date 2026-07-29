import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout'

const HomePage = lazy(() =>
  import('./pages/HomePage').then((module) => ({ default: module.HomePage })),
)
const CampaignsPage = lazy(() =>
  import('./pages/CampaignsPage').then((module) => ({ default: module.CampaignsPage })),
)
const CampaignDetailPage = lazy(() =>
  import('./pages/CampaignDetailPage').then((module) => ({
    default: module.CampaignDetailPage,
  })),
)
const ChampionsPage = lazy(() =>
  import('./pages/ChampionsPage').then((module) => ({ default: module.ChampionsPage })),
)
const ChampionDetailPage = lazy(() =>
  import('./pages/ChampionDetailPage').then((module) => ({
    default: module.ChampionDetailPage,
  })),
)
const VictoriesPage = lazy(() =>
  import('./pages/VictoriesPage').then((module) => ({ default: module.VictoriesPage })),
)
const WarRoomPage = lazy(() =>
  import('./pages/WarRoomPage').then((module) => ({ default: module.WarRoomPage })),
)
const SummonCounselPage = lazy(() =>
  import('./pages/SummonCounselPage').then((module) => ({
    default: module.SummonCounselPage,
  })),
)
const PrivacyPage = lazy(() =>
  import('./pages/LegalPages').then((module) => ({ default: module.PrivacyPage })),
)
const TermsPage = lazy(() =>
  import('./pages/LegalPages').then((module) => ({ default: module.TermsPage })),
)
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage').then((module) => ({ default: module.NotFoundPage })),
)

function RouteLoader() {
  return (
    <div className="route-loader" role="status" aria-live="polite">
      <img src="/assets/brand/mark-divorce-dungeon-shield.svg" alt="" />
      <span>Opening the archive…</span>
    </div>
  )
}
export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<RouteLoader />}>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path="campaigns" element={<CampaignsPage />} />
            <Route path="campaigns/:campaignSlug" element={<CampaignDetailPage />} />
            <Route path="champions" element={<ChampionsPage />} />
            <Route path="champions/:championSlug" element={<ChampionDetailPage />} />
            <Route path="victories" element={<VictoriesPage />} />
            <Route path="war-room" element={<WarRoomPage />} />
            <Route path="summon-counsel" element={<SummonCounselPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
