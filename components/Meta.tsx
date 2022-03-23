import Head from 'next/head';

type IProps = {
  title: string;
  keywords: string;
  description: string;
};

const Meta = ({ title, keywords, description }: IProps) => {
  return (
    <Head>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="author" content="Phunbyt" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Frequently Asked Questions | Stand For Trees',
  keywords: 'Phunbyt, Phunbyt.com, Frequently Asked Questions, Stand For Trees',
  description: 'Frequently Asked Questions',
};

export default Meta;
