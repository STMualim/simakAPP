import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
import {
  Button,
  Card,
  Container,
  Gap,
  Badge,
  ListJadwal,
  Avatar,
} from '../components';
import {Col, Row} from 'react-native-responsive-grid-system';
import {Warna} from '../helpers/Warna';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ripple from 'react-native-material-ripple';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Url} from '../helpers/Url';
import NotFound from '../assets/images/jadwal-not-found';

const LoadingJadwal = () => (
  <View style={styles.loading}>
    <ActivityIndicator size="large" color={Warna.secondary} />
  </View>
);

const Home = ({navigation}) => {
  // State
  const [jadwal, setJadwal] = useState([]);
  const [tahunAjaran, setTahunAjaran] = useState('');
  const [namaSiswa, setNamaSiswa] = useState('');
  const [rombel, setRombel] = useState('');
  const [idRombel, setIdRombel] = useState('');
  const [walas, setWalas] = useState('');
  const [loadingJadwal, setLoadingJadwal] = useState(true);

  // Hook
  useEffect(() => {
    getSession();
  }, []);

  // Get Session
  const getSession = async () => {
    try {
      const data = await AsyncStorage.getItem('siswa');
      const siswa = JSON.parse(data);
      cekSession(siswa.id);
    } catch (e) {}
  };

  // Cek Home ke Server
  const cekSession = id => {
    axios
      .get(Url.api + 'siswa/home', {
        params: {
          id: id,
        },
      })
      .then(res => {
        setTahunAjaran(res.data.ta);
        setNamaSiswa(res.data.nama);
        setRombel(res.data.rombel);
        setIdRombel(res.data.id_rombel);
        setWalas(res.data.walas);
        loadJadwal(res.data.id_rombel);
      });
  };

  // Load jadwal
  const loadJadwal = id => {
    setLoadingJadwal(true);
    axios
      .get(Url.api + 'siswa/jadwal', {
        params: {
          rombel: id,
        },
      })
      .then(res => {
        setJadwal(res.data);
        setLoadingJadwal(false);
      });
  };

  // Tanggal Hari Ini
  const tglHariIni = () => {
    const arrBulan = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ];
    const arrHari = [
      'Minggu',
      'Senin',
      'Selasa',
      'Rabu',
      'Kamis',
      'Jumat',
      'Sabtu',
    ];

    const date = new Date();
    const hari = date.getDay();
    const tanggal = date.getDate();
    const bulan = date.getMonth();
    const tahun = date.getFullYear();

    return arrHari[hari] + ', ' + tanggal + ' ' + arrBulan[bulan] + ' ' + tahun;
  };

  const JadwalKosong = () => (
    <Row rowStyles={{justifyContent: 'center'}}>
      <Col xs={12} colStyles={{alignItems: 'center'}}>
        <NotFound width={'40%'} />
        <Text
          style={{
            fontFamily: 'Montserrat-Bold',
            fontSize: 20,
            color: Warna.gray,
            textAlign: 'center',
          }}>
          Jadwal kelas kamu belum tersedia
        </Text>
        <Gap height={10} />
      </Col>
      <Col xs={4}>
        <Button primary sm onPress={() => loadJadwal(idRombel)}>
          Refresh
        </Button>
      </Col>
    </Row>
  );

  const RenderJadwal = ({item}) => (
    <ListJadwal
      mapel={item.nama_mapel}
      guru={
        (item.gelar_depan_pegawai != null
          ? item.gelar_depan_pegawai + ' '
          : '') +
        item.nama_pegawai +
        (item.gelar_belakang_pegawai != null
          ? ', ' + item.gelar_belakang_pegawai
          : '')
      }
      waktu={item.nama_waktu}
    />
  );

  const RowJadwal = () => (
    <Row rowStyles={styles.rowDaftarJadwal}>
      <Col xs={12}>
        {jadwal == '' ? (
          <JadwalKosong />
        ) : (
          <FlatList
            data={jadwal}
            renderItem={RenderJadwal}
            keyExtractor={item => item.id_jadwal}
            showsVerticalScrollIndicator={false}
          />
        )}
      </Col>
    </Row>
  );

  return (
    <Container>
      <Row rowStyles={styles.rowHeader}>
        <Col xs={8} colStyles={styles.colTahunAjaran}>
          <Text style={styles.textTahunAjaran} numberOfLines={1}>
            TA {tahunAjaran}
          </Text>
        </Col>
        <Col xs={4} colStyles={styles.colNotif}>
          <Ripple
            rippleColor={Warna.white}
            style={styles.notif}
            rippleContainerBorderRadius={25}>
            <Icon name="bell-outline" size={25} color={Warna.white} />
            <Badge secondary borderPrimary>
              99+
            </Badge>
          </Ripple>
        </Col>
      </Row>

      <Row rowStyles={styles.rowUser}>
        <Col xs={12} colStyles={styles.colUser}>
          <Card>
            <Row>
              <Col xs={3} colStyles={styles.colIconUser}>
                <Avatar nama={namaSiswa} />
              </Col>
              <Col xs={9}>
                <Text
                  style={{
                    fontFamily: 'Montserrat-Medium',
                    color: Warna.primary,
                  }}
                  numberOfLines={1}>
                  Hi,
                  <Text style={styles.textNamaSiswa} numberOfLines={1}>
                    {' ' + namaSiswa}
                  </Text>
                </Text>
                <Text style={styles.textRombel}>{rombel}</Text>
                <Text style={styles.textWalas}>{walas}</Text>
              </Col>
            </Row>
            <Row rowStyles={styles.rowBtn}>
              <Col xs={6}>
                <Button primary sm>
                  Nilai
                </Button>
              </Col>
              <Col xs={6}>
                <Button
                  softPrimary
                  sm
                  onPress={() => navigation.navigate('Profile')}>
                  Profile
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row rowStyles={styles.rowTitleJadwal}>
        <Col xs={6}>
          <Text style={styles.textJadwal}>Jadwal hari ini</Text>
        </Col>
        <Col
          xs={6}
          colStyles={{alignItems: 'flex-end', justifyContent: 'center'}}>
          <Text style={styles.textTgl}>{tglHariIni()}</Text>
        </Col>
      </Row>

      {loadingJadwal == true ? <LoadingJadwal /> : <RowJadwal />}
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  rowHeader: {
    paddingHorizontal: 10,
    height: 45,
    backgroundColor: Warna.primary,
  },
  rowUser: {
    padding: 10,
  },
  rowTitleJadwal: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  rowDaftarJadwal: {
    flex: 1,
  },
  colTahunAjaran: {
    height: 45,
    justifyContent: 'center',
  },
  colNotif: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 45,
  },
  textTahunAjaran: {
    fontFamily: 'Montserrat-Bold',
    color: Warna.white,
    fontSize: 13,
  },
  textNamaSiswa: {
    fontFamily: 'Montserrat-Bold',
    color: Warna.primary,
    fontSize: 16,
  },
  textRombel: {
    fontFamily: 'Montserrat-SemiBold',
    color: Warna.gray,
    fontSize: 12,
    marginTop: 3,
  },
  textWalas: {
    fontFamily: 'Montserrat-SemiBold',
    color: Warna.gray,
    fontSize: 12,
    marginTop: 3,
  },
  textJadwal: {
    fontFamily: 'Montserrat-Bold',
    color: Warna.gray,
    fontSize: 16,
  },
  textTgl: {
    fontFamily: 'Montserrat-Medium',
    color: Warna.gray,
    fontSize: 12,
  },
  notif: {
    backgroundColor: Warna.primary,
    width: 45,
    height: 45,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  colIconUser: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  colUser: {
    justifyContent: 'center',
  },
  rowBtn: {
    marginTop: 10,
  },
  loading: {
    justifyContent: 'center',
  },
});
