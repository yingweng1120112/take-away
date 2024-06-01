import { useEffect } from 'react';
import { useLoader } from '@/hooks/use-loader';

export default function DefaultLayout({ children }) {
  // const { loader } = useLoader();

  return (
    <>
      {/* <Header /> */}
      <main>
        {children}
        {/* {loader()} */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
