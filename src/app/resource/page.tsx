import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as api from "@/actions/api";

export default async function ResourcePage() {
  const response = await api.getResourceSearch({ query: "*:*" });

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
