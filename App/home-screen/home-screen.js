import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView, Image, TouchableOpacity } from 'react-native';
import HomeScreenStyle from './home-screen-style';
import AddPersonalInfo from '../component/AddPersonalInfo';
import FocusAwareStatusBar from '../component/focus-aware-statusbar';

const Header = () => {
    return (
        <View>

            <View style={HomeScreenStyle.headerView}>
                {/* <Text style={HomeScreenStyle.headerText}>{`About Me`}</Text> */}
            </View>
            <View style={HomeScreenStyle.profilePhoto}>
                <Image
                    source={require('../../images/profile.png')}
                    style={HomeScreenStyle.profileLogo}
                />
            </View>
        </View>
    );
}

const MainHeading = (heading) => {
    return (
        <Text style={HomeScreenStyle.mainHeading}>{heading}</Text>
    );
}


const AddEducationalDetails = (instituteName, course, result, timePeriod) => {
    return (
        <View style={HomeScreenStyle.educationSubView}>
            <Text style={HomeScreenStyle.instituteName}>{instituteName + ` / ` + course}</Text>
            <Text style={HomeScreenStyle.InformationText}>{result}</Text>
            <Text style={HomeScreenStyle.InformationText}>{timePeriod}</Text>
        </View>
    );
}

const AddTechnologies = (typeOfTechnology, technologies) => {
    let techArray = technologies.split(',');
    let myloop = [];
    for (let i = 0; i < techArray.length; i++) {
        myloop.push(
            <Text key={i}>{i + 1 + ` . ` + techArray[i]}</Text>
        );
    }
    return (
        <View style={HomeScreenStyle.subViewTechnology}>
            <Text style={HomeScreenStyle.headingTechnology}>{typeOfTechnology}</Text>
            <View style={HomeScreenStyle.technologyList}>
                {myloop}
            </View>
        </View>
    );
}


const HomeScreen = ({ navigation }) => {
    const [variable, setVariable] = useState();
    const [variable1, setVariable1] = useState();
    const customButton = (buttonText) => {
        return (
            <TouchableOpacity
                style={HomeScreenStyle.button}
                onPress={() => navigation.navigate('UserDetails')}>
                <Text style={HomeScreenStyle.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
        );
    }

    // call as ComponentDidMount
    useEffect(() => {

        return () => { }  // call as ComponentDidUnmount
    }, [])

    // call as ComponentDidUpdate on specific variable update
    useEffect(() => {
        setVariable(1);
    }, [variable, variable1])

    // call as ComponentDidUpdate on every variable update
    useEffect(() => {

    })

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#0000ff' }}>
            {/* <StatusBar barStyle="light-content" /> */}
            <FocusAwareStatusBar barStyle="light-content" />
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                {/* <CustomHeader title="Home" /> */}
                {Header()}

                <ScrollView style={HomeScreenStyle.scrollView}>

                    {/* Basic Info. Name. Degree and Location */}
                    <View >
                        <View style={HomeScreenStyle.profileData}>
                            <Text style={HomeScreenStyle.profileDataName}>{`Madhav Nasit`}</Text>
                            <Text style={HomeScreenStyle.profileDataContactText}>{`Computer Engineer`}</Text>
                            <Text style={HomeScreenStyle.profileDataContactText}>{`Rajkot, Gujarat`}</Text>
                        </View>
                    </View>

                    {/* Personal Information View */}
                    <View style={HomeScreenStyle.mainView}>
                        {MainHeading('Personal Information')}
                        <View style={HomeScreenStyle.personalInfoData}>
                            <AddPersonalInfo
                                subHeading={"D.O.B"}
                                information={`29/03/1999`}
                            // onUpdateCounter={(value,index)=>setVariable1(value)}
                            />
                            {/* {AddPersonalInformation(`D.O.B`, `29/03/1999`)}
                        {AddPersonalInformation(`Cont`, `9876543210`)}
                        {AddPersonalInformation(`Email`, `madhavnasit29@gmail.com`)}
                        {AddPersonalInformation(`Nationality`, `Indian`)}
                        {AddPersonalInformation(`Primary Language`, `Gujarati`)}
                        {AddPersonalInformation(`Known Languages`, `English, Hindi, Gujarati`)}
                        {AddPersonalInformation(`Marital Status`, `Unmarriedd`)} */}
                        </View>
                    </View>

                    {/* Education details View */}
                    <View style={HomeScreenStyle.mainView}>
                        {MainHeading('Education')}
                        <View style={HomeScreenStyle.personalInfoData}>
                            {AddEducationalDetails(`Government Engineering College, Rajkot`, `B.E`, `Result : 8.93 CGPA`, `July 2016 - June 2020`)}
                            {AddEducationalDetails(`Modi Schools, Rajkot`, `H.S.C`, `Result : 96.60 PR`, `May 2014 - March 2016`)}
                            {AddEducationalDetails(`Modi Schools, Rajkot`, `S.S.C`, `Result : 99.63 PR`, `May 2013 - March 2014`)}
                        </View>
                    </View>

                    {/* Know Technology View */}
                    <View style={HomeScreenStyle.mainView}>
                        {MainHeading('Known Technologies')}
                        <View style={HomeScreenStyle.personalInfoData}>
                            {AddTechnologies('Backend Technology', `C#,.Net MVC,.Net Core,.Net Core Web API`)}
                            {AddTechnologies('Frontend Technology', `HTML,CSS,Bootstrap,React Native`)}
                        </View>
                    </View>

                </ScrollView>

                {customButton(`Contact Me`)}
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;