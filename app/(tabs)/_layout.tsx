import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';


function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Page d'accueil",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Connexion",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
       <Tabs.Screen
      name="three"
      options={{
        title: "Dernières sorties",
        tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
      }}
    />
     <Tabs.Screen
      name="four"
      options={{
        title: "Favoris",
        tabBarIcon: ({ color }) => <TabBarIcon name="star" color={color} />,
      }}
    />
    </Tabs>
  );
}
//<FontAwesomeIcon icon="fa-solid fa-list-timeline" />
//<FontAwesomeIcon icon="fa-solid fa-user" />