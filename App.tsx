import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { atom, RecoilRoot } from 'recoil';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

interface Product {
  productId: number;
  name: string;
  subtitle: string;
  price: number;
  amount: number;
  image?: string;
}

export const cartState = atom({
  key: 'cartState',
  default: [] as Product[],
});

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <RecoilRoot>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </RecoilRoot>
      </SafeAreaProvider>
    );
  }
}
