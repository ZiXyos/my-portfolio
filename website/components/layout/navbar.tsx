import Image from 'next/image'
import { Children, ReactNode } from 'react';
import { ClockComponent } from '../utility/components/clock.components';
import { SiriComponent } from '../utility/components/siri.components';
import { UtilityBarComponent } from '../utility/utility.bar';

type NavBarProps = {

    children?: ReactNode;
}

const NavBar = (props : NavBarProps ) => (

    <nav className="bg-gray-700">
        <div className='flex justify-between'>

            <div className='flex items-baseline'>
                <Image src={'/icons/mac-os-logo-white.png'} height={15} width={15} />

                <div className=''>
                    File
                    Edit
                    Selection
                </div>

            </div>

            <div className=''>
                <UtilityBarComponent />
            </div>

        </div>
    </nav>
);

export default NavBar;
