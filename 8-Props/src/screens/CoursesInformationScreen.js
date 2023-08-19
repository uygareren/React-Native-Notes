import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Information from '../../components/Information'

export default function CoursesInformationScreen() {
  return (
    <ScrollView>
        <Information
        title= "Angular"
        imageSource = {require('../../assets/angular.jpg')}
        desc = 'Angular Eğitimi'
        />
        <Information
        title= "Bootstrap"
        imageSource = {require('../../assets/bootstrap5.png')}
        desc = 'Bootstrap 5 Eğitimi'
        />
        <Information
        title= "C Programlama"
        imageSource = {require('../../assets/c.png')}
        desc = 'C Eğitimi'
        />
    </ScrollView>
  )
}

const styles = StyleSheet.create({})