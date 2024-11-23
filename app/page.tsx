import { buttonVariants } from '@/components/ui/button';
import { page_routes } from '@/lib/routes-config';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <h1 className="text-5xl font-bold mb-4 sm:text-7xl">
        React Native <span className="text-blue-700">Paywall</span>
      </h1>
      <h1 className="text-3xl font-bold mb-4 sm:text-5xl">
        Build Beautiful and Dynamic Paywalls
      </h1>
      <p className="mb-8 sm:text-md max-w-[800px] text-muted-foreground">
        React Native Paywall is a customizable and developer-friendly library
        for building subscription-based paywalls in your React Native
        applications. Create sleek and dynamic paywalls effortlessly.
      </p>
      <div>
        <Link
          href={`/docs${page_routes[0].href}`}
          className={buttonVariants({
            className: 'px-6 !font-medium',
            size: 'lg',
          })}>
          Get Started
        </Link>
      </div>
    </div>
  );
}
