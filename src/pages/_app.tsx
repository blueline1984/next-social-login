import type { AppProps } from "next/app";
import { SessionProvider, useSession } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}

function Auth({ children }: any) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });

  //loading 상태 한번에 처리
  if (status === "loading") {
    return <div style={{ backgroundColor: "yellowgreen" }}>Loading...</div>;
  }

  return children;
}
