'use client';
import { ModeToggle } from '@/components/theme-toggle';
import Link from 'next/link';
import Anchor from './anchor';
import { SheetLeftbar } from './leftbar';
import { page_routes } from '@/lib/routes-config';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface LogoProps {
  primaryColor: string; // Color for the main parts of the SVG
  secondaryColor: string; // Color for other accents
}

const LogoUrl = ({ primaryColor }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="50"
      height="50
      "
      fill=""
      viewBox="0 0 375 375"
      preserveAspectRatio="xMidYMid meet">
      <defs>
        <g />
        <clipPath id="3d2678f2b1">
          <path
            d="M 22.4375 84.875 L 357.6875 84.875 L 357.6875 280.625 L 22.4375 280.625 Z M 22.4375 84.875 "
            clip-rule="nonzero"
          />
        </clipPath>
        <clipPath id="1eedcf26f3">
          <path
            d="M 66 35 L 306 35 L 306 342 L 66 342 Z M 66 35 "
            clip-rule="nonzero"
          />
        </clipPath>
        <clipPath id="990f826775">
          <path
            d="M 354.617188 284.597656 L 185.21875 382.683594 L 17.226562 92.558594 L 186.628906 -5.527344 Z M 354.617188 284.597656 "
            clip-rule="nonzero"
          />
        </clipPath>
        <clipPath id="390491170f">
          <path
            d="M 354.617188 284.597656 L 185.21875 382.683594 L 17.226562 92.558594 L 186.628906 -5.527344 Z M 354.617188 284.597656 "
            clip-rule="nonzero"
          />
        </clipPath>
        <clipPath id="16ed9de375">
          <path
            d="M 70 32 L 309 32 L 309 340 L 70 340 Z M 70 32 "
            clip-rule="nonzero"
          />
        </clipPath>
        <clipPath id="e186a08a9d">
          <path
            d="M 191.089844 380.480469 L 21.226562 283.195312 L 187.839844 -7.722656 L 357.703125 89.5625 Z M 191.089844 380.480469 "
            clip-rule="nonzero"
          />
        </clipPath>
        <clipPath id="c45743424c">
          <path
            d="M 191.089844 380.480469 L 21.226562 283.195312 L 187.839844 -7.722656 L 357.703125 89.5625 Z M 191.089844 380.480469 "
            clip-rule="nonzero"
          />
        </clipPath>
      </defs>
      <rect
        x="-37.5"
        width="450"
        fill="transparent"
        y="-37.499999"
        height="449.999989"
        fill-opacity="1"
      />
      <rect
        x="-37.5"
        width="450"
        fill="transparent"
        y="-37.499999"
        height="449.999989"
        fill-opacity="1"
      />
      <g clip-path="url(#3d2678f2b1)">
        <path
          fill={primaryColor}
          d="M 22.472656 182.714844 C 22.472656 156.378906 40.078125 131.6875 71.996094 113.226562 C 103.558594 94.976562 145.496094 84.957031 190.082031 84.957031 C 234.667969 84.957031 276.605469 94.976562 308.164062 113.226562 C 340.082031 131.6875 357.6875 156.378906 357.6875 182.714844 C 357.6875 209.050781 340.082031 233.742188 308.164062 252.207031 C 276.605469 270.457031 234.667969 280.476562 190.082031 280.476562 C 145.496094 280.476562 103.558594 270.457031 71.996094 252.136719 C 40.078125 233.742188 22.472656 209.050781 22.472656 182.714844 Z M 353.464844 182.714844 C 353.464844 131.117188 280.183594 89.179688 190.082031 89.179688 C 99.980469 89.179688 26.695312 131.117188 26.695312 182.714844 C 26.695312 234.316406 99.980469 276.253906 190.082031 276.253906 C 280.183594 276.253906 353.464844 234.316406 353.464844 182.714844 Z M 353.464844 182.714844 "
          fill-opacity="1"
          fill-rule="nonzero"
        />
      </g>
      <g clip-path="url(#1eedcf26f3)">
        <g clip-path="url(#990f826775)">
          <g clip-path="url(#390491170f)">
            <path
              fill={primaryColor}
              d="M 101.976562 43.527344 C 124.769531 30.332031 154.957031 33.195312 186.929688 51.566406 C 218.535156 69.734375 248.222656 101.003906 270.5625 139.589844 C 292.902344 178.171875 305.246094 219.488281 305.269531 255.945312 C 305.285156 292.816406 292.738281 320.425781 269.949219 333.621094 C 247.15625 346.820312 216.96875 343.957031 184.996094 325.585938 C 153.386719 307.417969 123.703125 276.144531 101.363281 237.5625 C 79.019531 198.976562 66.675781 157.664062 66.71875 121.171875 C 66.640625 84.332031 79.183594 56.726562 101.976562 43.527344 Z M 267.832031 329.96875 C 312.488281 304.113281 312.058594 219.679688 266.910156 141.707031 C 221.761719 63.730469 148.746094 21.328125 104.09375 47.183594 C 59.4375 73.039062 59.867188 157.472656 105.015625 235.445312 C 150.164062 313.417969 223.179688 355.824219 267.832031 329.96875 Z M 267.832031 329.96875 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
          </g>
        </g>
      </g>
      <g clip-path="url(#16ed9de375)">
        <g clip-path="url(#e186a08a9d)">
          <g clip-path="url(#c45743424c)">
            <path
              fill={primaryColor}
              d="M 272.785156 40.96875 C 295.640625 54.058594 308.316406 81.605469 308.472656 118.480469 C 308.625 154.933594 296.476562 196.304688 274.320312 234.996094 C 252.160156 273.6875 222.625 305.097656 191.101562 323.414062 C 159.21875 341.9375 129.042969 344.941406 106.1875 331.855469 C 83.335938 318.765625 70.660156 291.21875 70.5 254.34375 C 70.347656 217.886719 82.496094 176.515625 104.65625 137.828125 C 126.8125 99.136719 156.351562 67.722656 187.933594 49.441406 C 219.757812 30.886719 249.933594 27.878906 272.785156 40.96875 Z M 108.289062 328.191406 C 153.0625 353.835938 225.875 311.085938 270.65625 232.898438 C 315.433594 154.710938 315.460938 70.277344 270.6875 44.632812 C 225.910156 18.988281 153.097656 61.738281 108.320312 139.925781 C 63.539062 218.109375 63.511719 302.546875 108.289062 328.191406 Z M 108.289062 328.191406 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
          </g>
        </g>
      </g>
      <g fill={primaryColor} fill-opacity="1">
        <g transform="translate(152.274487, 222.844901)">
          <g>
            <path d="M 50.15625 -21.96875 C 50.15625 -25.5625 48.894531 -28.585938 46.375 -31.046875 C 43.851562 -33.503906 39.601562 -35.734375 33.625 -37.734375 C 25.3125 -40.265625 19.25 -43.570312 15.4375 -47.65625 C 11.625 -51.738281 9.71875 -56.925781 9.71875 -63.21875 C 9.71875 -69.625 11.582031 -74.875 15.3125 -78.96875 C 19.050781 -83.070312 24.179688 -85.515625 30.703125 -86.296875 L 30.703125 -99.125 L 39.421875 -99.125 L 39.421875 -86.234375 C 45.984375 -85.335938 51.085938 -82.582031 54.734375 -77.96875 C 58.390625 -73.363281 60.21875 -67.0625 60.21875 -59.0625 L 49.453125 -59.0625 C 49.453125 -64.5625 48.140625 -68.929688 45.515625 -72.171875 C 42.898438 -75.421875 39.367188 -77.046875 34.921875 -77.046875 C 30.273438 -77.046875 26.71875 -75.84375 24.25 -73.4375 C 21.789062 -71.03125 20.5625 -67.679688 20.5625 -63.390625 C 20.5625 -59.410156 21.859375 -56.238281 24.453125 -53.875 C 27.054688 -51.507812 31.332031 -49.359375 37.28125 -47.421875 C 43.238281 -45.492188 47.890625 -43.363281 51.234375 -41.03125 C 54.578125 -38.707031 57.035156 -36.003906 58.609375 -32.921875 C 60.191406 -29.835938 60.984375 -26.226562 60.984375 -22.09375 C 60.984375 -15.488281 59 -10.171875 55.03125 -6.140625 C 51.070312 -2.117188 45.519531 0.257812 38.375 1 L 38.375 12.1875 L 29.703125 12.1875 L 29.703125 1 C 22.441406 0.332031 16.75 -2.253906 12.625 -6.765625 C 8.5 -11.273438 6.4375 -17.398438 6.4375 -25.140625 L 17.28125 -25.140625 C 17.28125 -19.703125 18.707031 -15.519531 21.5625 -12.59375 C 24.414062 -9.664062 28.457031 -8.203125 33.6875 -8.203125 C 38.800781 -8.203125 42.820312 -9.429688 45.75 -11.890625 C 48.6875 -14.347656 50.15625 -17.707031 50.15625 -21.96875 Z M 50.15625 -21.96875 " />
          </g>
        </g>
      </g>
    </svg>
  );
};

