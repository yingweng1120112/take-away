import { useState, useContext, createContext, useEffect } from 'react';
import { useRouter } from 'next/router';

const LoaderContext = createContext(null);

export function delay(ms) {
  return function (x) {
    return new Promise((resolve) => setTimeout(() => resolve(x), ms));
  };
}

export function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const LoaderProvider = ({
  children,
  close = 2,
  global = false,
  CustomLoader = DefaultLoader,
}) => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleChangeStart = () => {
      if (global) {
        setShow(true);
      }
    };

    const handleChangeEnd = () => {
      console.log("Route change ended");
      if (close && global) {
        timeout(close * 1000).then(() => {
          console.log("Closing loader after timeout");
          setShow(false);
        });
      }
    };

    router.events.on('routeChangeStart', handleChangeStart);
    router.events.on('routeChangeComplete', handleChangeEnd);
    router.events.on('routeChangeError', handleChangeEnd);

    return () => {
      router.events.off('routeChangeStart', handleChangeStart);
      router.events.off('routeChangeComplete', handleChangeEnd);
      router.events.off('routeChangeError', handleChangeEnd);
    };
  }, [router.events, close, global]);

  return (
    <LoaderContext.Provider
      value={{
        showLoader: () => {
          setShow(true);
          if (close) {
            timeout(close * 1000).then(() => setShow(false));
          }
        },
        hideLoader: () => setShow(false),
        loading: show,
        delay,
        loader: () => <CustomLoader show={show} />,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error('useLoader must be used within LoadingProvider');
  }

  return context;
};
