/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { React, useState } from 'react';
import type { Node } from 'react';
import {
    SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Dimensions, Image, Button, TouchableOpacity, TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons'
import Iconfa from 'react-native-vector-icons/FontAwesome'


import Topbar from '../Components/Topbar.js'

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */



const App: () => Node = ({ navigation }) => {

    const back = () => {
        navigation.push('Home')
    }

    const [data, setData] = useState([
        {
            Heading: 'Authority to Proceed ',
            Content: 'The final document that you will need to sign before settlement is the authority to Proceed. this is your final okl to your settlement agent that you are satisfied with your final inspection and with all of the conditions on your Offer & Acceptance , and are ready to settle the property.'
        },

        {
            Heading: 'Building Inspection Report (also Known as Structural Report)',
            Content: 'A report Conducted by a suitably qualified person,which outlines the current state of the building. this will include any structural defects with the property. but may also outline any structural defects with the property, but may also outline any maintenance or items of a more minor nature.'
        },
        {
            Heading: 'Certificate of title',
            Content: 'the official land ownership record,and is held and managed by Landgate.it contains the current ownership details, the volume and folio number, the Survey plan number and type, any documents numbers for encumbrances and notifications and also tells you wheather there is a caveat on the property.'
        },
        {
            Heading: 'Conditional offer',
            Content: "This is an offer a buyer makes to purchase a property, That is subject to one or more special Conditions,Such as obtaining finance apprval or recieving a satisfactory building inspection report, When a conditional offer is made by the buyer and accepted by the seller, the property is considered 'Under Offer'. Generally, a property that is Subject to a conditional offer cannot be sold to anyone else (unless the conditions explicity authorise this). "

        },
        {
            Heading: 'Contract of Sale',
            Content: "The written agreement between the buyer 7 Sller outlining the conditions of the sale of the property, including the purchase price, the settlement date and any other special conditions that the buyer & seller have agreed upon.(Same as offer & Acceptance)."

        },
        {
            Heading: 'Conveyancer',
            Content: "A property professional who attends to the transfer of legal ownership of a property. your conveyancer will ensure that you meet all of your legal obligations under the contract and that your rights are protected during the settlement process. they will guide you through the process and answer any questions that you have along the way. "

        },
        {
            Heading: 'Deposite',
            Content: "Money paid by the buyer Immediately or shortly after a contract is accepted. The amount of the deposite that is required to be paid is determined by the amount agreed upon in the Offer & Acceptance."

        },
        {
            Heading: 'Discharge Authority',
            Content: "A form that the seller is required to complete and provide to their lender in order to remove the existing mortgage on the property. Depending on the complexity of the seller's loan structure(e.g. if they have multiple properties or are guarantors for other loans). the seller should ensure they allow at least 14-28 days for their lender to process the Discharge Authority and be ready with the Discharge of Mortgage."

        },
        {
            Heading: 'Discharge of Mortgage',
            Content: "If the seller has a mortgage on the property, the bank will be required to discharge that mortgage at settlement so that the buyer can obtain clear title to the property. The bank will discharge the mortgage in exchange for the agreed amount to repay the loan."

        },
        ,
        {
            Heading: 'Due Diligence Condition',
            Content: "A condition which a buyer may request to include in an Offer & Acceptance that allows them to undertake a variety pf searches on the property and to terminate the contact as result of recieving any adverse result. it may cover a wide range if things such as surveys, Soil tests,Council Searches,asbestos checks and any ither matter that the buyer considers relevant."

        },
        {
            Heading: 'Final Inspection',
            Content: "The inspection that is conducted by the buyer within five days prior to the Settlement Date. This is the buyer's opportunity to check that hte seller has compiled with all of their requirements under the contact and that the property is in the same state & condition as when the Offer & Acceptance was entered into."

        },
        {
            Heading: 'Finance Approval',
            Content: "Confirmation from a lender (such as a bank of financial institution) that the buyer's application for finance has been approved for the purchase. if the applicaiton still requires things such as a valuation or income verification, this is considered as 'conditional finance approval'. if the approval is only subject to the lender's standard terms and conditions. this is considered an 'unconditional finance approval'. if the approval is only subject to the lender's standard terms and conditions, this is considered an 'unconditional finance approval'."

        },
        ,
        {
            Heading: 'ID Check',
            Content: "An ID check that is completed by the conveyancer as part of the settlement process to ensure that each person is who ther claim to be. Settlement cannot proceed until all buyers & sellers have been successfully identified ny their respective conveyancers. The most common way that a conveyancer completes a Verificaiton of identity is by meeting with their client face-to-face and sighting certain original ID dicuments. VOI is designed to reduce the opportunity for successful land title fraud as a result of identity theft or other improper dealings."

        },
        {
            Heading: 'Instructions',
            Content: "Once you nominate a conveyancer, the real estate agent will instruct your conveyancer, the reak estate agent will instruct your conveyancer, by sending them a copy of the offer & Acceptance and any other relevant documents. Once they recieve instructions, your conveyancer will open their file and commence working on your settlement."

        },
        {
            Heading: 'Loan Documents',
            Content: "Once your loan us approved by the lender, there will be additional paperwork for you to sign, including the mortgage document. Once the loan documents have been signed & returned to your bank, the bank will process them and make themselves ready for settlement. It is important to return the paperwork quickly (at least 10 days prior to settlement)."

        },
        ,
        {
            Heading: 'Mortagage',
            Content: "An agreement to repay a loan with interest, over a certain time, by the owner of the property to the mortgage is generally registered against the Certificate of Title to secure the mortagagee's interest in the property."

        },
        {
            Heading: 'Offer & Acceptance',
            Content: "The written agreement between the buyer & seller outlining the conditions of the sale of the property, including the purchase price, the settlement date and any other special conditions that the buyer & seller have agreed upon."

        },
        {
            Heading: 'Settlement',
            Content: "Settlement is the process of tranferring the property ownership from the seller to the buyer, and the associated exchange of money(the sale price). Your settlement agent (also known as a conveyancer) will organise all of the paperwork and guide you through thesettlement process."

        },
        ,
        {
            Heading: 'Settlement Agent',
            Content: "A property professional who attends to the transfer of legal ownership of a property. Your conveyancer will ensure that you meet all of your legal obligations under the contract and that your rights are protected durong the settlement process. they will guide you through the process and answer any questions that you have along the way."

        },
        {
            Heading: 'Settlement booking',
            Content: "A date and time will be specified for settlement to take place. This is when the buyer & seller's respective conveyancers and lenders meet (usually virtually, occasionally physically) to complete the exchange of funds and transfer of legal ownership of the property initially, a tentative booking is made and as each party becomes ready for settlement,they will confirm their acceptance of the settlement booking. Once all parties are ready for settlement, the booking will be confirmed."

        },
        {
            Heading: 'Settlement Date',
            Content: "The date specified in the Offer & Acceptance that the buyer & seller must complete settlement. This date cannot be changed unless both parties agree. In the event that one party is not able to meet the due date and an agreement cannot be reached for a new date, that party may be charged penalty interest for their delay."

        },
        ,
        {
            Heading: 'Settlement day',
            Content: "The day that the exchange of money and the tranfer of the legal ownership of the property actually takes place. Once you get confirmation from your conveyancer that settlement has been completed, this is when congratulations are in order and you can pop the bubbly!"

        },
        {
            Heading: 'Settlement Documents',
            Content: "Various documents that the buyer & seller are required to sign as part of the settlement process. Some are legal documents,such as the Appointment of Settlement Agent, the Transfer of Land and the Client Authorisation form. Others simply form part of the administrative process of settlement, and include things such as the buyer & seller identifying the certificate of Title for the property in question and the buyer acknowledging any encumbrances such as Restrictive Convenants and Notifications which are registered against the property."

        },
        {
            Heading: 'Settlement Statement',
            Content: "The document that outlines the sale or purchase price and any additions or deductions. The seller's settlement statement will allow for the real estate agent's commission, the settlement fees and an appointment for the seller's share of rates and taxes and shows the balance due to the seller at settlement (including any payout for the discharge of mortgage). the buyer's settlement statement will allow for the deposite, the Transfer Duty & settlement fees, an appointment for the buyer's share of rates and texes and any funds being contributed by the buyer's lender from their mortgage. It will then show the balance (if any) that is payable by the buyer to the conveyancer's trust account to complete settlement."

        },
        ,
        {
            Heading: 'Special Condition',
            Content: "Additional terms that form part of the offer & Acceptance, which the buyer & seller have agreed upon. These can require a specific action to occure (such as a building Inspection or specific maintenance that is required prior to settlement) or may simply be an acknowledgement by the parties (such as the property being affected by an existing tenancy agreement."

        },
        {
            Heading: 'Structural Report',
            Content: "A report conducted by a suitably qualified person, which outlines the current state of the building. This will include any structural defects with the property, but may also outlines any maintenance or items of a more minor nature."

        },
        {
            Heading: 'Subject Sale',
            Content: "If a buyer needs to sell another property in order to purchase a new one,they may make an offer to purchase a new one, they may make an offer to purchase that is 'Subject to Sale' of theie existing home. the subject sale property will go through the same process of being under offer and then unconditional once all the relevant conditions have been mat. Usually,the property settlement and the subject sale property settlement will happen on the same day."

        },
        ,
        {
            Heading: 'Termite Inspection Report (also known as Timber Pest Inspection Report) ',
            Content: "A report conducted by a suitably qualified person, which assesses wheather the property is affected by timber pests such as termites."

        },
        {
            Heading: 'Trust Account',
            Content: "A bank account operated by your conveyancer which they use for holding money that does not belongs to them or their business, such as client funds and deposites. there are very strict laws about operating a trust account and failure to comply by the conveyancer can result in hefty penalties and even loss of their Settlement Agent Licnce."

        },
        {
            Heading: 'Uncondiitional',
            Content: "Once finance has been approved and all of the special conditions of your Offer & Acceptance have been satisfied, the sale goes from being 'under offer' to being 'unconditional'. this is when you can stick that 'sold' sticker on your 'for sale' sign! Your settlement agent will confirm the settlement Date that the buyer & seller are now working towards."

        },
        ,
        {
            Heading: 'Valuation',
            Content: "A valuation is completed by the lender and is an assessment of the property's value for mortagage purposes (That is, it is likely the lender's valuation may differ from the real estate agent's appraisal). it is used by the lender to determine the loan-to-value ratio in a home loan application and will impact the amount that a bank is willing to lend."

        },
        {
            Heading: 'Verificaiton of Identity (also known as VOI)',
            Content: "An ID check that is completed by the conveyancer as part of the settlement process to ensure that each person is who ther claim to be. Settlement cannot proceed until all buyers & sellers have been successfully identified ny their respective conveyancers. The most common way that a conveyancer completes a Verificaiton of identity is by meeting with their client face-to-face and sighting certain original ID dicuments. VOI is designed to reduce the opportunity for successful land title fraud as a result of identity theft or other improper dealings."

        },

    ])

    return (

        <View style={styles.Container}>

            <Topbar title={"Glossary"} mb={40} onPress={back} />
            <View style={styles.HeaderBox}>

                <Image source={require('../images/Artboard4.png')} style={styles.Img1} />
                <View style={styles.HeaderText}>
                    <Text style={styles.HeaderText1}>
                        {
                            `This  list  explains  any  words  or 
document  names  you encounter 
during   the   property   settlement 
process that may be unfamiliar to 
you.`
                        }
                    </Text>
                </View>
            </View>
            <ScrollView style={{ height: 1000 }}>
                <View style={styles.SearchBox}>
                    <Icon style={styles.SearchIcon} name="search" size={20} color="#000" />
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Search for..."
                        onChangeText={(searchString) => { this.setState({ searchString }) }}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={styles.SearchBox1}>
                </View>
                <View>

                    {data.map((value) => (
                        <View style={styles.Box1}>
                            <TouchableOpacity>
                                <Text style={styles.BoxText1}>{value.Heading}</Text>
                                <Text style={styles.BoxText2}>{value.Content}</Text></TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View >

    );
};

const styles = StyleSheet.create({
    Container: {
        height: '100%'
    },
    BoxText2: {
        fontSize: 13,
        color: '#585858',
        padding: 10,
        top: -5
    },
    BoxText1: {
        fontWeight: 'bold',
        fontSize: 15,
        padding: 6,
        top: 5,
        left: 5
    },
    Box1: {
        top: 40,
        backgroundColor: 'white',
        elevation: 5,
        marginHorizontal: 15,
        height: 'auto',
        borderRadius: 10,
        marginBottom: 10
    },
    SearchIcon: {
        padding: 10,
        backgroundColor: "white",
        color: "grey"
    },
    HeaderText1: {
        fontFamily: 'MontserratRegular',
        fontSize: 14,
        textAlign: 'justify',
        color: "#ffffff"
    },
    HeaderText: {
        alignSelf: "flex-end",
        width: "60%",
        height: "80%",
    },
    Img1: {
        resizeMode: 'stretch',
        height: 100,
        width: 100,
        position: "absolute",
        top: 5,
        left: 20
    },
    HeaderBox: {
        backgroundColor: "#133459",
        height: 140,
        justifyContent: "flex-start",
        justifyContent: "center"
    },

    SearchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        width: Dimensions.get('window').width * 0.92,
        alignSelf: "center",
        elevation: 5,
        borderRadius: 5,
        backgroundColor: "white",
        height: 50,
        top: 20
    },
    TextInput: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: 'white',
        color: '#424242',
        height: 40
    },
})

export default App;












