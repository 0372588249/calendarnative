
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,

} from 'react-native';


class TopButtonNaviagation extends React.Component {

    render() {
        return (
            <TouchableOpacity
                style={styles.topButtonNavigation}
                onPress={() => {
                    /**
                     * do some thing
                     */
                    if(this.props.execute != null){
                        this.props.execute();
                    }
                }}
            >
                <Image
                    style={[styles.imageTopButtonNavigation, this.props.tranform]}
                    source={this.props.sourceIcon}
                    tintColor = 'white'
                />
            </TouchableOpacity>
        );
    }
}

class ButtonInNavigationArea extends React.Component{
    render(){
        return (
            <TouchableOpacity 
                style={[styles.buttonInNavigationArea, this.props.backColor]}
                onPress={()=>{
                    /**
                     * do some thing
                     */
                    if(this.props.execute != null)
                        this.props.execute();
                }}
            >
                <Text style={[styles.textOfButtonInNavigationArea, this.props.fontWeight]}>
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        );
    }
}

class NavigationArea extends React.Component{

    constructor(){
        super();
        this.state = {isDayClicked:true};
    }
    
    getBackgroundColorDayButton = () =>{
        if(this.state.isDayClicked == true){
            return {backgroundColor:'#9ea490'};
        }
        return null;
    }
    getFontWeightDayButton = () =>{
        if(this.state.isDayClicked == true){
            return {fontWeight:'700'};
        }
        return null;
    }
    getBackgroundColorMonthButton = () =>{
        if(this.state.isDayClicked == false){
            return {backgroundColor:'#9ea490'};
        }
        return null;
    }
    getFontWeightMonthButton = () =>{
        if(this.state.isDayClicked == false){
            return {fontWeight:'700'};
        }
        return null;
    }
    render() {
        return (
            <View style={styles.navigationArea}>
                <ButtonInNavigationArea
                    text="Day calendar"
                    backColor={this.getBackgroundColorDayButton()}
                    fontWeight={this.getFontWeightDayButton()}
                    execute={()=>{
                        this.setState({isDayClicked:true});
                        this.props.navigation.navigate('ContainerDayScreen');
                    }}
                />
                <ButtonInNavigationArea
                    text="Month calendar"
                    backColor={this.getBackgroundColorMonthButton()}
                    fontWeight={this.getFontWeightMonthButton()}
                    execute={()=>{
                        this.setState({isDayClicked:false});
                        this.props.navigation.navigate('ListMonthScreen');
                    }}
                />
            </View>
        );
    }
}


class Header2 extends React.Component{
    render(){
        return (
            <View style={styles.header}>
                <TopButtonNaviagation
                    execute = {()=>{
                        // do some thing
                        if(this.props.navigation != null)
                            this.props.navigation.openDrawer();
                    }}
                    sourceIcon={require('../../assets/icon/menu.png')}
                />
                <TopButtonNaviagation
                    execute = {()=>{
                        // do some thing
                    }}
                    sourceIcon={require('../../assets/icon/calendarandclocktime.png')}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    header:{
        width:'94%',
        height:'6%',
        marginLeft:'3%',
        marginTop:'5%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'gray',
    },
    topButtonNavigation:{
        width:'10%',
        height:'85%',
        alignItems:'center',
        justifyContent:'center',
        color:'silver',
    },
    imageTopButtonNavigation:{
        alignItems:'center',
    },
    navigationArea:{
        backgroundColor:'#b3bcb4',
        width:'60%',
        height:'85%',
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:20,
        
    },
    buttonInNavigationArea:{
        width:'50%',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
    },
    textOfButtonInNavigationArea:{
        color:'white',
        fontSize:12,
    },
    
});
export default Header2;
