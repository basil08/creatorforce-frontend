import React, { useState, useCallback, useMemo, useEffect } from 'react';
import {
  Flex,
  Textarea,
  Text,
  GridItem,
  Grid,
  Heading,
  Button,
} from '@chakra-ui/react';
import Navbar from '../components/navbar';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

import { ethers } from 'ethers';

import { useCreateAsset } from '@livepeer/react';
import { useDropzone } from 'react-dropzone';

import UpdateAsset from './UpdateAsset';

export default function CreateNewLectureForm() {
  const [video, setVideo] = useState();
  const [vidInput, setVidInput] = useState();

  // account states

  // account address
  const [currentAccount, setCurrentAccount] = useState('');
  const [shouldConnect, setShouldConnect] = useState(true);
  const [balance, setBalance] = useState('');
  const [chainId, setChainId] = useState();
  const [chainname, setChainName] = useState('');
  const [contractAddress, setContractAddress] = useState('');
  const [signer, setSigner] = useState();

  useEffect(() => {
    if (!currentAccount || !ethers.utils.isAddress(currentAccount)) return;

    if (!window.ethereum) return; // no metamask

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    provider.getBalance(currentAccount).then(result => {
      setBalance(ethers.utils.formatEther(result));
    });
    provider.getNetwork().then(result => {
      setChainId(result.chainId);
      setChainName(result.name);
    });
  }, [currentAccount]);

  const onClickConnect = async () => {
    if (!window.ethereum) {
      console.log('Please install Metamask');
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();
    setSigner(signer);


    const accounts = await provider.send('eth_requestAccounts', []);

    if (accounts.error) console.log(accounts.error);

    if (accounts.length > 0) setCurrentAccount(accounts[0]);

    setShouldConnect(false);

    const abi = [
      {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'courseid',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'tokenid',
            type: 'uint256',
          },
        ],
        name: 'associateNft',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'courseid',
            type: 'uint256',
          },
        ],
        name: 'buycourse',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'startTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'endTime',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'title',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'desc',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'cid',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'nftaddress',
            type: 'uint256',
          },
        ],
        name: 'createLive',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: 'title',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'desc',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'numLectures',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'title',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'description',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'cid',
                type: 'string',
              },
            ],
            internalType: 'struct main.Lecture[]',
            name: 'lectures',
            type: 'tuple[]',
          },
          {
            internalType: 'uint256',
            name: 'nftaddress',
            type: 'uint256',
          },
        ],
        name: 'createRecorded',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        name: 'creatornft',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256[]',
            name: 'nftlist',
            type: 'uint256[]',
          },
        ],
        name: 'fetchCourseCreator',
        outputs: [
          {
            internalType: 'uint256[]',
            name: '',
            type: 'uint256[]',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256[]',
            name: 'nftlist',
            type: 'uint256[]',
          },
        ],
        name: 'fetchCourseUser',
        outputs: [
          {
            internalType: 'uint256[]',
            name: '',
            type: 'uint256[]',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'liveCourseId',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        name: 'livecourses',
        outputs: [
          {
            internalType: 'uint256',
            name: 'start_time',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'end_time',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'title',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'description',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'cid',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'recordedCourseId',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        name: 'recordedcourses',
        outputs: [
          {
            internalType: 'string',
            name: 'title',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'description',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'numLectures',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        name: 'usernft',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
    ];

    const addr = '0x0d1c44e837A8dE7E0b930AdfE43eeb39841D7e30';
    // const contract = new ethers.Contract(addr, abi, signer);

    // console.log(contract);
    // setContract(contract);
    // setContractAddress(contract.address);
    // const value = await contract.deployed();
    // setDeployed(value);
  };

  const onClickDisconnect = () => {
    console.log('onClickDisconnect');
    setBalance(undefined);
    setCurrentAccount(undefined);
    setShouldConnect(true);
  };

  const {
    mutate: createAsset,
    data: asset,
    status: createStatus,
    progress,
    error: createError,
  } = useCreateAsset({
    sources: video ? [{ name: video.name, file: video }] : undefined,
    mutationConfig: {
      onSuccess: res => {
        console.log('res', res);
        // we know that video upload was successful to the livepeer network
      },
    },
  });

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  const [updateStatus, setUpdateStatus] = useState(null);

  const onDrop = useCallback(async acceptedFiles => {
    if (acceptedFiles && acceptedFiles.length > 0 && acceptedFiles?.[0]) {
      setVideo(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'video/*': ['.mp4'],
    },
    maxFiles: 1,
    onDrop,
  });

  const progressFormatted = useMemo(
    () =>
      progress?.[0].phase === 'failed'
        ? 'Failed to process video.'
        : progress?.[0].phase === 'waiting'
        ? 'Waiting'
        : progress?.[0].phase === 'uploading'
        ? `Uploading: ${Math.round(progress?.[0]?.progress * 100)}%`
        : progress?.[0].phase === 'processing'
        ? `Processing: ${Math.round(progress?.[0].progress * 100)}%`
        : null,
    [progress]
  );

  const handleInputChange = e => {
    setDescription(e.target.value);
  };

  return (
    <Flex height="fit-content" minHeight="100vh">
      <Flex flexDir="column" width={'100%'}>
        <Navbar
          onClickConnect={onClickConnect}
          onClickDisconnect={onClickDisconnect}
          shouldConnect={currentAccount === undefined}
          walletAddress={currentAccount}
        />
        <Grid h="100vh" templateColumns={'repeat(12, 1fr)'} gap={4}>
          <GridItem
            rowSpan={1}
            colStart={3}
            colEnd={11}
            borderLeft={'1px solid black'}
            borderRight={'1px solid black'}
          >
            <Flex p="4" flexDir={'column'}>
              <Text>Contract Address: {contractAddress}</Text>

              <Heading p="2">Upload a pre-recorded lecture</Heading>
              <form>
                <FormControl p="4">
                  <FormLabel>Title</FormLabel>
                  <Input
                    type="title"
                    border={'1px solid black'}
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </FormControl>
                <FormControl p="4">
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    value={description}
                    onChange={handleInputChange}
                    placeholder="Describe your lesson."
                    size="sm"
                  />
                </FormControl>
                <FormControl p="4">
                  <FormLabel>Price (MATIC)</FormLabel>
                  <Input
                    type="text"
                    border={'1px solid black'}
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                  />
                </FormControl>

                <FormControl p="2">
                  <FormLabel>Upload .mp4 file</FormLabel>

                  <Flex {...getRootProps()}>
                    <Input
                      type="file"
                      onChange={e => {
                        if (e.target.files) {
                          setVideo(e.target.files[0]);
                        }
                      }}
                    ></Input>
                    <Flex>
                      <Text>Drag and drop or browse files</Text>
                    </Flex>
                  </Flex>

                  {createError?.message && <Text>{createError.message}</Text>}

                  {video ? (
                    <Flex as="span">{video.name}</Flex>
                  ) : (
                    <Text>Select a video file to upload.</Text>
                  )}
                  {progressFormatted && <Text>{progressFormatted}</Text>}
                </FormControl>

                <Flex flexDir="column" m="4">
                  <Button
                    m="4"
                    onClick={() => {
                      createAsset();
                    }}
                    size="lg"
                    disabled={!createAsset || createStatus === 'loading'}
                  >
                    Upload to network
                  </Button>

                  <Button m="4" onClick={async () => {
                    console.log("click!");
                    const abi = [
                      {
                        inputs: [],
                        stateMutability: 'nonpayable',
                        type: 'constructor',
                      },
                      {
                        inputs: [
                          {
                            internalType: 'uint256',
                            name: 'courseid',
                            type: 'uint256',
                          },
                          {
                            internalType: 'uint256',
                            name: 'tokenid',
                            type: 'uint256',
                          },
                        ],
                        name: 'associateNft',
                        outputs: [],
                        stateMutability: 'nonpayable',
                        type: 'function',
                      },
                      {
                        inputs: [
                          {
                            internalType: 'uint256',
                            name: 'courseid',
                            type: 'uint256',
                          },
                        ],
                        name: 'buycourse',
                        outputs: [
                          {
                            internalType: 'bool',
                            name: '',
                            type: 'bool',
                          },
                        ],
                        stateMutability: 'payable',
                        type: 'function',
                      },
                      {
                        inputs: [
                          {
                            internalType: 'uint256',
                            name: 'startTime',
                            type: 'uint256',
                          },
                          {
                            internalType: 'uint256',
                            name: 'endTime',
                            type: 'uint256',
                          },
                          {
                            internalType: 'string',
                            name: 'title',
                            type: 'string',
                          },
                          {
                            internalType: 'string',
                            name: 'desc',
                            type: 'string',
                          },
                          {
                            internalType: 'string',
                            name: 'cid',
                            type: 'string',
                          },
                          {
                            internalType: 'uint256',
                            name: 'price',
                            type: 'uint256',
                          },
                          {
                            internalType: 'uint256',
                            name: 'nftaddress',
                            type: 'uint256',
                          },
                        ],
                        name: 'createLive',
                        outputs: [],
                        stateMutability: 'nonpayable',
                        type: 'function',
                      },
                      {
                        inputs: [
                          {
                            internalType: 'string',
                            name: 'title',
                            type: 'string',
                          },
                          {
                            internalType: 'string',
                            name: 'desc',
                            type: 'string',
                          },
                          {
                            internalType: 'uint256',
                            name: 'numLectures',
                            type: 'uint256',
                          },
                          {
                            internalType: 'uint256',
                            name: 'price',
                            type: 'uint256',
                          },
                          {
                            components: [
                              {
                                internalType: 'string',
                                name: 'title',
                                type: 'string',
                              },
                              {
                                internalType: 'string',
                                name: 'description',
                                type: 'string',
                              },
                              {
                                internalType: 'string',
                                name: 'cid',
                                type: 'string',
                              },
                            ],
                            internalType: 'struct main.Lecture[]',
                            name: 'lectures',
                            type: 'tuple[]',
                          },
                          {
                            internalType: 'uint256',
                            name: 'nftaddress',
                            type: 'uint256',
                          },
                        ],
                        name: 'createRecorded',
                        outputs: [],
                        stateMutability: 'nonpayable',
                        type: 'function',
                      },
                      {
                        inputs: [
                          {
                            internalType: 'uint256',
                            name: '',
                            type: 'uint256',
                          },
                        ],
                        name: 'creatornft',
                        outputs: [
                          {
                            internalType: 'uint256',
                            name: '',
                            type: 'uint256',
                          },
                        ],
                        stateMutability: 'view',
                        type: 'function',
                      },
                      {
                        inputs: [
                          {
                            internalType: 'uint256[]',
                            name: 'nftlist',
                            type: 'uint256[]',
                          },
                        ],
                        name: 'fetchCourseCreator',
                        outputs: [
                          {
                            internalType: 'uint256[]',
                            name: '',
                            type: 'uint256[]',
                          },
                        ],
                        stateMutability: 'nonpayable',
                        type: 'function',
                      },
                      {
                        inputs: [
                          {
                            internalType: 'uint256[]',
                            name: 'nftlist',
                            type: 'uint256[]',
                          },
                        ],
                        name: 'fetchCourseUser',
                        outputs: [
                          {
                            internalType: 'uint256[]',
                            name: '',
                            type: 'uint256[]',
                          },
                        ],
                        stateMutability: 'nonpayable',
                        type: 'function',
                      },
                      {
                        inputs: [],
                        name: 'liveCourseId',
                        outputs: [
                          {
                            internalType: 'uint256',
                            name: '',
                            type: 'uint256',
                          },
                        ],
                        stateMutability: 'view',
                        type: 'function',
                      },
                      {
                        inputs: [
                          {
                            internalType: 'uint256',
                            name: '',
                            type: 'uint256',
                          },
                        ],
                        name: 'livecourses',
                        outputs: [
                          {
                            internalType: 'uint256',
                            name: 'start_time',
                            type: 'uint256',
                          },
                          {
                            internalType: 'uint256',
                            name: 'end_time',
                            type: 'uint256',
                          },
                          {
                            internalType: 'string',
                            name: 'title',
                            type: 'string',
                          },
                          {
                            internalType: 'string',
                            name: 'description',
                            type: 'string',
                          },
                          {
                            internalType: 'string',
                            name: 'cid',
                            type: 'string',
                          },
                          {
                            internalType: 'uint256',
                            name: 'price',
                            type: 'uint256',
                          },
                        ],
                        stateMutability: 'view',
                        type: 'function',
                      },
                      {
                        inputs: [],
                        name: 'recordedCourseId',
                        outputs: [
                          {
                            internalType: 'uint256',
                            name: '',
                            type: 'uint256',
                          },
                        ],
                        stateMutability: 'view',
                        type: 'function',
                      },
                      {
                        inputs: [
                          {
                            internalType: 'uint256',
                            name: '',
                            type: 'uint256',
                          },
                        ],
                        name: 'recordedcourses',
                        outputs: [
                          {
                            internalType: 'string',
                            name: 'title',
                            type: 'string',
                          },
                          {
                            internalType: 'string',
                            name: 'description',
                            type: 'string',
                          },
                          {
                            internalType: 'uint256',
                            name: 'numLectures',
                            type: 'uint256',
                          },
                          {
                            internalType: 'uint256',
                            name: 'price',
                            type: 'uint256',
                          },
                        ],
                        stateMutability: 'view',
                        type: 'function',
                      },
                      {
                        inputs: [
                          {
                            internalType: 'uint256',
                            name: '',
                            type: 'uint256',
                          },
                        ],
                        name: 'usernft',
                        outputs: [
                          {
                            internalType: 'uint256',
                            name: '',
                            type: 'uint256',
                          },
                        ],
                        stateMutability: 'view',
                        type: 'function',
                      },
                    ];

                    const addr = '0x0d1c44e837A8dE7E0b930AdfE43eeb39841D7e30';
                    const contract = new ethers.Contract(addr, abi, signer);

                    console.log(contract);

                    const res = await contract.createRecorded(
                      name,
                      description,
                      1,
                      price,
                      [
                        {
                          title: name,
                          desc: description,
                          cid: "5202337c-6b62-4a40-9607-87e9c119494b"
                        }
                      ],
                      currentAccount
                    );

                    console.log(res);

                  }} bg="blue" color="white">
                    Create Transaction
                  </Button>
                </Flex>
                {updateStatus === 'success' && (
                  <Text>CID: {UpdateAsset.storage.ipfs.cid}</Text>
                )}
                {asset?.[0]?.id && (
                  <UpdateAsset
                    key={asset?.[0]?.id}
                    asset={asset?.id}
                    onUpdate={setUpdateStatus}
                  />
                )}
              </form>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
}
