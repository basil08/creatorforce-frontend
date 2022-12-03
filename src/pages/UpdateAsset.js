import { useCreateAsset, useUpdateAsset } from '@livepeer/react';
import { useEffect } from 'react';

export default function UpdateAsset({ assetId, onUpdate}) {
    const { mutate: updateAsset, status: updateStatus } = useUpdateAsset({
        assetId,
        storage: {
            ipfs: true
        }
    });

    useEffect(() => {
        updateAsset()
    }, [assetId]);

    useEffect(() => {
        onUpdate(updateStatus)
    }, [updateStatus]);
    return <></>
}