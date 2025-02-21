import { motion } from "framer-motion";
import styles from "./InfiniteMenu.module.css";
import Image from "next/image";

interface MenuItem {
	image: string;
	link: string;
	title: string;
	category: string;
	description: string;
}

interface InfiniteMenuProps {
	items: MenuItem[];
}

const InfiniteMenu = ({ items }: InfiniteMenuProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.scroll}>
				<div className={styles.grid}>
					{items.map((item, index) => (
						<motion.div
							key={index}
							className={styles.item}
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.3 }}
						>
							<div className={styles.imageWrapper}>
								<Image
									src={item.image}
									alt={item.title}
									className={styles.image}
								/>
								<div className={styles.overlay}>
									<div className={styles.content}>
										<span className="text-sm font-medium text-emerald-400 tracking-wider uppercase">
											{item.category}
										</span>
										<h3 className="text-2xl font-bold text-white mt-2 font-sans">
											{item.title}
										</h3>
										<p className="text-gray-300 mt-2 font-light leading-relaxed">
											{item.description}
										</p>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default InfiniteMenu;