export const NAVLINKS = [
  {
    title: 'Documentation',
    href: `/docs${page_routes[0].href}`,
  },
  {
    title: 'GitHub',
    href: 'https://github.com/below70/react-native-paywall#readme',
  },
];

export function Navbar() {
  return (
    <nav className="w-full h-14 sticky top-0 z-50 lg:px-4 backdrop-filter backdrop-blur-xl bg-opacity-5">
      <div className="sm:container h-full max-sm:px-3 flex items-center justify-between ">
        <SheetLeftbar />
        <div className="flex items-center gap-9">
          <Logo />
          <div className="lg:flex hidden items-center gap-5 text-sm font-medium text-muted-foreground">
            {NAVLINKS.map((item) => {
              return (
                <Anchor
                  key={item.title + item.href}
                  activeClassName="text-primary font-semibold"
                  absolute
                  className="flex items-center gap-1"
                  href={item.href}>
                  {item.title}
                </Anchor>
              );
            })}
          </div>
        </div>

        <ModeToggle />
      </div>
    </nav>
  );
}

function Logo() {
  const { resolvedTheme } = useTheme(); // Use `resolvedTheme` for final theme value
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  // Get the theme from storage or fallback to resolvedTheme
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    setCurrentTheme(storedTheme || resolvedTheme || 'light');
  }, [resolvedTheme]);

  const primaryColor = currentTheme === 'dark' ? '#ffffff' : '#09090b';
  const secondaryColor = currentTheme === 'dark' ? '#09090b' : '#ffffff';

  return (
    <Link href="/" className="flex items-center gap-3">
      <LogoUrl primaryColor={primaryColor} secondaryColor={secondaryColor} />
      <h2 className="text-md font-bold font-code">React Native Paywall</h2>
    </Link>
  );
}
