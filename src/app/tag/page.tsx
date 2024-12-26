import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { apiGet } from "@/app/api/base";

export default async function TagPage() {
  const response = await apiGet('tag_list');

  return (
    <div className="container">
      <Card>
        <CardHeader>
          <CardTitle>Tag</CardTitle>
        </CardHeader>
        <CardContent>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </CardContent>
      </Card>
    </div>
  );
}
