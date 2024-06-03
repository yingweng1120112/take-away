// import React, { useState, useEffect, useContext } from 'react'
// // import { UserContext } from '@/context/UserContext';
// import Pageone from '@/components/adopt/adopt-from/page-one'
// import PageTwo from '@/components/adopt/adopt-from/page-two'
// import PageThree from './page-three'
// import { adoptInfos } from '@/services/pets'
// import { useRouter } from 'next/router'
// import Swal from 'sweetalert2'

// export default function AdoptForm(pet) {
//   const userName = {
//     10001: 'dana',
//     10002: '白賢祐',
//     10003: '洪海仁',
//     10004: '洪秀哲',
//     10005: '千多慧',
//     10006: '洪凡資',
//     10007: '全峰藹',
//     10008: '白斗關',
//     10009: '尹殷盛',
//     10010: '羅彩妍',
//     10011: '金陽基',
//   }
//   const [currentStep, setCurrentStep] = useState(1)

//   const [donateInfo, setDonateInfo] = useState({
//     pet_id: '',
//     donation_method: '定期定額',
//     amount: '',
//     customAmount: '',
//     payment: '銀行轉帳',
//   })

//   const [adopt, setAdopt] = useState({
//     // user_id: user ? user.id : '',
//     user_id: '',
//     email: '',
//     phone: '',
//     donation: '不指定',
//     donate_address: '電子郵件地址',
//   })

//   const [errors, setErrors] = useState({
//     user_id: '',
//     email: '',
//     phone: '',
//   })

//   const adoptPet = async (adopt_id) => {
//     const data = await adoptInfos(adopt_id)
//     console.log('info', data)

//     if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
//       setPet(data)
//       setTimeout(() => {
//         setIsLoading(false)
//       }, 1500)
//     }
//   }

//   const router = useRouter();
//   const { completedPayment } = router.query;
//   useEffect(() => {
//     if (completedPayment) {
//       setCurrentStep(2);  // Skip to step 2 if payment was completed
//     }
//   }, [completedPayment]);


//   const validatePageTwo = () => {
//     const newErrors = { user_id: '', email: '', phone: '' };
  
//     // User ID validation
//     if (!adopt.user_id || adopt.user_id.length < 2) {
//       newErrors.user_id = '預約人必須大於2個字';
//     }
//     const userId = Object.keys(userName).find(key => userName[key] === adopt.user_id);
//     if (!userId) {
//       Swal.fire({
//         icon: 'error',
//         html: `<h5>下一步失敗，尚未有預約人資料</h5>
//         <h5>請先註冊</h5>`,
//       });
//       window.scrollTo({ top: 400, behavior: 'smooth' })
//       return false;
//     }
  
