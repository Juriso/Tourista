import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Modal, Pressable, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SelectList } from 'react-native-dropdown-select-list';
import { getFirestore, collection, addDoc, getDoc, doc } from 'firebase/firestore';
import { db, auth } from './firebaseConfig';
import { ScrollView } from 'react-native-gesture-handler';


const BookingForm = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(null);
  const [showPickerDate, setShowPickerDate] = useState(false);
  const [time, setTime] = useState(null);
  const [showPickerTime, setShowPickerTime] = useState(false);
  const [NumPpl, setNumPpl] = useState('');
  const [phone, setPhone] = useState('');
  const [place, setPlace] = useState('');
  const [comment, setComment] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          console.log('User data:', userData);
          setFirstName(userData.firstName);
          setLastName(userData.lastName);
          setEmail(userData.email);
          setPhone(userData.phone);
        } else {
          console.log('No such document!');
        }
      } else {
        console.log('No user signed in!');
      }
    };

    fetchUserData();
  }, []);

  const handleBookingFormNav = () => {
    navigation.navigate('BookingScreen');
  };

  const handleBookingForm = () => {
    let isValid = true;
    if(firstName.length < 2 || !/^[a-zA-Z]+$/.test(firstName)){
      alert('Please input a valid First Name');
      isValid = false;
    };

    if(lastName.length < 2 || !/^[a-zA-Z]+$/.test(lastName)){
      alert('Please input a valid Last Name');
      isValid = false;
    };

    if(!/\S+@\S+\.\S+/.test(email)){
      alert('Please input a valid Email Address');
      isValid = false;
    };

    if(!phone.match(/^[0-9]{11}$/)){
      alert('Please input a valid Phone Number');
      isValid = false;
    };

    if(!date){
      alert('Please select a valid Date');
      isValid = false;
   };

   if(!time){
    alert('Please select a valid Time');
    isValid = false;
  };

    if(!NumPpl){
      alert('Please select a Number of People');
      isValid = false;
    };

    if(!place){
      alert('Please select a place to go');
      isValid = false;
    };

    if (isValid) {
      Validated();
    }
  };

  const Validated = async () => {
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Date:', date);
    console.log('Time:', time)
    console.log('Number of People:', NumPpl);
    console.log('Place:', place);
    console.log('Comment:', comment);
    setModalVisible(!modalVisible);

    try {
      const docRef = await addDoc(collection(db, 'bookings'), {
        firstName,
        lastName,
        email,
        date,
        time,
        NumPpl,
        phone,
        place,
        comment,
      });
      console.log('Document written with ID: ', docRef.id);
      setModalVisible(!modalVisible);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  }


  const toggleDatePicker = () => {
    setShowPickerDate(!showPickerDate);
  };

  const onChangeDate =({type}, selectedDate) => {
    if (type == "set"){
      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS === "android") {
        toggleDatePicker();
        setDate(currentDate.toDateString());
      }
    }else {
      toggleDatePicker();
    }
  };

  const toggleTimePicker = () => {
    setShowPickerTime(!showPickerTime);
  };

  const onChangeTime = ({ type }, selectedTime) => {
    if (type === 'set') {
      const hours = selectedTime.getHours();
      const minutes = selectedTime.getMinutes();
      if (hours < 4 || (hours === 23 && minutes > 59)) {
        alert('Time of arrival must be between 4AM and 11:59PM');
        toggleTimePicker();
      } else {
        const currentTime = selectedTime;
        setTime(currentTime);
        if (Platform.OS === 'android') {
          toggleTimePicker();
          setTime(currentTime.toLocaleTimeString());
        }
      }
    } else {
      toggleTimePicker();
    }
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const handleNumPpl = [
    {key:'2', value:'2'},
    {key:'3-5', value:'3-5'},
    {key:'6-10', value:'6-10'},
    {key:'11-15', value:'11-15'},
    {key:'15-20', value:'15-20'},
    {key:'20+', value:'20+'},
  ];
  
  const handlePlace = [
    {key:'Quezon Memorial Circle', value:'Quezon Memorial Circle'},
    {key:'Art in Island', value:'Art in Island'},
    {key:'La Mesa Ecopark', value:'La Mesa Ecopark'},
    {key:'Smart Araneta Coliseum', value:'Smart Araneta Coliseum'},
    {key:'Real Monasterio De Santa Clara de Manila', value:'Real Monasterio De Santa Clara de Manila'},
    {key:'Sining Kamalig', value:'Sining Kamalig'},
    {key:'Minor Basilica', value:'Minor Basilica'},
    {key:'Archidiocesan Shrine of Mary', value:'Archidiocesan Shrine of Mary'},
    {key:'Santo Domingo Church', value:'Santo Domingo Church'},
    {key:'The Sunken Garden', value:'The Sunken Garden'},
    {key:'GatewayMall', value:'GatewayMall'},
    {key:'Vargas Museum', value:'Vargas Museum'},
    {key:'Parish of the Holy Sacrifice Church', value:'Parish of the Holy Sacrifice Church'},
    {key:'Ateneo Art Gallery', value:'Ateneo Art Gallery'},
    {key:'Bantayog ng mga Bayani', value:'Bantayog ng mga Bayani'},
    {key:'Manila Ocean Park', value:'Manila Ocean Park'},
    {key:'Banawe Street', value:'Banawe Street'},
    {key:'Ninoy Aquino Parks and Wildlife Center', value:'Ninoy Aquino Parks and Wildlife Center'},
    {key:'Ayala Malls TriNoma', value:'Ayala Malls TriNoma'},
    {key:'Eastwood City', value:'Eastwood City'},
    {key:'La Mesa Watershed', value:'La Mesa Watershed'},
    {key:'SM North EDSA Sky Dome', value:'SM North EDSA Sky Dome'},
    {key:'Christ the King Parish Church', value:'Christ the King Parish Church'},
    {key:'PBB House', value:'PBB House'},
    {key:'Neopolitan Business Park', value:'Neopolitan Business Park'},
    {key:'U.P. Town Center', value:'U.P. Town Center'},
    {key:'Iglesia Ni Cristo Museum', value:'Iglesia Ni Cristo Museum'},
  ];

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled" contentContainerStyle={styles.contentContainer}>
      <View style={styles.topSpaceContainer}></View>
        <Text style={styles.header}>Tourista Booking Form</Text>
        <Text style={styles.caption}>Let's know what you are interested to see!</Text>
        <View style={styles.spacing}></View>
          <View style={styles.form}>
            <View style={styles.nameRow}>
              <View style={styles.nameInputContainer}>
                <Text style={styles.label}>First Name:</Text>
                <TextInput style={styles.input} value={firstName}/>
              </View>
              <View style={styles.nameInputContainer}>
                <Text style={styles.label}>Last Name:</Text>
                <TextInput style={styles.input} value={lastName}/>
              </View>
            </View>
            <View style={styles.nameRow}>
              <View style={styles.nameInputContainer}>
                <Text style={styles.label}>Email:</Text>
                <TextInput style={styles.input} value={email}/>
              </View>
              <View style={styles.nameInputContainer}>
                <Text style={styles.label}>Phone Number:</Text>
                <TextInput style={styles.input} value={phone} onChangeText={setPhone} placeholder='09123456789' placeholderTextColor="#11182744"/>
              </View>
            </View>

            <Text style={styles.label}>Date of arrival:</Text>
            {showPickerDate && (<DateTimePicker mode='date' display='spinner' value={tomorrow} onChange={onChangeDate} minimumDate={tomorrow}/>)}
            {!showPickerDate && (<Pressable onPress={toggleDatePicker}><TextInput style={styles.dateInput} placeholder='Sat Aug 21 2024' value={date} onChangeText={setDate} placeholderTextColor="#11182744" editable={false} /></Pressable>)}

            <Text style={styles.label}>Time of arrival:</Text>
            {showPickerTime && (<DateTimePicker mode='time' display='spinner' value={new Date()} onChange={onChangeTime} />)}
            {!showPickerTime && (<Pressable onPress={toggleTimePicker}><TextInput style={styles.dateInput} placeholder='4:00 AM' value={time} onChangeText={setTime} placeholderTextColor="#11182744" editable={false} /></Pressable>)}

            <Text style={styles.label}>Number of People:</Text>
            <SelectList style={styles.input} data={handleNumPpl} setSelected={setNumPpl}/>

            <Text style={styles.label}>Place to go:</Text>
            <SelectList style={styles.input} data={handlePlace} setSelected={setPlace}/>

            <Text style={styles.label}>Anything we should know?</Text>
            <TextInput style={[styles.input, styles.multilineText]} placeholder='Write a message' multiline={true} numberOfLines={4} maxLength={100} onChangeText={text => setComment(text)} value={comment} placeholderTextColor="#11182744"/>

            <View style={styles.bottomSpaceContainer}></View>

            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.submitButton} onPress={(handleBookingForm)}><Text style={styles.submitButtonText}>Submit</Text></TouchableOpacity>
            </View>

            <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={handleBookingFormNav}>
              <View style={styles.modalOverlay}>
                <TouchableOpacity style={styles.modalOverlay} onPress={handleBookingFormNav} />
                <View style={styles.modalContent}>
                  <Text style={styles.modalTitle}>Successfully Booked!</Text>
                  <Text style={styles.modalText}>
                    Your form has been successfully submitted, Thank You!
                  </Text>
                  <TouchableOpacity style={styles.closeButton} onPress={(handleBookingFormNav)}><Text style={styles.closeButtonText}>Close</Text></TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        </ScrollView>
      );
    };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaec',
  },
  contentContainer: {
    alignItems: 'center',
    marginBottom: 100,
  },
  topSpaceContainer:{
    height: 80
  },
  header:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  caption:{
    textAlign: 'center',
    fontWeight: '200'
  },
  spacing:{
    height: 40
  },
  form: {
    width: '90%',
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameInputContainer: {
    width: '48%',
  },
  label: {
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    padding: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
  },
  dateInput:{
    padding: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    color: '#000',
  },
  bottomSpaceContainer:{
    height: 3
  },
  buttonContainer: {
    marginBottom: 40, 
  },
  multilineText:{
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#F79F25',
    padding: 7,
    width: 150,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#2D2D2D',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    height: 100,
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
    marginVertical:100,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#F79F25',
    padding: 7,
    width: 130, 
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  closeButtonText: {
    color: '#2D2D2D',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default BookingForm;