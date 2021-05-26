import {StyleSheet} from 'react-native';
import Colors from '../../Utility/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main_bg,
  },
  category: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingHorizontal: 5,
    marginTop: 20,
  },
});

export default styles;
