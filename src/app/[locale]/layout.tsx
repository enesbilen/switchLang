import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import './globals.css';

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
