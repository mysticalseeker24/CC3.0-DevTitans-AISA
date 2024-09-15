'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AppBar, Toolbar, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SupportIcon from '@mui/icons-material/Support';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const navItems = [
  { name: 'Home', path: '/', icon: HomeIcon },
  { name: 'Support', path: '/support', icon: SupportIcon },
  { name: 'Dashboard', path: '/dashboard', icon: DashboardIcon },
  { name: 'Profile', path: '/profile', icon: AccountCircleIcon },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <AppBar position="static" color="default" elevation={0} className="border-b border-gray-200">
      <Toolbar className="justify-between">
        <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
          CustomerSupport
        </Link>
        <nav>
          {navItems.map((item) => (
            <Link key={item.name} href={item.path} passHref>
              <Button
                component="a"
                startIcon={<item.icon />}
                className={`ml-4 ${
                  pathname === item.path
                    ? 'text-blue-600 hover:text-blue-800'
                    : 'text-gray-600 hover:text-gray-800'
                } transition-colors`}
              >
                {item.name}
              </Button>
            </Link>
          ))}
        </nav>
      </Toolbar>
    </AppBar>
  );
}
