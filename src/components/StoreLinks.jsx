import Link from "next/link";


export function StoreLinks() {
  return (
    <div className="btn-container flex flex-row justify-between w-64">
      <Link href="/promo"><img src="https://imagedelivery.net/uA65-M4gr037oB0C4RNdvw/c6fef9c3-dc48-4973-8303-c4d35e655d00/public" /></Link>
      <Link href="/promo"><img src="https://imagedelivery.net/uA65-M4gr037oB0C4RNdvw/6c37de35-3ef8-4dd1-ba97-62d5b57fea00/public" /></Link>
    </div>
  );
}
