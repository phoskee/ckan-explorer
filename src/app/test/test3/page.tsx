'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
	params: {
		id: string;
	};
}

export default function Page({ params }: Props) {
	const { id } = params;

	return (
		<div className="container">
			<Card>
				<CardHeader>
					<CardTitle>Page { id }</CardTitle>
				</CardHeader>
				<CardContent>
					<p>Page content</p>
				</CardContent>
			</Card>
		</div>
	);
}
