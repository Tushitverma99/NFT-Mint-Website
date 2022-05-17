import {useState} from 'react';
import {ethers, BigNumber} from 'ethers';
import roboPunksNFT from './RoboPunksNFT.json';
import {Box, Button, Flex, Image, Link, Spacer, Text, Input} from '@chakra-ui/react';

const roboPunksNFTAddress = "0xe28f9F5813434803F9CA6AaadDEE3e4889C4f25f";

const MainMint = ({accounts, setAccounts}) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                roboPunksNFTAddress,
                roboPunksNFT.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
                });
                console.log('response:', response);

            } catch(err){
                console.log("error:", err)
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };
    const handleIncrement = () => {
        if (mintAmount >= 3) return;
        setMintAmount(mintAmount + 1);
    };
    return(
        <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
            <Box width="520px">
            <Text fontSize='48px' textShadow="0 5px #000000"> RoboPunks </Text>
            <Text fontSize='30px' letterSpacing="-5%" fontFamily="VT323" textShadow="0 2px 2px #000000"> 
            It's 2098. Can the Robopunks NFT save humans from destructive rampants
            NFT speculation? Mint RoboPunks to find out!
             </Text>
            {isConnected ? (
                <div>
                    <Flex justify="center" align="center">
                        <Button 
                             backgroundColor="#D6517D"
                             borderRadius="5px"
                             boxShadow="0px 2px 2px 1px #0F0F0F"
                             color="white"
                             cursor="pointer"
                             fontFamily= "inherit"
                             padding= "15px"
                             marginTop= "10px"
                             onClick={handleDecrement}>
                                 -
                             
                             </Button>
                        <Input
                        readOnly
                        fontFamily= "inherit"
                        width="100px"
                        height="40px"
                        textAlign="center"
                        paddingLeft="19px"
                        marginTop="10px"
                        type="number"
                        fontSize="50px"
                        value=  {mintAmount}  />

                        <Button 
                             backgroundColor="#D6517D"
                             borderRadius="5px"
                             boxShadow="0px 2px 2px 1px #0F0F0F"
                             color="white"
                             cursor="pointer"
                             fontFamily= "inherit"
                             padding= "15px"
                             marginTop= "10px"
                             onClick={handleIncrement}>
                                 +
                             
                             </Button>
                    </Flex>
                    <Button 
                             backgroundColor="#D6517D"
                             borderRadius="5px"
                             boxShadow="0px 2px 2px 1px #0F0F0F"
                             color="white"
                             cursor="pointer"
                             fontFamily= "inherit"
                             padding= "10px"
                             paddingBottom= "0px"
                             paddingTop= "0px"
                             marginTop= "20px" 
                             onClick={handleMint}> <Text fontSize='30px' color='white'> MINT NOW  </Text></Button>
                    </div>
            ) : (
                <p> You Must Be Connected To Mint</p>
            )}
        </Box>
        </Flex>
    )
};

export default MainMint;