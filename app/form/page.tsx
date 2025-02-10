import { SignupFormDemo } from "@/components/Form";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function FormPage() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
			<FloatingNav navItems={navItems} />
			<SignupFormDemo />
		</div>
	);
}
