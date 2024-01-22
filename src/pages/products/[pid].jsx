import RootLayout from '@/components/RootLayout';
import { useRouter } from 'next/router';
import React from 'react';

const SingleProducts = () => {
    const router = useRouter();
    const { pid } = router.query;
    return (
        <div>
            { pid }
        </div>
    );
};

export default SingleProducts;

SingleProducts.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};