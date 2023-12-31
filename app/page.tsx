import Link from 'next/link'
 


export default function Page({ params }: { params: { slug: string } }) {
  return <Link href="/survival">This is Home. click to go to Survival</Link>
}