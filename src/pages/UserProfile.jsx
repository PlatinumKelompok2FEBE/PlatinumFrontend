import { Outlet } from 'react-router-dom'
import CategoryBuyer from '../components/CategoryBuyer';
import CategoryBuyerCard from '../components/CategoryBuyerCard';
import ProfileCardBuyer from '../components/ProfileCardBuyer';

const UserProfile = () => {
  return (
    <div className="container mx-auto p-4">
            <div className="mb-4 space-y-6 sm:mb-2">
                <div className="text-xl font-bold">Akun Saya</div>
                <ProfileCardBuyer />
            </div>
            <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
                    <CategoryBuyerCard />
                    <CategoryBuyer />
                </div>
                <div className="flex flex-wrap sm:w-2/3 md:w-3/4 lg:w-4/5 xl:w-5/6">
                    <Outlet />
                </div>
            </div>
        </div>
  )
}

export default UserProfile