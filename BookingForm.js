import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Modal, Pressable, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SelectList } from 'react-native-dropdown-select-list';


const BookingForm = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(null);
  const [showPickerDate, setShowPickerDate] = useState(false);
  const [NumPpl, setNumPpl] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [place, setPlace] = useState('');
  const [comment, setComment] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

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

    if(!phoneNumber.match(/^[0-9]{11}$/)){
      alert('Please input a valid Phone Number');
      isValid = false;
    };

    if(!date){
      alert('Please select a valid Date');
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

  const Validated = () => {
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Date:', date);
    console.log('Number of People:', NumPpl);
    console.log('Place:', place);
    console.log('Comment:', comment);
    setModalVisible(!modalVisible);
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

  const handleNumPpl = [
    {key:'2', value:'2'},
    {key:'3-5', value:'3-5'},
    {key:'6-10', value:'6-10'},
    {key:'11-15', value:'11-15'},
    {key:'15-20', value:'15-20'},
    {key:'20+', value:'20+'},
  ];
  
  const handlePlace = [
    {key:'QMC', value:'Quezon Memorial Circle'},
    {key:'AiI', value:'Art in Island'},
    {key:'LME', value:'La Mesa Ecopark'},
    {key:'SAC', value:'Smart Araneta Coliseum'},
    {key:'RMdSCdM', value:'Real Monasterio De Santa Clara de Manila'},
    {key:'SK', value:'Sining Kamalig'},
    {key:'MB', value:'Minor Basilica'},
    {key:'ASoM', value:'Archidiocesan Shrine of Mary'},
    {key:'SDC', value:'Santo Domingo Church'},
    {key:'TSG', value:'The Sunken Garden'},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topSpaceContainer}></View>
        <Text style={styles.header}>Tourista Booking Form</Text>
        <Text style={styles.caption}>Let's know what you are interested to see!</Text>
        <View style={styles.spacing}></View>
          <View style={styles.form}>
            <View style={styles.nameRow}>
              <View style={styles.nameInputContainer}>
                <Text style={styles.label}>First Name:</Text>
                <TextInput style={styles.input} value={firstName} onChangeText={setFirstName} placeholder='Elon' placeholderTextColor="#11182744" />
              </View>
              <View style={styles.nameInputContainer}>
                <Text style={styles.label}>Last Name:</Text>
                <TextInput style={styles.input} value={lastName} onChangeText={setLastName} placeholder='Musk' placeholderTextColor="#11182744" />
              </View>
            </View>
            <View style={styles.nameRow}>
              <View style={styles.nameInputContainer}>
                <Text style={styles.label}>Email:</Text>
                <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder='elonmusk@company.com' placeholderTextColor="#11182744"/>
              </View>
              <View style={styles.nameInputContainer}>
                <Text style={styles.label}>Phone Number:</Text>
                <TextInput style={styles.input} value={phoneNumber} onChangeText={setphoneNumber} placeholder='09123456789' placeholderTextColor="#11182744"/>
              </View>
            </View>

            <Text style={styles.label}>Date of arrival:</Text>
            {showPickerDate && (<DateTimePicker mode='date' display='spinner' value={new Date()} onChange={onChangeDate} minimumDate={new Date()}/>)}
            {!showPickerDate && (<Pressable onPress={toggleDatePicker}><TextInput style={styles.dateInput} placeholder='Sat Aug 21 2024' value={date} onChangeText={setDate} placeholderTextColor="#11182744" editable={false} /></Pressable>)}

            <Text style={styles.label}>Number of People:</Text>
            <SelectList style={styles.input} data={handleNumPpl} setSelected={setNumPpl}/>

            <Text style={styles.label}>Place to go:</Text>
            <SelectList style={styles.input} data={handlePlace} setSelected={setPlace}/>

            <Text style={styles.label}>Anything we should know?</Text>
            <TextInput style={[styles.input, styles.multilineText]} placeholder='Write a message' multiline={true} numberOfLines={4} maxLength={100} onChangeText={text => setComment(text)} value={comment} placeholderTextColor="#11182744"/>

            <View style={styles.bottomSpaceContainer}></View>

            <TouchableOpacity style={styles.submitButton} onPress={(handleBookingForm)}><Text style={styles.submitButtonText}>Submit</Text></TouchableOpacity>

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
        </View>
      );
    };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
    height: 20
  },
  multilineText:{
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#40E0D0',
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
    backgroundColor: '#A7C7E7',
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