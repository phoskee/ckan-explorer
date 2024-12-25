'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
	params: {
		id: string;
	};
}

export default function Page({ params }: Props) {
	const { id } = params;

	return (
    <div className="container">
      <Card className="h-[90svh]">
        <CardHeader>
          <CardTitle>Page {id}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Page content</p>
          <div className="size-[5svh] bg-red-500 "></div>
        </CardContent>
		
      </Card>
    </div>
  );
}
