import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as api from "@/actions/api";

export default async function TagPage() {
  const response = await api.getTagList();

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
