import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';

import DayScreen from '../screens/DayScreen';

import Draggable from 'react-native-draggable';

const { Value } = Animated;

const { height, width } = Dimensions.get('window');



class DraggableDayComponent extends React.Component{

    heightSize = (height / 100) * 89.65;

    render() {
        return (
            <Draggable
                x={0}
                y={0}
                minX={0}
                maxX={0}
                minY={0}
                maxY={this.heightSize}

                touchableOpacityProps = {{ activeOpactiy: .0 }}
                onPressIn={() => {
                    console.log('press in');
                      
                }}
                onDragRelease={(e)=>{
                    
                    let y = e.nativeEvent.locationY
                    console.log(y);
                    if(y < 50){
                        this.props.navigation.navigate('DraggableDayComponent', {
                            timeCurrent: this.props.timeCurrent.subtract(1, 'days')
                        });
                    }else if(y > this.heightSize +50){
                        this.props.navigation.navigate('DraggableDayComponent', {
                            timeCurrent: this.props.timeCurrent.add(1, 'days')
                        });
                    }
                }}
            >
                <DayScreen timeCurrent={this.props.timeCurrent} />
            </Draggable>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    flex:1,
    backgroundColor:'black'
  },
});

export default DraggableDayComponent;
