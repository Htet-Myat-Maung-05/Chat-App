// chat-app/app/index.tsx

import { Redirect } from 'expo-router';
// သင်ရဲ့ Auth Status ကို စစ်ဆေးဖို့ Logic တစ်ခုခု (ဥပမာ- Context သို့မဟုတ် State) ကို ဤနေရာတွင် ထားပါ။

// ဥပမာ - User ဝင်ထားခြင်း ရှိ/မရှိ ကို စစ်ဆေးသော Variable
const isUserLoggedIn = false; // စမ်းသပ်ရန် false ထားပါ

export default function Index() {
  if (isUserLoggedIn) {
    // အကယ်၍ User ဝင်ထားပြီးပါက Tabs Group ကို redirect လုပ်ပါ။
    // (tabs) group ရဲ့ default screen က (tabs)/index.tsx ဖြစ်ပါတယ်။
    return <Redirect href="/(tabs)" />;
  }

  // အကယ်၍ User ဝင်မထားသေးပါက Login Page ကို redirect လုပ်ပါ။
  // သင်ရဲ့ Login Page Route နာမည်မှာ "login/login" ဖြစ်ပါတယ်။
  return <Redirect href="/login" />;
}