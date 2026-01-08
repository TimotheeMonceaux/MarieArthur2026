import MainLayout from './components/MainLayout';
import PasswordPrompt from './components/PasswordPrompt';
import { useAppSelector } from './store/store';

function App() {
  const profile = useAppSelector((state) => state.passwordSlice.profile);
  
  if (profile === undefined) 
    return <PasswordPrompt />

  return <MainLayout />;
}

export default App
