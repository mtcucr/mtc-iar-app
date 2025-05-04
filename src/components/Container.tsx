import { SafeAreaView } from 'react-native';

type Props = {
  children: React.ReactNode
  name: string;
}

export const Container = ({ children, name}: Props) => {
  return <SafeAreaView className={styles.container}>{children}</SafeAreaView>;
};

const styles = {
  container: 'flex flex-1 m-6',
};
