import React, { useState, useCallback, useMemo } from 'react';
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
import {
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

import { useCreateAsset, useUpdateAsset } from '@livepeer/react';
import { useDropzone } from 'react-dropzone';

import UpdateAsset from './UpdateAsset';
 
export default function CreateNewLectureForm() {
  const [video, setVideo] = useState();
  const [vidInput, setVidInput] = useState();

  const {
    mutate: createAsset,
    data: asset,
    status: createStatus,
    progress,
    error: createError,
  } = useCreateAsset({
    sources: video ? [{ name: video.name, file: video }] : undefined,
    mutationConfig: {
      onSuccess: (res) => {
        console.log('res', res)
      }
    }
  });

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
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
        <Navbar />
        <Grid h="100vh" templateColumns={'repeat(12, 1fr)'} gap={4}>
          <GridItem
            rowSpan={1}
            colStart={3}
            colEnd={11}
            borderLeft={'1px solid black'}
            borderRight={'1px solid black'}
          >
            <Flex p="4" flexDir={'column'}>
              <Heading p="2">Upload a pre-recorded lecture</Heading>
              <form>
                <FormControl p="4">
                  <FormLabel>Title</FormLabel>
                  <Input type="title" border={'1px solid black'} />
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

                <Button
                  onClick={() => {
                    createAsset();
                  }}
                  size="lg"
                  disabled={!createAsset || createStatus === 'loading'}
                >
                  Upload
                </Button>
                {updateStatus === "success" && <Text>CID: {UpdateAsset.storage.ipfs.cid}</Text>}
                {
                  asset?.[0]?.id && <UpdateAsset key={asset?.[0]?.id} asset={asset?.id} onUpdate={setUpdateStatus} />
                }
              </form>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
}
