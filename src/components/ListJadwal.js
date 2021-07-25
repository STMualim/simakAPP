import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Warna} from '../helpers/Warna';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ripple from 'react-native-material-ripple';
import {Col, Row} from 'react-native-responsive-grid-system';
import Card from './Card';

// const ListJadwal = props => {
//   const textNamaMapel = {
//     fontFamily: 'Montserrat-Bold',
//     color:
//       props.status == 3
//         ? Warna.white
//         : props.status == 2
//         ? Warna.primary
//         : Warna.primary,
//     fontSize: 14,
//   };

//   const textNamaGuru = {
//     fontFamily: 'Montserrat-SemiBold',
//     color:
//       props.status == 3
//         ? Warna.white
//         : props.status == 2
//         ? Warna.primary
//         : Warna.gray,
//     fontSize: 12,
//     marginTop: 3,
//   };

//   const textWaktu = {
//     fontFamily: 'Montserrat-Medium',
//     color:
//       props.status == 3
//         ? Warna.white
//         : props.status == 2
//         ? Warna.primary
//         : Warna.gray,
//     fontSize: 12,
//     marginTop: 3,
//   };

//   const textStatusJadwal = {
//     fontFamily: 'Montserrat-Medium',
//     color:
//       props.status == 3
//         ? Warna.white
//         : props.status == 2
//         ? Warna.primary
//         : Warna.gray,
//     fontSize: 12,
//     marginTop: 3,
//   };

//   return (
//     <Row rowStyles={styles.rowJadwal}>
//       <Col xs={12}>
//         <Card
//           nopadding
//           bgColor={
//             props.status == 3
//               ? Warna.primary
//               : props.status == 2
//               ? Warna.softPrimary
//               : Warna.white
//           }>
//           <Ripple
//             rippleColor={
//               props.status == 3
//                 ? Warna.white
//                 : props.status == 2
//                 ? Warna.primary
//                 : Warna.gray
//             }>
//             <Row rowStyles={{padding: 10}}>
//               <Col xs={2} colStyles={styles.colIconJadwal}>
//                 <Icon
//                   name={
//                     props.status == 1
//                       ? 'file-clock-outline'
//                       : props.status == 2
//                       ? 'file-document-edit-outline'
//                       : 'file-check-outline'
//                   }
//                   size={30}
//                   color={props.status == 3 ? Warna.white : Warna.primary}
//                 />
//               </Col>
//               <Col xs={8}>
//                 <Text style={textNamaMapel} numberOfLines={1}>
//                   {props.mapel}
//                 </Text>
//                 <Text style={textNamaGuru}>{props.guru}</Text>
//                 <Text style={textWaktu}>{props.waktu}</Text>
//               </Col>
//               <Col xs={2} colStyles={styles.colStatusJadwal}>
//                 <Text style={textStatusJadwal}>
//                   {props.status == 1
//                     ? 'Belum dimulai'
//                     : props.status == 2
//                     ? 'Kelas dimulai'
//                     : 'Selesai'}
//                 </Text>
//               </Col>
//             </Row>
//           </Ripple>
//         </Card>
//       </Col>
//     </Row>
//   );
// };

const ListJadwal = props => {
  return (
    <Row rowStyles={styles.rowJadwal}>
      <Col xs={12}>
        <View style={styles.listWrapper}>
          <Ripple rippleColor={Warna.gray}>
            <Row rowStyles={{padding: 10}}>
              <Col xs={2} colStyles={styles.colIconJadwal}>
                <Icon
                  name="calendar-text-outline"
                  size={30}
                  color={Warna.primary}
                />
              </Col>
              <Col xs={10}>
                <Text style={styles.textNamaMapel} numberOfLines={1}>
                  {props.mapel}
                </Text>
                <Text style={styles.textNamaGuru}>{props.guru}</Text>
                <Text style={styles.textWaktu}>{props.waktu}</Text>
              </Col>
            </Row>
          </Ripple>
        </View>
      </Col>
    </Row>
  );
};

export default ListJadwal;

const styles = StyleSheet.create({
  rowJadwal: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  listWrapper: {
    backgroundColor: Warna.white,
    width: 'auto',
    borderBottomWidth: 1,
    borderColor: Warna.softGray,
  },
  colIconJadwal: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  colStatusJadwal: {
    alignItems: 'flex-end',
  },
  textNamaMapel: {
    fontFamily: 'Montserrat-Bold',
    color: Warna.primary,
    fontSize: 14,
  },
  textNamaGuru: {
    fontFamily: 'Montserrat-SemiBold',
    color: Warna.gray,
    fontSize: 12,
    marginTop: 3,
  },
  textWaktu: {
    fontFamily: 'Montserrat-Medium',
    color: Warna.gray,
    fontSize: 12,
    marginTop: 3,
  },
});
