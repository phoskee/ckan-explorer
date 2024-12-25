import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as api from "@/actions/api";

export default async function OrganizationPage() {
  const response = await api.getOrganizationList();

  return (
    <div className="container">
      <Card>
        <CardHeader>
          <CardTitle>Organizzazioni</CardTitle>
        </CardHeader>
        <CardContent>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </CardContent>
      </Card>
    </div>
  );
}
