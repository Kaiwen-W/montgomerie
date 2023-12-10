import Link from 'next/link';

export default function Custom404() {
  return (
    <main>
      <h1>404 - That page does not exist...</h1>
      <iframe src="https://giphy.com/embed/nu8afydwOkzgqLjerc" width="480" height="454" class="giphy-embed" allowFullScreen></iframe>
      <Link href="/">
        <button className="btn-blue">Go home</button>
      </Link>
    </main>
  );
}