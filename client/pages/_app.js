import { useEffect } from 'react'
import '@/styles/global.scss'
import '@/styles/form.scss'
import '@/styles/header.scss'
import DefaultLayout from '@/components/layout/default-layout'
//  3. 最外(上)元件階層包裹提供者元件，讓⽗⺟元件可以提供它:
import { ThemeProvider } from '@/hooks/use-theme'
import { AuthProvider } from '@/hooks/use-auth'
import { CartProvider } from '@/context/cartcontext'
import { UserProvider } from '@/context/UserContext'
// loading
// import { LoaderProvider } from '@/hooks/use-loader'
import { CatLoader, NoLoader, NikeLoader } from '@/hooks/use-loader/components'
// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import 'bootstrap/dist/css/bootstrap.min.css'

library.add(fab, fas, far)

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  // const getLayout = Component.getLayout || ((page) => page)

  useEffect(() => {
    // 要document物件出現後才能導入 bootstrap的js函式庫
    import('bootstrap/dist/js/bootstrap')
  }, [])

  // 使用預設排版檔案
  // 對應`components/layout/default-layout/index.js`
  const getLayout =
    Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>)

  return  (
    <UserProvider>
    {/* <LoaderProvider close={3} CustomLoader={NikeLoader}> */}
      <CartProvider>
        {getLayout(<Component {...pageProps} />)}
      </CartProvider>
      {/* </LoaderProvider> */}
    </UserProvider>
  );
  // <UserProvider><Component {...pageProps} /></UserProvider>;
}
// require('dotenv').config({ path: './.config.env' });

// const cors = require('cors');
// const express = require('express');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');

// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

// const app = express();

// app.use(cors());
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // Add database connection
// require('./connections');

// module.exports = app;