//     // Email validation
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!adopt.email) {
//       newErrors.email = '電子郵件必填';
//     } else if (!emailPattern.test(adopt.email)) {
//       newErrors.email = '無效的電子郵件格式';
//     }
  
//     // Phone validation
//     const taiwanPhonePattern = /^09\d{8}$/;
//     if (!adopt.phone) {
//       newErrors.phone = '行動電話必填';
//     } else if (!taiwanPhonePattern.test(adopt.phone)) {
//       newErrors.phone = '無效的台灣手機格式';
//     }
  
//     setErrors(newErrors);
  
//     // Check if there are any errors
//     return !newErrors.user_id && !newErrors.email && !newErrors.phone;
//   };
//   const nextStep = (e) => {
//     e.preventDefault();
//     let finalAmount = donateInfo.amount;
//     if (!finalAmount && donateInfo.customAmount) {
//       finalAmount = donateInfo.customAmount;
//     }
//     localStorage.setItem('donateInfo', JSON.stringify(donateInfo));
    
//     if (currentStep === 1) {
//       if (!finalAmount) {
//         Swal.fire({
//           icon: 'error',
//           text: '請輸入金額',
//         })
//         window.scrollTo({ top: 400, behavior: 'smooth' });
//         return; // Stop if validation fails
//       }
//       // api/ec/?amount=500
  
//       const paymentUrl = `http://localhost:3005/api/ec/?amount=${finalAmount}&redirectUrl=${window.location.href}`;
//       if (donateInfo.payment === '銀行轉帳' || donateInfo.payment === '超商付款') {
//         window.location.href = paymentUrl;
//       } else {
//         localStorage.setItem('currentStep', currentStep + 1);
//         setCurrentStep(currentStep + 1); // 更新currentStep，使页面进入下一步
//       }
//     } else if (currentStep === 2) {
//       localStorage.setItem('currentStep', currentStep + 1);
//       setCurrentStep(currentStep + 1); // 更新currentStep，使页面进入下一步
//     }
//     // Add logic here if there are further steps or actions
//   };
  
//   useEffect(() => {
//     const storedStep = localStorage.getItem('currentStep');
//     if (storedStep) {
//       setCurrentStep(parseInt(storedStep));
//     }
//   }, []);

//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const storedStep = urlParams.get('step');
//     if (storedStep) {
//       setCurrentStep(parseInt(storedStep));
//     }
//   }, []);

// useEffect(() => {
//   if (completedPayment) {
//     currentStep += 1; // 调用nextStep函数，使页面进入下一步
//   }
// }, [completedPayment]);
//   const prevStep = () => {
//     setCurrentStep((prevStep) => prevStep - 1)
//     window.scrollTo({ top: 400, behavior: 'smooth' })
//   }

//   const handleChangeDonateInfo = (e) => {
//     const { name, value } = e.target
//     setDonateInfo({ ...donateInfo, amount: name === 'amount' ? value : donateInfo.amount, customAmount: '', [name]: value });
//   }
//   const handleAmount = (e) => {
//     const { value } = e.target;
//     // Only allow numerical input not exceeding 10000
//     if (/^\d*$/.test(value) && (value === '' || parseInt(value) <= 10000)) {
//       setDonateInfo({ ...donateInfo, customAmount: value, amount: '' });
//     } else if (parseInt(value) > 10000) {
//       Swal.fire({
//         icon: 'error',
//         title: '謝謝你的大筆捐款',
//         text: '金額不要超過 10000',
//       });
//     }
//   };

//   const handleChangeAdopt = (e) => {
//     const { name, value } = e.target
//     setAdopt({ ...adopt, [name]: value })
//   }

//   const handleSubmit = async (e) => {
  
//     let finalAmount = donateInfo.amount;
//     if (!finalAmount && donateInfo.customAmount) {
//       finalAmount = donateInfo.customAmount;
//     }

//     const userId = Object.keys(userName).find(key => userName[key] === adopt.user_id);
  
//     if (!userId) {
//       Swal.fire({
//         icon: 'error',
//         html: `<h5>送出失敗,預約人尚未註冊過</h5>`,
//       });
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//       return;
//     }
  
//     const finalDonateInfo = {
//       pet_id: pet.pet_id,
//       user_id: userId,
//       donation_method: donateInfo.donation_method,
//       amount: finalAmount,
//       payment: donateInfo.payment,
//       donation: adopt.donation,
//       donate_address: adopt.donate_address,
//     };
  
//     try {
//       const res = await fetch('http://localhost:3005/api/online_virtual_adoption_form', {
//         method: 'POST',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(finalDonateInfo),
//       });
  
//       if (!res.ok) {
//         throw new Error('Network response was not ok');
//       }
  
//       const data = await res.json();
//       Swal.fire({
//         title: '送出成功',
//         icon: 'success',
//       });
//       setDonateInfo({
//         pet_id: '',
//         donation_method: '定期定額',
//         amount: '',
//         customAmount: '',
//         payment: '銀行轉帳',
//       });
//       setAdopt({
//         user_id: '',
//         email: '',
//         phone: '',
//         donation: '不指定',
//         donate_address: '電子郵件地址',
//       });
//       setCurrentStep(1);
//       localStorage.setItem('currentStep', 1);
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//         // 清空 localStorage 中的 donateInfo 数据
//   localStorage.removeItem('donateInfo');
//     } catch (error) {
//       console.error('Error:', error);
//       Swal.fire({
//         icon: 'error',
//         html: `<h5>確認表格有無確實填寫</h5>`,
//       }).then(() => {
//         window.scrollTo({ top: 400, behavior: 'smooth' });
//       });
//     }
//   };

//   const handleConfirm = (e) => {
//     e.preventDefault();

//     let finalAmount = donateInfo.amount;
//     if (!finalAmount && donateInfo.customAmount) {
//       finalAmount = donateInfo.customAmount;
//     }
//     Swal.fire({
//       title: '確定要送出?',
//       html: `
//         <h5>${adopt.user_id} 想認養 ${donateInfo.pet_id}<h5><br>
//         <h5>捐款方式: ${donateInfo.donation_method}<h5><br>
//         <h5>金額: ${finalAmount}<h5><br>
//         <h5>捐贈用途: ${adopt.donation}<h5><br>
//         <h5>捐獻證明寄送至: ${adopt.donate_address}<h5>`,
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: '送出',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         handleSubmit();
//       }
//     });
//   };
//   return (
//     <div className="form1">
//       {currentStep === 1 && (
//         <form className="page-one">
//           <Pageone
//             name={pet.name}
//             donateInfo={donateInfo}
//             setDonateInfo={setDonateInfo}
//             handleChange={handleChangeDonateInfo}
//             handleAmount={handleAmount}
//             handleChangeAdopt={handleChangeAdopt}
//           />
//           <div className="button-group">
//             <button
//               type="button"
//               className="next-button donate-button page-one-button"
//               onClick={nextStep}
//             >
//               下一頁
//             </button>
//           </div>
//         </form>
//       )}

//       {currentStep === 2 && (
//         <form className="page-two">
//           <PageTwo
//             name={pet.name}
//             adopt={adopt}
//             setAdopt={setAdopt}
//             handleChange={handleChangeAdopt}
//             donateInfo={donateInfo}
//             errors={errors}
//             setErrors={setErrors}
//           />
//           <div className="button-group">
//             <button
//               type="button"
//               className="donate-button next-page-button"
//               onClick={prevStep}
//             >
//               上一頁
//             </button>
//             <button
//               type="submit"
//               className="donate-button next-page-button"
//               onClick={nextStep}
//             >
//               下一頁
//             </button>
//           </div>
//         </form>
//       )}
//       {currentStep === 3 && (
//         <form className="page-third">
//           <h4 className="page-title">捐贈資料</h4>
//           <div className="form-Input-group">
//             <h4 className="input-title">我想認養</h4>
//             <label className="form-label">
//               <input
//                 type="text"
//                 name="pet_id"
//                 className="form-input"
//                 placeholder="寵物"
//                 value={(donateInfo.pet_id = pet.name)}
//                 readOnly
//             disabled="disabled"

//               />
//               <span className="input-border"></span>
//             </label>
//             <h4 className="input-title">姓名</h4>
//             <label className="form-label">
//               <input
//                 type="text"
//                 name="user_id"
//                 className="form-input"
//                 placeholder="姓名"
//                 value={adopt.user_id || ''}
//                 readOnly
//             disabled="disabled"

//               />
//               <span className="input-border"></span>
//             </label>
//             <h4 className="input-title">行動電話</h4>
//             <label className="form-label">
//               <input
//                 type="text"
//                 name="phone"
//                 className="form-input"
//                 placeholder="行動電話"
//                 value={adopt.phone || ''}
//                 readOnly
//             disabled="disabled"

//               />
//               <span className="input-border"></span>
//             </label>
//             <h4 className="input-title">電子信箱</h4>
//             <label className="form-label">
//               <input
//                 type="text"
//                 name="email"
//                 className="form-input"
//                 placeholder="電子信箱"
//                 value={adopt.email || ''}
//                 readOnly
//             disabled="disabled"

//               />
//               <span className="input-border"></span>
//             </label>
//             <h4 className="input-title">捐款方式及金額</h4>
//             <label className="form-label">
//               <input
//                 type="text"
//                 name="donation_method"
//                 className="form-input"
//                 placeholder="捐贈方式"
//                 value={donateInfo.donation_method}
//                 readOnly
//             disabled="disabled"

//               />
//               <span className="input-border"></span>
//             </label>
//             <label className="form-label">
//               <input
//                 type="text"
//                 name="donationAmount"
//                 className="form-input"
//                 placeholder="捐贈金額"
//                 value={donateInfo.amount || donateInfo.customAmount}
//                 readOnly
//             disabled="disabled"

//               />
//               <span className="input-border"></span>
//             </label>
//             <h4 className="input-title">捐贈用途</h4>
//             <label className="form-label">
//               <input
//                 type="text"
//                 name="donationPurpose"
//                 className="form-input"
//                 placeholder="捐贈用途"
//                 value={adopt.donation}
//                 readOnly
//             disabled="disabled"

//               />
//               <span className="input-border"></span>
//             </label>
//             <h4 className="input-title">捐獻證明寄送</h4>
//             <label className="form-label">
//               <input
//                 type="text"
//                 name="address"
//                 className="form-input"
//                 placeholder="捐獻證明寄送"
//                 value={adopt.donate_address}
//                 readOnly
//             disabled="disabled"

//               />
//               <span className="input-border"></span>
//             </label>
//           </div>
//           <div className="thanks">
//             <h5 className="thanks-title">感謝認養</h5>
//             <div className="thanks-group">
//               <div className="thanks-img">
//                 <img
//                   src={`/img/pet-info/${pet.phone1}.jpg`}
//                   alt="Pet"
//                   className="img"
//                 />
//               </div>
//               <p className="thanks-group-p">謝謝乾爹乾媽</p>
//             </div>
//           </div>
//           <div className="button-group">
//             <button
//               type="button"
//               className="donate-button next-page-button"
//               onClick={prevStep}
//             >
//               上一頁
//             </button>
//             <button
//               type="submit"
//               className="button donate-button next-page-button"
//               onClick={(e) => handleConfirm(e)}
//             >
//               完成
//             </button>
//           </div>
//         </form>
//       )}
//     </div>
//   )
// }
