import { AvatarCreatorConfig, AvatarCreatorEvent, AvatarCreatorRaw } from '@readyplayerme/react-avatar-creator';

const config: AvatarCreatorConfig = {
  clearCache: false,
  bodyType: 'fullbody',
  quickStart: false,
  language: 'en',
};

const style = { width: '100%', height: '100vh', border: 'none' };

export default function App() {
  const handleCustomEvent = (event: AvatarCreatorEvent) => {
    console.log(`Received custom event`, event);
  };

  return (
    <>
      <AvatarCreatorRaw subdomain="gguser" config={config} style={style} onEventReceived={handleCustomEvent} />
    </>
  );
}