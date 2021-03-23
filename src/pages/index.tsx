import Head from 'next/head';

import { Base } from '../templates/Base';

export default function Index() {
  return (
    <Base>
      <Head>
        <title>Início | My App</title>
      </Head>
      Hello!
    </Base>
  );
}
