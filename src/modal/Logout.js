// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Modal from 'react-native-modal';
// import { useStoreActions } from 'easy-peasy';


// export default function Logout(props) {

//     const { logout } = useStoreActions((actions) => actions.cart);

//     const _logOut = () => {
//         logout();
//     };
//     return (
//         <View>
//             <Modal
//                 animationInTiming={500}
//                 animationOutTiming={700}
//                 isVisible={props.isVisible}
//                 onBackButtonPress={props.closeModal}
//                 onBackdropPress={props.closeModal}>
//                 <View style={{ flex: 0.35, backgroundColor: '#fff', borderRadius: 2, alignItems: 'center', justifyContent: 'center' }}>
//                     <Text style={{ ...styles.checkoutTitle, color: '#333', fontSize: 18 }}>Bạn có muốn thoát tài khoản ?</Text>
//                     <TouchableOpacity style={styles.checkoutButton} onPress={() => { _logOut, props.closeModal() }}>
//                         <Text style={styles.checkoutTitle}>Đăng xuất</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={{ ...styles.checkoutButton, marginTop: 0 }} onPress={props.closeModal}>
//                         <Text style={styles.checkoutTitle}>Trở lại</Text>
//                     </TouchableOpacity>
//                 </View>
//             </Modal>
//         </View>
//     );
// }


// const styles = StyleSheet.create({
//     wrapper: {
//         flex: 1,
//         backgroundColor: '#DFDFDF'
//     },
//     checkoutButton: {
//         height: 50,
//         width: '80%',
//         margin: 10,
//         marginTop: 30,
//         backgroundColor: '#2ABB9C',
//         borderRadius: 2,
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingBottom: 0
//     },
//     checkoutTitle: {
//         color: '#FFF',
//         fontSize: 16,
//         fontWeight: 'bold',
//         fontFamily: 'Avenir',
//     },
// })