import {useMergeState} from '@constants/functional';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

const use[FTName | capitalize&capitalcase&replace(' ', '')] = () => {
  const navigation =
    useNavigation<StackNavigationProp<ParamList, '[FTName | capitalize&capitalcase&replace(' ', '')]Screen'>>();
 
  const [state, setState] = useMergeState({
    isLoading: false,
  });

  const {isLoading}: any = state;
  return {isLoading};
};
export default use[FTName | capitalize&capitalcase&replace(' ', '')];
