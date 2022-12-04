import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    marginVertical: 5
  },
  buttonLayout: {
    backgroundColor: 'blue',
    borderRadius: 4,
    height: 28
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    paddingHorizontal: 30,
    paddingVertical: 2
  },
  noItemText: {
    textAlign: 'center',
    color: 'grey'
  }
});

export default styles;
