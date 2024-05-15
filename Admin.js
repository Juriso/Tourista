import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Alert, TouchableOpacity } from 'react-native';
import { getFirestore, collection, getDocs, query, where, orderBy, limit, doc, deleteDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import { SelectList } from 'react-native-dropdown-select-list';

const Admin = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [latestBookings, setLatestBookings] = useState([]);
  const [latestDate, setLatestDate] = useState('');

  useEffect(() => {
    fetchLatestBookings();
  }, []);

  useEffect(() => {
    if (selectedDate) {
      fetchBookingsByDate(selectedDate);
    } else {
      setBookings([]);
    }
  }, [selectedDate]);

  useEffect(() => {
    fetchLatestBookings();
  }, [bookings]);

  const fetchLatestBookings = async () => {
    const q = query(collection(db, 'bookings'), orderBy('date', 'desc'), limit(10));
    const querySnapshot = await getDocs(q);
    const bookingsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setLatestBookings(bookingsData);
    setLatestDate(bookingsData[0]?.date || '');
  };

  const fetchBookingsByDate = async (date) => {
    const q = query(collection(db, 'bookings'), where('date', '==', date));
    const querySnapshot = await getDocs(q);
    const bookingsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setBookings(bookingsData);
  };

  const handleDateSelect = (value) => {
    setSelectedDate(value);
  };

  const handleDelete = async (id, date) => {
    Alert.alert(
      'Delete Booking',
      `Are you sure you want to delete the booking on ${date}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            try {
              await deleteDoc(doc(db, 'bookings', id));
              setBookings(bookings.filter((booking) => booking.id !== id));
              fetchLatestBookings();
            } catch (error) {
              console.error(error);
            }
          },
        },
      ],
    );
  };

  const getDates = (bookings) => {
    const dates = [
      { key: 'all', value: 'All Dates' },
      ...bookings.reduce((acc, booking) => {
        if (!acc.some((date) => date.value === booking.date)) {
          acc.push({ key: booking.date, value: booking.date });
        }
        return acc;
      }, []),
    ].sort((a, b) => {
      if (a.value === 'All Dates') {
        return -1;
      }
      if (b.value === 'All Dates') {
        return 1;
      }
      return new Date(b.value) - new Date(a.value);
    }).reverse();
    return dates;
  };

  const renderBooking = ({ item }) => {
    return (
      <View style={styles.bookingContainer}>
        <Text style={styles.bookingTitle}>ID:</Text>
        <TextInput
          style={styles.bookingText}
          value={item.id}
          editable={false}
        />
        <View style={styles.rowContainer}>
          <View style={styles.columnContainer}>
            <Text style={styles.bookingTitle}>First Name:</Text>
            <TextInput
              style={styles.bookingText}
              value={item.firstName}
              editable={false}
            />
          </View>
          <View style={styles.columnContainer}>
            <Text style={styles.bookingTitle}>Last Name:</Text>
            <TextInput
              style={styles.bookingText}
              value={item.lastName}
              editable={false}
            />
          </View>
        </View>
        <Text style={styles.bookingTitle}>Email:</Text>
        <TextInput
          style={styles.bookingText}
          value={item.email}
          editable={false}
        />
        <View style={styles.rowContainer}>
          <View style={styles.columnContainer}>
            <Text style={styles.bookingTitle}>Date:</Text>
            <TextInput
              style={styles.bookingText}
              value={item.date}
              editable={false}
            />
          </View>
          <View style={styles.columnContainer}>
            <Text style={styles.bookingTitle}>Time:</Text>
            <TextInput
              style={styles.bookingText}
              value={item.time}
              editable={false}
            />
          </View>
        </View>
        <Text style={styles.bookingTitle}>Phone Number:</Text>
        <TextInput
          style={styles.bookingText}
          value={item.phoneNumber}
          editable={false}
        />
        <Text style={styles.bookingTitle}>Number of People:</Text>
        <TextInput
          style={styles.bookingText}
          value={item.NumPpl}
          editable={false}
        />
        <Text style={styles.bookingTitle}>Place:</Text>
        <TextInput
          style={styles.bookingText}
          value={item.place}
          editable={false}
        />
        <Text style={styles.bookingTitle}>Comment:</Text>
        <TextInput
          style={styles.bookingText}
          value={item.comment}
          editable={false}
        />
        <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item.id, item.date)}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#007AFF',
      marginBottom: 20,
    },
    bookingContainer: {
      marginBottom: 20,
    },
    bookingText: {
      fontSize: 16,
      color: '#000',
      marginBottom: 5,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 8,
      paddingHorizontal: 8,
      paddingVertical: 4,
    },
    dropdown: {
      height: 50,
      width: '100%',
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 8,
      marginBottom: 20,
    },
    dropdownInput: {
      fontSize: 16,
    },
    dropdownContainer: {
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    dropdownText: {
      fontSize: 16,
    },
    bookingTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000',
      marginBottom: 5,
    },
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    columnContainer: {
      flex: 1,
      marginRight: 10,
    },
    deleteButton: {
      backgroundColor: 'red',
      padding: 10,
      borderRadius: 8,
      marginTop: 10,
    },
    deleteButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Booking Management</Text>
      <SelectList
        data={getDates(latestBookings)}
        setSelected={handleDateSelect}
        placeholder="Select Date"
        style={styles.dropdown}
        inputStyles={styles.dropdownInput}
        dropdownStyles={styles.dropdownContainer}
        dropdownTextStyles={styles.dropdownText}
      />
      <FlatList
        data={bookings}
        renderItem={renderBooking}
        keyExtractor={(item) => item.id}
        keyboardShouldPersistTaps="always"
      />
    </View>
  );
};

export default Admin;