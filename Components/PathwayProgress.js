import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Row, Surface } from '@draftbit/ui';

export default function PathwayProgress(props) {
  const { theme } = props.props;

  let stepsLenght = props.steps.length;
  let stepsCompleted = props.steps.filter((s) => s.complete).length;
  let stepsUncompleted = stepsLenght - stepsCompleted;

  return (
    <View style={styles.View_8n} pointerEvents={'auto'}>
      <Row justifyContent={'flex-start'} alignItems={'flex-start'}>
        <Surface
          style={[
            styles.SurfaceVX,
            { backgroundColor: theme.colors.success },
            { flex: stepsCompleted },
          ]}
        />
        <Surface
          style={[
            styles.SurfaceHW,
            { backgroundColor: theme.colors.light },
            { flex: stepsUncompleted },
          ]}
        />
      </Row>
    </View>
  );
}

const styles = StyleSheet.create({
  SurfaceVX: {
    minHeight: 15,
    flex: 0,
  },
  SurfaceHW: {
    minHeight: 15,
    flex: 1,
  },
  View_8n: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    marginBottom: 16,
    flex: 1,
  },
});
