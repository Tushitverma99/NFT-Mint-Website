import {Box, Button, Flex, Image, Link, Spacer, Text} from '@chakra-ui/react';
import facebook from "./facebook_32x32.png";
import twitter from "./twitter_32x32.png";
import email from "./email_32x32.png";


import React from "react";

const NavBar = ({accounts, setAccounts}) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount(){
        if (window.ethereum){
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return(
        
        <Flex justify="space-between" align="center" padding="30px">
            {/* left side with social media icon */}
            
            <Flex justify="space-around" width="40%" padding="0 75px">
                 <Link href='https://facebook.com'>
                    <Image src={facebook} Boxsize="42px" margin="0 15px"/>
                 </Link>
            

            
                 <Link href='https://twitter.com'>
                    <Image src={twitter} Boxsize="42px" margin="0 15px"/>
                 </Link>
            

            
                 <Link href='https://gmail.com'>
                    <Image src={email} Boxsize="42px" margin="0 15px"/>
                 </Link>
            
                 </Flex>

            {/* right side */}

            <Flex justify="space-around" align = "center" width = "40%" padding = "30px">

                <Box margin="0 15px"> <Text fontSize='50px'> About </Text>   </Box>
                <Spacer/> 
                <Box margin="0 15px"><Text fontSize='50px'> Team </Text>   </Box>
                <Spacer/>
                <Box margin="0 15px"> <Text fontSize='50px'> Mint </Text>   </Box>
                <Spacer/>


                 {/* Connect */}

            {isConnected ?(
                <p><Text fontSize='50px' color='green'> Connected </Text></p>
            ): (
                <Button 
                backgroundColor="#D6517D"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                fontFamily= "inherit"
                padding= "3px"
                margin= "0 4px"
                onClick={connectAccount}>
                    <Text fontSize='50px'> Connect </Text>
                </Button>
            )}

                </Flex>
                
            </Flex>
    );



};

export default NavBar;
