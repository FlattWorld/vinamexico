"use client"

import { useState } from 'react';
import { LanguageContext } from '@/utils/contexts';
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header/Header'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [language, languageSet] = useState('ES');
  return (
    <div lang="en">
      <LanguageContext.Provider value={language}>
      <Header lang={language} langChange={languageSet} />
        {children}
      <Footer />
      </LanguageContext.Provider>
   
    </div>
  )
}
