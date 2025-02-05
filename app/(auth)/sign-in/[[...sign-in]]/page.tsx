// 'use client'

// import * as Clerk from '@clerk/elements/common';
// import * as SignIn from '@clerk/elements/sign-in';
// import SpotlightCard from '@/components/cards/SpotlightCard';
// import { parsePhoneNumberFromString, CountryCode, getCountries, getCountryCallingCode } from 'libphonenumber-js';
// import React, { useState, ChangeEvent, ReactElement } from 'react';
// import { ChevronDown } from 'lucide-react';

// interface CountryOption {
//   code: CountryCode;
//   flag: string;
//   dialCode: string;
// }

// export default function SignInPage(): ReactElement {
//   const [identifier, setIdentifier] = useState<string>('');
//   const [selectedCountry, setSelectedCountry] = useState<CountryOption>({
//     code: 'IN',
//     flag: '🇮🇳',
//     dialCode: '91'
//   });
//   const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
//   const [inputType, setInputType] = useState<'email' | 'phone'>('email');

//   const countryOptions: CountryOption[] = getCountries().map(country => ({
//     code: country as CountryCode,
//     flag: getFlagEmoji(country),
//     dialCode: getCountryCallingCode(country as CountryCode)
//   }));

//   function getFlagEmoji(countryCode: string): string {
//     const codePoints = countryCode
//       .toUpperCase()
//       .split('')
//       .map(char => 127397 + char.charCodeAt(0));
//     return String.fromCodePoint(...codePoints);
//   }

//   const formatPhoneNumber = (phoneNumber: string): string => {
//     const cleanNumber = phoneNumber.replace(/\D/g, '').replace(/^0+/, '');
//     const parsedNumber = parsePhoneNumberFromString(`+${selectedCountry.dialCode}${cleanNumber}`, selectedCountry.code);
    
//     if (parsedNumber?.isValid()) {
//       return parsedNumber.format('E.164'); 
//     }
//     return `+${selectedCountry.dialCode}${cleanNumber}`;
//   };
  
//   const handleIdentifierChange = (e: ChangeEvent<HTMLInputElement>): void => {
//     const value = e.target.value;
//     if (value.match(/^[0-9\s-()]+$/)) {
//       setInputType('phone');
//       const formattedNumber = formatPhoneNumber(value);
//       setIdentifier(formattedNumber);
//     } else {
//       setInputType('email');
//       setIdentifier(value);
//     }
//   };

//   const handleCountrySelect = (country: CountryOption): void => {
//     setSelectedCountry(country);
//     setIsCountryDropdownOpen(false);
//     setIdentifier('');
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black p-4">
//       <SpotlightCard 
//         spotlightColor="rgba(111, 45, 168, 0.4)"
//         className="w-96"
//       >
//         <SignIn.Root>
//           <SignIn.Step
//             name="start"
//             className="py-10 px-8 space-y-6"
//           >
//             <div className="space-y-2 text-center">
//               <h2 className="text-xl font-semibold text-white">Sign in to RecipeThreads</h2>
//               <p className="text-sm text-gray-400">Welcome back! Please sign in to continue</p>
//             </div>
            
//             <div className="grid grid-cols-2 gap-x-4">
//               <Clerk.Connection
//                 name="google"
//                 className="flex items-center gap-x-3 justify-center font-medium border border-gray-700 hover:bg-gray-800 transition-colors text-white py-2 px-4 rounded-lg"
//               >
//                 <Clerk.Icon className="size-4" />
//                 Google
//               </Clerk.Connection>
              
//               <Clerk.Connection
//                 name="facebook"
//                 className="flex items-center gap-x-3 justify-center font-medium border border-gray-700 hover:bg-gray-800 transition-colors text-white py-2 px-4 rounded-lg"
//               >
//                 <Clerk.Icon className="size-4" />
//                 Facebook
//               </Clerk.Connection>
//             </div>

//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-700"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-neutral-900 text-gray-400">or</span>
//               </div>
//             </div>

//             <Clerk.Field name="identifier" className="space-y-2">
//               <Clerk.Label className="text-sm font-medium text-gray-300">
//                 Email address or phone number
//               </Clerk.Label>
//               <div className="flex relative">
//                 {inputType === 'phone' && (
//                   <button
//                     type="button"
//                     className="flex items-center gap-x-1 bg-neutral-800 border-gray-700 text-white rounded-l-lg py-2 px-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                     onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
//                   >
//                     <span className="text-lg">{selectedCountry.flag}</span>
//                     <span className="text-sm">+{selectedCountry.dialCode}</span>
//                     <ChevronDown className="h-4 w-4" />
//                   </button>
//                 )}
                
//                 {isCountryDropdownOpen && (
//                   <div className="absolute top-full left-0 mt-1 w-64 max-h-60 overflow-y-auto bg-neutral-800 border border-gray-700 rounded-lg shadow-lg z-50">
//                     {countryOptions.map((country) => (
//                       <button
//                         key={country.code}
//                         className="flex items-center gap-x-2 w-full px-4 py-2 hover:bg-neutral-700 text-white text-left"
//                         onClick={() => handleCountrySelect(country)}
//                       >
//                         <span className="text-lg">{country.flag}</span>
//                         <span className="text-sm">+{country.dialCode}</span>
//                       </button>
//                     ))}
//                   </div>
//                 )}
                
//                 <Clerk.Input 
//                   className={`${inputType === 'phone' ? 'rounded-r-lg' : 'rounded-lg'} flex-1 bg-neutral-800 border-gray-700 text-white py-2 px-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
//                   placeholder="Enter email or phone number"
//                   value={identifier}
//                   onChange={handleIdentifierChange}
//                 />
//               </div>
//               <Clerk.FieldError className="text-red-400 text-sm" />
//             </Clerk.Field>

//             <SignIn.Action 
//               submit 
//               className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg py-2 px-4 transition-colors"
//             >
//               Continue
//             </SignIn.Action>

//             <p className="text-center text-sm text-gray-400">
//               Don't have an account?{' '}
//               <a href="/sign-up" className="text-purple-400 hover:text-purple-300">Sign up</a>
//             </p>
//           </SignIn.Step>

//           <SignIn.Step name="verifications" className="py-10 px-8 space-y-6">
//             <Clerk.Field name="code" className="space-y-2">
//               <Clerk.Label className="text-sm font-medium text-gray-300">
//                 Enter the OTP sent to your phone
//               </Clerk.Label>
//               <Clerk.Input 
//                 className="w-full bg-neutral-800 border-gray-700 text-white rounded-lg py-2 px-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
//                 placeholder="Enter OTP"
//               />
//               <Clerk.FieldError className="text-red-400 text-sm" />
//             </Clerk.Field>
            
//             <SignIn.Action 
//               submit 
//               className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg py-2 px-4 transition-colors"
//             >
//               Verify OTP
//             </SignIn.Action>
//           </SignIn.Step>
//         </SignIn.Root>
//       </SpotlightCard>
//     </div>
//   );
// }

import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return <SignIn />
}