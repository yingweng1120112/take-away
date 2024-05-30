import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axiosInstance from '@/services/axios-instance';
import jwtDecode from 'jwt-decode'; // 确保引入 jwtDecode 库
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';
import Image from 'next/image';

export default function Order() {
  const [userID, setUserID] = useState('');
  const router = useRouter();
  const [result, setResult] = useState({
    returnCode: '',
    returnMessage: '',
  });

  const [order, setOrder] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [price1, setPrice1] = useState(100);
  const [quantity1, setQuantity1] = useState(1);

  const [price2, setPrice2] = useState(100);
  const [quantity2, setQuantity2] = useState(2);

  // 从 localStorage 获取 token 并解析
  useEffect(() => {
    // 确保只在客户端访问 localStorage
    if (typeof window !== 'undefined') {
      const userId = localStorage.getItem('userKey'); // 获取 localStorage 中的 userKey (token)
      console.log('userKey from localStorage:', userId); // 添加日志

      if (userId) {
        try {
          const user = jwtDecode(userId); // 解析 token
          console.log('Decoded user:', user); // 添加日志
          if (user && user.user_id) {
            setUserID(user.user_id); // 获取 token 中的 user_id 并设置到 state 中
            console.log('User ID set:', user.user_id); // 添加日志
          } else {
            console.error('Decoded token does not contain user_id');
          }
        } catch (error) {
          console.error('Failed to decode token:', error);
        }
      } else {
        console.log('No userKey found in localStorage');
      }
    }
  }, []); // 空数组依赖项确保只在组件挂载时运行一次
  const goLinePay = () => {
    if (window.confirm('确认要导向至LINE Pay进行付款?')) {
      window.location.href = `http://localhost:3005/api/line-pay/reserve?orderId=${order.orderId}`;
    }
  };

  const createOrder = async () => {
    const token = localStorage.getItem('userKey');
    if (!token) {
      toast.error('用户未登录，无法创建订单');
      return;
    }
  
    try {
      const res = await axiosInstance.post('/line-pay/create-order', {
        amount: quantity1 * price1 + quantity2 * price2,
        products: [
          {
            id: 1,
            name: '测试商品1',
            quantity: quantity1,
            price: price1,
          },
          {
            id: 2,
            name: '测试商品2',
            quantity: quantity2,
            price: price2,
          },
        ],
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      console.log(res.data);
  
      if (res.data.status === 'success') {
        setOrder(res.data.data.order);
        toast.success('已成功建立订单');
      } else {
        toast.error(`创建订单失败: ${res.data.message}`);
      }
    } catch (error) {
      console.error('创建订单失败:', error);
      toast.error('创建订单失败');
    }
  };
  

  const handleConfirm = async (transactionId) => {
    const res = await axiosInstance.get(
      `/line-pay/confirm?transactionId=${transactionId}`
    );

    console.log(res.data);

    if (res.data.status === 'success') {
      toast.success('付款成功');
    } else {
      toast.error('付款失败');
    }

    if (res.data.data) {
      setResult(res.data.data);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (router.isReady) {
      console.log(router.query);
      const { transactionId, orderId } = router.query;

      if (!transactionId || !orderId) {
        setIsLoading(false);
        return;
      }

      handleConfirm(transactionId);
    }
  }, [router.isReady]);

  const orderDisplay = (
    <>
      <h2>购买商品清单</h2>
      <div>
        id=1/名称=测试商品1
        <br />
        数量:
        <input
          type="number"
          name="quantity1"
          value={quantity1 === 0 ? '' : quantity1}
          onChange={(e) => {
            setQuantity1(Number(e.target.value));
          }}
        />
        单价:
        <input
          type="number"
          name="price1"
          value={price1 === 0 ? '' : price1}
          onChange={(e) => {
            setPrice1(Number(e.target.value));
          }}
        />
        <br />
        小计: {quantity1 * price1}
      </div>
      <hr />
      <div>
        id=2/名称=测试商品2
        <br />
        数量:
        <input
          type="number"
          name="quantity2"
          value={quantity2 === 0 ? '' : quantity2}
          onChange={(e) => {
            setQuantity2(Number(e.target.value));
          }}
        />
        单价:
        <input
          type="number"
          name="price2"
          value={price2 === 0 ? '' : price2}
          onChange={(e) => {
            setPrice2(Number(e.target.value));
          }}
        />
        <br />
        小计: {quantity2 * price2}
      </div>
      <br />
      总价: {quantity1 * price1 + quantity2 * price2}
      <br />
      <button onClick={createOrder}>产生订单</button>
      <br />
      <Image
        alt=""
        src="/line-pay/LINE-Pay(h)_W85_n.png"
        width={85}
        height={25}
      />
      <button
        onClick={goLinePay}
        disabled={!order.orderId}
      >
        前往付款
      </button>
      <hr />
      <h5>订单明细记录</h5>
      <p>订单JSON结构，packages id与order id由服务器产生。</p>
      <p>{JSON.stringify(order)}</p>
    </>
  );

  const confirmOrder = (
    <>
      <h2>最后付款确认结果(returnCode=0000 代表成功): </h2>
      <p>{JSON.stringify(result)}</p>
      <p>
        <button
          onClick={() => {
            window.location.href = '/test/line-pay/order';
          }}
        >
          重新测试
        </button>
      </p>
    </>
  );

  if (isLoading) {
    return (
      <>
        <p>与服务器连线同步中...</p>
      </>
    );
  }

  return (
    <>
      <h1>Line Pay测试</h1>
      <p>
        会员登录状态(需登录才能进行交易): {userID ? '已登录' : '未登录'}
      </p>
      <p>
        <Link href="/user">连至会员登录页面</Link>
      </p>
      {result.returnCode ? confirmOrder : orderDisplay}
      <Toaster />
    </>
  );
}
