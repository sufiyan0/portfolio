'use client'
import Image from 'next/image';
import img from '../../../public/logo2.webp'
import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
    Box,
} from '@chakra-ui/react';

function Hero() {
    return (

        <Box >

            <Container maxW={'6xl'} >
                <Stack
                    textAlign={'center'}
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 28 }}
                    
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}
                        textColor={'gray.800'}>
                        Prepare yourself for the Next Generation of Internet with {' '}
                        <Text as={'span'} color={'cyan.400'}>
                            Panaverse
                        </Text>
                    </Heading>
                    <Text color={'gray.300'} maxW={'6xl'}  
                    fontSize={{ base: 'lg', sm: 'md', md: 'lg' }}>
                        One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies
                    </Text>
                    <Stack spacing={6} direction={'row'}>
                        <Button
                            rounded={'full'}
                            px={6}
                            colorScheme={'cyan'}
                            bg={'cyan.300'}
                            _hover={{ bg: 'cyan.400' }}>
                            Register Now
                        </Button>
                        <Button rounded={'full'} px={6}>
                            More Info
                        </Button>
                    </Stack>
                    <Flex w={'full'} mx={'auto'} display={'Flex'} alignItems={'center'} justifyContent={'center'}>
                        <Image src={img} alt='hero img' className='mx-auto' ></Image>
                    </Flex>
                </Stack>
            </Container>
        </Box>
    );
}


export default Hero;

