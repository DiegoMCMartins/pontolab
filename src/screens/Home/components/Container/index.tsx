import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';

import {styles} from './styles';

interface ContainerProps extends PropsWithChildren {}

export default function Container(props: ContainerProps) {
  return <View style={styles.container}>{props?.children}</View>;
}
