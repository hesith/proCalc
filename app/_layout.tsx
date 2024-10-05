import { Stack } from "expo-router";
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { default as theme } from '../scripts/theme.json'; 

export default function RootLayout() {
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}}/>
    </Stack>
    </ApplicationProvider>

  );
}
