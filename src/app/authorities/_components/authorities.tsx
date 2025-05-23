"use client";

import React from "react";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

import StickySidebar from "@/components/sticky-sidebar";
import { navLinks } from "@/config/nav-links";

const Authorities = () => {
	const pathName = usePathname();

	const links = navLinks.find((item) => item.title === "Authorities");
	return (
		<StickySidebar containerClassName="lg:pt-0">
			<div className="border-l-4 border-primary pl-5 py-3 bg-primary/10">
				<h4 className="text-2xl font-semibold text-primary">
					Authorities
				</h4>
			</div>

			{links && links?.children && (
				<ul className=" mt-4 pl-4 space-y-3">
					{links.children?.map((child, index) => (
						<li key={index}>
							<Link
								className={cn(
									"hover:underline text-lg",
									pathName === child.href &&
										"text-primary underline font-medium"
								)}
								href={child.href!}
							>
								{child.title}
							</Link>
						</li>
					))}
				</ul>
			)}
		</StickySidebar>
	);
};

export default Authorities;
