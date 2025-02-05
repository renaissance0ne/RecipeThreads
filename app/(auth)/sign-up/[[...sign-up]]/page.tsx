// 'use client'

// import * as Clerk from '@clerk/elements/common';
// import * as SignUp from '@clerk/elements/sign-up';
// import SpotlightCard from '@/components/cards/SpotlightCard';
// import { parsePhoneNumberFromString, CountryCode, getCountries, getCountryCallingCode } from 'libphonenumber-js';
// import React, { useState, ChangeEvent, ReactElement } from 'react';
// import { ChevronDown } from 'lucide-react';

// interface CountryOption {
//   code: CountryCode;
//   flag: string;
//   dialCode: string;
// }

// export default function SignUpPage(): ReactElement {
//   const [email, setEmail] = useState<string>('');
//   const [nationalNumber, setNationalNumber] = useState<string>('');
//   const [e164Number, setE164Number] = useState<string>('');
//   const [isValid, setIsValid] = useState<boolean>(false);
//   const [selectedCountry, setSelectedCountry] = useState<CountryOption>({
//     code: 'IN',
//     flag: '🇮🇳',
//     dialCode: '91'
//   });
//   const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

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

//   const handleNationalNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     const cleaned = value.replace(/\D/g, '');
    
//     const phoneNumber = parsePhoneNumberFromString(
//       `+${selectedCountry.dialCode}${cleaned}`,
//       selectedCountry.code
//     );

//     if (phoneNumber) {
//       setNationalNumber(phoneNumber.formatNational());
//       setE164Number(phoneNumber.format('E.164'));
//       setIsValid(phoneNumber.isValid());
//     } else {
//       setNationalNumber(cleaned);
//       setE164Number(`+${selectedCountry.dialCode}${cleaned}`);
//       setIsValid(false);
//     }
//   };

//   const handleCountrySelect = (country: CountryOption): void => {
//     setSelectedCountry(country);
//     setIsCountryDropdownOpen(false);
    
//     if (nationalNumber) {
//       const phoneNumber = parsePhoneNumberFromString(
//         `+${country.dialCode}${nationalNumber.replace(/\D/g, '')}`,
//         country.code
//       );

//       if (phoneNumber) {
//         setNationalNumber(phoneNumber.formatNational());
//         setE164Number(phoneNumber.format('E.164'));
//         setIsValid(phoneNumber.isValid());
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black p-4">
//       <SpotlightCard 
//         spotlightColor="rgba(111, 45, 168, 0.4)"
//         className="w-96"
//       >
//         <SignUp.Root>
//           <SignUp.Step
//             name="start"
//             className="py-10 px-8 space-y-6"
//           >
//             <div className="space-y-2 text-center">
//               <h2 className="text-xl font-semibold text-white">Create an Account</h2>
//               <p className="text-sm text-gray-400">Join RecipeThreads today</p>
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

//             <Clerk.Field name="firstName" className="space-y-2">
//               <Clerk.Label className="text-sm font-medium text-gray-300">
//                 First name
//               </Clerk.Label>
//               <Clerk.Input 
//                 className="w-full bg-neutral-800 border-gray-700 text-white rounded-lg py-2 px-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                 placeholder="Enter your first name"
//               />
//               <Clerk.FieldError className="text-red-400 text-sm" />
//             </Clerk.Field>

//             <Clerk.Field name="lastName" className="space-y-2">
//               <Clerk.Label className="text-sm font-medium text-gray-300">
//                 Last name
//               </Clerk.Label>
//               <Clerk.Input 
//                 className="w-full bg-neutral-800 border-gray-700 text-white rounded-lg py-2 px-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                 placeholder="Enter your last name"
//               />
//               <Clerk.FieldError className="text-red-400 text-sm" />
//             </Clerk.Field>

//             <Clerk.Field name="emailAddress" className="space-y-2">
//               <Clerk.Label className="text-sm font-medium text-gray-300">
//                 Email address
//               </Clerk.Label>
//               <Clerk.Input 
//                 type="email"
//                 className="w-full bg-neutral-800 border-gray-700 text-white rounded-lg py-2 px-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <Clerk.FieldError className="text-red-400 text-sm" />
//             </Clerk.Field>

//             <Clerk.Field name="phoneNumber" className="space-y-2">
//               <Clerk.Label className="text-sm font-medium text-gray-300">
//                 Phone number
//               </Clerk.Label>
//               <div className="flex relative">
//                 <button
//                   type="button"
//                   className="flex items-center gap-x-1 bg-neutral-800 border-gray-700 text-white rounded-l-lg py-2 px-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                   onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
//                 >
//                   <span className="text-lg">{selectedCountry.flag}</span>
//                   <span className="text-sm">+{selectedCountry.dialCode}</span>
//                   <ChevronDown className="h-4 w-4" />
//                 </button>
                
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
                
//                 <input
//                   type="tel"
//                   className={`flex-1 bg-neutral-800 border-gray-700 text-white rounded-r-lg py-2 px-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
//                     nationalNumber && !isValid ? 'border-red-500' : ''
//                   }`}
//                   placeholder="Enter phone number"
//                   value={nationalNumber}
//                   onChange={handleNationalNumberChange}
//                 />
//                 <Clerk.Input
//                   type="hidden"
//                   value={isValid ? e164Number : ''}
//                 />
//               </div>
//               {nationalNumber && !isValid && (
//                 <p className="text-red-400 text-sm">Please enter a valid phone number</p>
//               )}
//               <Clerk.FieldError className="text-red-400 text-sm" />
//             </Clerk.Field>

//             <Clerk.Field name="password" className="space-y-2">
//               <Clerk.Label className="text-sm font-medium text-gray-300">
//                 Password
//               </Clerk.Label>
//               <Clerk.Input 
//                 type="password"
//                 className="w-full bg-neutral-800 border-gray-700 text-white rounded-lg py-2 px-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                 placeholder="Create a password"
//               />
//               <Clerk.FieldError className="text-red-400 text-sm" />
//             </Clerk.Field>

//             <div id="clerk-captcha" className="mt-4" />

//             <SignUp.Action 
//               submit 
//               className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg py-2 px-4 transition-colors"
//             >
//               Create Account
//             </SignUp.Action>

//             <p className="text-center text-sm text-gray-400">
//               Already have an account?{' '}
//               <a href="/sign-in" className="text-purple-400 hover:text-purple-300">Sign in</a>
//             </p>
//           </SignUp.Step>

//           <SignUp.Step name="verifications" className="py-10 px-8 space-y-6">
//   <Clerk.Field name="code" className="space-y-2">
//     <Clerk.Label className="text-sm font-medium text-gray-300">
//       Enter verification code
//     </Clerk.Label>
//     <Clerk.Input 
//       className="w-full bg-neutral-800 border-gray-700 text-white rounded-lg py-2 px-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
//       placeholder="Enter code"
//     />
//     <Clerk.FieldError className="text-red-400 text-sm" />
//   </Clerk.Field>
  
//   <SignUp.Action 
//     submit 
//     className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg py-2 px-4 transition-colors"
//   >
//     Verify
//   </SignUp.Action>
// </SignUp.Step>
//         </SignUp.Root>
//       </SpotlightCard>
//     </div>
//   );
// }

import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return <SignUp />
}