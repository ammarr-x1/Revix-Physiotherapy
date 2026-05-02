import { getConditionNavItems } from '@/queries/treatable-conditions';
import { getServiceNavItems } from '@/queries/services';
import Navbar from './Navbar';

export default async function NavbarWrapper() {
    const [conditions, services] = await Promise.all([
        getConditionNavItems(),
        getServiceNavItems(),
    ]);

    return <Navbar conditions={conditions} services={services as any} />;
}
