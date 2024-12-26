import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { apiGet } from "../api/base";


export default async function ResourcePage() {
  const response = await apiGet('resource_search', { query: "*:*" });

  return (
    <div className="container">
      <Card>
        <CardHeader>
          <CardTitle>Risorse</CardTitle>
        </CardHeader>
        <CardContent>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </CardContent>
      </Card>
    </div>
  );
}
